import express from "express";

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.json({
    message: "okay",
  });
});

app.listen(PORT, (req, res) => {
  console.log(`connected to the port no ${PORT}`);
});
