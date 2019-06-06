import React from 'react';
import './InputCom.css';
import {Input,Button} from 'antd'


class InputCom extends React.Component{
    constructor(props) {
        super(props);
        this.state = {}

        
    }

    handleInputChange(e) {
        this.props.onChange(e.target.value)
    }

    handleButtonSubmit() {
        this.props.onAdd()
    }

    handleButtonSearch() {
        this.props.onSearch()
    }

    render() {
        const inputValue = this.props.inputValue;
        
        return (
            <div>
                <Input  type="text" placeholder="提交 / 搜索" value={inputValue} onChange={this.handleInputChange.bind(this)} style={{width:'60%'}} />
                <Button type="primary" className="Button" onClick={this.handleButtonSubmit.bind(this)}>提交</Button>
                <Button type="primary" className="Button" onClick={this.handleButtonSearch.bind(this)}>搜索</Button>
            </div>
        )
    }
}

export default InputCom;