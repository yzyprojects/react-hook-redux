// import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { reduceNumber, addNumber } from './actions' 
import { pageState } from '../../common/pageState'


function PageA() {
  const state = useSelector((state) => pageState(state))
  const dispatch = useDispatch()

  return (
    <div className="App">
      <div>pageA</div>
      <div>value:{state.count || 0}</div>
      <button onClick={() => dispatch(addNumber)}> addNumber</button>
      <button onClick={() => reduceNumber(dispatch) }>reduceNumber</button>
    </div>
  );
}

export default PageA;
