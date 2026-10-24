# Product Management API

> **Lab Task 1**

| Field | Details |
|-------|---------|
| **Name** | Wamia Fairooz Rafa |
| **ID** | 23-54267-3 |
| **Section** | E |

---

## Tech Stack

- **Framework:** NestJS (Node.js)
- **Database:** PostgreSQL
- **ORM:** TypeORM (with `synchronize: true` for auto-migration in development)
- **Language:** TypeScript
- **Validation:** class-validator + class-transformer

---

## Prerequisites

- Node.js v18+
- npm v9+
- PostgreSQL 14+ running locally

---

## Database Setup

1. Start PostgreSQL and open `psql` (or any GUI like pgAdmin / DBeaver).
2. Create the database:
   ```sql
   CREATE DATABASE product_management;
   ```
3. Make sure your PostgreSQL user has full privileges on that database.

---

## Installation & Running

```bash
# 1. Clone the repo and navigate into the project
git clone <your-repo-url>
cd Mid/Lab\ task\ 1/product-management-api

# 2. Install dependencies
npm install

# 3. Copy the sample env file and fill in your credentials
cp .env.example .env
# Edit .env with your DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME

# 4. Start the app in development mode (auto-restarts on change)
npm run start:dev

# 5. The API will be available at:
#    http://localhost:3000
```

> **Note on migrations:** TypeORM `synchronize: true` is enabled in development mode.  
> This automatically creates / alters tables to match your entities whenever the app starts — no manual migration step needed.

---

## Environment Variables

Copy `.env.example` to `.env` and set:

| Variable | Description | Default |
|----------|-------------|---------|
| `DB_HOST` | PostgreSQL host | `localhost` |
| `DB_PORT` | PostgreSQL port | `5432` |
| `DB_USERNAME` | Database user | `postgres` |
| `DB_PASSWORD` | Database password | *(your password)* |
| `DB_NAME` | Database name | `product_management` |
| `PORT` | App port | `3000` |
| `NODE_ENV` | Environment | `development` |

---

## API Endpoints

### Products — `/products`

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/products` | Create a new product |
| `GET` | `/products` | Get all products |
| `GET` | `/products/:id` | Get a product by ID |
| `PATCH` | `/products/:id` | Update a product by ID |
| `DELETE` | `/products/:id` | Delete a product by ID |

**Product fields:** `name` (string), `category` (string), `price` (number), `quantity` (integer)

#### Example — Create Product
```json
POST /products
{
  "name": "Wireless Mouse",
  "category": "Electronics",
  "price": 29.99,
  "quantity": 150
}
```

---

### Employees — `/employees`

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/employees` | Create a new employee |
| `GET` | `/employees` | Get all employees |
| `GET` | `/employees/:id` | Get an employee by ID |
| `PATCH` | `/employees/:id` | Update an employee by ID |
| `DELETE` | `/employees/:id` | Delete an employee by ID |

**Employee fields:** `name` (string), `email` (string), `phone` (string), `password` (string, min 6 chars), `age` (integer, 18–100), `yearsOfWorking` (integer)

#### Example — Create Employee
```json
POST /employees
{
  "name": "Jane Doe",
  "email": "jane.doe@example.com",
  "phone": "01712345678",
  "password": "secret123",
  "age": 30,
  "yearsOfWorking": 5
}
```

---

## Project Structure

```
src/
├── app.module.ts               # Root module (TypeORM + ConfigModule)
├── main.ts                     # Bootstrap + ValidationPipe
├── products/
│   ├── dto/
│   │   ├── create-product.dto.ts
│   │   └── update-product.dto.ts
│   ├── product.entity.ts
│   ├── products.controller.ts
│   ├── products.module.ts
│   └── products.service.ts
└── employees/
    ├── dto/
    │   ├── create-employee.dto.ts
    │   └── update-employee.dto.ts
    ├── employee.entity.ts
    ├── employees.controller.ts
    ├── employees.module.ts
    └── employees.service.ts

screenshots/
├── 01-create.png
├── 02-get-all.png
├── 03-get-by-id.png
├── 04-update.png
├── 05-confirm-update.png
├── 06-delete.png
└── 07-confirm-delete.png
```

---

## Postman Screenshots

| File | Evidence |
|------|---------|
| `01-create.png` | POST request body + saved product response |
| `02-get-all.png` | GET response with at least two products |
| `03-get-by-id.png` | GET response for one product ID |
| `04-update.png` | PATCH request body + success response |
| `05-confirm-update.png` | GET by ID showing changed values |
| `06-delete.png` | DELETE request + success response |
| `07-confirm-delete.png` | GET all showing deleted product is gone |
