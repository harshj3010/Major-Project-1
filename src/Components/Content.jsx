import React from 'react'
import Ct1 from '../Assets/[fpdl.in]_glowing-blue-sphere-held-by-human-hand-generated-by-ai_188544-41033_normal.jpg'
import Ct2 from '../Assets/[fpdl.in]_young-adults-enjoying-cheerful-nightlife-party-generated-by-ai_188544-14037_normal.jpg'
import { Link } from 'react-router-dom';

export default function Content() {
  return (
    <div className=''>
        <section class=' bg-slate-200'>
    <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img class="w-full dark:hidden shadow-2xl" src={Ct1} alt="dashboard image"/>
        <div class="mt-4 md:mt-0">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Earn with Your Creativity</h2>
            <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400 mt-5">
            Welcome to a unique opportunity where your creativity can turn into income. At Nva-AI, we believe in the power of artistic expression. Whether you're a professional photographer, graphic designer, or simply someone with a passion for creating visuals, you can now share your work with the world and earn from it. Showcase your talent, set your prices, and watch your creations find their way into the hearts and projects of buyers. 
            Join our growing community of artists and start turning your art into an income stream today.
            </p>
            <Link to ='/login'><button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Start Now
    <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg>
</button></Link>
        </div>
    </div>
</section>

<section class="bg-white mt-6">
    <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6 gap-4">
        <div class="mt-4 md:mt-0">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Unleash Limitless Creativity</h2>
            <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400 mt-5">With Nova-AI, creativity knows no bounds. Our cutting-edge AI image generation tools empower you to produce an infinite array of stunning visuals. Whether you're a designer in need of inspiration or someone with a vivid imagination, you can access our intuitive platform to generate images that match your vision. Experiment, customize, and explore the endless possibilities. From landscapes to abstract art, our AI can bring your ideas to life. The only limit is your imagination. 
            Join us today and start creating without constraints.</p>
            <Link to ='/reg'>
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Explore more
    <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg>
</button></Link>
        </div>
        <img class="w-full dark:hidden shadow-2xl" src={Ct2} alt="dashboard image"/>
    </div>

</section>

      
    </div>
  )
}
