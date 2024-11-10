import { HiOutlineMail } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className='pt-32 container' data-aos="fade-right">
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>
              <h2 className='text-5xl text-[#00cfff]'> Get in Touch! Contact-Us</h2>  
              <p className='text-gray-600 text-[18px] pt-2'>
               Feel free to reach out! I&apos;m always open to discussing
               new projects, creative ideas, or opportunities to be
               part of your visions. Let&apos;s connect and explore how
               we can work together to achieve something remarkable!
              </p>
              <div className='flex gap-3 items-center text-[#00cfff]'>
              <HiOutlineMail size = {30} /> <a href="mailto:mar6736y@gmail.com">Maryam&apos;s gmail.com</a>
              </div>
              <div className='flex gap-3 items-center text-[#00cfff] '>
              <FaPhoneAlt size = {30} /> 03177976736
              </div>
              <div className='flex gap-3 items-center text-[#00cfff]'>
              <FaLinkedin size = {30} /> <a target='_blank' href="https://www.linkedin.com/in/maryam-abbas-5a4729304/">My LinkedIn</a>
              </div>
              <div className='flex gap-3 items-center text-[#00cfff]'>
              <FaGithub size = {30} /> <a target='_blank' href="https://github.com/MaryamAbbas0">My Github</a>
              </div>
            </div>
            <div className='space-y-8'>
                <div className='flex flex-col gap-1 text-[#00cfff]'>
                    <label htmlFor="name">Name</label>
                    <input type="text" 
                    className='h-[40px] bg-transparents border border-accent bg-black text-white'
                    id="name"
                    />
                </div>
                <div className='flex flex-col gap-1 text-[#00cfff]'>
                    <label htmlFor="email">Email</label>
                    <input type="mail" 
                    className='h-[40px] bg-transparents border border-accent bg-black text-white'
                    id="email"
                    />
                </div>

                <div className='flex flex-col gap-1 text-[#00cfff]'>
                    <label htmlFor="message">Message</label> 
                    <textarea
                    className= 'bg-transparent border border-accent  bg-black text-white'
                    id="message" rows = {8} > 
                    </textarea>
                    
                </div>
                <button className='bg-accent p-2 px-6 bg-[#00cfff] text-black'>Send</button>
            </div>
        </div>
    </div>
  )
}

export default Contact;
