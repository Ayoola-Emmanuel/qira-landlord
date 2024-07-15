import React from 'react'

const Modal = ({width, children}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-[2000]">
      <div className="bg-white p-5 rounded-lg w-full mx-auto" style={{width: width}}>
        {children}
      </div>
    </div>
  )
}

export default Modal