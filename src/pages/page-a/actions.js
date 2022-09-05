import { addNumberType, reduceNumberType } from "./action-type"
export const addNumber = {
    type: addNumberType,
    value: 100
}

export const reduceNumber = (dispatch) =>   dispatch({type: reduceNumberType, value: 100 })