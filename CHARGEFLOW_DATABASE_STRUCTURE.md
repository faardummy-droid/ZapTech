# CHARGEFLOW — DATABASE STRUCTURE

> **Database:** PostgreSQL  
> **Status:** Initial Database Design / Brainstorming  
> **Purpose:** Blueprint awal untuk ERD, migration, backend API, dan implementasi database.

---

# 1. DATABASE OBJECTIVE

Database ChargeFlow digunakan untuk mengelola:

- User dan kendaraan EV.
- Host Partner.
- Charging station dan dock.
- Reservation.
- Charging session.
- Charging telemetry.
- Payment dan transaction.
- Revenue sharing.
- Tarif.
- Notification.
- Maintenance.
- Data prediction untuk Dynamic Rerouting.

---

# 2. DATA DOMAINS

```text
USER DOMAIN
├── users
├── vehicles
└── partners

STATION DOMAIN
├── stations
└── dock_units

RESERVATION DOMAIN
└── reservations

CHARGING DOMAIN
├── charging_sessions
└── charging_telemetry

PAYMENT DOMAIN
├── payments
├── transactions
└── revenue_distributions

OPERATIONS DOMAIN
├── tariffs
├── notifications
└── maintenance_records

AI DOMAIN
└── prediction_records
```

---

# 3. HIGH-LEVEL RELATIONSHIP

```text
USERS
  │
  ├──< VEHICLES
  ├──< RESERVATIONS
  ├──< CHARGING_SESSIONS
  ├──< PAYMENTS
  └──< NOTIFICATIONS
          │
          │
PARTNERS ──< STATIONS ──< DOCK_UNITS
                          │
                          ├──< RESERVATIONS
                          ├──< CHARGING_SESSIONS
                          ├──< CHARGING_TELEMETRY
                          └──< MAINTENANCE_RECORDS

CHARGING_SESSIONS
  ├──< CHARGING_TELEMETRY
  ├──< PAYMENTS
  └──< TRANSACTIONS
          │
          └──< REVENUE_DISTRIBUTIONS

STATIONS
  ├──< TARIFFS
  └──< PREDICTION_RECORDS
```

---

# 4. TABLE: `users`

Menyimpan akun EV Driver, Host Partner, dan Operational Admin.

| Column | Type | Constraint | Description |
|---|---|---|---|
| id | UUID | PK | ID user |
| name | VARCHAR(100) | NOT NULL | Nama |
| email | VARCHAR(150) | UNIQUE, NOT NULL | Email |
| password_hash | TEXT | NOT NULL | Password hash |
| role | VARCHAR(30) | NOT NULL | DRIVER / PARTNER / ADMIN |
| phone_number | VARCHAR(30) | NULL | Nomor telepon |
| wallet_balance | NUMERIC(15,2) | DEFAULT 0 | Saldo jika wallet digunakan |
| status | VARCHAR(20) | NOT NULL | ACTIVE / INACTIVE / BLOCKED |
| created_at | TIMESTAMP | NOT NULL | Waktu dibuat |
| updated_at | TIMESTAMP | NOT NULL | Waktu diperbarui |

---

# 5. TABLE: `vehicles`

Menyimpan kendaraan milik EV Driver.

| Column | Type | Constraint | Description |
|---|---|---|---|
| id | UUID | PK | ID kendaraan |
| user_id | UUID | FK → users.id | Pemilik |
| vehicle_type | VARCHAR(30) | NOT NULL | CAR / MOTORCYCLE |
| brand | VARCHAR(100) | NULL | Merek |
| model | VARCHAR(100) | NULL | Model |
| battery_capacity_kwh | NUMERIC(8,2) | NULL | Kapasitas baterai |
| license_plate | VARCHAR(20) | NULL | Nomor kendaraan |
| created_at | TIMESTAMP | NOT NULL | Waktu dibuat |
| updated_at | TIMESTAMP | NOT NULL | Waktu diperbarui |

**Relationship**

```text
users 1 ───── N vehicles
```

---

# 6. TABLE: `partners`

Menyimpan Host Partner.

| Column | Type | Constraint | Description |
|---|---|---|---|
| id | UUID | PK | ID partner |
| user_id | UUID | FK → users.id | Akun partner |
| business_name | VARCHAR(150) | NOT NULL | Nama usaha |
| business_type | VARCHAR(50) | NOT NULL | CAFE / HOTEL / RESTAURANT / etc |
| bank_name | VARCHAR(100) | NULL | Bank |
| bank_account | VARCHAR(100) | NULL | Rekening |
| status | VARCHAR(20) | NOT NULL | ACTIVE / INACTIVE |
| created_at | TIMESTAMP | NOT NULL | Waktu dibuat |
| updated_at | TIMESTAMP | NOT NULL | Waktu diperbarui |

**Relationship**

```text
users 1 ───── 0..1 partners
partners 1 ── N stations
```

---

# 7. TABLE: `stations`

Menyimpan lokasi charging station.

| Column | Type | Constraint | Description |
|---|---|---|---|
| id | UUID | PK | ID station |
| partner_id | UUID | FK → partners.id | Host partner |
| name | VARCHAR(150) | NOT NULL | Nama station |
| address | TEXT | NOT NULL | Alamat |
| latitude | DECIMAL(10,7) | NOT NULL | Latitude |
| longitude | DECIMAL(10,7) | NOT NULL | Longitude |
| business_type | VARCHAR(50) | NULL | Tipe lokasi |
| operating_status | VARCHAR(20) | NOT NULL | OPEN / CLOSED / MAINTENANCE |
| created_at | TIMESTAMP | NOT NULL | Waktu dibuat |
| updated_at | TIMESTAMP | NOT NULL | Waktu diperbarui |

**Relationship**

```text
partners 1 ───── N stations
```

---

# 8. TABLE: `dock_units`

Menyimpan charging dock individual.

| Column | Type | Constraint | Description |
|---|---|---|---|
| id | UUID | PK | ID dock |
| station_id | UUID | FK → stations.id | Station |
| dock_code | VARCHAR(50) | UNIQUE, NOT NULL | Kode dock |
| charger_type | VARCHAR(20) | NOT NULL | AC / DC |
| power_kw | NUMERIC(8,2) | NOT NULL | Kapasitas daya |
| status | VARCHAR(30) | NOT NULL | AVAILABLE / RESERVED / CHARGING / IDLE_COMPLETED / OFFLINE |
| device_id | VARCHAR(100) | UNIQUE | ID IoT device |
| qr_code | VARCHAR(255) | UNIQUE | QR identifier |
| last_seen_at | TIMESTAMP | NULL | Terakhir online |
| created_at | TIMESTAMP | NOT NULL | Waktu dibuat |
| updated_at | TIMESTAMP | NOT NULL | Waktu diperbarui |

**Relationship**

```text
stations 1 ───── N dock_units
```

---

# 9. TABLE: `reservations`

Menyimpan reservation dock, terutama hasil Dynamic Rerouting.

| Column | Type | Constraint | Description |
|---|---|---|---|
| id | UUID | PK | ID reservation |
| user_id | UUID | FK → users.id | User |
| vehicle_id | UUID | FK → vehicles.id | Kendaraan |
| dock_id | UUID | FK → dock_units.id | Dock |
| source_station_id | UUID | FK → stations.id, NULL | Station awal |
| status | VARCHAR(30) | NOT NULL | REQUESTED / RESERVED / ARRIVED / EXPIRED / CANCELLED / COMPLETED |
| reserved_at | TIMESTAMP | NOT NULL | Waktu reservation |
| expires_at | TIMESTAMP | NOT NULL | Batas reservation |
| arrived_at | TIMESTAMP | NULL | Waktu tiba |
| created_at | TIMESTAMP | NOT NULL | Waktu dibuat |
| updated_at | TIMESTAMP | NOT NULL | Waktu diperbarui |

**Business Rule**

```text
Default reservation hold = 15 minutes
```

---

# 10. TABLE: `charging_sessions`

Menyimpan satu aktivitas charging dari mulai sampai selesai.

| Column | Type | Constraint | Description |
|---|---|---|---|
| id | UUID | PK | ID session |
| user_id | UUID | FK → users.id | User |
| vehicle_id | UUID | FK → vehicles.id | Kendaraan |
| dock_id | UUID | FK → dock_units.id | Dock |
| reservation_id | UUID | FK → reservations.id, NULL | Reservation |
| status | VARCHAR(30) | NOT NULL | PENDING_START / IN_PROGRESS / STOPPED / SETTLED |
| start_time | TIMESTAMP | NULL | Mulai |
| end_time | TIMESTAMP | NULL | Selesai |
| initial_soc | NUMERIC(5,2) | NULL | State of Charge awal |
| final_soc | NUMERIC(5,2) | NULL | State of Charge akhir |
| total_kwh | NUMERIC(12,4) | DEFAULT 0 | Total energi |
| total_duration_seconds | BIGINT | DEFAULT 0 | Durasi |
| total_cost | NUMERIC(15,2) | DEFAULT 0 | Total biaya |
| created_at | TIMESTAMP | NOT NULL | Waktu dibuat |
| updated_at | TIMESTAMP | NOT NULL | Waktu diperbarui |

---

# 11. TABLE: `charging_telemetry`

Menyimpan data teknis yang dikirim charging dock secara berkala.

> **Telemetry = data kondisi/performa charging dock**, bukan transaksi charging itu sendiri.

| Column | Type | Constraint | Description |
|---|---|---|---|
| id | BIGSERIAL | PK | ID telemetry |
| dock_id | UUID | FK → dock_units.id | Dock |
| session_id | UUID | FK → charging_sessions.id, NULL | Session |
| voltage | NUMERIC(10,2) | NULL | Voltage |
| current | NUMERIC(10,2) | NULL | Current |
| power_kw | NUMERIC(10,3) | NULL | Power |
| energy_kwh | NUMERIC(12,4) | NULL | Energi |
| temperature | NUMERIC(8,2) | NULL | Temperatur |
| status | VARCHAR(30) | NOT NULL | IDLE / CHARGING / FAULT / OFFLINE |
| recorded_at | TIMESTAMP | NOT NULL | Waktu pengambilan |

**Contoh**

```text
19:00 → 220V / 8A / 1.76kW
19:05 → 221V / 8.5A / 1.88kW
19:10 → 220V / 9A / 1.98kW
```

---

# 12. TABLE: `payments`

Menyimpan informasi pembayaran.

| Column | Type | Constraint | Description |
|---|---|---|---|
| id | UUID | PK | ID payment |
| user_id | UUID | FK → users.id | User |
| session_id | UUID | FK → charging_sessions.id | Session |
| payment_method | VARCHAR(30) | NOT NULL | QRIS / GOPAY / WALLET / etc |
| amount | NUMERIC(15,2) | NOT NULL | Nominal |
| status | VARCHAR(30) | NOT NULL | PENDING / PAID / FAILED / REFUNDED |
| external_reference | VARCHAR(150) | NULL | Reference gateway |
| paid_at | TIMESTAMP | NULL | Waktu bayar |
| created_at | TIMESTAMP | NOT NULL | Waktu dibuat |
| updated_at | TIMESTAMP | NOT NULL | Waktu diperbarui |

---

# 13. TABLE: `transactions`

Menyimpan transaksi finansial yang telah dihitung/diselesaikan.

| Column | Type | Constraint | Description |
|---|---|---|---|
| id | UUID | PK | ID transaction |
| payment_id | UUID | FK → payments.id | Payment |
| session_id | UUID | FK → charging_sessions.id | Session |
| gross_amount | NUMERIC(15,2) | NOT NULL | Nilai transaksi |
| company_share_amount | NUMERIC(15,2) | NOT NULL | Bagian ChargeFlow |
| partner_share_amount | NUMERIC(15,2) | NOT NULL | Bagian partner |
| service_fee | NUMERIC(15,2) | DEFAULT 0 | Service fee |
| idle_fee | NUMERIC(15,2) | DEFAULT 0 | Idle fee |
| status | VARCHAR(30) | NOT NULL | SETTLED / REFUNDED |
| settled_at | TIMESTAMP | NULL | Waktu settlement |
| created_at | TIMESTAMP | NOT NULL | Waktu dibuat |

---

# 14. TABLE: `revenue_distributions`

Menyimpan distribusi revenue kepada Host Partner.

| Column | Type | Constraint | Description |
|---|---|---|---|
| id | UUID | PK | ID distribution |
| transaction_id | UUID | FK → transactions.id | Transaction |
| partner_id | UUID | FK → partners.id | Partner |
| amount | NUMERIC(15,2) | NOT NULL | Nominal |
| percentage | NUMERIC(5,2) | NOT NULL | Persentase |
| status | VARCHAR(30) | NOT NULL | PENDING / DISTRIBUTED / FAILED |
| distributed_at | TIMESTAMP | NULL | Waktu distribusi |
| created_at | TIMESTAMP | NOT NULL | Waktu dibuat |

### Initial Revenue Rule

```text
Electricity Margin
ChargeFlow      70%
Host Partner    30%

DC Service Fee
ChargeFlow      75%
Host Partner    25%
```

---

# 15. TABLE: `tariffs`

Menyimpan konfigurasi tarif charging.

| Column | Type | Constraint | Description |
|---|---|---|---|
| id | UUID | PK | ID tariff |
| station_id | UUID | FK → stations.id | Station |
| charger_type | VARCHAR(20) | NOT NULL | AC / DC |
| price_per_kwh | NUMERIC(12,2) | NOT NULL | Harga per kWh |
| service_fee | NUMERIC(12,2) | DEFAULT 0 | Service fee |
| idle_fee_per_minute | NUMERIC(12,2) | DEFAULT 0 | Idle fee |
| effective_from | TIMESTAMP | NOT NULL | Mulai berlaku |
| effective_until | TIMESTAMP | NULL | Berakhir |
| status | VARCHAR(20) | NOT NULL | ACTIVE / INACTIVE |
| created_at | TIMESTAMP | NOT NULL | Waktu dibuat |

---

# 16. TABLE: `notifications`

Menyimpan notifikasi sistem.

| Column | Type | Constraint | Description |
|---|---|---|---|
| id | UUID | PK | ID notification |
| user_id | UUID | FK → users.id | Penerima |
| type | VARCHAR(50) | NOT NULL | REROUTING / RESERVATION / CHARGING / PAYMENT / MAINTENANCE |
| title | VARCHAR(150) | NOT NULL | Judul |
| message | TEXT | NOT NULL | Isi |
| reference_type | VARCHAR(50) | NULL | Entity terkait |
| reference_id | UUID | NULL | ID entity |
| is_read | BOOLEAN | DEFAULT FALSE | Status baca |
| created_at | TIMESTAMP | NOT NULL | Waktu dibuat |

---

# 17. TABLE: `maintenance_records`

Menyimpan riwayat maintenance charging dock.

| Column | Type | Constraint | Description |
|---|---|---|---|
| id | UUID | PK | ID maintenance |
| dock_id | UUID | FK → dock_units.id | Dock |
| reported_by | UUID | FK → users.id | Pelapor |
| issue_type | VARCHAR(50) | NOT NULL | HARDWARE / ELECTRICAL / NETWORK / OTHER |
| description | TEXT | NOT NULL | Deskripsi |
| status | VARCHAR(30) | NOT NULL | OPEN / IN_PROGRESS / RESOLVED |
| started_at | TIMESTAMP | NULL | Mulai |
| resolved_at | TIMESTAMP | NULL | Selesai |
| created_at | TIMESTAMP | NOT NULL | Waktu dibuat |
| updated_at | TIMESTAMP | NOT NULL | Waktu diperbarui |

---

# 18. TABLE: `prediction_records`

Menyimpan hasil prediction untuk Dynamic Rerouting.

| Column | Type | Constraint | Description |
|---|---|---|---|
| id | UUID | PK | ID prediction |
| station_id | UUID | FK → stations.id | Station |
| target_arrival_time | TIMESTAMP | NOT NULL | ETA target |
| predicted_available_docks | INTEGER | NOT NULL | Prediksi dock tersedia |
| predicted_wait_minutes | INTEGER | NOT NULL | Estimasi tunggu |
| risk_score | NUMERIC(5,2) | NOT NULL | Risk score |
| recommendation | VARCHAR(30) | NOT NULL | CONTINUE / REROUTE |
| model_version | VARCHAR(50) | NULL | Versi model |
| created_at | TIMESTAMP | NOT NULL | Waktu prediction |

### AI Flow

```text
Charging Sessions
       +
Charging Telemetry
       +
Station Occupancy
       +
Historical Data
       ↓
Prediction Engine
       ↓
prediction_records
       ↓
Dynamic Rerouting Engine
       ↓
Alternative Station
```

---

# 19. OPTIONAL TABLE: `audit_logs`

Untuk production, aktivitas penting dapat dicatat.

| Column | Type | Description |
|---|---|---|
| id | BIGSERIAL PK | ID log |
| user_id | UUID | User pelaku |
| action | VARCHAR(100) | Action |
| entity_type | VARCHAR(50) | Entity |
| entity_id | UUID | ID entity |
| old_value | JSONB | Data sebelum |
| new_value | JSONB | Data sesudah |
| created_at | TIMESTAMP | Waktu |

---

# 20. ENTITY RELATIONSHIP SUMMARY

```text
users
 │
 ├──< vehicles
 ├──< reservations
 ├──< charging_sessions
 ├──< payments
 └──< notifications
 │
 └── 0..1 partners
          │
          └──< stations
                  │
                  ├──< dock_units
                  │      ├──< charging_telemetry
                  │      ├──< charging_sessions
                  │      └──< maintenance_records
                  │
                  ├──< reservations
                  ├──< tariffs
                  └──< prediction_records

charging_sessions
 │
 ├──< charging_telemetry
 ├──< payments
 └──< transactions
          │
          └──< revenue_distributions
```

---

# 21. IMPORTANT BUSINESS RULES

## User & Vehicle

- Satu user dapat memiliki banyak kendaraan.
- Satu kendaraan hanya dimiliki satu user.

## Partner & Station

- Satu partner dapat memiliki banyak station.
- Satu station memiliki satu partner.

## Station & Dock

- Satu station dapat memiliki banyak dock.
- Satu dock hanya berada pada satu station.
- `dock_code` dan `device_id` harus unik.

## Reservation

- Satu reservation mengunci satu dock.
- Reservation memiliki `expires_at`.
- Reservation expired mengembalikan dock menjadi `AVAILABLE`.

## Charging Session

- Satu session menggunakan satu dock.
- Satu session memiliki banyak telemetry record.
- Session memiliki lifecycle yang jelas.

## Financial

- Charging session dan transaction dipisahkan.
- Revenue sharing dicatat sebagai histori.
- Nilai revenue distribution tidak dihitung ulang menggunakan tarif terbaru.

---

# 22. INDEXING PLAN

Index awal:

```text
users
├── UNIQUE(email)
└── INDEX(role)

vehicles
├── INDEX(user_id)
└── INDEX(license_plate)

partners
├── INDEX(user_id)
└── INDEX(status)

stations
├── INDEX(partner_id)
├── INDEX(latitude, longitude)
└── INDEX(operating_status)

dock_units
├── INDEX(station_id)
├── INDEX(status)
├── UNIQUE(dock_code)
└── UNIQUE(device_id)

reservations
├── INDEX(user_id)
├── INDEX(dock_id)
├── INDEX(status)
└── INDEX(expires_at)

charging_sessions
├── INDEX(user_id)
├── INDEX(vehicle_id)
├── INDEX(dock_id)
├── INDEX(status)
└── INDEX(start_time)

charging_telemetry
├── INDEX(dock_id, recorded_at)
└── INDEX(session_id, recorded_at)

payments
├── INDEX(user_id)
├── INDEX(session_id)
└── INDEX(status)

transactions
├── INDEX(session_id)
└── INDEX(status)

revenue_distributions
├── INDEX(partner_id)
└── INDEX(status)

prediction_records
├── INDEX(station_id)
└── INDEX(target_arrival_time)
```

---

# 23. DATA FLOW

## 23.1 IoT → Database

```text
Energy Sensor
     ↓
ESP32
     ↓
MQTT
     ↓
MQTT Broker
     ↓
Backend IoT Handler
     ↓
charging_telemetry
     ↓
PostgreSQL
```

## 23.2 Mobile App → Database

```text
Mobile App
     ↓
HTTPS / REST API
     ↓
Backend
     ↓
Business Logic
     ↓
PostgreSQL
```

## 23.3 AI → Dynamic Rerouting

```text
charging_sessions
       +
charging_telemetry
       +
station occupancy
       +
historical data
       ↓
Prediction Engine
       ↓
prediction_records
       ↓
Dynamic Rerouting
       ↓
Alternative Station
       ↓
Mobile App
```

---

# 24. MVP DATABASE SCOPE

## 🔴 MUST HAVE

Untuk prototype 14 hari:

```text
users
partners
vehicles
stations
dock_units
reservations
charging_sessions
charging_telemetry
transactions
```

## 🟡 SHOULD HAVE

```text
payments
revenue_distributions
tariffs
notifications
```

## 🔵 FUTURE

```text
maintenance_records
prediction_records
audit_logs
```

> Jika AI prediction benar-benar didemonstrasikan pada MVP, `prediction_records` dapat dimasukkan ke tahap MUST HAVE.

---

# 25. MVP CORE ERD

```text
┌────────────┐
│   USERS    │
└─────┬──────┘
      │
      ├──────────< VEHICLES
      │
      └──────────< RESERVATIONS
                         │
                         ↓
                  ┌────────────┐
                  │ DOCK_UNITS │
                  └──────┬─────┘
                         │
                         ↓
                ┌─────────────────┐
                │CHARGING_SESSIONS│
                └────────┬────────┘
                         │
               ┌─────────┴─────────┐
               ↓                   ↓
       ┌─────────────────┐   ┌──────────────┐
       │CHARGING_TELEMETRY│   │ TRANSACTIONS │
       └─────────────────┘   └──────┬───────┘
                                    ↓
                           ┌───────────────────┐
                           │REVENUE_DISTRIBUTION│
                           └───────────────────┘

┌────────────┐
│  PARTNERS  │
└──────┬─────┘
       ↓
┌────────────┐
│  STATIONS  │
└──────┬─────┘
       ↓
┌────────────┐
│ DOCK_UNITS │
└────────────┘
```

---

# 26. IMPLEMENTATION ORDER

```text
PHASE 1 — Core Identity & Infrastructure
users
partners
vehicles
stations
dock_units

        ↓

PHASE 2 — Charging Flow
reservations
charging_sessions
charging_telemetry

        ↓

PHASE 3 — Financial
payments
transactions
tariffs
revenue_distributions

        ↓

PHASE 4 — Operations
notifications
maintenance_records

        ↓

PHASE 5 — Intelligence
prediction_records
AI-related data
audit_logs
```

---

# 27. FINAL DATABASE CONCEPT

ChargeFlow memiliki empat alur data utama:

```text
1. STATION
Partner
   ↓
Station
   ↓
Dock

2. CHARGING
User
   ↓
Reservation
   ↓
Charging Session
   ↓
Telemetry

3. FINANCIAL
Charging Session
   ↓
Payment
   ↓
Transaction
   ↓
Revenue Distribution

4. INTELLIGENCE
Charging History
   +
Telemetry
   ↓
Prediction
   ↓
Availability Risk
   ↓
Dynamic Rerouting
```

> **Core principle:** database ChargeFlow tidak hanya menyimpan transaksi charging, tetapi juga kondisi station, histori penggunaan, telemetry, reservation, dan data yang dapat digunakan untuk memprediksi ketersediaan charging station.
