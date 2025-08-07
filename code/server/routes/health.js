import express from "express"

const healthRouter = express.Router();

healthRouter.get('/', async (req, res) => {
  res.status(200).send({"ok": 1});
});

export default healthRouter;