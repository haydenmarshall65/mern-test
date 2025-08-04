import express from "express";
import cors from "cors";
import records from "./routes/record.js";
import healthcheck from "./routes/health.js"

const PORT = process.env.APP_PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/record", records);

app.use('/health', healthcheck)

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});