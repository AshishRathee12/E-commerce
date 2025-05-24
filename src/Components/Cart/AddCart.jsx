import React from 'react'
import { useSelector } from 'react-redux'
import Empty from './Empty';
import DisplayItems from './DisplayItems';

export default function AddCart() {

  const todos = useSelector(state => state.Item);

  console.log(todos.length)




  return (
    <div>
      {todos.length === 0 ? <Empty /> : <DisplayItems />}
    </div>
  )
}
