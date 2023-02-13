import React from 'react'
import Image from 'next/image'
import Wave from 'react-wavify'

function Project() {
	return (
		<div className='w-full h-[100vh] flex flex-col justify-center items-center project'>
			<div className='w-[90%] h-full flex flex-col '>
				<div className='w-full h-full rounded-[3rem] flex flex-col justify-center items-center card-projects-container p-[2vh] relative'>
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
					<div>
						<h1 className='text-white font-bold text-[5em] text-center title-project'>Project</h1>
					</div>
					<div className='flex flex-row justify-center items-center h-[70vh] w-full mt-[3vh] gap-10 wrapper-project'>

						<div className='flex flex-col justify-center w-[60vh] h-[60vh] rounded-[1.5rem] card-project relative'>
							<div className='w-full h-full relative rounded-[1.5rem]'>
								<Image src="/Ubud-mockup.png" fill className="absolute rounded-[1.5rem]" />
							</div>
							<div className='w-full h-full rounded-[1.5rem] flex justify-center items-center absolute bg-pink-600 text-white opacity-0 hover:opacity-100 transition-all duration-200 ease-in-out'>
								<div className='w-[80%] h-[60%] flex flex-col justify-center item-hover'>
									<h1 className='text-[1.4em] font-extrabold mb-[4vh]'>D'Ubud Website</h1>
									<p className='text-[1.2em] mb-[4vh]'>This Website was create for school projects</p>
									<a href="https://transcendent-chebakia-4ff624.netlify.app/">
									<button type="button" className="btn w-[fit-content] focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 ">
										Visit Website</button>
										</a>
								</div>
							</div>
						</div>
						<div className='flex flex-col justify-center w-[60vh] h-[60vh] rounded-[1.5rem] card-project relative'>
							<div className='w-full h-full relative rounded-[1.5rem]'>
								<Image src="/Surfing-mockup.jpg" fill className="absolute rounded-[1.5rem]" />
							</div>
							<div className='w-full h-full rounded-[1.5rem] flex justify-center items-center absolute bg-pink-600 text-white opacity-0 hover:opacity-100 transition-all duration-200 ease-in-out'>
								<div className='w-[80%] h-[60%] flex flex-col justify-center item-hover'>
									<h1 className='text-[1.4em] font-extrabold mb-[4vh]'>Bali Surf Class Website</h1>
									<p className='text-[1.2em] mb-[4vh]'>This Website was create for school projects</p>
									<a href="https://chimerical-flan-a9ed38.netlify.app/">
									<button type="button" className="btn w-[fit-content] focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 ">
										Visit Website</button>
										</a>
								</div>
							</div>
						</div>
						




					</div>
				</div>
			</div>
		</div>
	)
}
export default Project;