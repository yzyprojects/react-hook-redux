import { addNumberType, reduceNumberType } from "./action-type"
export const addNumber = {
    type: addNumberType,
    value: 100
}

export const reduceNumber = (dispatch) => {
    setTimeout(function () {
        dispatch({type: reduceNumberType, value: 1000 })
    }, 5000)
}