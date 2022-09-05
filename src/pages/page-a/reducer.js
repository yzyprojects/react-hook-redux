const reducerMap = new Map();
const defaultState = {
    count: 0
}

const addNumber =  function (state = defaultState, action) {
    const newState = {...state};
    newState.count += action.value;
    return newState;
}

const reduceNumber =  function (state = defaultState, action) {
    const newState = {...state};
    newState.count -= action.value;
    return newState;
}

reducerMap.set('addNumber', addNumber);
reducerMap.set('reduceNumber', reduceNumber);
export const reducer = (state = defaultState , action)=>{
    const newState = reducerMap.get(action.type || '')
    if (newState) {
      
       return  newState(state, action)
    } else {
        return state
    }
}