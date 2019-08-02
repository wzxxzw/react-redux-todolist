import React, {Component} from 'react';
import 'antd/dist/antd.css';
import {Input , Button, List  } from 'antd';
import store from './store/index';
import {changeInputAction , addItemAction ,deleteItemAction} from './store/actionCreatores'
class TodoList extends Component {
    constructor(props) {
        super(props)
         //关键代码-----------start
        this.state=store.getState();
        //关键代码-----------end
        this.changeInputValue = this.changeInputValue.bind(this)
        //关键代码-----------start
        this.storeChange = this.storeChange.bind(this) //转变this指向
        store.subscribe(this.storeChange) //订阅Redux的状态
        //关键代码-----------end
        this.clickBtn = this.clickBtn.bind(this)
    }
    render() {
      return (
          <div style={{margin:'10px'}}>
              <div>
                  <Input 
                    placeholder="请输入内容" 
                    style={{width: '250px'}}
                    onChange={this.changeInputValue}/>
                  <Button 
                  type="primary"
                  onClick={this.clickBtn}
                  >增加</Button>
              </div>
              <div style={{margin:'10px',width:'300px'}}>
                <List 
                   bordered
                   dataSource={this.state.list}
                   renderItem={(item, index)=>(<List.Item onClick={this.deleteItem.bind(this, index)}>{item}</List.Item>)}
                />
              </div>
          </div>
      )
    }
    changeInputValue(e){
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }
    storeChange(){
        this.setState(store.getState())
    }
    clickBtn(){
        const action = addItemAction()
        store.dispatch(action)
    }
    deleteItem(index) {
        const action = deleteItemAction(index)
        store.dispatch(action)
    }
}

export default TodoList;