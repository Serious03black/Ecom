import React from 'react'

const NewsLettter = () => {
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subcribe now & get 20% off</p>
        <p className='text-gray-400 mt-3'> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sapiente, soluta quae vitae iusto omnis iste dolorum quo ad facilis hic facere explicabo unde amet architecto odio itaque dolore nam?
        </p>
        <form action="submit" className='w-full sm:w-1/2 items-center gap-3 mx-auto my-6 border pl-3'>
            <input type="email" placeHOlder='email' className='w-full sm:flex-1 outline-none required' />
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBCRIBE</button>
        </form>
    </div>
  )
}

export default NewsLettter