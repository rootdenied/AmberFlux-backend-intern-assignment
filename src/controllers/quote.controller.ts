import { Request, Response } from "express";
import * as quoteService from "../services/quote.service";
import {
    createQuoteSchema,
    updateStatusSchema,
} from "../validations/quote.validation";

export const createQuote = async (req: Request, res: Response) => {
    try {
        const validatedData = createQuoteSchema.parse(req.body);
        const quote = await quoteService.createQuote(validatedData);

        res.status(201).json(quote);
    } catch (error: any) {
        if (error.name === "ZodError") {
            return res.status(400).json({
                errors: error.errors,
            });
        }

        res.status(500).json({
            message: "Something went wrong",
        });
    }
};

export const getAllQuotes = async (req: Request, res: Response) => {
    try {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;

        const quotes = await quoteService.getAllQuotes(page, limit);

        res.status(200).json(quotes);
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong",
        });
    }
};

export const getQuoteById = async (req: Request, res: Response) => {
    try {
        const quote = await quoteService.getQuoteById(req.params.id);

        if (!quote) {
            return res.status(404).json({
                message: "Quote not found",
            });
        }

        res.status(200).json(quote);
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong",
        });
    }
};

export const analyzeQuote = async (req: Request, res: Response) => {
    try {
        const result = await quoteService.analyzeQuote(req.params.id);

        res.status(200).json(result);
    } catch (error: any) {
        if (error.message === "Quote not found") {
            return res.status(404).json({
                message: error.message,
            });
        }

        res.status(500).json({
            message: "Something went wrong",
        });
    }
};

export const updateQuoteStatus = async (
    req: Request,
    res: Response
) => {
    try {
        const validated = updateStatusSchema.parse(req.body);
        const quote = await quoteService.updateQuoteStatus(
            req.params.id,
            validated.status
        );


        res.status(200).json(quote);
    } catch (error: any) {
        if (error.name === "ZodError") {
            return res.status(400).json({
                errors: error.errors,
            });
        }

        if (error.message === "Quote not found") {
            return res.status(404).json({
                message: error.message,
            });
        }

        res.status(500).json({
            message: "Something went wrong",
        });
    }
};