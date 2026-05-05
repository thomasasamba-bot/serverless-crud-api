# 🚀 Serverless CRUD API (Production-Ready)

A fully production-ready serverless backend built with AWS SAM, Lambda, API Gateway, and DynamoDB.

## 🔥 Features

* CRUD operations (Items)
* JWT Authentication (Signup/Login)
* Protected routes (middleware-style)
* DynamoDB (NoSQL)
* Infrastructure as Code (AWS SAM)
* CI/CD with GitHub Actions

## 🧱 Architecture

* AWS Lambda
* API Gateway
* DynamoDB
* IAM Roles
* CloudWatch Logging

## 📦 API Endpoints

### Auth

POST /signup
POST /login

### Items

GET /items
POST /items (Protected)
PUT /items/{id} (Protected)
DELETE /items/{id} (Protected)

## 🔐 Authentication

Uses JWT tokens:

```
Authorization: Bearer <token>
```

## 🚀 Deployment

```bash
sam build
sam deploy --guided
```

## 🧪 Local Testing

```bash
sam local start-api
```

## 📊 Example

```bash
curl -X POST /items \
-H "Authorization: Bearer TOKEN" \
-d '{"name":"Item"}'
```

## 🧠 Skills Demonstrated

* Serverless Architecture
* AWS Infrastructure
* Secure API Design
* DevOps CI/CD
* Authentication & Authorization

## 📌 Author

Thomas Asamba
