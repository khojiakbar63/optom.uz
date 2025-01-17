import { FC } from 'react'
import './_style.scss'


interface ContainerProps {
  children: React.ReactNode
}
const Container:FC<ContainerProps> = ({children}) => {
  return (
    <div className='container'>
      {children}
    </div>
  )
}

export default Container
