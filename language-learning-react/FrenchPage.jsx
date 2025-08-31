import Header from "./Header";
import { frenchData } from "./data";
import { useState } from 'react';

export default function FrenchPage() {

  const data = frenchData;
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
        (<p lang="fr" className="text">{item.meaning}</p>) :
        (<p lang="fr" className="text">{item.word}</p>)
      }
      </div>
       <button onClick={() => toggleAnswer(item.word)} className="reveal-btn">{revealedCards[item.word] ? 'Go Back' : 'Reveal Answer'}</button>
    </div>
  ));

  return (
    <>
      <Header />
      <h2 className="page-title">French Page</h2>
      <div className="cards-container">
        { cards }
      </div>
    </>
  )
}