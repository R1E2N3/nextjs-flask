import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Contact = () => {
  return (
    <div>
        <h1 className='head_text orange_gradient'>ENTRE EM CONTATO</h1>


        <section>

            <h3 className='sub_head'>Millena Xavier</h3>
            <p className='my-4'>Forbes U30 e Visionária de Minas Gerais</p>
            <div className='flex gap-5'>
            <Link href='https://www.linkedin.com/in/millena-xavier-martins-conecte-se/'>
                <Image 
                    src='/assets/images/linkedin.png'
                    alt='linkedin'
                    width={37}
                    height={37}
                />
            </Link>
            <Link className='flex text-center justify-center items-center' href='https://www.millenaxavier.com'>
               <p className='outline_btn'>Site pessoal</p>
            </Link>
            </div>

            <h3 className='sub_head'>Renzo Honorato</h3>
            <p className='my-4'>Web Design @ Autinosis</p>
            <Link href='https://www.linkedin.com/in/renzo-honorato-mimoso/'>
                <Image 
                src='/assets/images/linkedin.png'
                height={37}
                width={37}
                />
            </Link>
        </section>
    </div>
  )
}

export default Contact