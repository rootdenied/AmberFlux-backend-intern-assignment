import * as quoteRepository from "../repositories/quote.repository";
import * as fastApiService from "./fastapi.service";

export const createQuote = async (data: any) => {
  return await quoteRepository.createQuote(data);
};

export const getAllQuotes = async (
  page: number,
  limit: number
) => {
  return await quoteRepository.getAllQuotes(page, limit);
};

export const getQuoteById = async (id: string) => {
  return await quoteRepository.getQuoteById(id);
};

export const analyzeQuote = async (id: string) => {
  const quote = await quoteRepository.getQuoteById(id);

  if (!quote) {
    throw new Error("Quote not found");
  }

  const analysis = await fastApiService.analyzeQuote(id);
  await quoteRepository.saveAnalysis(id, analysis);
  return await quoteRepository.getQuoteById(id);
};

export const updateQuoteStatus = async (
  id: string,
  status: any
) => {
  const quote = await quoteRepository.getQuoteById(id);

  if (!quote) {
    throw new Error("Quote not found");
  }

  return await quoteRepository.updateQuoteStatus(id, status);
};