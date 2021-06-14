import * as React from 'react'
import Header from '../Header'
import Footer from '../Footer'

function Layout(props: any) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  )
}
export default Layout