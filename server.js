const express = require("express");
const app = express();

app.get("/", (req, res) => {
  // Konten HTML dimasukkan ke dalam string multi-line
  const htmlContent = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Driver Dashboard</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 50px;
        }
        h1 {
            color: #28a745;
        }
        .button {
            display: inline-block;
            background-color: #28a745;
            color: #fff;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <h1>Welcome to Driver Dashboard</h1>
    <p>You are logged in as a driver.</p>
    <a href="#">View Assigned Orders</a>
    <a href="#" class="button">Mark as Completed</a>
</body>
</html>
  `;

  // Mengirimkan konten HTML sebagai respons
  res.send(htmlContent);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}...`);
});
