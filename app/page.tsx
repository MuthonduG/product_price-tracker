import React from 'react'
import Image from 'next/image'
import Searchbar from '@/components/Searchbar'
import HeroCarousel from '@/components/HeroCarousel'

const Home = () => {
  return (
    <>
      <section className='px-6 md:px-20 py-24'>
        <div className='flex max-xl:flex-col gap-16'>
          <div className='flex flex-col justify-center'>
            <p className='small-text'> 
              Smart shopping starts here:
              <Image src="/assets/icons/arrow-right.svg" alt="img" width={16} height={16}/>
            </p>
            <h1 className='head-text'> 
              Unleash the power of 
              <span className='text-primary'> Price Tracking </span>
            </h1>
            <p className='mt-6'>
              Powerful, self-serve product and growth analytics to help you convert, engage, and retain more.
            </p>

            <Searchbar/>
          </div>

          <HeroCarousel/>
        </div>
      </section>

      <section className='trending-section'>
        <h2 className='section-text'>Trending</h2>

        <div className='flex flex-wrap gap-x-8 gap-y-16'>
          {
            ["Apple Iphone 15", "Book", "Sneakers"].map((product, index)=>{
              return(
                <div key={index}>{product}</div>
              )
            })
          }
        </div>
      </section>
    </>
  )
}

export default Home
