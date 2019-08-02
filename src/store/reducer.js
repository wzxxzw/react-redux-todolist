import {CHANGE_INPUT , ADD_ITEM,DELETE_ITEM}  from './actionTypes'

const defaultState = {
    inputValue: 'write something',
    list: [
        '早上4点起床，锻炼身体',
        '中午下班游泳一小时'
    ]
} // 默认数据
export default (state = defaultState, action) => {  //就是一个方法函数
    if(action.type === CHANGE_INPUT)  {
        let newState = JSON.parse(JSON.stringify(state)) // 深度拷贝
        console.log(state);
        console.log(newState);
        newState.inputValue = action.value 
        console.log(newState)
        return newState;
    }
    //关键代码------------------start----------
    //state值只能传递，不能使用
    if(action.type === ADD_ITEM) { // 根据type的值，编写业务逻辑
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue) // push新的内容到列表中去
        newState.inputValue =''
        return newState
    }
    if(action.type === DELETE_ITEM) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1)
        return newState
    }
    return state
}  