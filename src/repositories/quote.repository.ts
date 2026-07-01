import prisma from "../utils/prisma";

export const createQuote = async (data: any) => {
  return prisma.quoteRequest.create({
    data,
  });
};

export const getAllQuotes = async (
  page: number,
  limit: number
) => {
  return prisma.quoteRequest.findMany({
    skip: (page - 1) * limit,
    take: limit,
  });
};

export const getQuoteById = async (id: string) => {
  return prisma.quoteRequest.findUnique({
    where: { id },
    include: {
      analysis: true,
    },
  });
};

export const saveAnalysis = async (
  quoteId: string,
  data: {
    risk: string;
    confidence: number;
    missing_items: string;
  }
) => {
  return prisma.analysisResult.create({
    data: {
      quote_id: quoteId,
      risk: data.risk,
      confidence: data.confidence,
      missing_items: data.missing_items,
    },
  });
};

export const updateQuoteStatus = async (
  id: string,
  status: any
) => {
  return prisma.quoteRequest.update({
    where: { id },
    data: {
      status,
    },
  });
};