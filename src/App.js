import React from 'react';
import './App.css';
import Input from './components/Input/Input'
import List from './components/List/List';



class Todolist extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      inputValue:'',
      list:['aa','bb','cc'],
      mod:'',
    }
  }

  handleInputChange(inputValue) {
    this.setState({
      inputValue:inputValue,
    })
  }

  handleButtonSubmit() {
    this.setState({
      list:[...this.state.list,this.state.inputValue],
      inputValue:''
    })
  }

  componentDidUpdate() {
    console.log(this.state.list)
  }
  

  handleClickDel(index) {
    const list = this.state.list;
    list.splice(index,1);
    this.setState({
      list: list,
    })
  }


  inputValueChange(valueChange) {
    const list = this.state.list;
    const index = valueChange.index
    list[index] = valueChange.inputValue;
    this.setState({
      list: list,
    })
  }

  handleButtonSearch() {
    const inputValue = this.state.inputValue;
    const list = this.state.list;
    let arr = [];
    list.forEach((item)=>{
      if(item === inputValue){
        arr.push(item)
      }
    })
    this.setState({
      list: arr
    })
  }

  render() {
    return (
      <div className="App">
        <Input 
          inputValue={this.state.inputValue} 
          onChange={this.handleInputChange.bind(this)} 
          onAdd={this.handleButtonSubmit.bind(this)}
          onSearch={this.handleButtonSearch.bind(this)}
        />
        <List 
          list={this.state.list} 
          onDel={this.handleClickDel.bind(this)}
          onChange={this.inputValueChange.bind(this)}
        />
      </div>
    );
  }
  
}

export default Todolist;
