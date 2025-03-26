import React from 'react'
import Form from 'next/form'
import Image from 'next/image'
import './search.css'
export const Search = () => {
  return (
    <div>
      <Form className='search' action="/search">
        <input name="query" placeholder='Tìm kiếm bài viết' />
        <button className='btnSearch' type="submit">
          <Image
            src='/assets/search.svg'
            alt="Example image"
            width={19}
            height={19}
            className='rounded-[24px]'
          /></button>
      </Form>
    </div>
  )
}
