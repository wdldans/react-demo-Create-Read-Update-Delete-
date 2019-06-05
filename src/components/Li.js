import React from 'react';

class Li extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isMod: false,
            inputValue: this.props.item,
        }
    }

    handleClickDel(index) {
        this.props.onDel(index);
    }

    handleClickMod() {
        this.setState({
            isMod: true,
            inputValue:this.props.item,
        })
        console.log(this.state.inputValue)

    }

    handleClickConfirm(index) {
        const inputValue = this.state.inputValue;
        this.props.onChange({inputValue,index})
        this.setState({
            isMod: false,
        })
    }

    onChangeValue(e) {
        console.log(e.target.value)
        this.setState({
            inputValue: e.target.value,
        })
    }

    render() {
        const index = this.props.index;
        const item = this.props.item;
        return (
            <div className="flex_li">
                {
                    this.state.isMod === false 
                    ? <div>{item}</div> 
                    : <input value={this.state.inputValue} onChange={this.onChangeValue.bind(this)} />
                }
                
                <div>
                    <button onClick={this.handleClickDel.bind(this,index)}>删除</button>
                    
                    {
                        this.state.isMod === false 
                        ? <button onClick={this.handleClickMod.bind(this,index)}>修改</button> 
                        : <button onClick={this.handleClickConfirm.bind(this,index)}>确定</button>
                    }
                </div>
            </div>
        )
    }
}

export default Li;