import React, { useRef } from 'react'

type AddTodoProps = {
  onAddTodo(title: string): void
}

const AddTodo: React.FC<AddTodoProps> = ({ onAddTodo }) => {
  const ref = useRef(null)

  function keyPressHandler(event: React.KeyboardEvent) {
    if (event.key === 'Enter') {
      onAddTodo(ref.current.value)
      ref.current.value = ''
    }
  }

  return (
    <>
      <label htmlFor="title">Введите название дела</label>
      <input ref={ref} type="text" id="title" onKeyPress={keyPressHandler} />
    </>
  )
}

export default AddTodo
