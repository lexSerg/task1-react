import React ,{ Component} from 'react';
import users from '../data/data';
import TodoItem from '../components/TodoItem'

class TodoList extends Component {
    
    render() {
        return (
            <div className='todo-list-wrap'>{
                
                users.map(todoItem => {
                   return (<TodoItem todoItem={todoItem} key={todoItem.id}/>)
                })
            }</div>
        )

    }
};
export default TodoList;