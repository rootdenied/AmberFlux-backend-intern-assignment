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

<img width="818" height="245" alt="Screenshot 2026-07-01 131127" src="https://github.com/user-attachments/assets/6061cd28-01ba-4ea0-aebe-c2aa7ddf192d" />

- ✅ Pagination for GET `/quotes`

<img width="1090" height="1025" alt="Screenshot 2026-07-01 130601" src="https://github.com/user-attachments/assets/7ef09f14-6cc7-4acd-a277-080fc7cc50af" />

Example:

```text
GET /quotes?page=1&limit=5
```

---

# 📷 Screenshots

The repository includes screenshots demonstrating:

- Create Quote API

<img width="1092" height="1022" alt="Screenshot 2026-07-01 124213" src="https://github.com/user-attachments/assets/59afac41-61f3-4d8f-af1f-5794a704e534" />

- Get All Quotes API

<img width="1100" height="1056" alt="Screenshot 2026-07-01 124310" src="https://github.com/user-attachments/assets/fad1b0bb-e4a7-4253-a030-6fc55b66b805" />

- Get Quote by ID API

<img width="1102" height="760" alt="Screenshot 2026-07-01 124342" src="https://github.com/user-attachments/assets/a11b44a7-8b81-4f99-8d4e-2e6de536dba3" />

- Analyze Quote API

<img width="1092" height="877" alt="Screenshot 2026-07-01 124603" src="https://github.com/user-attachments/assets/cca54673-c72d-4d25-92a5-9c5df27f8a45" />

- Update Status API

<img width="1087" height="762" alt="Screenshot 2026-07-01 124708" src="https://github.com/user-attachments/assets/c259eda4-46a0-4362-8f9b-92d6a6eb23c3" />

- Validation Errors

<img width="1096" height="617" alt="Screenshot 2026-07-01 125300" src="https://github.com/user-attachments/assets/8fe1cd37-d79a-4e3e-8a9e-7829d3ac8b6a" />

- Pagination

<img width="1090" height="1025" alt="Screenshot 2026-07-01 130601" src="https://github.com/user-attachments/assets/d7f3cc7b-645a-490c-ba17-6bc1a539921c" />

---

# 📮 Postman Collection

The exported Postman collection is included in the repository for testing all endpoints.

---

# Thank You

Thank you for reviewing my submission. This project was developed as part of a Backend Developer Internship Assessment and demonstrates REST API development, database integration, layered architecture, validation, error handling, and FastAPI service integration using Node.js and TypeScript.
