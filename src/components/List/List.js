import React from 'react';
import './List.css'
import Li from '../Li';

class List extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            input: '',
        }
    }

    onChangeValue(valueChange) {
        console.log(valueChange)
       this.props.onChange(valueChange)

    }
    
    handleClickDel(index) {
        this.props.onDel(index);
      }

    render() {
        const list = this.props.list;
        return (
            <div className="List">
                {list.map((item,index)=>{
                    return (
                        <Li 
                            item={item} 
                            key={index} 
                            index = {index}
                            onChange={this.onChangeValue.bind(this)}
                            onDel={this.handleClickDel.bind(this)}
                        />
                    )
                })}
            </div>
        )
    }
}

export default List;