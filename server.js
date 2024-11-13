const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// Menyajikan halaman pemeliharaan
app.use(express.static(path.join(__dirname, "public")));

// Mengarahkan semua permintaan ke status 503
app.get("*", (req, res) => {
  res.status(503).sendFile(path.join(__dirname, "public", "maintenance.html"));
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
