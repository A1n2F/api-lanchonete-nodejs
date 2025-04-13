import { Request, Response, NextFunction } from "express"
import { z } from "zod"

export class ProductController {
    async index(request: Request, response: Response, next: NextFunction) {
        try {
            return response.json({ message: "ok!" })
        } catch (error) {
            next(error)
        }
    }

    async create(request: Request, response: Response, next: NextFunction) {
        try {
            const bodySchema = z.object({
                name: z.string().trim().min(4),
                price: z.number().gt(0)
            })

            const { name, price } = bodySchema.parse(request.body)

            return response.status(201).json({ name, price })
        } catch (error) {
            next(error)
        }
    }
}