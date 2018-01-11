import express from "express";
import products from "../controllers/productsController"

const router = express.Router();

// Route to get list of crypto currencies for drop down.
router.get("/", products.findAll);
router.get("/:id", products.findById);
router.post("/", products.create);
router.put("/:id", products.update);
router.delete("/:id", products.remove);

// Export routes for server.js to use.
export default router;
