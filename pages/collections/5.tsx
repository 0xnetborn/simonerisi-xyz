import Head from 'next/head'
import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

function MDP() {
  return (
    <div>
      <Head>
        <title>Madre del presente</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className='pt-10 flex mx-auto justify-center'>
        <h1 className='lg:text-3xl font-thin uppercase'>Madre del presente</h1>
      </div>

      <div className='flex mx-auto flex-wrap md:flex-row-2 p-10 lg:flex-row-2 md:w-5/6 lg:w-full'>
        <div className='md:w-1/2  lg:w-1/2 relative'>
          <img className='px-2 mt-5' src="/../imgs/photos/collections/5/1.jpg" alt="" />
          <div className='mx-2 absolute bottom-0 shadow-lg shadow-zinc-900 left-0 right-0 bg-black py-5'>
            <h3 className='text-center text-xs font-normal text-white uppercase'>Madre del presente #01</h3>
          </div>
        </div>
        <div className='md:w-1/2 lg:w-1/2 relative '>
          <img className='px-2 mt-5' src="/../imgs/photos/collections/5/2.jpg" alt="" />
          <div className='mx-2 absolute bottom-0 shadow-lg shadow-zinc-900 left-0 right-0 bg-black py-5'>
            <h3 className='text-center text-xs font-normal text-white uppercase'>Madre del presente #02</h3>
          </div>
        </div>
        <div className='md:w-1/2 lg:w-1/2 relative'>
          <img className='px-2 mt-5' src="/../imgs/photos/collections/5/3.jpg" alt="" />
          <div className='mx-2 absolute bottom-0 shadow-lg shadow-zinc-900 left-0 right-0 bg-black py-5'>
            <h3 className='text-center text-xs font-normal text-white uppercase'>Madre del presente #03</h3>
          </div>
        </div>
        <div className='md:w-1/2 lg:w-1/2 relative'>
          <img className='px-2 mt-5' src="/../imgs/photos/collections/5/4.jpg" alt="" />
          <div className='mx-2 absolute bottom-0 shadow-lg shadow-zinc-900 left-0 right-0 bg-black py-5'>
            <h3 className='text-center text-xs font-normal text-white uppercase'>Madre del presente #04</h3>
          </div>
        </div>
        <div className='md:w-1/2 lg:w-1/2 relative'>
          <img className='px-2 mt-5' src="/../imgs/photos/collections/5/2.jpg" alt="" />
          <div className='mx-2 absolute bottom-0 shadow-lg shadow-zinc-900 left-0 right-0 bg-black py-5'>
            <h3 className='text-center text-xs font-normal text-white uppercase'>Madre del presente #05</h3>
          </div>
        </div>
        <div className='md:w-1/2 lg:w-1/2 relative'>
          <img className='px-2 mt-5' src="/../imgs/photos/collections/5/6.jpg" alt="" />
          <div className='mx-2 absolute bottom-0 shadow-lg shadow-zinc-900 left-0 right-0 bg-black py-5'>
            <h3 className='text-center text-xs font-normal text-white uppercase'>Madre del presente #06</h3>
          </div>
        </div>
        <div className='md:w-1/2 lg:w-1/2 relative'>
          <img className='px-2 mt-5' src="/../imgs/photos/collections/5/7.jpg" alt="" />
          <div className='mx-2 absolute bottom-0 shadow-lg shadow-zinc-900 left-0 right-0 bg-black py-5'>
            <h3 className='text-center text-xs font-normal text-white uppercase'>Madre del presente #07</h3>
          </div>
        </div>
        <div className='md:w-1/2 lg:w-1/2 relative'>
          <img className='px-2 mt-5' src="/../imgs/photos/collections/5/8.jpg" alt="" />
          <div className='mx-2 absolute bottom-0 shadow-lg shadow-zinc-900 left-0 right-0 bg-black py-5'>
            <h3 className='text-center text-xs font-normal text-white uppercase'>Madre del presente #08</h3>
          </div>
        </div>
        <div className='md:w-1/2 lg:w-1/2 relative'>
          <img className='px-2 mt-5' src="/../imgs/photos/collections/5/9.jpg" alt="" />
          <div className='mx-2 absolute bottom-0 shadow-lg shadow-zinc-900 left-0 right-0 bg-black py-5'>
            <h3 className='text-center text-xs font-normal text-white uppercase'>Madre del presente #09</h3>
          </div>
        </div>


      </div>
      <Footer />
    </div>
  )
}

export default MDP