import React from 'react'
import Image from 'next/image'
import Wave from 'react-wavify'

function Banner() {
	return (
		<div className='home	 banner flex flex-col w-full h-[100vh] items-center justify-center relative'>
			<div className="wrapper-card justify-center items-center flex flex-col w-[90%] h-[100%] relative gap-y-1">

				<div className="wrapper-img absolute bottom-0 z-10 flex items-end justify-center h-[90vh] w-[60vh]">
			<Image src="/Banner-model.png" fill className=' banner-image drop-shadow-[3px_6px_12px_rgba(0,0,0,0.3)] brightness-125 grayscale hover:grayscale-0 transition-all'/>
			</div>

			<div className="card-top w-full h-[50%] rounded-[3rem] relative flex flex-col justify-center items-center z-1">
							 <h1 
							 className='font-bold text-[12.4em] top-[-5vh] absolute tracking-tight z-[2] text-white banner-title'>
								Saputra Putu
								</h1>
			<div className="wave absolute h-[50%] bottom-[-1px] flex justify-end w-full rounded-b-[3rem] overflow-hidden">
			<Wave fill='#ff7f00'
        paused={false}
        options={{
          height: 0,
          amplitude: 25,
          speed: 0.20,
          points: 5	
        }
			}
  />
	</div>
			</div>
			<div className="card-bot w-full h-[50%] bg-blue-600 rounded-[3rem] relative flex flex-row items-center justify-between px-[5vh]">
					<div className="textbox-banner px-[5vh] pt-[2vh] w-[30%] h-[80%] ">
							<h1 className='text-3xl font-bold text-white w-[90%] tracking-tighter pb-5 capitalize'>Helo!<br />
							I'm Putu Saputra, I want to be a programmer
							 </h1>
							 <p className='text-base text-white w-[60%] capitalize  pb-10'>I am an ordinary student who likes to be curious </p>
					</div>
					<div className="wrapper-sosmed flex flex-col items-center justify-between w-[fit-content] h-[70%]  mr-[5vh] ">
					<div className="garis  w-[2px] h-2 bg-white"></div>
					<div className="garis  w-[2px] h-10 bg-white"></div>
					<a href="" className=''><Image src="/github.png" width={40} height={40} className="bg-white rounded-full p-2 grayscale contrast-200 hover:grayscale-0 hover:contrast-100"/></a>
					<a href="" className=''><Image src="/instagram.png" width={40} height={40} className="bg-white rounded-full p-2 grayscale contrast-200 hover:grayscale-0 hover:contrast-100"/></a>
					<a href="" className=''><Image src="/whatsapp.png" width={40} height={40} className="bg-white rounded-full p-2 grayscale contrast-200 hover:grayscale-0 hover:contrast-100"/></a>
					<div className="garis w-[2px] h-10 bg-white"></div>
					<div className="garis  w-[2px] h-2 bg-white"></div>
					</div>
			</div>
			</div>
		</div>
	);
}
export default Banner;