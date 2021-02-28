import React, {Component} from 'react';
import PropTypes from 'prop-types'

class TodoItem extends Component {
    state = {status : this.props.todoItem.status}
    constructor(props) {
        super(props)
    };
    changeStatus =(item) => {
        item.status = !item.status;
        this.setState({status : item.status});
    }
    render() {
        let {todoItem} = this.props;
        const wrapClasses = ['todo-item'];
        const spanClass = []
        if (!todoItem.status) {
            wrapClasses.push('todo-invalid');
            spanClass.push('line-throw');
        }
        return (
        <div className='todo-item-wrap'>
            <div className={wrapClasses.join(' ')}>
                <span className={spanClass.join(' ')}></span>
                <p>{todoItem.id})&nbsp;user name : {todoItem.name.toString().toUpperCase()},
                user age : {todoItem.age}</p>
            </div>
            <button onClick={()=> {return this.changeStatus(todoItem)}}>Change status</button>
        </div>
        )
    }
};
TodoItem.propTypes = {
    todoItem : PropTypes.object.isRequired,
};
export default TodoItem