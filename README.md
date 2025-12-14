🌀 Atomberg Smart Fan Controller

A web app to authenticate with Atomberg IoT Developer APIs, list a user’s smart fans, and control them in real time.

Built as an assignment to demonstrate API integration, React UI, and production-ready structure.

🚀 Features

🔐 Login using API Key + Refresh Token

🔄 Automatic access-token generation

🪭 List all Atomberg smart fans linked to the account

🎛️ Fan controls:

⚡ Power ON / OFF

🌬️ Speed control (1–6)

🌙 Sleep mode

🚀 Boost mode

⏱️ Timer

💡 Light toggle (if supported)

📱 Responsive React UI

🧠 Clean error & loading handling

🛠️ Tech Stack

Frontend: React, Fetch API, Tailwind CSS

Backend: Node.js, Express

Icons: Lucide React

📁 Project Structure
atomberg-controller/
├── server/
│   ├── package.json
│   └── index.js
└── client/
    ├── package.json
    ├── public/
    │   └── index.html
    └── src/
        ├── index.js
        └── App.js

▶️ How to Run Locally
1️⃣ Clone repo
git clone https://github.com/YOUR_USERNAME/atomberg-controller.git
cd atomberg-controller

2️⃣ Start backend
cd server
npm install
npm start

3️⃣ Start frontend
cd ../client
npm install
npm start


📍 App runs at: http://localhost:3000

🔑 Authentication Flow

User enters API Key & Refresh Token

Backend fetches access token

Access token is used for:

📡 Fetching devices

🎮 Controlling fans

Token refresh handled automatically

🔒 Credentials are not exposed in the browser.

🧪 Test Family (Optional)

Join demo family:

Name: App Demonstration

Code: FBXBWC

🔗 https://app.atomberg-iot.com?code=FBXBWC&name=App%20Demonstration

(Code valid for 15 minutes)

✅ Assignment Requirements Covered

✔ Ask for API key & refresh token
✔ Show list of user’s fans
✔ Provide fan control options
✔ Clean, production-ready structure

📌 Notes

Feature availability depends on fan model

Designed for demo & evaluation purposes

Ready for deployment on Vercel / Netlify / Render

