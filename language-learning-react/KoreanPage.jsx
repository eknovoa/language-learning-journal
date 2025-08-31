import Header from "./Header";
import { koreanData } from "./data";
import { useState } from 'react';

export default function KoreanPage() {

  const data = koreanData;
  const [revealedCards, setRevealedCards] = useState({});

  const toggleAnswer = (hangul) => {
      setRevealedCards(prevState => ({
        ...prevState,
        [hangul]: !prevState[hangul]
      }));
  }

  const cards = data.map(item => (
    <div className="card" key={item.hangul}>
      <div className="text-container">
        {revealedCards[item.hangul] ? (
          <p className="text-meaning">{item.meaning}</p>
        ) : (
          <>
          <p lang="ko" className="text-hangul">{item.hangul}</p>
          <p className="text-sound">{item.sound}</p>
        </>
        )}
      </div>
      <button onClick={() => toggleAnswer(item.hangul)} className="reveal-btn">{revealedCards[item.hangul] ? 'Go Back' : 'Reveal Answer'}</button>
    </div>
  ));


  return (
    <>
      <Header />
      <h2 className="page-title">Korean Page</h2>
      <div className="cards-container">
        { cards }
      </div>
    </>
  )
}