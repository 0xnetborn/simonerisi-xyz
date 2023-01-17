import { count } from 'console'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer'
import Header from '../components/Header'

// type Collection = {
//     collectionId: string;
//     name: string;
//     numberOfImages: number;
// }

const Collections: NextPage = () => {

    return (
        <div>
            <Head>
                <title>Collections</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div className='w-full flex mx-auto justify-center items-center pt-10 pb-5'>
                <h1 className='text-4xl font-thin'>COLLECTIONS</h1>
            </div>

            <div className='w-full flex mx-auto justify-center items-center text-center md:text-left pb-5'>
                <p className='max-w-sm md:max-w-none text-xl font-light'>Unlock the secrets and discover the spiritual truth hidden within our art.
                </p>
            </div>
            <div className='w-full flex-col md:columns-2'>

                <div className='relative py-5 pl-5 pr-5 cursor-pointer'>
                    <Link href={'/collections/1'}>
                        <div>
                            <img src="/../imgs/photos/collections/1/1.webp" alt="" className='w-full' />
                            <div className='hover:text-white absolute inset-0 flex items-center justify-center text-center md:text-sm text-sm text-opacity-0 hover:text-opacity-100 font-normal text-black bg-black bg-opacity-0 transition duration-200 hover:backdrop-blur-md'>
                                La ricerca dell'Essere ci renderà immortali
                            </div>
                        </div></Link>
                </div>

                <div className='relative py-5 pl-5 pr-5 cursor-pointer'>
                    <Link href={'/collections/2'}>
                        <div>
                            <img src="/../imgs/photos/collections/2/1.webp" alt="" className='w-full' />
                            <div className='absolute inset-0 flex items-center justify-center text-center md:text-sm text-sm text-opacity-0 hover:text-opacity-100 font-normal text-black hover:text-white bg-black bg-opacity-0 transition duration-200 hover:backdrop-blur-md'>
                                Ancient Perception
                            </div></div></Link>
                </div>
            </div>
            <div className='w-full flex-col md:columns-4'>
                <div className='relative py-5 pl-5 pr-5 cursor-pointer'>
                    <Link href={'/collections/3'}>
                        <div>
                            <img src="/../imgs/photos/collections/3/1.webp" alt="" className='w-full' />
                            <div className='hover:text-white absolute inset-0 flex items-center justify-center text-center md:text-sm text-sm text-opacity-0 hover:text-opacity-100 font-normal text-black bg-black bg-opacity-0 transition duration-200 hover:backdrop-blur-md'>
                                Respiravamo luce come fosse l'ultimo dei giorni
                            </div></div></Link>
                </div>
                <div className='relative py-5 pl-5 pr-5 cursor-pointer'>
                    <Link href={'/collections/4'}><div>
                        <img src="/../imgs/photos/collections/4/1.jpg" alt="" className='w-full' />
                        <div className='absolute inset-0 flex items-center justify-center text-center md:text-sm text-sm text-opacity-0 hover:text-opacity-100 font-normal text-black hover:text-white bg-black bg-opacity-0 transition duration-200 hover:backdrop-blur-md'>
                            Protezione infinita, ascoltami
                        </div></div></Link>
                </div>

                <div className='relative py-5 pl-5 pr-5 cursor-pointer'>
                    <Link href={'/collections/5'}><div>
                        <img src="/../imgs/photos/collections/5/1.jpg" alt="" className='w-full' />
                        <div className='hover:text-white absolute inset-0 flex items-center justify-center text-center md:text-sm text-sm text-opacity-0 hover:text-opacity-100 font-normal text-black bg-black bg-opacity-0 transition duration-200 hover:backdrop-blur-md'>
                            Madre del presente
                        </div></div></Link>
                </div>
                <div className='relative py-5 pl-5 pr-5 cursor-pointer'>
                    <Link href={'/collections/6'}><div>
                        <img src="/../imgs/photos/collections/6/1.jpg" alt="" className='w-full' />
                        <div className='absolute inset-0 flex items-center justify-center text-center md:text-sm text-sm text-opacity-0 hover:text-opacity-100 font-normal text-black hover:text-white bg-black bg-opacity-0 transition duration-200 hover:backdrop-blur-md'>
                            La luce di notte profuma d'incenso
                        </div></div></Link>
                </div>
            </div>
            <div className='w-full flex-col md:columns-2'>
                <div className='relative py-5 pl-5 pr-5 cursor-pointer'>
                    <Link href={'/collections/7'}><div>
                        <img src="/../imgs/photos/collections/7/1.jpg" alt="" className='w-full' />
                        <div className='hover:text-white absolute inset-0 flex items-center justify-center text-center md:text-sm text-sm text-opacity-0 hover:text-opacity-100 font-normal text-black bg-black bg-opacity-0 transition duration-200 hover:backdrop-blur-md'>
                            Gocce di terra in questa eterna provincia
                        </div></div></Link>
                </div>
                <div className='relative py-5 pl-5 pr-5 cursor-pointer'>
                    <Link href={'/collections/8'}><div>
                        <img src="/../imgs/photos/collections/8/1.jpg" alt="" className='w-full' />
                        <div className='absolute inset-0 flex items-center justify-center text-center md:text-sm text-sm text-opacity-0 hover:text-opacity-100 font-normal text-black hover:text-white bg-black bg-opacity-0 transition duration-200 hover:backdrop-blur-md'>
                            Solida la mente di chi sa percepire
                        </div></div></Link>
                </div>
            </div>
            <div className='w-full flex-col md:columns-3 pb-5'>
                <div className='relative py-5 pl-5 pr-5 cursor-pointer'>
                    <Link href={'/collections/9'}><div>
                        <img src="/../imgs/photos/collections/9/1.jpg" alt="" className='w-full' />
                        <div className='hover:text-white absolute inset-0 flex items-center justify-center text-center md:text-sm text-sm text-opacity-0 hover:text-opacity-100 font-normal text-black bg-black bg-opacity-0 transition duration-200 hover:backdrop-blur-md'>
                            Ardere senza fiamma fra le gocce di rugiada
                        </div></div></Link>
                </div>
                <div className='relative py-5 pl-5 pr-5 cursor-pointer'>
                    <Link href={'/collections/10'}><div>
                        <img src="/../imgs/photos/collections/10/1.jpg" alt="" className='w-full' />
                        <div className='absolute inset-0 flex items-center justify-center text-center md:text-sm text-sm text-opacity-0 hover:text-opacity-100 font-normal text-black hover:text-white bg-black bg-opacity-0 transition duration-200 hover:backdrop-blur-md'>
                            Quasi come una magia
                        </div></div></Link>
                </div>
                <div className='relative py-5  pl-5 pr-5 cursor-pointer'>
                    <Link href={'/collections/3'}><div>
                        <img src="/../imgs/photos/collections/11/1.jpg" alt="" className='w-full' />
                        <div className='hover:text-white absolute inset-0 flex items-center justify-center text-center md:text-sm text-sm text-opacity-0 hover:text-opacity-100 font-normal text-black bg-black bg-opacity-0 transition duration-200 hover:backdrop-blur-md'>
                            Versare una donna dentro un uomo, spargere quest'acqua sopra il fuoco
                        </div></div></Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Collections
