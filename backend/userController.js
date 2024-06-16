const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

// Import routes
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
  console.log("Listening");
});
