import { useState } from "react";

const SERVER = "http://localhost:4000";

function App() {
  const [apiKey, setApiKey] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const [fans, setFans] = useState([]);
  const [selectedFan, setSelectedFan] = useState(null);

  async function login() {
    const res = await fetch(`${SERVER}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ apiKey, refreshToken })
    });

    if (res.ok) {
      fetchFans();
    } else {
      alert("Authentication failed");
    }
  }

  async function fetchFans() {
    const res = await fetch(`${SERVER}/fans?apiKey=${apiKey}`);
    const data = await res.json();
    setFans(data.devices || []);
  }

  async function controlFan(id, command) {
    await fetch(`${SERVER}/control`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        deviceId: id,
        command,
        apiKey
      })
    });

    fetchFans();
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Atomberg Fan Controller</h1>

      {fans.length === 0 ? (
        <>
          <input
            placeholder="API Key"
            onChange={(e) => setApiKey(e.target.value)}
          />
          <br />
          <input
            placeholder="Refresh Token"
            onChange={(e) => setRefreshToken(e.target.value)}
          />
          <br />
          <button onClick={login}>Login</button>
        </>
      ) : (
        <>
          <h2>Available Fans</h2>
          <ul>
            {fans.map((fan) => (
              <li
                key={fan.id}
                style={{ cursor: "pointer" }}
                onClick={() => setSelectedFan(fan)}
              >
                {fan.name}
              </li>
            ))}
          </ul>

          {selectedFan && (
            <>
              <h3>{selectedFan.name}</h3>
              <button onClick={() => controlFan(selectedFan.id, { power: true })}>
                Turn ON
              </button>
              <button onClick={() => controlFan(selectedFan.id, { power: false })}>
                Turn OFF
              </button>
              <button onClick={() => controlFan(selectedFan.id, { speed: 1 })}>
                Speed 1
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;
