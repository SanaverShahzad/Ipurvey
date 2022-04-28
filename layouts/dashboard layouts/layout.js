import React from 'react'
import Navbar from '../../components/dashboard components/sidebar/Navbar'
export default function layout(props) {
  const data = (v) => {
      props.main(v)
  };
    return (
        <>
        <Navbar main={data}>
           {props.children}
        </Navbar>
        </>
        
    )
}
