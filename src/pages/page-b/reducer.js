const reducerMap = new Map();
const defaultState = {
    count: 0
}

const addNumberB =  function (state = defaultState, action) {
    const newState = {...state};
    newState.count += action.value;
    return newState;
}

const reduceNumberB =  function (state = defaultState, action) {
    const newState = {...state};
    newState.count -= action.value;
    return newState;
}

reducerMap.set('addNumberB', addNumberB);
reducerMap.set('reduceNumberB', reduceNumberB);

export const reducer = (state = defaultState , action)=>{
    const newState = reducerMap.get(action.type || '')
    if (newState) {
       return  newState(state, action)
    } else {
        return state
    }
}