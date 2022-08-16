import classes from './NoQuotesFound.module.css';
import { Link, useHistory } from 'react-router-dom';

const NoQuotesFound = () => {
  const history = useHistory();
  const clickAddQuoteHanlder = ( ) =>{
    history.push("/new-quote");
  };
  return (
    <div className={classes.noquotes}>
      <p>No quotes found!</p>
      {/* <a onClick={clickAddQuoteHanlder} className='btn'>
        Add a Quote
      </a> */}
      <Link className='btn' to={`/new-quote`}>
        Add new Quote
      </Link>
    </div>
  );
};

export default NoQuotesFound;
