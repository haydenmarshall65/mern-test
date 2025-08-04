import express from "express"

const healthRouter = express.Router();

healthRouter.get('/', async (req, res) => {
  res.status(200).send('Ok');
});

export default healthRouter;