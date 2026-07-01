export const analyzeQuote = async (quoteId: string) => {
  return {
    risk: "Medium",
    missing_items: "Structural drawings,Load requirements",
    confidence: 91,
  };
};