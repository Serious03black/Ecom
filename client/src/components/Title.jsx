import React from 'react'

const Title = ({Text1,Text2}) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3'>
        <p className='text-grey-700 '>{Text1} <span className='text-gray-700 font-medium'>{Text2}</span></p>
        <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'></p>
    </div>
  )
}
        <Title text1={'RELETED'} text2={'PRODUCT'} />

export default Title