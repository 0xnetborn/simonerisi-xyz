import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className='md:hidden h-screen lg:my-10 md:h-screen top-0  bg-[url("/../imgs/photos/home/02.jpg")] flex justify-center md:items-center py-10 lg:py-0 bg-center bg-cover'>
        <div className='px-10 space-y-5 text-black w-full lg:w-full'>
          <h1 className='text-xl md:text-4xl lg:text-6xl max-w-xs mt-10 pr-2 font-normal md:max-w-2xl'>
            Wandering around Italy discovering souls and intimacy
          </h1>
          <div className=''>
            <Link href={'/collections'}>
              <button className='text-xs md:text-sm border px-4 md:px-6 py-3  bg-white text-black hover:bg-gray-100 shadow-gray-800 shadow-md hover:shadow-black hover:shadow-lg hover:text-black transition-all duration-200 ease-in-out rounded-md border-black cursor-pointer font-bold mb-1 md:mb-0 md:mt-5 bg-transparent  hover:bg-gradient-300'>
                SEE ALL COLLECTIONS
              </button>
            </Link>
          </div>
        </div>
        {/* <div className='h-1/3 mx-10 bg-no-repeat bg-cover w-full lg:bg-cover bg-center md:bg-contain  md:w-full md:my-20 md:h-2/3 lg:h-full'></div> */}
      </div>
      <div className='hidden h-screen lg:my-10 md:h-screen top-0  md:flex justify-center md:items-center py-10 lg:py-0 bg-center bg-cover'>
        <div className='px-10 space-y-5 text-black w-1/2 lg:w-full'>
          <h1 className='text-xl md:text-4xl lg:text-6xl max-w-lg'>
            Wandering around Italy discovering souls and intimacy
          </h1>
          <div className=''>
            <Link href={'/collections'}>
              <button className='text-xs md:text-sm border px-4 md:px-6 py-3  bg-white text-black hover:bg-gray-100 shadow-gray-800 shadow-md hover:shadow-black hover:shadow-lg hover:text-black transition-all duration-200 ease-in-out rounded-md border-black cursor-pointer font-bold mb-1 md:mb-0 md:mt-5 bg-transparent  hover:bg-gradient-300'>
                SEE ALL COLLECTIONS
              </button>
            </Link>
          </div>
        </div>
        <div className='h-1/3 mx-10 bg-no-repeat bg-[url("/../imgs/photos/home/02.jpg")] bg-cover w-full lg:bg-cover bg-center md:bg-contain  md:w-full md:my-20 md:h-2/3 lg:h-full'></div>
      </div>

      <div className='w-full h-screen md:w-auto bg-[url("/../imgs/photos/home/08.png")] md:bg-cover bg-center bg-no-repeat bg-fixed'></div>
      <div className='w-full h-screen md:w-auto bg-[url("/../imgs/photos/home/02.png")] bg-cover bg-[top_left_-900px] md:bg-center bg-no-repeat md:bg-cover bg-fixed '></div>
      <div className='w-full h-screen md:w-auto bg-[url("/../imgs/photos/home/09.png")] md:bg-cover bg-[top_-100px_left_-800px] md:bg-center bg-no-repeat bg-fixed'></div>

      {/* NFT SECTION  */}
      {/* <div className='lg:my-10 md:h-screen top-0 flex justify-center md:items-center py-10 lg:py-0 bg-center bg-cover'>
        <div className='md:mx-10 ml-5 bg-no-repeat bg-[url("/../imgs/photos/home/02.jpg")] bg-cover  lg:bg-cover bg-center md:bg-contain  md:w-full md:my-20 w-2/3 my-12 md:h-2/3 lg:h-2/3'></div>
        <div className='px-10 space-y-5 text-black w-full md:w-1/2 lg:w-full'>
          <h1 className='text-xl md:text-4xl lg:text-6xl max-w-md'>
            NFT Project
          </h1>
          <h2>
            Simone Risi's artistic soul reawakens and finds new expression in the Web3 universe. A movement is emerging that combines atavistic emotional archetypes with new forms of digital identity. The project aims to create a new artistic reality, free from censorship and centralized control, for a community interested in photography and self-discovery.
          </h2>
          <div className=''>
            <Link href={'/nft'}>
              <button className='text-xs md:text-sm border px-4 md:px-6 py-3  bg-white text-black hover:bg-gray-100 shadow-gray-800 shadow-md hover:shadow-black hover:shadow-lg hover:text-black transition-all duration-200 ease-in-out rounded-md border-black cursor-pointer font-bold mb-1 md:mb-0 md:mt-5 bg-transparent  hover:bg-gradient-300'>
                DISCOVER
              </button>
            </Link>
          </div>
        </div>
      </div> */}
      <Footer />
    </div>
  )
}

export default Home
