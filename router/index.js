import express from "express";
import airportRouter from "./airports.routes"

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("working");
});

router.use("/airports", airportRouter);

export default router;
