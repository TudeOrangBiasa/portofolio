import React from 'react'

function Contact() {
	return (
		<div className='w-full h-[110vh] flex items-center justify-center contact mt-[-5vh]'>
			<div className='w-[90%] h-[90%] flex flex-col justify-center items-center bg-white rounded-[3rem] p-[5vh] contact-card'>
				<div className='w-[50%] h-full flex flex-col justify-center items-center contact-wrapper'>
					<div className='w-full h-[30%] flex items-center title-contact'>
						<h1 className='text-[3em] font-bold tracking-tighter'>
							Love to hear from you, <br />Get in touch ✌
						</h1>
					</div>
					<div className='w-full h-[70%] mt-10 form-wrapper'>
						<form action="" >
							<div className='grid gap-6 mb-6 md:grid-cols-2'>
								<div>
									<label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 ">Name</label>
									<input type="text" id="Name" className=" text-gray-900  border-gray-300  border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="John" required />
								</div>
								<div>
									<label for="subject" className="block mb-2 text-sm font-medium text-gray-900 ">subject</label>
									<input type="text" id="Subject" className="  border-gray-300  border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Example" required />
								</div>
							</div>
							<div className="mb-6">
								<label for="email" className="block mb-2 text-sm font-medium text-gray-900">Email address</label>
								<input type="email" id="email" className="  border-gray-300  border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="john.doe@company.com" required />
							</div>
							<div className='mb-6'>
								<label for="massage" className="block mb-2 text-sm font-medium text-gray-900 ">Massage</label>
								<textarea
									className=" form-control only:block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:ring-blue-500 focus:border-blue-500  "
									id="exampleFormControlTextarea1"
									rows="3"
									placeholder="Your message"
								></textarea>
							</div>
							<button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
						</form>
					</div>
				</div>
				<div className='w-[50%] h-fit flex justify-between font-thin text-[16px] text-gray-500 footer'>
					<div><h1>© 2023 Putu Saputra.</h1></div>
					<div>Built with <a href="https://nextjs.org/" className='underline text-blue-700'> Next.Js</a></div>
				</div>
			</div>
		</div>
	)
}
export default Contact;
