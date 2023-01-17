import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

function nft() {
  return (
    <div>
      <Head>
        <title>NFT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className='flex mx-auto justify-center pt-10 pb-5'>
        <h1 className='text-4xl font-thin'>NFT</h1>
      </div>

      <div className='mt-10 flex mx-auto justify-center'>
        <h2 className='text-2xl font-semibold'>
          Ancient Perception
        </h2>
      </div>
      <div className='my-2 mx-5 md:mx-auto flex justify-center text-center'>
        <h3>
          Each piece includes the physical redeem of a 30x45cm certified Fine Art print 1/1
        </h3>
      </div>
      <div className=' my-2 flex mx-auto justify-center text-center'>
        <h3>
          Click on a picture to open the gallery.
        </h3>
      </div>
      <div className='flex mx-auto flex-wrap md:flex-row-2 p-10 lg:flex-row-5 md:w-5/6 lg:w-full'>
        <div className='md:w-1/2  lg:w-1/5 relative'>
          <img className='px-2 mt-5' src="/../imgs/photos/collections/2/1.webp" alt="" />
          <div className='mx-2 absolute bottom-0 shadow-lg shadow-zinc-900 left-0 right-0 bg-black py-5'>
            <h3 className='text-center text-xs font-normal text-white'>ANCIENT PERCEPTION #01</h3>
          </div>
        </div>
        <div className='md:w-1/2 lg:w-1/5 relative '>
          <img className='px-2 mt-5' src="/../imgs/photos/collections/2/2.jpg" alt="" />
          <div className='mx-2 absolute bottom-0 shadow-lg shadow-zinc-900 left-0 right-0 bg-black py-5'>
            <h3 className='text-center text-xs font-normal text-white'>ANCIENT PERCEPTION #02</h3>
          </div>
        </div>
        <div className='md:w-1/2 lg:w-1/5 relative'>
          <img className='px-2 mt-5' src="/../imgs/photos/collections/2/3.jpg" alt="" />
          <div className='mx-2 absolute bottom-0 shadow-lg shadow-zinc-900 left-0 right-0 bg-black py-5'>
            <h3 className='text-center text-xs font-normal text-white'>ANCIENT PERCEPTION #03</h3>
          </div>
        </div>
        <div className='md:w-1/2 lg:w-1/5 relative'>
          <img className='px-2 mt-5' src="/../imgs/photos/collections/2/4.jpg" alt="" />
          <div className='mx-2 absolute bottom-0 shadow-lg shadow-zinc-900 left-0 right-0 bg-black py-5'>
            <h3 className='text-center text-xs font-normal text-white'>ANCIENT PERCEPTION #04</h3>
          </div>
        </div>
        <div className='md:w-1/2 lg:w-1/5 relative'>
          <img className='px-2 mt-5' src="/../imgs/photos/collections/2/5.jpg" alt="" />
          <div className='mx-2 absolute bottom-0 shadow-lg shadow-zinc-900 left-0 right-0 bg-black py-5'>
            <h3 className='text-center text-xs font-normal text-white'>ANCIENT PERCEPTION #05</h3>
          </div>
        </div>
        <div className='md:w-1/2 lg:w-1/5 relative'>
          <img className='px-2 mt-5' src="/../imgs/photos/collections/2/6.jpg" alt="" />
          <div className='mx-2 absolute bottom-0 shadow-lg shadow-zinc-900 left-0 right-0 bg-black py-5'>
            <h3 className='text-center text-xs font-normal text-white'>ANCIENT PERCEPTION #06</h3>
          </div>
        </div>
        <div className='md:w-1/2 lg:w-1/5 relative'>
          <img className='px-2 mt-5' src="/../imgs/photos/collections/2/7.jpg" alt="" />
          <div className='mx-2 absolute bottom-0 shadow-lg shadow-zinc-900 left-0 right-0 bg-black py-5'>
            <h3 className='text-center text-xs font-normal text-white'>ANCIENT PERCEPTION #07</h3>
          </div>
        </div>
        <div className='md:w-1/2 lg:w-1/5 relative'>
          <img className='px-2 mt-5' src="/../imgs/photos/collections/2/8.jpg" alt="" />
          <div className='mx-2 absolute bottom-0 shadow-lg shadow-zinc-900 left-0 right-0 bg-black py-5'>
            <h3 className='text-center text-xs font-normal text-white'>ANCIENT PERCEPTION #08</h3>
          </div>
        </div>
        <div className='md:w-1/2 lg:w-1/5 relative'>
          <img className='px-2 mt-5' src="/../imgs/photos/collections/2/9.jpg" alt="" />
          <div className='mx-2 absolute bottom-0 shadow-lg shadow-zinc-900 left-0 right-0 bg-black py-5'>
            <h3 className='text-center text-xs font-normal text-white'>ANCIENT PERCEPTION #09</h3>
          </div>
        </div>
        <div className='md:w-1/2 lg:w-1/5 relative'>
          <img className='px-2 mt-5' src="/../imgs/photos/collections/2/10.jpg" alt="" />
          <div className='mx-2 absolute bottom-0 shadow-lg shadow-zinc-900 left-0 right-0 bg-black py-5'>
            <h3 className='text-center text-xs font-normal text-white'>ANCIENT PERCEPTION #10</h3>
          </div>
        </div>



      </div>


      <div className='mt-10 flex justify-center mx-auto h-64 md:h-96 w-full md:w-2/3 bg-gray-900'>
        <iframe className='h-full w-full' src='https://www.youtube.com/embed/aLseoy29uHQ?autoplay=1&controls=0&showinfo=0' frameBorder='0' allow='accelerometer; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
      </div>




      <div className='my-10 flex mx-auto justify-center'>

        <div className='pl-5 mx-10 flex flex-col columns-1 justify-center  w-1/2 h-screen'>
          <h1 className='text-xl md:text-4xl lg:text-6xl max-w-md mb-5'>
            NFTs
          </h1>
          <h2>
            Simone Risi's artistic soul reawakens and finds new expression in the Web3 universe. A movement is emerging that combines atavistic emotional archetypes with new forms of digital identity. The project aims to create a new artistic reality, free from censorship and centralized control, for a community interested in photography and self-discovery.
          </h2>

        </div>


        <div className=' mx-10 pr-5 items-center justify-center w-1/2 lg:my-10 top-0 py-10 lg:py-0 '>

          <div className='items-center justify-center ml-5 bg-no-repeat bg-[url("/../imgs/photos/home/02.jpg")] bg-contain bg-center w-full h-full relative'>
            <div className='flex mx-auto justify-center w-full items-center absolute top-1/2 blur-10'>
              <a href='' target={'_blank'}>
                <button className='text-xs md:text-sm border px-4 md:px-6 py-3 bg-white text-black hover:bg-gray-100 shadow-gray-800 shadow-md hover:shadow-black hover:shadow-lg hover:text-black transition-all duration-200 ease-in-out rounded-md border-black cursor-pointer font-bold mb-1 md:mb-0 md:mt-5 bg-transparent hover:bg-gradient-300'>
                  DISCOVER META GALLERY
                </button>
              </a>
            </div>
          </div>

        </div>


      </div>
      <div className='bg-gray-100 my-10 flex flex-col columns-1 mx-auto justify-center items-center w-1/4 rounded-lg'>
        <div className='flex mx-auto justify-center text-center my-5'>
          <h1 className='font-bold text-sm text-gray-700'>
            REGISTER TO RECEIVE EXCLUSIVE UPDATES
          </h1>
        </div>
        <div>
          <input className='text-gray-400 mb-5  text-xs bg-white border focus:text-black py-2 px-2 mr-3 border-gray-400 focus:border-black' type='text' placeholder='Email address' />
          <button type='submit' className='bg-black text-white  font-bold px-4 py-3 text-xs rounded-lg'>SUBMIT</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default nft