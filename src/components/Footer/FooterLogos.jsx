import React from 'react'
import footerKit from "../../assets/footer-kit.webp"
import regalexiaLogo from '../../assets/logo-regalexia.png'

//Redes
import Facebook from "../../assets/icon-fb.webp"
import Instagram from "../../assets/icon-ig.webp"
import YouTube from "../../assets/icon-yt.webp"
import KidsCluster from "../../assets/kids-cluster.webp"

export default function FooterLogos() {
  return (
    <div className='container flex justify-center mt-6 flex-col items-end gap-4 mx-auto'>        
    <img className='w-4/6' src={footerKit} alt="Kit Digital" />
    <div className='flex flex-row items-center gap-3'>
        <img src={regalexiaLogo} alt="Regalexia" className='w-32'/>
        <a href="https://www.facebook.com/regalexia">
          <img src={Facebook} alt="Visitar Facebook" className='w-7'/>
        </a>
        <a href="https://www.instagram.com/regalexia/">
          <img src={Instagram} alt="Visitar Instagram" className='w-7'/>
        </a>
        <a href="https://www.youtube.com/@RegalexiaRegalaIlusiones">
          <img src={YouTube} alt="Visitar YouTube" className='w-7'/>
        </a>
        <span className='max-w-16 text-sm leading-4 font-regular'>Formamos parte de:</span>
        <a href="https://www.kids-cluster.com/es/">
          <img src={KidsCluster} alt="Visitar Kid's Cluster" className='w-19'/>
        </a>
    </div>
    </div>
  )
}
