import { FC } from 'react'
import { HeaderBase, HeaderBottom, HeaderTop } from './layouts'

const Header:FC = () => {
  return (
    <>
      <HeaderTop/>
      <HeaderBase/>
      <HeaderBottom/>
    </>
  )
}

export default Header
