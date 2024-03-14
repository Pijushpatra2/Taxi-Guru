import React from 'react'
import Ellipse1 from "/images/contact/Ellipse 793.png";
import Ellipse2 from "/images/contact/Ellipse 794.png";
export default function ContactPage() {
  return (
    <div>
     <div>
      <h2 class="text-7xl font-sans font-bold flex justify-center mt-8">Contact Us</h2>
      <p class="text-4xl text-gray-500 flex justify-center font-semibold mt-5 tracking-wider">Any question or remarks?  &nbsp;Just write us a message!</p>
     </div>
    
      <div class="flex gap-8">
        <div class="  bg-[#FA8907] h-[625px] w-[510px] rounded-xl ml-14 pt-7 mt-16 shadow-3xl">
          <h4 class="text-3xl font-semibold tracking-wider pl-8 text-white">Contact Information</h4>
          <p className="mt-4 text-lg pl-8 font-extralight tracking-widest text-white ">Say something to start a live chat!</p>
          <div class="mt-24 ml-9 flex items-center text-white">

          <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M19.5 9.75a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 1.5 0v2.69l4.72-4.72a.75.75 0 1 1 1.06 1.06L16.06 9h2.69a.75.75 0 0 1 .75.75Z" clipRule="evenodd" />
  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
</svg>

</div>
<div class="pb-1 ml-12 text-lg font-thin">
  <p> +91–9465342092</p>
  </div>
</div>
<div class="mt-10 ml-9 flex items-center text-white">

          <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
</svg>


</div>
<div class="pb-1 ml-12 text-lg font-thin">
  <p> parvinderlidder8092@gmail.com</p>
  </div>
</div>
<div class="mt-10 ml-9 flex items-center text-white">

          <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
</svg>

</div>
<div class="pb-1 ml-12 text-lg font-thin">
  <p> Seunk, Mullanpur Garibdass, New <br/> Chandigarh, 140901</p>
  </div>
</div>
<div class="flex mt-40 ml-8 ">
  <div class="bg-[#1B1B1B] h-7 w-7 rounded-full mr-6"></div>
  <div class="bg-[#FFFFFF] h-7 w-7 rounded-full mr-6" ></div>
  <div class="bg-[#1B1B1B] h-7 w-7 rounded-full"></div>
</div>
<div >
<img src={Ellipse1} alt="" class="bottom-[133px] left-[358px] relative shadow-3xl"/>
</div>
  <div>
  <img src={Ellipse2} alt="" class="absolute top-[762px] left-[355px] shadow-3xl"/>
  </div>
        </div>
        <div className=' h-[52rem] w-[56rem] mt-[101px]'>
        <form className='text-gray-500'>
          <div className='flex gap-32  ml-[80px]'>
          <div>
            <div className='mb-4 text-lg'><label htmlFor="First Name">First Name</label></div>
            <div><input type="text" className='border-b-2 w-[325px] border-gray- h-12 outline-none text-base' /></div>
          </div>
          <div>
          <div className='mb-4 text-lg'><label htmlFor="First Name">Last Name</label></div>
            <div><input type="text" className='border-b-2 w-[325px] border-gray- h-12 outline-none text-base' /></div>
          </div>
         </div>
          <div className='flex gap-32  ml-[90px] mt-16'>
          <div>
            <div className='mb-4 text-lg'><label htmlFor="Email">Email</label></div>
            <div><input type="text" className='border-b-2 w-[325px] border-gray- h-12 outline-none text-base' /></div>
          </div>
          <div>
          <div className='mb-4 text-lg'><label htmlFor="Phone Number">Phone Number</label></div>
            <div><input type="text" className='border-b-2 w-[325px] border-gray- h-12 outline-none text-base' /></div>
          </div>
         </div>
          <div className='flex  ml-[90px] mt-16'>
          <div>
            <div className='mb-4 text-lg'><label htmlFor="Email">Journey Type</label></div>
            <div><input type="text" className='border-b-2 w-[765px] border-gray- h-12 outline-none text-base' /></div>
          </div>
          
         </div>
          <div className='flex  ml-[95px] mt-16'>
          <div>
            <div className='mb-4 text-lg'><label htmlFor="Email">Pick and Drop Address *</label></div>
            <div><input type="text" className='border-b-2 w-[765px] border-gray- h-12 outline-none text-base' /></div>
          </div>
          
         </div>
         
         <div className='  ml-[633px] mt-16'>
         <button className='bg-[#FA8907] text-white h-[56px] w-[195px] rounded-md text-lg shadow-lg'>Send Message</button>
         </div>
        </form>
  
        </div>
        </div>
        <div>
           <h2 className='text-center text-4xl font-extrabold'>24/7 available for customer support</h2>
           <p className='text-center text-xl font-medium tracking-wider mt-5'>At “The Taxi Guru”, we understand that travel plans can change at any time. That’s why our customer support <br />team is available 24/7 to assist you.</p>
        </div>
        <div className='mt-10'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30765493.77262258!2d61.02101754100091!3d19.731627470788023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1710414959120!5m2!1sen!2sin"  className='border-0 w-full h-[600px]' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
     
  )
} 
