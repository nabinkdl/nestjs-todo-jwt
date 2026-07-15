
# 🚀 NestJS + Prisma Todo App with JWT Auth

A complete production-style **NestJS + Prisma Todo app with Auth (JWT)**.

---

## Tech Stack

* NestJS
* Prisma ORM
* PostgreSQL (or SQLite for quick start)
* JWT Auth
* bcrypt password hashing

---
<img width="1390" height="852" alt="Screenshot 2026-07-15 at 11 17 57 am" src="https://github.com/user-attachments/assets/7dbb2ef8-1063-44c2-9f29-86e7d6354c5e" />
<img width="1388" height="659" alt="Screenshot 2026-07-15 at 11 21 19 am" src="https://github.com/user-attachments/assets/391debca-87c1-4c26-8e11-5b4cf22a5801" />

## Project Structure

```
src/
 ├── auth/
 ├── users/
 ├── todos/
 ├── prisma/
 ├── common/
 ├── app.module.ts
 └── main.ts
```

---

## Setup

1. Install dependencies:
   ```
   npm install
   ```
2. Copy `.env.example` to `.env` and fill in your values:
   ```
   DATABASE_URL=postgresql://user:password@localhost:5432/todoapp
   JWT_SECRET=supersecretkey
   ```
3. Generate the Prisma client and run migrations:
   ```
   npx prisma generate
   npx prisma migrate dev
   ```
4. Start the app:
   ```
   npm run start:dev
   ```

---

## API Flow

### Auth

```
POST /auth/register
POST /auth/login → returns JWT
```

### Todos (Protected — requires Bearer token)

```
GET    /todos
POST   /todos
POST   /todos/:id/toggle
DELETE /todos/:id
```

---

## Mental Model (Important)

**Request Flow:**

```
Client
  ↓
Controller (@Body, @Req extracts data)
  ↓
DTO (shape validation layer - optional)
  ↓
Service (business logic)
  ↓
Prisma (DB query)
  ↓
Database
  ↓
Response returned safely
```

---


