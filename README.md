<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>📬 Notification Service README</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      max-width: 900px;
      margin: 2rem auto;
      padding: 1rem;
      background-color: #f9f9f9;
      color: #333;
    }
    h1, h2, h3 {
      color: #2c3e50;
    }
    code {
      background: #eee;
      padding: 2px 6px;
      border-radius: 4px;
      font-family: monospace;
    }
    pre {
      background: #272822;
      color: #f8f8f2;
      padding: 1rem;
      overflow-x: auto;
      border-radius: 6px;
    }
    ul, ol {
      margin-left: 1.5rem;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 1rem;
    }
    th, td {
      border: 1px solid #ddd;
      padding: 0.6rem;
      text-align: left;
    }
    th {
      background-color: #f2f2f2;
    }
    .tip {
      color: #c0392b;
      font-style: italic;
    }
    a {
      color: #2980b9;
      text-decoration: none;
    }
  </style>
</head>
<body>

  <h1>📬 Notification Service</h1>

  <p>A basic notification service built with <strong>Node.js</strong>, <strong>Express</strong>, and <strong>MongoDB</strong> using <strong>Mongoose</strong>. This service allows:</p>
  <ul>
    <li>User registration, login, and logout</li>
    <li>Sending notifications to users</li>
    <li>Fetching notifications for a logged-in user</li>
  </ul>

  <h2>🔧 Tech Stack</h2>
  <ul>
    <li>Node.js</li>
    <li>Express.js</li>
    <li>MongoDB with Mongoose</li>
    <li>JWT for authentication</li>
    <li>Cookie-based sessions</li>
  </ul>

  <h2>📁 Project Structure</h2>
  <pre><code>backend/
├── controllers/
│   ├── user.controller.js
│   └── notification.controller.js
├── middlewares/
│   └── auth.middleware.js
├── models/
│   ├── user.model.js
│   └── notification.model.js
├── routes/
│   ├── user.routes.js
│   └── notification.routes.js
├── utils/
│   └── db.js
├── index.js
├── .env
└── package.json</code></pre>

  <h2>🚀 Setup Instructions</h2>
  <ol>
    <li>
      <strong>Clone the Repository</strong>
      <pre><code>git clone https://github.com/debsaikia03/pepsales-ai
cd backend</code></pre>
    </li>
    <li>
      <strong>Install Dependencies</strong>
      <pre><code>npm install</code></pre>
    </li>
    <li>
      <strong>Configure Environment Variables</strong>
      <p>Create a <code>.env</code> file in the root directory:</p>
      <pre><code>PORT=8000
MONGO_URI=your_mongo_db_uri
JWT_SECRET=your_jwt_secret</code></pre>
      <p class="tip">⚠️ Replace <code>your_jwt_secret</code> with a strong secret key.</p>
    </li>
    <li>
      <strong>Start MongoDB</strong>
      <pre><code># On Linux/macOS (if installed natively)
sudo systemctl start mongod

# Or with Homebrew (macOS)
brew services start mongodb-community</code></pre>
    </li>
    <li>
      <strong>Run the Server</strong>
      <pre><code>npm run dev</code></pre>
      <p>Your server will start on <a href="http://localhost:3000" target="_blank">http://localhost:3000</a></p>
    </li>
  </ol>

  <h2>📮 API Endpoints</h2>
  <table>
    <thead>
      <tr>
        <th>Method</th>
        <th>Endpoint</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>POST</td><td>/api/v1/users/register</td><td>Register a new user</td></tr>
      <tr><td>POST</td><td>/api/v1/users/login</td><td>Login and receive token</td></tr>
      <tr><td>GET</td><td>/api/v1/users/logout</td><td>Logout the user</td></tr>
      <tr><td>POST</td><td>/api/v1/notifications</td><td>Send a notification (Auth required)</td></tr>
      <tr><td>GET</td><td>/api/v1/users/:id/notifications</td><td>Get notifications for a user (Auth required)</td></tr>
    </tbody>
  </table>

  <h2>🔐 Authentication</h2>
  <ul>
    <li>Authentication is handled using <strong>JWT tokens stored in cookies</strong>.</li>
    <li>Only logged-in users can:
      <ul>
        <li>Send notifications</li>
        <li>Fetch their own notifications</li>
      </ul>
    </li>
  </ul>

  <h2>✅ Assumptions</h2>
  <ul>
    <li>Only authenticated users can send or view notifications.</li>
    <li>Users can only view <strong>their own</strong> notifications.</li>
    <li>JWT token is sent via cookies and verified using middleware.</li>
    <li>The app expects MongoDB to run on <code>localhost:27017</code>.</li>
  </ul>

  <h2>🧪 Testing</h2>
  <p>You can test the APIs using:</p>
  <ul>
    <li><a href="https://www.postman.com/" target="_blank">Postman</a></li>
    <li><a href="https://www.thunderclient.com/" target="_blank">Thunder Client</a> (VSCode Extension)</li>
  </ul>
  <p>Make sure to:</p>
  <ul>
    <li>Enable cookie handling</li>
    <li>Send headers like <code>Content-Type: application/json</code></li>
  </ul>

  <h2>🧹 Future Improvements</h2>
  <ul>
    <li>Add retry logic and background job queues (e.g., with BullMQ or RabbitMQ)</li>
    <li>Integrate email or SMS providers for notification delivery</li>
    <li>Implement role-based access control</li>
  </ul>

</body>
</html>
