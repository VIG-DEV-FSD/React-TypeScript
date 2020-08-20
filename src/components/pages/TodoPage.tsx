import React, { useEffect } from 'react'
import AddTodo from '../Todo/AddTodo'
import TodoList from '../Todo/TodoList'
import { ITodo } from '../interfaces'

const TodoPage: React.FC = () => {
  const [todos, setTodos] = React.useState<ITodo[]>([])

  useEffect(() => {
    const saved: ITodo[] = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
    setTodos(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const createTodo = (title: string) => {
    const newTodo: ITodo = {
      id: Date.now(),
      title,
      completed: false,
    }
    setTodos((prev) => [newTodo, ...prev])
  }

  const todoToggle = (id: number) => {
    setTodos(
      todos.map((todo: ITodo) => {
        if (todo.id === id) todo.completed = !todo.completed
        return todo
      })
    )
  }

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo: ITodo) => todo.id !== id))
  }

  return (
    <>
      <h1>Todo List</h1>
      <AddTodo onAddTodo={createTodo} />
      {todos.length ? (
        <TodoList todos={todos} onToggle={todoToggle} onRemove={removeTodo} />
      ) : (
        <p>У вас еще нет списка дел!</p>
      )}
    </>
  )
}

export default TodoPage
