Atomberg Smart Fan Controller

A web application to authenticate with Atomberg IoT Developer APIs, list a user’s smart fans, and control them in real time.

This project was built as an assignment to demonstrate API integration, frontend architecture, and production readiness.

Features

Secure authentication using API Key + Refresh Token

Automatic access token generation and refresh

List all fans linked to the user’s Atomberg account

Control fan features:

Power ON / OFF

Speed control (levels 1–6)

Modes (Sleep / Boost)

Timer

Light toggle (if supported by device)

Responsive React UI

Clean separation of frontend and backend

Ready for deployment

Tech Stack
Frontend

React (Create React App)

Fetch API

Tailwind CSS (utility-first styling)

Lucide Icons

Backend

Node.js

Express

Acts as a secure proxy to Atomberg APIs (prevents exposing API keys in browser)

Project Structure
atomberg-controller/
│
├── server/
│   ├── package.json
│   └── index.js
│
└── client/
    ├── package.json
    ├── public/
    │   └── index.html
    └── src/
        ├── index.js
        └── App.js

Prerequisites

Node.js ≥ 18

npm ≥ 9

Atomberg Developer Account

Atomberg API Key & Refresh Token
👉 https://developer.atomberg-iot.com/

Setup Instructions (Local)
1. Clone repository
git clone https://github.com/YOUR_USERNAME/atomberg-controller.git
cd atomberg-controller

2. Install backend dependencies
cd server
npm install

3. Install frontend dependencies
cd ../client
npm install

4. Start backend server

From server directory:

npm start


Server runs on:

http://localhost:5000

5. Start frontend

From client directory:

npm start


Frontend runs on:

http://localhost:3000

How Authentication Works

User enters:

API Key

Refresh Token

Backend exchanges refresh token for access token

Access token is used for:

Fetching device list

Sending control commands

Token refresh is handled automatically on expiry

This avoids exposing sensitive credentials in the browser.

Supported API Endpoints (Used)

POST /auth/token

GET /devices

POST /devices/{deviceId}/control

All endpoints are accessed via backend proxy.

Device Control Capabilities

Depending on device model:

Power control

Speed control (1–6)

Sleep mode

Boost mode

Timer (minutes)

Light toggle

Unsupported commands are safely ignored by API.

Dummy Family for Testing

You can join the test family if needed:

Family Name: App Demonstration
Join Code: FBXBWC
Link:
https://app.atomberg-iot.com?code=FBXBWC&name=App%20Demonstration

(Valid for 15 minutes)

Production Readiness Notes

What is already handled:

Token refresh

Error handling

Clean UI states (loading / error / success)

Environment-ready structure

What should be improved for real production:

Move secrets to .env

Add HTTPS

Add rate limiting

Add logging (Winston / Pino)

Add role-based access (if multi-user)

Known Limitations

No persistent backend storage (stateless)

Device feature availability depends on fan model

UI assumes online connectivity
