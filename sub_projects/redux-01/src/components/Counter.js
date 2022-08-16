import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const counter = useSelector(state=> state.counter)
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {};
  function Increment(){
    dispatch({type:'increment'})
  }
  function Deccrement(){
    dispatch({type:'deccrement'})
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={Increment}>Increment</button>
        <button onClick={Deccrement}>Deccrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
