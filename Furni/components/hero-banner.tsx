"use client"
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { bannerQuery } from '@/sanity/lib/queries';
import { BannerData } from '@/types/banner';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'


const Hero = () => {






    const [allProducts, setAllProducts] = useState<BannerData[]>([]);

    useEffect(() => {
      async function fetchProducts() {
        const products: BannerData[] = await client.fetch(bannerQuery);
        setAllProducts(products);
      }
  
      fetchProducts();
    }, []);
  
    

  return (
    <>
      <section>
        <div className='px-8 py-12'>
          <div className='flex flex-col md:flex-row'>
            <div className='w-full md:w-[60%] h-auto md:h-[580px] border border-black bg-[#2A254B] text-white px-4 md:px-12 py-6 md:py-12 flex flex-col justify-between'>
              <div>
                <h1 className='text-xl md:text-3xl md:text-left'>
                  The furniture brand for the future with <br /> the timeless designs
                </h1>
                <div className='flex justify-center md:justify-start'>
                  <button className='w-[170px] h-[56px] bg-transparent text-white border border-green-600 font-bold mt-12'>
                    View collection
                  </button>
                </div>
              </div>

              <div className='my-4 md:my-0'>
                <p className='text-sm md:text-base md:text-left'>
                  A new era in eco-friendly furniture with Avion, the French luxury retail brand
                  <br /> with sleek fonts, full colors, and a beautiful way to display things digitally
                  <br /> using modern web technologies.
                </p>
              </div>
            </div>
            {allProducts.map((banner) => (

            <div key={banner._id} className='w-full md:w-[40%] h-auto md:h-[580px] bg-green-500 flex justify-center items-end'>
             {banner.image && (

              <Image src={urlFor(banner.image).url()} width={400} height={400} alt='right' />
             )}
            </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero;