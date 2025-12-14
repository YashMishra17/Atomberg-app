import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const API_BASE = "https://api.developer.atomberg-iot.com/v1";

let accessToken = "";

/**
 * Step 1: Exchange refresh token for access token
 */
app.post("/login", async (req, res) => {
  const { apiKey, refreshToken } = req.body;

  try {
    const response = await fetch(`${API_BASE}/auth/refresh-token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey
      },
      body: JSON.stringify({
        refresh_token: refreshToken
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(400).json(data);
    }

    accessToken = data.access_token;
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Authentication failed" });
  }
});

/**
 * Step 2: Fetch list of fans
 */
app.get("/fans", async (req, res) => {
  const { apiKey } = req.query;

  if (!accessToken) {
    return res.status(401).json({ error: "Not authenticated" });
  }

  const response = await fetch(`${API_BASE}/devices`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "x-api-key": apiKey
    }
  });

  const data = await response.json();
  res.json(data);
});

/**
 * Step 3: Control a fan
 */
app.post("/control", async (req, res) => {
  const { deviceId, command, apiKey } = req.body;

  const response = await fetch(
    `${API_BASE}/devices/${deviceId}/control`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "x-api-key": apiKey,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(command)
    }
  );

  const data = await response.json();
  res.json(data);
});

app.listen(4000, () => {
  console.log("Backend running on http://localhost:4000");
});
