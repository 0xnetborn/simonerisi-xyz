import Link from 'next/link';
import { useState, useEffect } from 'react';
// import ConnectionModal from './ConnectionModal';


function Header() {


    const [scrollPosition, setScrollPosition] = useState(0);
    // const [showModal, setShowModal] = useState(false);
    useEffect(() => {
        function handleScroll() {
            setScrollPosition(window.scrollY);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [isVisible, setIsVisible] = useState(false);




    return (

        <header
            className={
                scrollPosition > 50
                    ? 'z-50 py-4 sticky top-0 border-y bg-opacity-50 backdrop-blur-md border-gray-400 bg-white  flex justify-between mx-auto pr-4 transition-bg duration-700 ease-in-out'
                    : 'z-50 py-4 sticky top-0 border-y border-white flex justify-between mx-auto pr-4 bg-white transition-bg duration-700 ease-in-out'
            }
        >
            <div className="flex items-center space-x-5">
                <Link href="/">
                    <img
                        src="./../imgs/logos/LOGO by Simone Risi.png"
                        alt="Simone Risi Logo"
                        className="hidden md:block w-60 mb-1 object-contain cursor-pointer"
                    />

                    <img
                        src="./../imgs/logos/XYZ.png"
                        alt="Simone Risi Logo"
                        className="ml-2 block md:hidden w-14 object-contain cursor-pointer"
                    />
                </Link>
                {/* <Link href={'/'}>
                    <h3 className='text-xs md:text-sm font-semibold'>HOME</h3>
                </Link> */}
                <Link href={'/collections'}>
                    <h3 onMouseEnter={() => setIsVisible(true)}

                        onClick={() => setIsVisible(!isVisible)} className='text-xs md:text-sm font-semibold'>COLLECTIONS</h3>

                    {isVisible &&
                        <ul onMouseLeave={() => setIsVisible(false)} className={`space-y-3 md:rounded-lg md:shadow-lg md:h-auto shadow-zinc-900 bg-white w-full absolute left-0 md:w-1/3 mt-8 p-5 text-xs md:bg-opacity-90 transition-all ease-in-out duration-400 ${isVisible ? "" : "hidden"
                            }`}>
                            <li onClick={() => setIsVisible(false)} className='md:hover:font-bold font-bold md:font-normal hover:scale-95 transition-all ease-in-out duration-200'><Link href={'/collections/1'}>
                                <h3 className='md:uppercase text-xs md:text-sm lg:text-md '>La ricerca dell'Essere ci renderà immortali</h3>
                            </Link></li>
                            <li onClick={() => setIsVisible(false)} className='md:hover:font-bold font-bold md:font-normal hover:scale-95 transition-all ease-in-out duration-200'><Link href={'/collections/2'}>
                                <h3 className='md:uppercase text-xs md:text-sm lg:text-md '>Ancient Perception</h3>
                            </Link></li>
                            <li onClick={() => setIsVisible(false)} className='md:hover:font-bold font-bold md:font-normal hover:scale-95 transition-all ease-in-out duration-200'><Link href={'/collections/3'}>
                                <h3 className='md:uppercase text-xs md:text-sm lg:text-md '>Respiravamo luce come fosse l'ultimo dei giorni</h3>
                            </Link></li>
                            <li onClick={() => setIsVisible(false)} className='md:hover:font-bold font-bold md:font-normal hover:scale-95 transition-all ease-in-out duration-200'><Link href={'/collections/4'}>
                                <h3 className='md:uppercase text-xs md:text-sm lg:text-md '>Protezione infinita, ascoltami</h3>
                            </Link></li>
                            <li onClick={() => setIsVisible(false)} className='md:hover:font-bold font-bold md:font-normal hover:scale-95 transition-all ease-in-out duration-200'><Link href={'/collections/5'}>
                                <h3 className='md:uppercase text-xs md:text-sm lg:text-md '>Madre del presente</h3>
                            </Link></li>
                            <li onClick={() => setIsVisible(false)} className='md:hover:font-bold font-bold md:font-normal hover:scale-95 transition-all ease-in-out duration-200'><Link href={'/collections/6'}>
                                <h3 className='md:uppercase text-xs md:text-sm lg:text-md '>La luce di notte profuma d'incenso</h3>
                            </Link></li>
                            <li onClick={() => setIsVisible(false)} className='md:hover:font-bold font-bold md:font-normal hover:scale-95 transition-all ease-in-out duration-200'><Link href={'/collections/7'}>
                                <h3 className='md:uppercase text-xs md:text-sm lg:text-md '>Gocce di terra in questa eterna provincia</h3>
                            </Link></li>
                            <li onClick={() => setIsVisible(false)} className='md:hover:font-bold font-bold md:font-normal hover:scale-95 transition-all ease-in-out duration-200'><Link href={'/collections/8'}>
                                <h3 className='md:uppercase text-xs md:text-sm lg:text-md '>Solida la mente di chi sa percepire</h3>
                            </Link></li>
                            <li onClick={() => setIsVisible(false)} className='md:hover:font-bold font-bold md:font-normal hover:scale-95 transition-all ease-in-out duration-200'><Link href={'/collections/9'}>
                                <h3 className='md:uppercase text-xs md:text-sm lg:text-md '>Ardere senza fiamma fra le gocce di rugiada</h3>
                            </Link></li>
                            <li onClick={() => setIsVisible(false)} className='md:hover:font-bold font-bold md:font-normal hover:scale-95 transition-all ease-in-out duration-200'><Link href={'/collections/10'}>
                                <h3 className='md:uppercase text-xs md:text-sm lg:text-md '>Quasi come una magia</h3>
                            </Link></li>
                            <li onClick={() => setIsVisible(false)} className='md:hover:font-bold font-bold md:font-normal hover:scale-95 transition-all ease-in-out duration-200'><Link href={'/collections/11'}>
                                <h3 className='md:uppercase text-xs md:text-sm lg:text-md '>Versare una donna dentro un uomo, spargere quest'acqua sopra il fuoco</h3>
                            </Link></li>
                        </ul>}
                </Link>
                {/* <Link href={'/nft'}>
                    <h3 className='text-xs md:text-sm font-semibold'>NFT</h3>
                </Link> */}
                <Link href={'/about'}>
                    <h3 className='text-xs md:text-sm font-semibold'>ABOUT</h3>
                </Link>


                {/* NFT PAGE LINK - DECOMMENTING LATER  */}
                {/* <Link href={'/nft'}>
                    <h3 className='text-xs md:text-sm font-semibold'>NFT</h3>
                </Link> */}
                <div className="hidden md:inline-flex space-x-5 items-center">
                </div>
            </div>

            <div className="pl-4 md:pl-0 flex items-center space-x-5 text-black">
                <a href='https://t.me/bysimonerisi' target={'_blank'}>
                    <img className=' cursor-pointer w-4 md:w-5 hover:scale-110 transition-all duration-200 ease-in-out' src="../imgs/logos/telegram-logo.png" alt="" />
                </a>
                <a href='https://twitter.com/bysimonerisi' target={'_blank'}>
                    <img className=' cursor-pointer w-4 md:w-5 hover:scale-110 transition-all duration-200 ease-in-out' src="../imgs/logos/twitter-logo.png" alt="" />
                </a>
                <a href='https://instagram.com/bysimonerisi' target={'_blank'}>
                    <img className=' cursor-pointer w-4 md:w-5 hover:scale-110 transition-all duration-200 ease-in-out' src="../imgs/logos/instagram-logo.png" alt="" />
                </a>




                {/* CONNECT WALLET BUTTON */}
                {/* <button className="text-xs md:text-sm border px-4 pt-2 pb-1  bg-white text-black hover:bg-gray-100 shadow-gray-800 shadow-md hover:shadow-black hover:shadow-lg hover:text-black transition-all duration-200 ease-in-out rounded-md border-black cursor-pointer font-bold">
                    <div className='inline-flex items-center justify-center mx-auto'>
                        <img className='w-4 h-4 md:w-7 md:h-auto self-center justify-self-center' src="/../imgs/logos/wallet.png" alt="" />
                        <span className='ml-2 hidden md:block md:text-xs lg:text-sm'>CONNECT WALLET</span>
                        <span className='ml-2 md:hidden text-center self-center justify-self-center'>CONNECT</span>
                    </div>
                </button> */}

            </div>

        </header>


    );
}

export default Header;
