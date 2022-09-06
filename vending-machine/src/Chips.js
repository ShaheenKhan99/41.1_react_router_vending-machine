import { useState } from 'react';
import { Link } from 'react-router-dom';
import chipsImg from './Chips.png';
import Message from './Message';
import './Chips.css'

const Chips = () => {
  const [bags, setBags] = useState([]);

  const handleClick = () => {
    const x = window.innerWidth * Math.random();
    const y = window.innerWidth * Math.random();

    setBags((prevBags) => [...prevBags, { x, y }]);
  }

  const b = bags.map((bag, i) => (
    <img key={i}
         src={chipsImg}
         className="bag"
         style={{ top: `${bag.y}px`, left: `${bag.x}px` }}
         alt="bag of chips" />
  ));

  return (
    <div className="Chips">
      <Message>
        <h1>Bags eaten: {bags.length}</h1>
          <button onClick={handleClick}>Get Chips</button>
          <h1>
            <Link to="/">Go Back</Link>
        </h1>
      </Message>
      {b}
    </div>
  )
}

export default Chips;