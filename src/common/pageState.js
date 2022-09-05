import { pathName } from './pathName'
// 默认页面地址
const defaultPathName = 'page-a';
// 根据页面地址获取对应的store
export const pageState = (state, defaultPagePath) => state[`${pathName || defaultPathName}reducer`]