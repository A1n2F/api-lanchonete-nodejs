import { Router } from "express"
import { ProductController } from "@/controller/products-controller"

const productsRoutes = Router()
const productsController = new ProductController()

productsRoutes.get("/", productsController.index)
productsRoutes.post("/", productsController.create)

export { productsRoutes }