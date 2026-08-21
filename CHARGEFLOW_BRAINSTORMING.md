# CHARGEFLOW — MASTER APPLICATION BRAINSTORMING

> **Nama sementara:** ChargeFlow / WattPoint  
> **Produk:** Platform Charging Dock Station Kendaraan Listrik (EV)  
> **Status:** Product Discovery & Business Process Design  
> **Target Market:** B2C (EV Driver) & B2B (Host Partner)

---

# 1. PRODUCT OVERVIEW

## 1.1 Product Idea

ChargeFlow adalah platform jaringan pengisian daya kendaraan listrik (EV) terdistribusi yang menghubungkan pengemudi EV dengan charging dock station yang tersedia di berbagai lokasi usaha.

Platform menggabungkan:

- Aplikasi pengguna.
- Backend platform.
- Charging dock station.
- IoT controller.
- Sistem pembayaran.
- Sistem revenue sharing.
- Intelligent navigation dan dynamic rerouting.

Tujuan utamanya adalah memberikan **kepastian charging** kepada pengemudi sekaligus memberikan peluang **pendapatan tambahan** bagi pemilik lokasi usaha.

---

## 1.2 Problem Statement

### EV Driver

Pengemudi EV menghadapi ketidakpastian ketika mencari charging station:

- Charger yang terlihat tersedia dapat menjadi penuh sebelum pengguna tiba.
- Charger dapat mengalami gangguan ketika pengguna sedang menuju lokasi.
- Pengguna tidak mengetahui estimasi waktu selesai charging kendaraan lain.
- Pengguna harus mencari station alternatif secara manual.
- Kondisi tersebut dapat menyebabkan pemborosan waktu dan meningkatkan *range anxiety*.

### Host Partner

Pemilik tempat usaha menghadapi beberapa kendala:

- Investasi awal (*CapEx*) charging infrastructure relatif mahal.
- Perawatan dan operasional charging station membutuhkan sumber daya.
- Belum semua lokasi usaha memiliki model bisnis yang jelas dari penyediaan charger.
- Pemilik usaha membutuhkan sistem untuk memantau penggunaan station dan pendapatan.

---

## 1.3 Target Users

### B2C — EV Driver

- Pengemudi mobil listrik.
- Pengemudi motor listrik.

### B2B — Host Partner

Lokasi usaha yang menyediakan tempat untuk charging dock, seperti:

- Kafe.
- Restoran.
- Minimarket.
- Hotel.
- SPBU.
- Lokasi komersial lainnya.

---

## 1.4 Value Proposition

### Untuk EV Driver

> **Zero Waiting Time Charging**

ChargeFlow membantu pengguna memperoleh charging station yang lebih pasti tersedia dan menghindari antrean melalui prediksi ketersediaan serta dynamic rerouting.

### Untuk Host Partner

> **Zero CapEx & Passive Income**

Host Partner dapat memperoleh pendapatan tambahan dari charging station tanpa harus menjadi pengelola penuh sistem charging infrastructure.

---

## 1.5 Product Objective

ChargeFlow bertujuan untuk:

1. Menyediakan jaringan charging station terdistribusi.
2. Menampilkan status charging dock secara real-time.
3. Memprediksi kemungkinan ketersediaan dock ketika pengguna tiba.
4. Memberikan dynamic rerouting ketika station tujuan diprediksi penuh.
5. Mengunci dock alternatif sementara melalui reservation.
6. Menghubungkan aplikasi dengan charging dock melalui IoT.
7. Mengelola charging session dan pembayaran.
8. Menghitung pembagian hasil antara ChargeFlow dan Host Partner.
9. Menyediakan dashboard monitoring dan analytics.

---

# 2. BUSINESS ECOSYSTEM

## 2.1 Actors

### 2.1.1 EV Driver

Pengguna B2C yang menggunakan ChargeFlow untuk:

- Mencari charging station.
- Melihat status dock.
- Menentukan tujuan.
- Mendapatkan rekomendasi rerouting.
- Melakukan reservation.
- Memulai charging.
- Menghentikan charging.
- Melakukan pembayaran.
- Melihat histori transaksi.

**Authentication:** Login diperlukan.

---

### 2.1.2 Host Partner

Pemilik lokasi usaha tempat charging station ditempatkan.

Aktivitas utama:

- Memantau performa station.
- Memantau penggunaan dock.
- Melihat jumlah pengguna.
- Melihat pendapatan.
- Melihat laporan revenue sharing.

**Authentication:** Login diperlukan.

---

### 2.1.3 IoT Hardware

Perangkat yang terpasang pada charging dock.

Tanggung jawab:

- Mengirim data telemetri.
- Mengirim status perangkat.
- Menerima perintah dari server.
- Mengendalikan relay charging.
- Menyediakan data untuk monitoring.

Contoh teknologi:

- ESP32.
- MQTT.
- OCPP, apabila diterapkan.

**Authentication:** API Key / MQTT credentials.

---

### 2.1.4 Operational Admin

Tim internal ChargeFlow.

Tanggung jawab:

- Mengelola station.
- Mengelola dock.
- Mengelola tarif.
- Memantau perangkat.
- Memantau transaksi.
- Mengelola partner.
- Melakukan operational override.

**Authentication:** Login diperlukan.

---

# 3. BUSINESS PROCESS

## 3.1 AS-IS Process

### Kondisi Saat Ini

```text
Baterai EV menipis
        ↓
Pengguna membuka aplikasi pemeta
        ↓
Mencari charging station
        ↓
Memilih Station A
        ↓
Berkendara menuju Station A
        ↓
Status station berubah selama perjalanan
        ↓
Tiba di Station A
        ↓
Apakah dock tersedia?
       /      YES  NO
      ↓    ↓
 Charging  Mencari station lain
               ↓
          Potensi antrean
          / waktu terbuang
          / range anxiety
```

### Masalah pada AS-IS

1. Pengguna mengambil keputusan berdasarkan kondisi station saat pencarian.
2. Kondisi station dapat berubah selama perjalanan.
3. Pengguna tidak mengetahui estimasi durasi charging kendaraan lain.
4. Tidak ada prediksi ketersediaan ketika pengguna tiba.
5. Alternatif harus dicari secara manual.

---

# 4. PAIN POINT

## 4.1 EV Driver

### Manual & Unpredictable

Status charger bersifat pasif dan tidak mempertimbangkan perubahan kondisi selama perjalanan.

### Inefisiensi Waktu

Pengguna dapat:

- Memutar arah.
- Menunggu antrean.
- Mencari station alternatif.
- Menghabiskan waktu perjalanan tambahan.

### Range Anxiety

Ketidakpastian charger meningkatkan risiko pengguna kesulitan mendapatkan charging ketika baterai semakin rendah.

---

## 4.2 Host Partner

### Capital Barrier

Harga charging infrastructure dapat menjadi hambatan untuk investasi awal.

### Operational Complexity

Host membutuhkan sistem untuk:

- Monitoring station.
- Monitoring dock.
- Melihat penggunaan.
- Melihat pendapatan.
- Mengetahui kondisi perangkat.

### Business Opportunity

Charging station dapat memberikan:

- Pendapatan tambahan.
- Foot traffic tambahan.
- Layanan tambahan bagi pelanggan.

---

# 5. TO-BE PROCESS

## 5.1 End-to-End Business Process

```text
EV Driver membutuhkan charging
            ↓
Membuka ChargeFlow
            ↓
Melihat charging station terdekat
            ↓
Memilih Station A
            ↓
Sistem menghitung ETA
            ↓
Sistem memantau kondisi Station A
            ↓
Sistem memperkirakan ketersediaan
            ↓
Apakah Station A diprediksi tersedia?
        /                          YES                     NO
       ↓                       ↓
Lanjut navigasi        Dynamic Rerouting
                               ↓
                    Cari Station alternatif
                               ↓
                    Ranking kandidat station
                               ↓
                     Tampilkan rekomendasi
                               ↓
                         User menerima
                               ↓
                    Reserve Dock Station B
                               ↓
                      Navigasi ke Station B
                               ↓
                           Scan QR
                               ↓
                    Validasi & authorization
                               ↓
                       Start Charging
                               ↓
                        IoT Controller
                               ↓
                         Relay ON
                               ↓
                      Live Telemetry
                               ↓
                       Stop Charging
                               ↓
                         Relay OFF
                               ↓
                    Payment Settlement
                               ↓
                    Revenue Distribution
                               ↓
                  User & Partner Reporting
```

---

# 6. CORE BUSINESS PROCESSES

## 6.1 Station Discovery

```text
User
 ↓
Request current location
 ↓
Backend mencari station terdekat
 ↓
Filter berdasarkan kebutuhan user
 ↓
Return station data
 ↓
Display pada map
```

### Output

- Lokasi station.
- Status dock.
- Jenis charger.
- Informasi lokasi.
- Ketersediaan.

---

## 6.2 Dynamic Rerouting

```text
Selected Station
      ↓
Calculate ETA
      ↓
Check current occupancy
      ↓
Check active charging sessions
      ↓
Estimate charging duration
      ↓
Predict availability at ETA
      ↓
Station berisiko penuh?
       /            NO        YES
      ↓          ↓
Continue     Find alternatives
navigation        ↓
             Rank stations
                  ↓
          Notify user
                  ↓
          User accepts
                  ↓
        Temporary reservation
```

### Core Decision

Dynamic rerouting digunakan ketika station tujuan diprediksi tidak tersedia ketika pengguna diperkirakan tiba.

---

## 6.3 Reservation

```text
Rerouting accepted
       ↓
Select alternative dock
       ↓
Create reservation
       ↓
Dock = RESERVED
       ↓
User navigates
       ↓
User arrives
       ↓
Reservation validated
       ↓
Charging begins
```

Jika user tidak tiba sampai batas waktu:

```text
RESERVED
   ↓
Timeout
   ↓
EXPIRED
   ↓
Dock kembali AVAILABLE
```

---

## 6.4 Charging Session

```text
User arrives
     ↓
Scan QR
     ↓
Validate user
     ↓
Validate dock
     ↓
Validate reservation
     ↓
Validate payment
     ↓
Create charging session
     ↓
Send Start command
     ↓
IoT Relay ON
     ↓
Charging
     ↓
Telemetry streaming
     ↓
User stops / charging complete
     ↓
Send Stop command
     ↓
IoT Relay OFF
     ↓
Close session
```

---

## 6.5 Payment & Settlement

```text
Charging Session Completed
          ↓
Calculate total kWh
          ↓
Calculate charging cost
          ↓
Payment settlement
          ↓
Calculate ChargeFlow share
          ↓
Calculate Partner share
          ↓
Record transaction
          ↓
Distribute revenue
          ↓
Generate receipt & report
```

---

# 7. BUSINESS MODULES

## Module 1 — Authentication & User Management

### Features

- Registration.
- Login.
- User profile.
- Vehicle information.
- Account management.
- Role management.

---

## Module 2 — Station Discovery & Navigation

### Features

- Interactive map.
- Nearby station discovery.
- Station detail.
- Dock availability.
- Charger type filter.
- Location type filter.
- Navigation integration.

### Dock Status

| Status | Indicator | Meaning |
|---|---|---|
| `AVAILABLE` | 🟢 | Dock tersedia |
| `RESERVED` | 🟡 | Dock sedang direservasi |
| `CHARGING` | 🔴 | Dock sedang digunakan |
| `IDLE_COMPLETED` | 🔵 | Charging selesai, kendaraan belum dipindahkan |
| `OFFLINE` | ⚫ | Dock tidak tersedia |

---

## Module 3 — Dynamic Rerouting Engine

**Core innovation feature.**

### Features

- ETA Tracker.
- Occupancy Prediction.
- Charging Duration Estimation.
- Station Availability Prediction.
- Alternative Station Recommendation.
- Occupancy Alert.
- Dynamic Rerouting Notification.
- Temporary Reservation Hold.

### Decision Pipeline

```text
ETA User
   +
Current Occupancy
   +
Active Charging Sessions
   +
Predicted Charging Duration
   +
Station Capacity
        ↓
Availability Prediction
        ↓
Risk Assessment
        ↓
Rerouting Decision
```

---

## Module 4 — Charging Session & IoT Controller

### Features

- QR Scanner.
- Charging authorization.
- Start charging.
- Stop charging.
- Remote relay control.
- IoT telemetry.
- Live charging status.
- Charging history.

### Live Telemetry

- kWh.
- Current.
- Voltage.
- Power.
- Duration.
- Cost.
- Charging status.

---

## Module 5 — Payment

### Features

- Payment initiation.
- Payment verification.
- Payment status.
- Charging cost calculation.
- E-receipt.
- Transaction history.

### Planned Integration

- QRIS.
- GoPay.
- Payment gateway lainnya.

> Untuk MVP, payment gateway dapat menggunakan sandbox atau mock transaction.

---

## Module 6 — Partner Revenue Sharing & Analytics

### Features

- Revenue dashboard.
- Revenue calculation.
- Partner share.
- ChargeFlow share.
- Monthly report.
- Charging volume.
- Foot traffic insight.
- Station performance.

---

## Module 7 — Administration & Hardware Monitoring

### Features

- User management.
- Partner management.
- Station management.
- Dock management.
- Tariff management.
- IoT health monitoring.
- Maintenance monitoring.
- Transaction monitoring.
- Operational override.

---

# 8. FEATURE MATRIX

| Feature | EV Driver | Host Partner | Operational Admin |
|---|:---:|:---:|:---:|
| Login | ✓ | ✓ | ✓ |
| Station Map | ✓ | ✓ | ✓ |
| Station Detail | ✓ | ✓ | ✓ |
| Navigation | ✓ | — | — |
| Dynamic Rerouting | ✓ | — | — |
| Reservation | ✓ | — | ✓ |
| QR Charging | ✓ | — | ✓ Override |
| Charging Monitor | ✓ | ✓ | ✓ |
| Payment | ✓ | — | ✓ |
| Revenue Dashboard | — | ✓ | ✓ |
| Station Management | — | Limited | ✓ |
| Dock Management | — | Limited | ✓ |
| IoT Monitoring | — | Limited | ✓ |
| Tariff Management | — | — | ✓ |
| User Management | — | — | ✓ |
| Partner Management | — | — | ✓ |
| Reports | ✓ | ✓ | ✓ |

---

# 9. BUSINESS RULES

## 9.1 Reservation Hold

1. Reservation hasil dynamic rerouting berlaku maksimal **15 menit**.
2. Jika user tidak tiba dalam periode tersebut, reservation otomatis expired.
3. Dock kembali menjadi `AVAILABLE`.
4. Reservation hanya dapat digunakan oleh user yang mendapatkannya.

---

## 9.2 Idle Fee

Setelah charging selesai:

1. User mendapatkan grace period **10 menit**.
2. Jika kendaraan belum dipindahkan setelah grace period:
   - Idle fee mulai dihitung.
   - Biaya dihitung berdasarkan durasi keterlambatan.
3. Tujuannya adalah mencegah satu kendaraan terlalu lama menggunakan slot charging.

---

## 9.3 Revenue Sharing

### Electricity Margin

```text
ChargeFlow       70%
Host Partner     30%
```

### Service Fee — DC Fast Charger

```text
ChargeFlow       75%
Host Partner     25%
```

> Persentase merupakan asumsi awal brainstorming dan dapat berubah pada tahap validasi bisnis.

---

# 10. WORKFLOW & STATE MANAGEMENT

## 10.1 Dock Station State

```text
AVAILABLE
    ↓
RESERVED
    ↓
CHARGING
    ↓
IDLE_COMPLETED
    ↓
AVAILABLE
```

### Exception Flow

```text
ANY STATE
    ↓
OFFLINE
    ↓
MAINTENANCE
    ↓
AVAILABLE
```

---

## 10.2 Reservation State

```text
REQUESTED
    ↓
RESERVED
    ↓
ARRIVED
    ↓
CHARGING
```

Alternative:

```text
RESERVED
    ↓
EXPIRED
```

---

## 10.3 Charging Transaction State

```text
PENDING_START
      ↓
IN_PROGRESS
      ↓
STOPPED
      ↓
SETTLED
      ↓
SPLIT_DISTRIBUTED
```

---

# 11. ROLES & PERMISSIONS

| Permission | EV Driver | Host Partner | Operational Admin |
|---|:---:|:---:|:---:|
| View Station | ✓ | ✓ | ✓ |
| Navigate | ✓ | — | — |
| Receive Rerouting | ✓ | — | — |
| Create Reservation | ✓ | — | ✓ |
| Start Charging | ✓ | — | ✓ Override |
| Stop Charging | ✓ | — | ✓ Override |
| View Charging Session | ✓ | ✓ | ✓ |
| View Revenue | — | ✓ | ✓ |
| Manage Station | — | Limited | ✓ |
| Manage Dock | — | Limited | ✓ |
| Monitor IoT | — | Limited | ✓ |
| Manage Tariff | — | — | ✓ |
| Manage User | — | — | ✓ |
| Manage Partner | — | — | ✓ |

---

# 12. DATA MODEL / ENTITIES

## 12.1 Core Entities

### User

```text
User
├── user_id
├── name
├── email
├── vehicle_type
└── wallet_balance
```

### Partner

```text
Partner
├── partner_id
├── business_name
├── business_type
└── bank_account
```

### Station

```text
Station
├── station_id
├── partner_id
├── latitude
├── longitude
└── address
```

### DockUnit

```text
DockUnit
├── dock_id
├── station_id
├── type
├── status
└── current_kw
```

### ChargingSession

```text
ChargingSession
├── session_id
├── user_id
├── dock_id
├── start_time
├── end_time
├── total_kwh
└── total_cost
```

### Transaction

```text
Transaction
├── transaction_id
├── session_id
├── payment_status
├── partner_share_amount
└── company_share_amount
```

---

## 12.2 Potential Supporting Entities

Entity berikut dapat diperlukan ketika sistem masuk ke tahap implementasi lebih detail:

```text
Reservation
Vehicle
Tariff
StationTelemetry
DockTelemetry
Notification
MaintenanceRecord
RevenueDistribution
```

> Entity tambahan ini merupakan kandidat hasil breakdown business process dan perlu divalidasi sebelum finalisasi database.

---

# 13. SYSTEM OUTPUT

## 13.1 Driver Output

- Interactive station map.
- Station availability.
- ETA.
- Rerouting recommendation.
- Charging status.
- Charging cost.
- Charging history.
- E-receipt.

---

## 13.2 Partner Output

- Station performance.
- Charging sessions.
- Revenue.
- Partner share.
- Monthly settlement.
- Foot traffic insight.
- PDF / Excel report.

---

## 13.3 Admin Output

- Station monitoring.
- Dock status.
- Active charging sessions.
- IoT health.
- Transaction monitoring.
- Revenue overview.
- Maintenance alerts.

---

# 14. NOTIFICATION SYSTEM

Potential notifications:

| Event | Recipient |
|---|---|
| Rerouting recommendation | EV Driver |
| Reservation confirmed | EV Driver |
| Reservation hampir expired | EV Driver |
| Charging started | EV Driver |
| Charging completed | EV Driver |
| Idle fee started | EV Driver |
| Station offline | Admin |
| Maintenance alert | Admin |
| Revenue settlement | Host Partner |

---

# 15. AI OPPORTUNITY

## 15.1 AI Problem

Sistem perlu memperkirakan:

> **Apakah charging dock akan tersedia ketika EV Driver tiba di station tujuan?**

---

## 15.2 Input Data

Potential input:

- Historical charging duration.
- Vehicle type / model.
- Initial State of Charge.
- Charging power.
- Current occupancy.
- Active charging sessions.
- Historical station utilization.
- Time of day.
- Day of week.
- Traffic / travel time.
- Historical busy periods.

---

## 15.3 AI Pipeline

```text
Historical Data
      ↓
Data Preprocessing
      ↓
Feature Engineering
      ↓
Prediction Model
      ↓
Estimated Charging Duration
      ↓
Station Availability Prediction
      ↓
Risk Score
      ↓
Dynamic Rerouting Decision
      ↓
User Notification
```

---

## 15.4 AI Output

Contoh output:

```text
Station A
Current Availability: 1 Dock

Estimated User Arrival: 12 minutes
Estimated Dock Release: 20 minutes

Availability Risk: HIGH

Recommendation:
Redirect user to Station B
```

---

## 15.5 Candidate Model

Model yang dapat dievaluasi:

- XGBoost.
- LSTM.
- Time-series forecasting model lainnya.

> Model final belum ditetapkan. Pemilihan model sebaiknya dilakukan setelah melihat karakteristik dan jumlah data yang tersedia.

---

# 16. MVP SCOPE

## 16.1 🔴 MUST HAVE

Target: **prototype / MVP dalam 14 hari**

### Mobile Application

- Interactive map.
- Station markers.
- Real-time dock status.
- Station detail.
- Basic navigation flow.

### Dynamic Rerouting

- Simulasi station penuh.
- Rerouting popup.
- Alternative station recommendation.
- Temporary reservation simulation.

### IoT

- ESP32.
- Relay.
- Dual-color LED.
- MQTT communication.
- Start / Stop command.

### QR

- QR scanner.
- QR-based dock identification.
- Change dock status.

### Partner Dashboard

- Basic revenue dashboard.
- Estimated partner share.
- Basic charging statistics.

---

## 16.2 🟡 SHOULD HAVE

Jika waktu memungkinkan:

- Payment gateway sandbox.
- Mock QRIS / GoPay.
- Idle fee timer.
- Basic charging history.
- Basic notification system.
- Basic analytics.

---

## 16.3 🔵 FUTURE

Untuk pengembangan komersial:

- Apple CarPlay.
- Android Auto.
- RFID-based Plug & Charge.
- Advanced payment integration.
- Advanced AI prediction.
- Automated settlement.
- Large-scale station management.
- Advanced partner analytics.

---

# 17. MVP USER JOURNEY

## EV Driver

```text
Open App
   ↓
View Map
   ↓
Select Station
   ↓
Check Availability
   ↓
System Predicts Availability
   ↓
If Risk HIGH
   ↓
Rerouting Recommendation
   ↓
Accept
   ↓
Reserve Dock
   ↓
Navigate
   ↓
Scan QR
   ↓
Start Charging
   ↓
Monitor Charging
   ↓
Stop Charging
   ↓
Payment
   ↓
E-Receipt
```

---

## Host Partner

```text
Login
   ↓
View Dashboard
   ↓
View Station Status
   ↓
View Charging Sessions
   ↓
View Revenue
   ↓
View Partner Share
   ↓
View Monthly Report
```

---

## Admin

```text
Login
   ↓
Operations Dashboard
   ↓
Monitor Stations
   ↓
Monitor IoT
   ↓
Monitor Transactions
   ↓
Manage Tariff
   ↓
Manage Partners
   ↓
Handle Maintenance
```

---

# 18. BUSINESS MODEL

## 18.1 Customer Segments

### B2C

EV Drivers.

### B2B

Commercial Host Partners.

---

## 18.2 Value Proposition

### EV Drivers

> **Zero Waiting Time Charging**

Mendapatkan rekomendasi charging station berdasarkan kondisi dan prediksi ketersediaan.

### Host Partners

> **Zero CapEx & Passive Income**

Mendapatkan potensi pendapatan tambahan dan foot traffic dari pengguna EV.

---

## 18.3 Revenue Streams

### 1. Electricity Margin

ChargeFlow memperoleh margin dari penjualan listrik per kWh.

### 2. Service Fee

ChargeFlow memperoleh service fee dari transaksi charging, khususnya layanan DC Fast Charging.

### 3. Promoted Location

Host Partner dapat membayar agar lokasi tertentu mendapatkan prioritas dalam rekomendasi pengalihan rute.

```text
EV Driver
    ↓
Charging Transaction
    ↓
Revenue
    ├── ChargeFlow Share
    └── Host Partner Share
```

---

# 19. PRODUCT ARCHITECTURE OVERVIEW

```text
┌─────────────────────┐
│      EV DRIVER      │
│    Mobile App       │
└──────────┬──────────┘
           │
           ↓
┌─────────────────────┐
│   ChargeFlow API    │
│      Backend        │
└──────────┬──────────┘
           │
     ┌─────┼───────────────┐
     ↓     ↓               ↓
┌────────┐ ┌────────────┐ ┌───────────────┐
│Database│ │ AI Engine  │ │Payment Gateway│
└────────┘ └────────────┘ └───────────────┘
           │
           ↓
┌─────────────────────┐
│   IoT / MQTT Layer  │
└──────────┬──────────┘
           │
           ↓
┌─────────────────────┐
│ Charging Dock /     │
│ ESP32 + Relay       │
└─────────────────────┘

Host Partner
     ↓
Partner Dashboard
     ↓
ChargeFlow API

Operational Admin
     ↓
Admin Dashboard
     ↓
ChargeFlow API
```

---

# 20. CORE VALUE LOOP

ChargeFlow memiliki siklus nilai utama:

```text
More Stations
     ↓
More Availability
     ↓
More EV Drivers
     ↓
More Charging Sessions
     ↓
More Revenue
     ↓
More Attractive for Partners
     ↓
More Stations
```

Dynamic rerouting memperkuat siklus tersebut:

```text
Station Data
     ↓
Prediction
     ↓
Better Recommendation
     ↓
Less Waiting
     ↓
Better User Experience
     ↓
Higher Adoption
```

---

# 21. OPEN QUESTIONS

Bagian ini sengaja disediakan untuk keputusan yang belum final.

## Product

- Apakah ChargeFlow menjadi platform aggregator atau operator charging station?
- Apakah user melakukan pembayaran langsung melalui ChargeFlow?
- Apakah reservation benar-benar menjamin dock atau hanya temporary hold?
- Apakah semua station menggunakan hardware ChargeFlow?

## Business

- Siapa yang menanggung biaya hardware?
- Apakah model Zero CapEx berarti ChargeFlow menanggung CapEx?
- Bagaimana kontrak dengan Host Partner?
- Bagaimana settlement revenue dilakukan?
- Bagaimana menentukan tarif listrik dan service fee?

## Technical

- Apakah komunikasi IoT menggunakan MQTT atau OCPP?
- Apakah ESP32 digunakan sebagai prototype atau production controller?
- Bagaimana autentikasi device?
- Bagaimana sistem menangani device offline?
- Bagaimana sinkronisasi status charging dengan backend?

## AI

- Apakah dataset historis tersedia?
- Berapa banyak data yang dibutuhkan?
- Apakah prediction dilakukan per station?
- Apakah prediction menggunakan rule-based baseline sebelum ML?
- Metrik evaluasi apa yang digunakan?

## MVP

- Apakah payment perlu benar-benar terintegrasi?
- Apakah dynamic rerouting menggunakan data real-time atau simulasi?
- Apakah charging session benar-benar mengontrol relay?
- Apakah AI sudah digunakan pada MVP atau menggunakan simulasi prediction?

---

# 22. MVP SUCCESS CRITERIA

Prototype dianggap berhasil apabila end-to-end flow berikut dapat berjalan:

```text
User
 ↓
Find Station
 ↓
View Availability
 ↓
Select Station
 ↓
Station Diprediksi Penuh
 ↓
Dynamic Rerouting
 ↓
Accept Alternative
 ↓
Reserve Dock
 ↓
Scan QR
 ↓
Start Charging
 ↓
ESP32 / Relay Respond
 ↓
Live Charging Status
 ↓
Stop Charging
 ↓
Transaction Recorded
 ↓
Partner Revenue Calculated
```

### Minimum Demonstrable Outcome

1. Status dock dapat berubah secara real-time.
2. User dapat melihat station pada map.
3. Sistem dapat mendemonstrasikan dynamic rerouting.
4. Dock alternatif dapat di-reserve.
5. QR dapat digunakan untuk identifikasi dock.
6. Aplikasi dapat mengirim perintah ke perangkat IoT.
7. Partner dapat melihat estimasi revenue.
8. Seluruh alur dapat didemonstrasikan end-to-end.

---

# 23. PRODUCT PRIORITY

## Core Product

> **Dynamic Rerouting + Real-Time Charging Availability**

## Supporting Product

> **IoT Charging Control + Payment + Revenue Sharing**

## Business Enabler

> **Host Partner Zero-CapEx Model**

## Innovation Layer

> **AI-based Charging Availability Prediction**

---

# 24. FINAL PRODUCT DEFINITION

> **ChargeFlow adalah platform intelligent EV charging yang menghubungkan pengemudi kendaraan listrik dengan charging station terdistribusi melalui real-time IoT monitoring, AI-assisted availability prediction, dynamic rerouting, reservation, dan integrated charging transaction.**

Nilai utama ChargeFlow:

```text
REAL-TIME
    +
PREDICTION
    +
REROUTING
    +
RESERVATION
    +
IoT
    +
PAYMENT
    +
REVENUE SHARING
```

Dengan fokus utama:

> **Mengurangi ketidakpastian dan waktu tunggu pengisian EV, sekaligus menciptakan model kemitraan charging station yang menarik bagi pemilik usaha.**
