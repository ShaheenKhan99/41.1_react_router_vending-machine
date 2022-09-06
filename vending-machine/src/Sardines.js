import { Link } from 'react-router-dom';
import Message from './Message';
import './Sardines.css';

const Sardines = () => {
  
  return (
    <div className="Sardines">
      <Message>
        <h1>Need some sardines?</h1>
        <h1>You don't eat the sardines, they eat you!</h1>
        <h1>
          <Link to='/'>Go Home</Link>
        </h1>
      </Message>
    </div>
  );
}

export default Sardines;