import React from 'react'
import Header from '../components/Header'
import VerbSection from '../components/HomeBody/VerbSection'
import NounSection from '../components/HomeBody/NounSection'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default function Home () {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
        <Header/>
        <Slider {...settings}>
          <div className='flex justify-center my-5'>
            <div className='flex justify-center my-5 '>
              <div className='w-[320px] bg-white rounded-2xl flex flex-col items-center gap-5 p-4 shadow-xl'>
                <div className='text-center'>
                  <h3 className='text-xl font-semibold'>Book</h3>
                </div>
                {/* noun section */}
                <div className=' w-[300px] bg-bluebg  rounded-2xl p-3 mb-4'>
                  <div className='flex justify-between mb-3'>
                    <div className='text-lg font-semibold'>
                      <h3>Noun</h3>
                    </div>
                    <NounSection heading="M" text="Book" />
                  </div>
                  <div className='flex justify-between '>
                    <NounSection heading="singular" text="Book" />
                    <NounSection heading="plural" text="Books" />
                  </div>
                </div>
                {/* verb section */}
                <div className=' w-[300px] bg-bluebg  rounded-2xl p-3'>
                  <div className='flex justify-between mb-3'>
                    <div className='text-lg font-semibold'>
                      <h3>Verb</h3>
                    </div>
                  <VerbSection heading="M" text="Book"/>
                </div>
                <div className="grid grid-cols-2 grid-rows-7" style={{ gap: '20px 30px' }}>
                  <VerbSection heading="Singular" text="Book"/>
                  <VerbSection heading="Plural" text="Book"/>
                  <VerbSection heading="SP" text="I book"/>
                  <VerbSection heading="PC" text="I am book"/>
                  <VerbSection heading="PP" text="I have booked"/>
                  <VerbSection heading="PPC" text="I have been booking"/>
                  <VerbSection heading="SPa" text="I booked"/>
                  <VerbSection heading="PaC" text="I was booking"/>
                  <VerbSection heading="PaP" text="I had booked"/>
                  <VerbSection heading="PaPC" text="I had been booking"/>
                  <VerbSection heading="SF" text="I will book"/>
                  <VerbSection heading="FC" text="I will be booking"/>
                  <VerbSection heading="FP" text="I will have booked"/>
                  <VerbSection heading="FPC" text="I will have been booking"/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-center my-5'>
            <div className='flex justify-center my-5 '>
              <div className='w-[320px] bg-white rounded-2xl flex flex-col items-center gap-5 p-4 shadow-xl'>
                <div className='text-center'>
                  <h3 className='text-xl font-semibold'>Head</h3>
                </div>
                {/* noun section */}
                <div className=' w-[300px] bg-bluebg  rounded-2xl p-3 mb-4'>
                  <div className='flex justify-between mb-3'>
                    <div className='text-lg font-semibold'>
                      <h3>Noun</h3>
                    </div>
                    <NounSection heading="M" text="Book" />
                  </div>
                  <div className='flex justify-between '>
                    <NounSection heading="singular" text="Book" />
                    <NounSection heading="plural" text="Books" />
                  </div>
                </div>
                {/* verb section */}
                <div className=' w-[300px] bg-bluebg  rounded-2xl p-3'>
                  <div className='flex justify-between mb-3'>
                    <div className='text-lg font-semibold'>
                      <h3>Verb</h3>
                    </div>
                  <VerbSection heading="M" text="Book"/>
                </div>
                <div className="grid grid-cols-2 grid-rows-7" style={{ gap: '20px 30px' }}>
                  <VerbSection heading="Singular" text="Book"/>
                  <VerbSection heading="Plural" text="Book"/>
                  <VerbSection heading="SP" text="I book"/>
                  <VerbSection heading="PC" text="I am book"/>
                  <VerbSection heading="PP" text="I have booked"/>
                  <VerbSection heading="PPC" text="I have been booking"/>
                  <VerbSection heading="SPa" text="I booked"/>
                  <VerbSection heading="PaC" text="I was booking"/>
                  <VerbSection heading="PaP" text="I had booked"/>
                  <VerbSection heading="PaPC" text="I had been booking"/>
                  <VerbSection heading="SF" text="I will book"/>
                  <VerbSection heading="FC" text="I will be booking"/>
                  <VerbSection heading="FP" text="I will have booked"/>
                  <VerbSection heading="FPC" text="I will have been booking"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  )
}
