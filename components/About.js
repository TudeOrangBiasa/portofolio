import React from 'react'
import Image from 'next/image'


function About() {
	return (
	<div className='h-[100vh] w-full flex justify-center items-center relative about'>
		<div className='w-full h-[95%] absolute overflow-hidden wrapper-circle'>
		<div className='circle1 absolute z-[-1]'></div>
		<div className='circle2 absolute z-[-1]'></div>
		</div>
		<div className='w-[90%] h-full flex flex-col justify-center items-center'>
		<div className="w-full h-[95%] flex flex-row items-center justify-between relative wrapper-about">

			<div className='h-full w-[25%] flex justify-center items-center rounded-[2rem] bg-white card-about-title'>
					<h1 className='text-black rotate-[-90deg] font-bold text-[5em]'>About</h1>
			</div>
			<div className='h-full w-[74%] flex justify-center items-center flex-col card-about p-[5vh]'>
					<div className="top-about w-[95%] h-[30%] flex justify-between items-center flex-row top-about"> 
					<div className='h-[20vh] w-[20vh] relative rounded-full img-about'>
						<Image src="/Img-about.png" fill className='absolute rounded-full' />
					</div>
					<div className='p-[3vh] w-[75%] h-[fit-content] rounded-[3rem] border-2 border-white flex flex-col justify-center items-center text-box-about'>
						<p className='text-white font-normal'>Hi, My name is I Putu Gede Saputra but i go by <span className='font-bold text-orange-400'>Tude</span>, 
						I am a <span className='font-bold text-orange-400'>Students from SMK TI Global Badung</span> and i have interest to <span className='font-bold text-orange-400'>Website Design</span>.</p>
					</div>

					</div>
					<div className="bot-about w-[95%] h-[65%] flex flex-row justify-between items-center ">
						<div className='w-[30%] h-full relative rounded-[1.5rem] flex flex-col education-wrapper'>
							<div className='flex flex-col py-[5vh] w-full text-white child'>
								<h1 className='text-[1.2em] font-bold pb-[2vh]'>Education</h1>
								<div className='flex flex-col '>
									<h1>2012-2018</h1>
									<p>Sd No. 3 Kerobokan</p>
								</div>
								<div className='flex flex-col py-[1vh]'>
									<h1>2018-2021</h1>
									<p>SMPN 1 Kuta Utara</p>
								</div>
								<div className='flex flex-col '>
									<h1>2021-Now</h1>
									<p>SMK TI Global Badung</p>
								</div>
							</div>

							<div className='w-full flex flex-col text-white child'>
							<h1 className='text-[1.2em] font-bold pb-[2vh]'>Languages</h1>
							<div className='flex flex-col'>
									<h1>- Indonesia</h1>
								</div>
								<div className='flex flex-col'>
									<h1>- Bali</h1>
								</div>
							</div>
						</div>
						<div className='w-[40%] h-full px-[3vh] flex-col flex translate-x-9 abilities-wrapper'>
						<div className='flex flex-col py-[5vh] w-full text-white child'>
								<h1 className='text-[1.2em] font-bold pb-[2vh]'>Abilites</h1>
								<div className='flex flex-col '>
									<h1>- Responsible</h1>
								</div>
								<div className='flex flex-col '>
									<h1>- Creative</h1>
								</div>
								<div className='flex flex-col '>
									<h1>- Positive</h1>
								</div>
								<div className='flex flex-col '>
									<h1>- Teamwork</h1>
								</div>
							</div>
							<div className='flex flex-col text-white child'>
							<h1 className='text-[1.2em] font-bold pb-[2vh]'>Software</h1>

								<div className='flex flex-col '>
								<div className='flex flex-row items-center'>
								<div className='relative h-6 w-6 mr-3'>
									<Image src="/pinterest.png" fill className="absolute bg-white rounded-md"/>
								</div>
									<h1>Pinterest</h1>
									</div>
									<p>looking for inspiration and design trends</p>
								</div>

								<div className='flex flex-col my-[1vh]'>
								<div className='flex flex-row items-center'>
								<div className='relative h-6 w-6 mr-3'>
									<Image src="/visual-studio.png" fill className="absolute bg-white rounded-md"/>
								</div>
									<h1>Visual Studio</h1>
									</div>
									<p>code editor to create projects</p>
								</div>

							</div>
						</div>
						<div className='w-[30%] h-full flex-col flex text-white justify-center items-center gap-[4px] translate-y-8 interest-wrapper'>
						<h1 className='text-[1.2em] font-bold title-interest'>Interest</h1>
						<div className='flex flex-col justify-center items-center'>
						<div className='relative h-10 w-10 item'>
									<Image src="/weights.png" fill className="absolute bg-white rounded-full"/>
								</div>
								<h1>Gym</h1>
						</div>
						<div className='flex flex-col justify-center items-center p-[2vh]'>
						<div className='relative h-10 w-10 item'>
									<Image src="/automation.png" fill className="absolute bg-white rounded-full"/>
								</div>
								<p>Games</p>
						</div>
						<div className='flex flex-col justify-center items-center'>
						<div className='relative h-10 w-10 item'>
									<Image src="/headphones.png" fill className="absolute bg-white rounded-full"/>
								</div>
								<p>Music</p>
						</div>
						<div className='flex flex-col justify-center items-center p-[2vh]'>
						<div className='relative h-10 w-10 item'>
									<Image src="/web-design.png" fill className="absolute 
									 rounded-full"/>
								</div>
								<p>web design</p>
						</div>
						</div>
					</div>
			</div>
		</div>

		</div>
	</div>
	);
}
export default About;