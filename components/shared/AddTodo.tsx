import React from 'react'
import Form from '../ui/Form'
import Input from '../ui/Input'
import Button from '../ui/Button'
import { create } from '@/app/actions/todoActions'

const AddTodo = () => {
  return (
    <Form action = {create} className="w-11/12 m-auto">
        <div className='flex'>
            <Input 
                name="input"
                type='text'
                placeholder='Add Todo...'
            />
            <Button type='submit' text= 'Add' />
        </div>
    </Form>
  )
}

export default AddTodo