import React from 'react'
import { ITodo } from '../interfaces'

type TodoListProps = {
  todos: ITodo[]
  onToggle(id: number): void
  onRemove(id: number): void
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onRemove }) => {
  const toggleHandler = (id: number) => {
    onToggle(id)
  }

  const removeHandler = (id: number) => {
    onRemove(id)
  }

  return (
    <ul>
      {todos.map((todo: ITodo) => {
        const todoClasses: string[] = []
        if (todo.completed) todoClasses.push('done')

        return (
          <li key={todo.id} className="todo">
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleHandler(todo.id)}
              />
              <span className={todoClasses.join(' ')}>{todo.title}</span>
            </label>
            <i
              style={{ color: 'red', cursor: 'pointer' }}
              className="material-icons"
              onClick={() => removeHandler(todo.id)}
            >
              delete
            </i>
          </li>
        )
      })}
    </ul>
  )
}

export default TodoList
