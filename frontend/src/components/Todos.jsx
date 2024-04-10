

/* todos = [
   {
    title: "go to gym",
    description: "go to gym",
   } 
   ]
*/
import PropTypes from 'prop-types';

export function Todos({todos}) {

    return <div>
        {todos.map(function(todo, index) {
            return <div key={index}>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.completed == true ? "Completed" : "Mark as Complete"}</button>
            </div>
        })}
    </div>
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
};
