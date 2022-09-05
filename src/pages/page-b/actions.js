import { addNumberBType, reduceNumberBType } from "./action-type"
export const addNumberB = {
    type: addNumberBType,
    value: 100
}

export const reduceNumberB = (dispatch) => {
    setTimeout(function () {
        dispatch({type: reduceNumberBType, value: 100 })
    }, 5000)
}
