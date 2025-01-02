import express from "express";
import cors from "cors";

const app = express();
const port = 3001;

app.use(cors());
app.get("/api/test", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
