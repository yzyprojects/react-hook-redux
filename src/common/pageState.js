import { pathName } from './pathName'
// 返回当前页面模块的store
export const pageState = (state) => state[`${pathName}reducer`]