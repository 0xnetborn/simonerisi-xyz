import React from 'react'

function Footer() {
  return (
    <div className='px-5 md:px-0 py-10 border border-gray-400 flex justify-between items-center'>
        <div className='flex mx-auto justify-center py-4'>
        <img className='w-44' src="/../imgs/logos/LOGO by Simone Risi.png" alt="" />
        </div>
        
        <div className='flex mx-auto justify-center'>
                <p className='max-w-xl text-xs font-thin text-center hidden md:block'>Embrace the beauty of intimacy as we wander through the streets of Italy, capturing the essence of the human experience through every frame.</p>
        </div>

        <div className='flex mx-auto justify-center space-x-5 py-5'>
        <a href='https://t.me/bysimonerisi' target={'_blank'}>
                    <img className='cursor-pointer w-4 md:w-5 hover:scale-110 transition-all duration-200 ease-in-out' src="../imgs/logos/telegram-logo.png" alt="" />
                </a>
                <a href='https://twitter.com/bysimonerisi' target={'_blank'}>
                    <img className=' cursor-pointer w-4 md:w-5 hover:scale-110 transition-all duration-200 ease-in-out' src="../imgs/logos/twitter-logo.png" alt="" />
                </a>
                <a href='https://instagram.com/bysimonerisi' target={'_blank'}>
                    <img className=' cursor-pointer w-4 md:w-5 hover:scale-110 transition-all duration-200 ease-in-out' src="../imgs/logos/instagram-logo.png" alt="" />
                </a>
        </div>

        
        <div className='pl-5 md:pl-0 flex mx-auto justify-center'>
                <p>nft@simonerisi.xyz</p>
        </div>
    </div>
  )
}

export default Footer