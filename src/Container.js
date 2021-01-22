import React, { useState } from "react";
import Button from "./Button";

export default function Container() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  function handleButtonClick() {
    setIsLoading(true);
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const randomQuote = Math.floor(Math.random() * 102 + 1);
        setQuote(data.quotes[randomQuote].quote);
        setAuthor(data.quotes[randomQuote].author);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <div className="content__container">
      <div className="main__title">
        <h1>Psit! Over there! Feeling Unispired? &#128078;</h1>
      </div>
      <div className="btn__container">
        <Button onClickChange={handleButtonClick} />
      </div>
      <div className="quote__container">
        <h3 className="quote">"{quote}"</h3>
        <h4 className="author">- {author}</h4>
      </div>
    </div>
  );
}
