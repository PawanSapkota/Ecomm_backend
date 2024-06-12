import { NextFunction, Request, Response } from "express";
import { z } from "zod";

const saveProductValidationSchema = z.object({
    product_name: z.string({ required_error: "Product name is required" }).min(1),
    original_price: z.string({ required_error: "Original price is required" }),
    sale_price: z.string({ required_error: "Sale price is required" }),
    product_description: z.string({ required_error: "Product description is required" }),
    image_filename: z.string({ required_error: "Image is required" }),
});

type ProductValidation = z.infer<typeof saveProductValidationSchema>;

interface TypedRequest<T> extends Request {
    body: T;
}

export const saveProductValidation = async (req: TypedRequest<ProductValidation>, res: Response, next: NextFunction) => {
    try {
        await saveProductValidationSchema.parseAsync(req.body);
        return next();
    } catch (error: any) {
        if (error instanceof z.ZodError) {
            const firstError = error.errors[0];
            return res.status(400).json({ error: firstError.message });
        }
        return res.status(500).json({ error: 'Internal server error' });
    }
};
