import React from 'react'
import Back from '../Assets/yasaka-pagoda-sannen-zaka-street-kyoto-japan.jpg'
import { Link } from 'react-router-dom';

export default function hero() {
    const sectionStyle = {
        backgroundImage: `url(${Back})`,
      };
  return (
    <div>
      {/*   <section className=" bg-gray-900 min-h-screen">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                        Payments tool for software companies
                    </h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                        From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.
                    </p>

                    <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Cyan to Blue</button>
                    
                </div>
                <div className="lg:mt-0 lg:col-span-5 lg:flex">
                    <img src={Back} alt="mockup" />
                </div>
            </div>
        </section> */}

{/* <section className="bg-gray-900 min-h-screen relative">
   
    <div className="absolute inset-0 w-full h-full">
        <img src='' alt="background" className="object-cover w-full h-full opacity-80" />
    </div>

    <div className="grid min-h-screen place-items-center max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 relative z-10 lg:ml-96">
        <div className="mr-auto lg:col-span-7 text-center">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
                Payments tool for software companies
            </h1>
            <p className="max-w-2xl mb-6 font-light text-yellow-50 lg:mb-8 md:text-lg lg:text-x">
                From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.
            </p>

            <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2">Cyan to Blue</button>
        </div>


    </div>
</section> */}


<section style={sectionStyle} className="bg-center bg-no-repeat bg-cover bg-gray-700 bg-blend-multiply min-h-screen -mt-12">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-10 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          SanskritiGen AI: AI Image Generation at Your Fingertips
          </h1>
          <p className="mb-6 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          Immerse yourself in the vibrant essence of Indian culture as our AI-powered platform merges timeless tradition with cutting-edge technology. Explore an expansive canvas of artistic possibilities, from ancient motifs to contemporary designs, and discover how seamlessly our tools can transform your creative visions into stunning, culturally rich realities.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <Link to="/reg">
  {/* <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2">
    Join Now
  </button> */}
</Link>

          </div>


          <div>
        </div>
        <form action="#">
              <div class="  mt-12 items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                  <div class="relative w-full">
                      <input class="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter your prompt" required=""/>
                  </div>
                  <div>
                      <button type="submit" class=" bg bg-purple-400 hover:bg-purple-800 py-3 px-5 w-full text-sm font-medium text-center text-black rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg ">Generate</button>
                  </div>
              </div>
              
          </form>
        </div>
        
      </section>


      



      
    </div>
  )
}
