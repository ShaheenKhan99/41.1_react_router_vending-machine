import { Link } from 'react-router-dom';
import Message from './Message';
import sodaImg from './Soda.png';
import './Soda.css'

const Soda = () => { 

  return (
    <div className="Soda">
      <img src={sodaImg} 
            alt="soda can" />
      <Message>
        <h1>Need some sugar?</h1>
        <h1>
          <Link to="/">Go Home</Link>
        </h1>
      </Message>
      <img src={sodaImg}
            alt="soda can" />
    </div>
  )
}

export default Soda;