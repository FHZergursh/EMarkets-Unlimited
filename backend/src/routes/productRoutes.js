import express from 'express';
import { addProduct, deleteProduct, getAllProducts, getProduct, updateProduct } from '../controllers/productController.js';

const productRouter = express.Router();

productRouter.post("/", addProduct)
productRouter.get("/", getAllProducts)
productRouter.get("/:productid", getProduct)
productRouter.put("/:productid", updateProduct)
productRouter.delete("/:productid", deleteProduct)


export default productRouter