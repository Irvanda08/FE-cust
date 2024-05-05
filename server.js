const express = require("express");
const app = express();

app.get("/", (req, res) => {
  // Konten HTML dimasukkan ke dalam string multi-line
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{{ title }}</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 50px;
          }
        </style>
      </head>
      <body>
        <h1>Welcome to the Customer Page</h1>
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
