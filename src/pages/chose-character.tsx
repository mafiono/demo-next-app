/* eslint-disable @next/next/no-img-element */
import Router from 'next/router'
import React from 'react'

const ChoseCharacter = () => {
  return (
    <div className='flex flex-col flex-1 h-screen gap-[1rem]'>
      <div className='p-[.5rem]'>
        <button
          className='flex items-center gap-[1rem]'
          onClick={() => Router.push('/')}
        >
          <img
            src='/assets/icons/back-arrow.svg'
            className='h-[28px] md:h-[40px] aspect-square'
            alt='back-arrow'
          />
          <p className='label-card font-semibold text-white'>Back</p>
        </button>
      </div>
      <div>
        <h1 className='title-page text-center text-white'>Choose Character</h1>
      </div>
      <div className='h-full'>
        <div className='container mx-auto h-full p-[1rem] md:p-0'>
          <div className='grid grid-cols-2 md:grid-cols-4 h-full gap-[1rem]'>
            {Array(
              {
                img: '/assets/character/character_sports.svg',
                label: 'Sportsbook Specialist',

                features: [
                  {
                    text: 'Bonus Sportsbook Game 5%',
                  },
                  {
                    text: 'Bonus Slot Game 1%',
                  },
                  {
                    text: 'Bonus Live Kasino Game 1%',
                  },
                ],
              },
              {
                img: '/assets/character/character_slot.svg',
                label: 'Slot Specialist',
                features: [
                  {
                    text: 'Bonus Sportsbook Game 1%',
                  },
                  {
                    text: 'Bonus Slot Game 5%',
                  },
                  {
                    text: 'Bonus Live Kasino Game 1%',
                  },
                ],
              },
              {
                img: '/assets/character/character_casino.svg',
                label: 'Casino Specialist',

                features: [
                  {
                    text: 'Bonus Sportsbook Game 5%',
                  },
                  {
                    text: 'Bonus Slot Game 1%',
                  },
                  {
                    text: 'Bonus Live Kasino Game 1%',
                  },
                ],
              },
              {
                img: '/assets/character/character_allrounder.svg',
                label: 'All Rounder',

                features: [
                  {
                    text: 'Bonus Sportsbook Game 4%',
                  },
                  {
                    text: 'Bonus Slot Game 0.8%',
                  },
                  {
                    text: 'Bonus Live Kasino Game 0.8%',
                  },
                ],
              },
            ).map((e, i) => {
              return (
                <div
                  key={i.toString()}
                  className='h-full flex flex-col items-center justify-center'
                >
                  <div
                    className={`md:w-[187.06px] md:h-[362.19px] lg:h-[502.96px] lg:w-[259.76px]  hover:scale-105 cursor-pointer transition-all card character border-[4px] p-[1em] flex flex-col items-center justify-between`}
                  >
                    <img
                      className=' w-[98px] h-[129px] md:w-[146.39px] md:h-[192.48px] lg:h-[203.29px] lg:w-[203.29px] -mt-[57px]'
                      alt={e.label}
                      src={e.img}
                    />
                    <div className='flex items-center flex-col'>
                      <h2 className=' whitespace-nowrap label-card font-bold text-white text-center'>
                        {e.label}
                      </h2>
                      <ul className='list-disc marker:text-white p-[1rem]'>
                        {e.features.map((e, idx) => {
                          return (
                            <li key={idx.toString()}>
                              <p className='text-white text-[8px] md:text-[10px] lg:text-[12px]'>
                                {e.text}
                              </p>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                    <button className='choose-btn btn --md p-[0.5rem]'>
                      <span>Choose Character</span>
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
    // <div className='h-screen'>

    //   <h1 className='title-page text-center text-white'>Choose Character</h1>
    //   <div className='grid grid-cols-4 bg-blue-800 h-full'>
    //     {Array(4)
    //       .fill(0)
    //       .map((e, index) => {
    //         return (
    //           <div className='bg-red-300 p-[1rem]' key={index.toString()}>
    //             Enim enim laboris pariatur laborum laboris minim irure do ad
    //             officia consectetur laborum adipisicing voluptate. Anim do
    //             officia in nostrud consectetur ad tempor culpa adipisicing
    //             aliqua mollit ullamco cillum. Reprehenderit veniam ullamco anim
    //             commodo consequat duis irure do pariatur ea ex magna.
    //           </div>
    //         )
    //       })}
    //   </div>
    // </div>
  )
}

export default ChoseCharacter
