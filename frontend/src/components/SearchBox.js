import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import './ProductCarousel.css';

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products...'
        className='search-box-input'
      ></Form.Control>
      <Button type='submit' className='search-button'>
        Search
      </Button>
    </Form>
  )
}

export default SearchBox
