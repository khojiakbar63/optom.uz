import { FC } from 'react'

const Btn :FC= () => {
  return (
    <button className='bg-[var(--green-40)] block px-[77px] py-[5px] rounded-full font-bold text-[14px] text-white mt-3 hover:bg-[#5e9540ec] active:bg-[#5E9540] duration-100 ease-in-out'>
      Buy
    </button>
  )
}

export default Btn
