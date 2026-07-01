# 🚀 Backend Internship Assignment

A backend service built using **Node.js**, **TypeScript**, **Express.js**, **Prisma ORM**, and **SQLite**. This project manages quote requests, integrates with a mocked FastAPI service for document analysis, and provides RESTful APIs for quote management.

---

## 📌 Objective

The objective of this project is to build a backend service that:

- Manages quote requests
- Integrates with a FastAPI AI service (mocked)
- Stores AI analysis results
- Allows updating quote status
- Demonstrates clean backend architecture with validation and error handling

---

# ✨ Features

- ✅ Create Quote
- ✅ Get All Quotes
- ✅ Get Quote by ID
- ✅ Analyze Quote (Mock FastAPI Integration)
- ✅ Update Quote Status
- ✅ Request Validation
- ✅ Error Handling
- ✅ Logging Middleware *(Bonus)*
- ✅ Pagination *(Bonus)*

---

# 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| Node.js | Runtime |
| TypeScript | Programming Language |
| Express.js | Backend Framework |
| Prisma ORM | Database ORM |
| SQLite | Database |
| Zod | Request Validation |

---

# 📁 Project Structure

```text
backend-intern-assignment/
│
├── prisma/
│   ├── migrations/
│   └── schema.prisma
│
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── repositories/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── validations/
│   ├── app.ts
│   └── server.ts
│
├── screenshots/
├── package.json
├── tsconfig.json
├── README.md
└── .gitignore
```

---

# ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/rootdenied/AmberFlux-backend-intern-assignment.git
```

Move into the project

```bash
cd backend-intern-assignment
```

Install dependencies

```bash
npm install
```

Generate Prisma Client

```bash
npx prisma generate
```

Run Database Migration

```bash
npx prisma migrate dev --name init
```

Start the Development Server

```bash
npm run dev
```

Server will start on:

```text
http://localhost:3000
```

---

# 📡 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/quotes` | Create a new quote |
| GET | `/quotes` | Get all quotes |
| GET | `/quotes/:id` | Get quote details with analysis |
| POST | `/quotes/:id/analyze` | Analyze quote using mocked FastAPI |
| PATCH | `/quotes/:id/status` | Update quote status |

---

# 📄 Sample Request

### Create Quote

**POST** `/quotes`

```json
{
  "customer": "ABC Pvt Ltd",
  "project": "Hospital Construction",
  "estimated_value": 500000
}
```

---

# 📄 Sample Response

```json
{
  "id": "cmrxxxxxx",
  "customer": "ABC Pvt Ltd",
  "project": "Hospital Construction",
  "status": "New",
  "estimated_value": 500000,
  "created_date": "2026-07-01T10:30:00.000Z"
}
```

---

# ✅ Validation

The application validates:

- Customer is required
- Project is required
- Estimated value must be greater than 0
- Status must be one of:
  - New
  - InReview
  - NeedsInfo
  - Completed

---

# ⚠️ Error Handling

The application returns meaningful HTTP responses.

| Status Code | Description |
|-------------|-------------|
| 200 | Success |
| 201 | Resource Created |
| 400 | Bad Request (Validation Failed) |
| 404 | Quote Not Found |
| 500 | Internal Server Error |

---

# 🗄️ Database Schema

## QuoteRequest

- id
- customer
- project
- status
- estimated_value
- created_date

## AnalysisResult

- quote_id
- risk
- confidence
- missing_items
- analyzed_at

---

# ⭐ Bonus Features Implemented

- ✅ Logging Middleware

<img width="818" height="245" alt="Screenshot 2026-07-01 131127" src="https://github.com/user-attachments/assets/12dff8aa-c9a9-4b0d-b3d4-c6775cfd85b6" />

- ✅ Pagination for GET `/quotes`

<img width="1090" height="1025" alt="Screenshot 2026-07-01 130601" src="https://github.com/user-attachments/assets/1e14388a-db98-4bcf-bdd9-375e5f91c4e9" />

Example:

```text
GET /quotes?page=1&limit=5
```

---

# 📷 Screenshots

The repository includes screenshots demonstrating:

- Create Quote API

<img width="1092" height="1022" alt="Screenshot 2026-07-01 124213" src="https://github.com/user-attachments/assets/99cc1162-b8c8-4127-8b32-b1525c25691c" />

- Get All Quotes API

<img width="1100" height="1056" alt="Screenshot 2026-07-01 124310" src="https://github.com/user-attachments/assets/351fe0ea-75e0-4c9d-ac2c-9d634a3a625c" />

- Get Quote by ID API

<img width="1102" height="760" alt="Screenshot 2026-07-01 124342" src="https://github.com/user-attachments/assets/f2a83b3b-dbb8-4149-8c43-752c57e7362d" />

- Analyze Quote API

<img width="1092" height="877" alt="Screenshot 2026-07-01 124603" src="https://github.com/user-attachments/assets/35062d44-1cd2-4bd3-b4b2-cf84b520805f" />

- Update Status API

<img width="1087" height="762" alt="Screenshot 2026-07-01 124708" src="https://github.com/user-attachments/assets/e91f95a9-e998-41e9-a732-64320be32983" />

- Validation Errors

<img width="1096" height="617" alt="Screenshot 2026-07-01 125300" src="https://github.com/user-attachments/assets/002ac37a-bef2-488b-856e-49b57eac2723" />

- Pagination

<img width="1090" height="1025" alt="Screenshot 2026-07-01 130601" src="https://github.com/user-attachments/assets/f9b710cc-bb64-4356-816f-4f362eb48b81" />

---

# 📮 Postman Collection

The exported Postman collection is included in the repository for testing all endpoints.

---

# Thank You

Thank you for reviewing my submission. This project was developed as part of a Backend Developer Internship Assessment and demonstrates REST API development, database integration, layered architecture, validation, error handling, and FastAPI service integration using Node.js and TypeScript.
