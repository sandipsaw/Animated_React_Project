import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import {ScrollTrigger} from 'gsap/all'
 
const Agence = () => {

  const imageDivRef = useRef(null);
  const imageRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger)

const imageArray = [
  'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
  'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
  'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
  'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
  'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
  'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
  'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
  'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
  'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
  'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
  'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
  'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
  'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
  'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
  'https://k72.ca/uploads/teamMembers/PLP2_640x960-640x960.jpg',
  'https://k72.ca/uploads/teamMembers/joel_640X960_3-640x960.jpg',
]

  useGSAP(function(){
    gsap.to(imageDivRef.current,{
      scrollTrigger:{
        trigger:imageDivRef.current,
        start:'top 23%',
        end:'top -120%',
        scrub:true,
        pin:true,
        onUpdate:(elem)=>{
          let index;
          if(elem.progress < 1){
            index = Math.floor(elem.progress * imageArray.length);
          }else{
            index = imageArray.length-1
          }
          imageRef.current.src = imageArray[index];
        }
      }
    })
  })

  return (
    <div>
      <div className='section-1'>
        <div ref={imageDivRef} className='lg:w-[15vw] lg:h-[40vh] w-[13vw] h-[150px] sm:h-[18vh] sm:w-[20vw] sm:top-0 sm:left-47 rounded-3xl overflow-hidden absolute lg:top-42 lg:left-[30vw] '><img ref={imageRef} className='h-full w-full object-cover' src='https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg' /></div>
        <div className='relative'>
          <div className='lg:mt-[56vh] mt-[30vh]'>
            <h1 className='text-[20vw] font-[laus-500] uppercase text-center leading-[17vw]'> Soixan7e Douze</h1>
          </div>
          <div className=' pl-[40%] pr-1'>
            <p className='text-[3.6vw] leading-[3.7vw] font-[laus-500] tracking-normal'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
          </div>
        </div>
      </div>
      <div className="section-2 h-screen">

      </div>
    </div>
  )
}

export default Agence