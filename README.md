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

## Possible Next Upgrades

* Refresh token system 🔁
* Role-based auth (Admin/User)
* Swagger docs 📄
* Soft delete todos
* Pagination + filtering
* Clean architecture (DDD style)
* Docker setup
