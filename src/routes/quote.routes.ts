import { Router } from "express";
import { 
    createQuote,  
    getAllQuotes,
    getQuoteById,
    analyzeQuote,
    updateQuoteStatus
 } from "../controllers/quote.controller";


const router = Router();

router.post("/", createQuote);

router.get("/", getAllQuotes);

router.get("/:id", getQuoteById);

router.post("/:id/analyze", analyzeQuote);

router.patch("/:id/status", updateQuoteStatus);

export default router;