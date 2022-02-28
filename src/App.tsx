import React, { Dispatch } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { CountActions } from './redux/actions/countActions';
import { NameActions } from './redux/actions/nameActions';
import { AppState } from './redux/reducers/rootReducer';

function App() {
  const {count} = useSelector((state: AppState) => state.count);
  const {name} = useSelector((state: AppState) => state.name)
  const countDispatch = useDispatch<Dispatch<CountActions>>();
  const nameDispatch = useDispatch<Dispatch<NameActions>>();

  const handleIncrement = () => {
    countDispatch({type: 'INCREMENT'})
  }

  const handleDecrement = () => {
    countDispatch({type: 'DECREMENT'})
  }

  const handleSetName = (e: React.ChangeEvent<HTMLInputElement>) => {
    nameDispatch({type: 'SET_NAME', payload: e.target.value})
  }



  return (
    <div className="App">
      <div>
        <button onClick={handleIncrement}>+</button>
        {count}
        <button onClick={handleDecrement}>-</button>
      </div>
      <div>
        <input type="text" onChange={handleSetName} />
        {name}
      </div>
    </div>
  );
}

export default App;
