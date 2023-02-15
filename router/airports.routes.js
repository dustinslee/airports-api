import express from "express";
import airports from "../controllers/airports.controller";

const router = express.Router();

router.get("/:id?", async (req, res, next) => {
  try {
    const { id } = req.params;
    let data;

    if(id) {
      data = await airports.getOne(id);
    } else {
        data = await airports.getAll();
    }
    res.json(data);
 } catch (error) {
    next(error);
 }
});

router.post("/", async (req, res, next) => {
  try {
    const newAirport = req.body;
    const data = await airports.add(newAirport);
    res.json(data);
 } catch (error) {
    next(error);
 }
});

router.put("/:id?", async (req, res, next) => {
  try {
    const { id } = req.params;
    const updateAirport = req.body;
    const data = await airports.update(id, updateAirport);
    res.json(data);
 } catch (error) {
    next(error);
 }
});

router.delete("/:id?", async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await airports.remove(id);
    res.json(data);
 } catch (error) {
    next(error);
 }
});

export default router;