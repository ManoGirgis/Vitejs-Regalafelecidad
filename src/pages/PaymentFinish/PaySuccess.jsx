import React, { Component } from 'react'

export const PaySuccess = () => {

    
  
    return (
        <div className="container mx-auto p-6 bg-white p-6 shadow-md rounded-lg text-center">
            <h1 className="text-rgx-blue text-[42px] font-semibold mb-8 font-montserrat" >¡Pago exitoso!</h1>
            <p className="mt-2 px-2 py-1 rounded-md">Gracias por tu compra.</p>
            <button
             type="button"
             className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
             onClick={
                ()=>window.location.href = "/home"
             }
            >Al inicio</button>
        </div>
    )
  }


export default PaySuccess
