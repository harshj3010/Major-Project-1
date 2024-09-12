import React from "react";
import img1 from '../Assets/[fpdl.in]_moon-is-coming-through-clouds_839976-318_normal.jpg'
import img2 from '../Assets/34599.jpg'
import img3 from '../Assets/g4.jpg'

export default function Cta() {
  return (
    <div className="">
      <div className=" text-center mt-3">
      <h1 className=" text-4xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">Ranked Prompts</h1>
      </div>
      <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 m-10 lg:ml-24 items-center justify-center ">
        <div>
        <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Natural Prompts</h5>
    <p className="font-normal text-gray-700 dark:text-gray-400"> 'Create an image of a tranquil forest scene with a flowing stream, lush greenery, and a warm, golden sunset.'</p>
    <img src={img1} alt="" className=" mt-2 rounded-full"/>
</a>
        </div>
        <div>
        <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Mythologic</h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">Envision the Irish fairy queen, the Tuatha Dé Danann's Queen Medb, ruling over her mystical realm</p>
    <img src={img2} alt="" className="mt-2 rounded-full"/>
</a>
        </div>
        <div>
        <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Cosmic</h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">Imagine an astronaut floating in the vastness of space, gazing at a beautiful cosmic phenomenon</p>
    <img src={img3} alt="" className=" mt-8 rounded-full"/>
</a>
        </div>
      </div>
    </div>
  );
}
