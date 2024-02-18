import React from 'react'
import Link from 'next/link'

const TestPage = () => {
  return (
    <section>
      <h1 className='head_text'>Para quem é esse teste?</h1>
      <div className='my-20 justify-center'>
        <Link className='ui_btn block text-center' href='/test/child'>Uma criança</Link>
        <Link className='ui_btn block text-center' href='/test/adolescent'>Um adolescente</Link>
        <Link className='ui_btn block text-center' href='/test/adult'>Um adulto</Link>
      </div>
    </section>
  )
}

export default TestPage