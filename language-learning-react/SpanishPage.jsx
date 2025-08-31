import Header from "./Header";
import { spanishData } from "./data";
import { useState } from 'react';


export default function SpanishPage() {

  const data = spanishData;
  const [revealedCards, setRevealedCards] = useState({});

  const toggleAnswer = (word) => {
      setRevealedCards(prevState => ({
        ...prevState,
        [word]: !prevState[word]
      }));
  }



  const cards = data.map(item => (
    <div className="card" key={item.word}>
      <div className="text-container">{
        revealedCards[item.word] ? 
        (<p lang="es" className="text">{item.meaning}</p>) :
        (<p lang="es" className="text">{item.word}</p>)
      }
      </div>
       <button onClick={() => toggleAnswer(item.word)} className="reveal-btn">{revealedCards[item.word] ? 'Go Back' : 'Reveal Answer'}</button>
    </div>
  ));

  return (
    <>
      <Header />
      <h2 className="page-title">Spanish Page</h2>
      <div className="cards-container">
        { cards }
      </div>
    </>
  )
}