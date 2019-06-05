import React from 'react';
import './Input.css'

class Input extends React.Component{
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
                <input className="input" type="text" value={inputValue} onChange={this.handleInputChange.bind(this)} />
                <button onClick={this.handleButtonSubmit.bind(this)}>提交</button>
                <button onClick={this.handleButtonSearch.bind(this)}>搜索</button>
            </div>
        )
    }
}

export default Input;