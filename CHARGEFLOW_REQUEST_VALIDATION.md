# CHARGEFLOW — REQUEST VALIDATION SPECIFICATION

> **Status:** Initial API Request Validation Design  
> **Purpose:** Menentukan aturan validasi request sebelum request diproses oleh business logic dan database.  
> **Basis:** ChargeFlow brainstorming dan database structure.

---

# 1. VALIDATION OBJECTIVE

Request validation digunakan untuk memastikan:

1. Data wajib tidak kosong.
2. Format data sesuai tipe yang diharapkan.
3. Nilai berada pada range yang valid.
4. Relasi antar-entity valid.
5. Status transition tidak sembarangan.
6. User tidak dapat mengakses atau mengubah resource milik user lain.
7. Data finansial tidak menerima nilai negatif atau manipulasi client.
8. Request IoT memiliki device identity dan payload yang valid.
9. Request reservation tidak menyebabkan double booking.
10. Request charging tidak dapat menjalankan dock yang tidak tersedia.

---

# 2. VALIDATION LAYER

```text
Client Request
      ↓
[1] Syntax / JSON Validation
      ↓
[2] DTO / Field Validation
      ↓
[3] Authentication
      ↓
[4] Authorization
      ↓
[5] Business Rule Validation
      ↓
[6] Entity / Resource Validation
      ↓
[7] Database Constraint
      ↓
Business Logic
```

## 2.1 Syntax Validation

Memastikan request merupakan JSON valid dan menggunakan content type yang benar.

```http
Content-Type: application/json
```

## 2.2 Field Validation

Memastikan field memiliki aturan:

- required / optional
- tipe data
- panjang string
- format
- range
- enum

## 2.3 Authentication

Memastikan request berasal dari user/device yang valid.

```http
Authorization: Bearer <JWT>
```

## 2.4 Authorization

Memastikan role memiliki izin terhadap resource/action.

```text
DRIVER
├── melihat station
├── reservation
├── charging session miliknya
└── payment miliknya

PARTNER
├── melihat station miliknya
├── melihat dock miliknya
└── melihat revenue miliknya

ADMIN
└── operational management
```

## 2.5 Business Rule Validation

Contoh:

```text
Dock harus AVAILABLE
        ↓
Reservation boleh dibuat
```

Jadi validasi bukan hanya memeriksa apakah `dock_id` berbentuk UUID, tetapi juga apakah dock benar-benar dapat digunakan.

---

# 3. STANDARD VALIDATION RESPONSE

## Success

```json
{
  "success": true,
  "data": {}
}
```

## Validation Error

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Request validation failed",
    "fields": {
      "email": "Invalid email format",
      "phone_number": "Phone number is required"
    }
  }
}
```

## Business Rule Error

```json
{
  "success": false,
  "error": {
    "code": "DOCK_NOT_AVAILABLE",
    "message": "Selected charging dock is currently unavailable"
  }
}
```

---

# 4. COMMON FIELD VALIDATION

## UUID

```text
Format: UUID
Required: sesuai endpoint
```

## Name

```text
Required: YES jika entity membutuhkan nama
Min: 2 karakter
Max: 100 karakter
Trim whitespace: YES
```

## Email

```text
Required: YES untuk account
Max: 150 karakter
Format: valid email
Normalize: lowercase recommended
Unique: YES
```

## Phone Number

```text
Max: 30 karakter
Allowed: digits, +, -, spaces
```

## Monetary Value

```text
Type: NUMERIC / DECIMAL
Minimum: 0
Negative: NOT ALLOWED
```

## Percentage

```text
Minimum: 0
Maximum: 100
```

## Timestamp

Gunakan ISO-8601:

```text
2026-08-07T19:30:00+07:00
```

---

# 5. USER REQUEST VALIDATION

## 5.1 Register User

```http
POST /api/v1/users/register
```

### Request

```json
{
  "name": "Ghiffar",
  "email": "ghiffar@example.com",
  "password": "StrongPassword123!",
  "role": "DRIVER",
  "phone_number": "+628123456789"
}
```

### Validation

| Field | Required | Rules |
|---|---:|---|
| name | YES | 2–100 chars |
| email | YES | Valid email, unique |
| password | YES | Min 8 chars |
| role | YES | DRIVER / PARTNER / ADMIN* |
| phone_number | NO | Max 30 chars |

`ADMIN` sebaiknya tidak dapat dibuat melalui public registration.

```text
PUBLIC REGISTER → DRIVER
PARTNER → onboarding / admin
ADMIN → secure admin process
```

---

# 6. VEHICLE REQUEST VALIDATION

## Create Vehicle

```http
POST /api/v1/vehicles
```

### Request

```json
{
  "vehicle_type": "CAR",
  "brand": "BYD",
  "model": "Atto 3",
  "battery_capacity_kwh": 60.5,
  "license_plate": "B 1234 XYZ"
}
```

### Validation

| Field | Required | Rules |
|---|---:|---|
| vehicle_type | YES | CAR / MOTORCYCLE |
| brand | NO | Max 100 chars |
| model | NO | Max 100 chars |
| battery_capacity_kwh | NO | > 0 |
| license_plate | NO | Max 20 chars |

### Ownership Rule

`user_id` tidak perlu dipercaya dari request. Ambil dari authenticated user.

```text
JWT → authenticatedUser.id → vehicle.user_id
```

---

# 7. PARTNER REQUEST VALIDATION

## Create Partner

```http
POST /api/v1/partners
```

### Request

```json
{
  "business_name": "Cafe ABC",
  "business_type": "CAFE",
  "bank_name": "BCA",
  "bank_account": "1234567890"
}
```

### Validation

| Field | Required | Rules |
|---|---:|---|
| business_name | YES | 2–150 chars |
| business_type | YES | Valid business type |
| bank_name | NO | Max 100 chars |
| bank_account | NO | Max 100 chars |

---

# 8. STATION REQUEST VALIDATION

## Create Station

```http
POST /api/v1/stations/{partnerId}
```

### Request

```json
{
  "name": "ChargeFlow Cafe ABC",
  "address": "Jl. Contoh No. 1",
  "latitude": -7.983908,
  "longitude": 112.621391,
  "business_type": "CAFE"
}
```

### Validation

| Field | Required | Rules |
|---|---:|---|
| name | YES | 2–150 chars |
| address | YES | Not blank |
| latitude | YES | -90 to 90 |
| longitude | YES | -180 to 180 |
| business_type | NO | Valid business type |

### Business Rule

Partner hanya boleh membuat/mengubah station miliknya sendiri.

---

# 9. DOCK REQUEST VALIDATION

## Create Dock

```http
POST /api/v1/stations/{stationId}/docks
```

### Request

```json
{
  "dock_code": "D-001",
  "charger_type": "AC",
  "power_kw": 7.2,
  "device_id": "ESP32-001"
}
```

### Validation

| Field | Required | Rules |
|---|---:|---|
| dock_code | YES | Unique |
| charger_type | YES | AC / DC |
| power_kw | YES | > 0 |
| device_id | YES | Unique |

Default:

```text
status = AVAILABLE
```

Client tidak boleh menentukan status awal seperti `CHARGING`.

---

# 10. RESERVATION REQUEST VALIDATION

## Create Reservation

```http
POST /api/v1/reservations
```

### Request

```json
{
  "vehicle_id": "vehicle-uuid",
  "dock_id": "dock-uuid"
}
```

### Validation

| Field | Required | Rules |
|---|---:|---|
| vehicle_id | YES | UUID |
| dock_id | YES | UUID |

### Business Validation

Backend wajib memastikan:

```text
1. User authenticated
2. Vehicle exists
3. Vehicle belongs to user
4. Dock exists
5. Dock status = AVAILABLE
6. Station status = OPEN
7. User tidak memiliki active reservation yang konflik
8. Dock tidak sedang di-reserve user lain
```

### Reservation Lifecycle

```text
REQUESTED
   ↓
RESERVED
   ↓
ARRIVED
   ↓
COMPLETED

Alternative:

RESERVED → EXPIRED
RESERVED → CANCELLED
```

### Expiration

Default:

```text
expires_at = reserved_at + 15 minutes
```

Client tidak boleh bebas menentukan expiration.

---

# 11. CHARGING SESSION REQUEST VALIDATION

## Start Charging

```http
POST /api/v1/charging-sessions
```

### Request

```json
{
  "dock_id": "dock-uuid",
  "vehicle_id": "vehicle-uuid",
  "reservation_id": "reservation-uuid"
}
```

### Validation

| Field | Required | Rules |
|---|---:|---|
| dock_id | YES | UUID |
| vehicle_id | YES | UUID |
| reservation_id | NO | UUID |

### Business Validation

```text
USER
 ↓
Vehicle belongs to user
 ↓
Dock exists
 ↓
Dock is AVAILABLE / RESERVED
 ↓
Reservation valid (if provided)
 ↓
Reservation belongs to user
 ↓
Dock matches reservation
 ↓
No active charging session for user
 ↓
No active session on dock
 ↓
START CHARGING
```

Setelah berhasil:

```text
dock.status = CHARGING
charging_session.status = IN_PROGRESS
```

---

# 12. STOP CHARGING REQUEST

```http
POST /api/v1/charging-sessions/{sessionId}/stop
```

### Request

```json
{
  "reason": "USER_REQUEST"
}
```

### Validation

| Field | Required | Rules |
|---|---:|---|
| reason | NO | Valid stop reason |

### Business Validation

```text
Session exists
AND
Session belongs to authenticated user
AND
Session.status = IN_PROGRESS
```

Backend kemudian meminta/menunggu final telemetry dan menghitung hasil charging.

---

# 13. TELEMETRY REQUEST VALIDATION

Telemetry berasal dari IoT device, bukan mobile user.

```http
POST /api/v1/iot/telemetry
```

### Request

```json
{
  "device_id": "ESP32-001",
  "voltage": 220.5,
  "current": 8.7,
  "power_kw": 1.92,
  "energy_kwh": 5.82,
  "temperature": 42.3,
  "status": "CHARGING",
  "recorded_at": "2026-08-07T19:30:00+07:00"
}
```

### Validation

| Field | Required | Rules |
|---|---:|---|
| device_id | YES | Registered device |
| voltage | YES | >= 0 |
| current | YES | >= 0 |
| power_kw | YES | >= 0 |
| energy_kwh | YES | >= 0 |
| temperature | NO | Sensor range |
| status | YES | IDLE / CHARGING / FAULT / OFFLINE |
| recorded_at | YES | Valid timestamp |

### Device Validation

```text
device_id
   ↓
registered device?
   ↓ YES
device belongs to known dock?
   ↓ YES
device authorized?
   ↓ YES
accept telemetry
```

Backend sebaiknya menentukan `dock_id`, `station_id`, dan `partner_id` dari device registry, bukan mempercayai nilai yang dikirim client.

---

# 14. PAYMENT REQUEST VALIDATION

## Create Payment

```http
POST /api/v1/payments
```

### Request

```json
{
  "session_id": "session-uuid",
  "payment_method": "QRIS"
}
```

### Validation

| Field | Required | Rules |
|---|---:|---|
| session_id | YES | Valid session |
| payment_method | YES | Supported method |

### Critical Rule

Client **tidak boleh menjadi source of truth untuk amount**.

Jangan menerima:

```json
{
  "session_id": "...",
  "amount": 1000
}
```

Backend menghitung:

```text
Final Telemetry
      ↓
Total kWh
      ↓
Tariff
      ↓
Service Fee
      ↓
Idle Fee
      ↓
TOTAL
```

---

# 15. TRANSACTION VALIDATION

Transaction sebaiknya dibuat oleh backend setelah session/payment valid.

Client tidak boleh menentukan:

```json
{
  "gross_amount": 100000,
  "company_share_amount": 70000,
  "partner_share_amount": 30000
}
```

Server menghitung:

```text
Charging Session
       ↓
Final Energy
       ↓
Tariff
       ↓
Gross Amount
       ↓
Revenue Rule
       ↓
Company Share + Partner Share
       ↓
Transaction
```

---

# 16. TARIFF REQUEST VALIDATION

## Create Tariff

```http
POST /api/v1/stations/{stationId}/tariffs
```

### Request

```json
{
  "charger_type": "AC",
  "price_per_kwh": 2500,
  "service_fee": 1000,
  "idle_fee_per_minute": 500,
  "effective_from": "2026-08-07T00:00:00+07:00"
}
```

### Validation

| Field | Required | Rules |
|---|---:|---|
| charger_type | YES | AC / DC |
| price_per_kwh | YES | >= 0 |
| service_fee | YES | >= 0 |
| idle_fee_per_minute | YES | >= 0 |
| effective_from | YES | Valid timestamp |

### Business Rule

Tidak boleh ada tarif aktif yang overlap untuk kombinasi station + charger type + effective period.

---

# 17. REVENUE DISTRIBUTION VALIDATION

Initial rule:

```text
Electricity Margin
ChargeFlow   = 70%
Partner      = 30%

DC Service Fee
ChargeFlow   = 75%
Partner      = 25%
```

Validation:

```text
company_percentage >= 0
partner_percentage >= 0
company_percentage + partner_percentage = 100
```

Tetapi percentage sebaiknya ditentukan server-side dan tidak diterima dari mobile client.

---

# 18. NOTIFICATION REQUEST VALIDATION

Notification umumnya dibuat oleh backend berdasarkan event.

Jika admin endpoint diperlukan:

```http
POST /api/v1/notifications
```

### Request

```json
{
  "user_id": "user-uuid",
  "type": "REROUTING",
  "title": "Charging Station Penuh",
  "message": "Kami merekomendasikan station alternatif."
}
```

### Validation

| Field | Required | Rules |
|---|---:|---|
| user_id | YES | Existing user |
| type | YES | Valid notification type |
| title | YES | 1–150 chars |
| message | YES | Not blank |

---

# 19. MAINTENANCE REQUEST VALIDATION

## Create Maintenance Record

```http
POST /api/v1/docks/{dockId}/maintenance
```

### Request

```json
{
  "issue_type": "HARDWARE",
  "description": "Dock tidak merespons."
}
```

### Validation

| Field | Required | Rules |
|---|---:|---|
| issue_type | YES | HARDWARE / ELECTRICAL / NETWORK / OTHER |
| description | YES | Not blank |

### Business Rule

Jika maintenance aktif:

```text
dock.status = OFFLINE / MAINTENANCE
```

Dock tidak boleh menerima reservation baru.

---

# 20. PREDICTION REQUEST VALIDATION

Prediction sebaiknya dihasilkan oleh backend/AI engine, bukan oleh mobile client.

Jika internal endpoint digunakan:

```http
POST /api/v1/predictions
```

### Input

```json
{
  "station_id": "station-uuid",
  "target_arrival_time": "2026-08-07T20:00:00+07:00"
}
```

### Validation

```text
station exists
AND
station active
AND
target_arrival_time valid
AND
target_arrival_time >= current time
```

Prediction engine menggunakan:

```text
Historical Charging
+
Current Occupancy
+
Active Reservations
+
Charging Telemetry
+
Target Arrival Time
        ↓
Prediction
```

---

# 21. DYNAMIC REROUTING VALIDATION

Dynamic Rerouting tidak boleh hanya berdasarkan jarak.

Minimal mempertimbangkan:

```text
Station Availability
+
Estimated Waiting Time
+
Distance
+
Charging Duration
+
Reservation Availability
+
Prediction Risk
```

Conceptual score:

```text
Station Score =
    Distance Score
  + Availability Score
  + Waiting Time Score
  + Risk Score
```

### Output Example

```json
{
  "recommended_station_id": "station-uuid",
  "predicted_wait_minutes": 4,
  "risk_score": 0.18,
  "reason": "LOW_AVAILABILITY_RISK"
}
```

---

# 22. VALIDATION MATRIX

| Resource | Syntax | Field | Auth | Role | Business Rule | DB |
|---|---:|---:|---:|---:|---:|---:|
| User | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Vehicle | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Partner | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Station | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Dock | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Reservation | ✓ | ✓ | ✓ | ✓ | **CRITICAL** | ✓ |
| Charging Session | ✓ | ✓ | ✓ | ✓ | **CRITICAL** | ✓ |
| Telemetry | ✓ | ✓ | Device Auth | IoT | **CRITICAL** | ✓ |
| Payment | ✓ | ✓ | ✓ | ✓ | **CRITICAL** | ✓ |
| Transaction | ✓ | Server | Server | Server | **CRITICAL** | ✓ |
| Revenue | ✓ | Server | Server | Server | **CRITICAL** | ✓ |
| Tariff | ✓ | ✓ | ✓ | ADMIN/PARTNER | ✓ | ✓ |
| Notification | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Maintenance | ✓ | ✓ | ✓ | PARTNER/ADMIN | ✓ | ✓ |
| Prediction | ✓ | ✓ | Internal | Internal | **CRITICAL** | ✓ |

---

# 23. SECURITY VALIDATION

## Never Trust Client-Calculated Values

Jangan percaya nilai berikut dari client:

```text
amount
total_cost
company_share_amount
partner_share_amount
revenue_percentage
```

Semua harus dihitung server-side.

## Never Trust Client Ownership

Gunakan authenticated identity:

```text
JWT
 ↓
authenticatedUser.id
 ↓
resource ownership check
```

## Never Trust Arbitrary IoT Identity

```text
device_id
 ↓
registered?
 ↓
belongs to dock?
 ↓
authorized?
 ↓
accept telemetry
```

---

# 24. HTTP STATUS STANDARD

| Status | Use Case |
|---|---|
| 200 | Request berhasil |
| 201 | Resource berhasil dibuat |
| 204 | Berhasil tanpa response body |
| 400 | Invalid request |
| 401 | Tidak authenticated |
| 403 | Tidak memiliki permission |
| 404 | Resource tidak ditemukan |
| 409 | Conflict / state conflict |
| 422 | Business validation error |
| 429 | Rate limit |
| 500 | Internal server error |

---

# 25. IMPORTANT 409 CONFLICT CASES

Gunakan `409 Conflict` untuk:

```text
Dock sudah di-reserve user lain
Dock sedang charging
Email sudah terdaftar
Device ID sudah terdaftar
Dock code sudah digunakan
Tariff overlap
User sudah memiliki active charging session
```

Contoh:

```json
{
  "success": false,
  "error": {
    "code": "DOCK_ALREADY_RESERVED",
    "message": "The selected dock is already reserved"
  }
}
```

---

# 26. VALIDATION PRIORITY FOR MVP

## 🔴 MUST VALIDATE

```text
1. Authentication
2. User ownership
3. Dock availability
4. Reservation conflict
5. Charging session state
6. Telemetry device identity
7. Payment amount server-side
8. Revenue calculation server-side
9. UUID / required fields
10. Numeric range
```

## 🟡 SHOULD VALIDATE

```text
11. Rate limiting
12. Duplicate telemetry
13. Timestamp consistency
14. Tariff overlap
15. Maintenance conflict
```

## 🔵 FUTURE

```text
16. Advanced anomaly detection
17. Device certificate authentication
18. Fraud detection
19. ML-based telemetry validation
20. Advanced anti-abuse system
```

---

# 27. END-TO-END VALIDATION EXAMPLE

Contoh ketika user melakukan charging:

```text
POST /charging-sessions
        ↓
Valid JSON?
        ↓ YES
Required fields?
        ↓ YES
JWT valid?
        ↓ YES
User owns vehicle?
        ↓ YES
Dock exists?
        ↓ YES
Dock available?
        ↓ YES
Reservation valid?
        ↓ YES
No active session?
        ↓ YES
Create charging session
        ↓
Set dock = CHARGING
        ↓
IoT starts charging
        ↓
Telemetry received
        ↓
Telemetry validated
        ↓
Session updated
        ↓
Charging stopped
        ↓
Calculate final kWh
        ↓
Calculate tariff
        ↓
Calculate payment
        ↓
Create transaction
        ↓
Calculate revenue sharing
        ↓
Create revenue distribution
```

---

# 28. CORE PRINCIPLE

> **Request validation bukan hanya memeriksa apakah JSON benar.**

ChargeFlow membutuhkan tiga jenis validasi utama:

```text
DATA VALIDATION
"Apakah datanya benar?"

       +

AUTHORIZATION
"Apakah user boleh melakukan ini?"

       +

BUSINESS VALIDATION
"Apakah tindakan ini diperbolehkan
 dalam kondisi sistem saat ini?"
```

Contoh:

```text
dock_id valid
       ↓
BELUM TENTU
       ↓
User boleh menggunakan dock?
       ↓
BELUM TENTU
       ↓
Dock sedang AVAILABLE?
       ↓
BELUM TENTU
       ↓
Reservation valid?
       ↓
BARU BOLEH START CHARGING
```

---

# 29. FINAL VALIDATION FLOW

```text
┌─────────────────┐
│  Client / IoT   │
└────────┬────────┘
         ↓
┌─────────────────┐
│ JSON Validation │
└────────┬────────┘
         ↓
┌─────────────────┐
│ DTO Validation  │
└────────┬────────┘
         ↓
┌─────────────────┐
│ Authentication  │
└────────┬────────┘
         ↓
┌─────────────────┐
│ Authorization   │
└────────┬────────┘
         ↓
┌─────────────────┐
│ Business Rules  │
└────────┬────────┘
         ↓
┌─────────────────┐
│ Resource Check  │
└────────┬────────┘
         ↓
┌─────────────────┐
│ DB Constraints  │
└────────┬────────┘
         ↓
┌─────────────────┐
│ Business Logic  │
└─────────────────┘
```

> **Target:** setiap request yang masuk harus valid secara data, aman secara ownership/permission, dan valid terhadap kondisi bisnis ChargeFlow.
