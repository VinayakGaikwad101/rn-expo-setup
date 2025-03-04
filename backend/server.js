import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(bodyParser.json());

app.get("/api/data", (req, res) => {
  const data = {
    message: "API health check",
    success: true,
  };

  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
