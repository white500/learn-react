/*
 * @Author: yjl
 * @Date: 2021-01-25 21:19:59
 * @LastEditors: yjl
 * @LastEditTime: 2021-02-02 23:45:40
 * @Description: file content
 */
import React, {Component, Fragment} from 'react';
import './App.css';
import TodoListItem from './TodoListItem'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputVal: "",
      list: []
    }
    this.handleChage = this.handleChage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <Fragment>
        <div>
          {/* 这里是个注释 下面是个input */}
          <label htmlFor="insertArea">输入内容</label>
          <input id="insertArea" className="input" type="text" value={this.state.inputVal} onChange={this.handleChage}/>
          <button onClick={this.handleSubmit}>添加</button>
        </div>
        <ul>
          {
            this.getTodoItem()
          }
        </ul>
      </Fragment>
    )
  }

  getTodoItem() {
    return this.state.list.map((val,index)=>{
      return (
          <TodoListItem 
            key={index} 
            content={val} 
            currentIndex={index} 
            currentItemDelete={this.currentItemDelete.bind(this)}
          />
      )
    })
  }

  handleSubmit() {
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputVal],
      inputVal:''
    }))
  }

  handleChage(e) {
    const value = e.target.value;
    this.setState(() => ({
      inputVal: value
    }))
  }

  currentItemDelete(i) {
    // immutable 特性 不可变的  这个意思是说在修改react引用类型时 也要复制一份去操作 操作完再去setState 后面好做优化
    this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(i, 1);
      return {
        list
      }
    })
  }
}

export default App;
