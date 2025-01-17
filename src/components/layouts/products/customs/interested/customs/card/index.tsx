import  { FC } from 'react'
interface PropsI{
  img: string,
  title: string
}
const Card:FC<PropsI>= ({img, title}) => {
  return (
    <div className='max-w-[152px] !h-full '>
      <img className='mx-auto' src={img} alt="motor-cycle" />
      <p className='w-[152px] text-center text-[14px] mt-[20px]'>{title}</p>
    </div>
  )
}

export default Card
