import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'

const About: NextPage = () => {

    return (
        <div>
            <Head>
                <title>About</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div className='w-full flex mx-auto justify-center items-center pt-10 pb-5'>
                <h1 className='text-4xl font-thin'>ABOUT</h1>
            </div>
            <div className='px-10 py-5 w-full flex mx-auto'>
                <p className='text-xl font-light'>Feminine energy accompanies us from birth to death, communicating from the deepest part of our being. After being oppressed, marginalised, humiliated, now she re-emerges at the end of a 14 thousand year cicle.

                </p>
            </div>
            <div className='px-10 py-5 w-full flex mx-auto'>
                <p className='text-xl font-light'>Feminine energy will be the key of Rebirth, every human being owns it and Women represent its physical emanation.


                </p></div>
            <div className='px-10 py-5 w-full flex mx-auto'>
                <p className='text-xl font-light'>Simone Risi was born on the 10th April, 1997, among the hills of Sasso Marconi, in province of Bologna.
                    During his course of study, after a significative event for his inner growth, he lets go of the Rational to leave room for the pursuit of Being.
                    That's where his artistic expression starts to bloom, switching from 3D drawing to photography.


                </p></div>
            <div className='px-10 py-5 pb-10 w-full flex mx-auto'>
                <p className='text-xl font-light'>Study, interest, meditation and self-examination lead Simone to the discovery of the oldest mysteries of Existence, giving him the opportunity to bring out the most intimate sides of himself.
                    From october 2021 his artistic rebirth takes hold, giving voice to the project called "Scoprire è Scoprirsi".


                </p></div>

            <img className='w-full' src="../imgs/photos/about/about-desktop.webp" alt="" />
            <Footer />
        </div>

    )
}

export default About