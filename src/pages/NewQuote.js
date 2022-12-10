import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  const addQuoteHandler = (quoteaData) => {
    console.log(quoteaData);
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
