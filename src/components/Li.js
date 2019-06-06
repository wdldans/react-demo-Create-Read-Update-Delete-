import React from 'react';
import {Input,Button} from 'antd';

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
    }

    handleClickConfirm(index) {
        const inputValue = this.state.inputValue;
        this.props.onChange({inputValue,index})
        this.setState({
            isMod: false,
        })
    }

    onChangeValue(e) {
        this.setState({
            inputValue: e.target.value,
        })
    }

    render() {
        const {index,item} = this.props;
        return (
            <div className="flex_li">
                {
                    this.state.isMod === false 
                    ? <div>{item}</div> 
                    : <Input value={this.state.inputValue} onChange={this.onChangeValue.bind(this)} style={{width:'400px'}} />
                }
                
                <div>
                    <Button onClick={this.handleClickDel.bind(this,index)}>删除</Button>
                    
                    {
                        this.state.isMod === false 
                        ? <Button onClick={this.handleClickMod.bind(this,index)}>修改</Button> 
                        : <Button onClick={this.handleClickConfirm.bind(this,index)}>确定</Button>
                    }
                </div>
            </div>
        )
    }
}

export default Li;