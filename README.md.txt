# 🎓 AI Student Support System

An intelligent system designed to simplify student interactions by providing automated query responses, academic support, and smarter campus communication.

---

## 🚀 Features

- AI-powered student query resolver  
- Course support and academic assistance  
- Smart chatbot for campus-related FAQs  
- User-friendly interface  
- Scalable Node.js + Express backend  
- MongoDB database integration

---

## 🏗️ System Architecture

```mermaid
flowchart TD
    User -->|Sends Query| Frontend
    Frontend --> API
    API --> AIEngine
    API --> Database
    AIEngine -->|Response| Frontend
