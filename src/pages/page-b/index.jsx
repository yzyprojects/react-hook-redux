// import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { addNumberB, reduceNumberB } from './actions'
import { pageState } from '../../common/pageState'

function PageB() {
  const state = useSelector((state) => pageState(state))
  const dispatch = useDispatch()
  
  return (
    <div className="App">
      <div>pageB</div>
      <div>value:{state.count}</div>
      <button onClick={() => dispatch(addNumberB)}> addNumberB</button>
      <button onClick={() => dispatch(reduceNumberB) }> 异步 reduceNumberB</button>
    </div>
  );
}

export default PageB;
