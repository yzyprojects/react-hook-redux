import {combineReducers} from 'redux';

const moduleReduce = {};
// 利用webpack require.context api 获取每个文件下的reducer文件 
const files = require.context('/src/pages', true, /reducer.js/);
const reg = /(.\/)*([^.]+).*/ig;
files.keys().forEach((f) => {
    const reducerName = f.replace(reg,"$2").replace('/', '');
    // 以当前reducer文件地址为key存入moduleReduce对象中
    moduleReduce[reducerName] = files(f).reducer;
});
// 将多个reucer 合并为一个reducer
const combineReducer = combineReducers(moduleReduce);
export default combineReducer;
