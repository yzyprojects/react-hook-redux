import {combineReducers} from 'redux';

const moduleReduce = {};
const files = require.context('/src/pages', true, /reducer.js/);
const reg = /(.\/)*([^.]+).*/ig;
files.keys().forEach((f) => {
    const reducerName = f.replace(reg,"$2").replace('/', '');
    moduleReduce[reducerName] = files(f).reducer;
});
 const combineReducer = combineReducers(moduleReduce);
export default combineReducer;
