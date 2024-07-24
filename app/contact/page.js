"use client";
import Link from 'next/link'
import { useState } from 'react';

const socialMediaLinks = [
  {
    id: 'sml1',
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/preethipantangi/',
    icon: 'https://cdn-icons-png.flaticon.com/512/174/174857.png'
  },
  {
    id: 'sml2',
    name: 'Github',
    link: 'https://github.com/PreethiPantangi',
    icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png'
  }
];

const page = () => {

  const [formDetails, setFormDetails] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const updateFormValue = (e) => {
    console.log(e.target.id, e.target.value);
    let key = e.target.id; 
    let value = e.target.value;
    let data = {[key]: value}
    setFormDetails((prevFormDetails) => ({...prevFormDetails, ...data}))
  };

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(formDetails);
  }

  return (
    <div className='w-full overflow-y-hidden p-4'>
      <div className='text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-br'>Better together!</div>
      <div className='text-sm'>Liked my work or have something for me? Let's collaborate!</div>
      <div className='flex mt-3'>
        <div className='flex-1 w-1/2 sm:hidden md:block hidden'>
          <img 
            className='h-[590px] w-full'
            alt='Collaborate'
            src='https://images.unsplash.com/photo-1611532736570-dd6b097ecbb3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          />
        </div>
        <div className='flex-1 w-1/2 p-2'>
        <div>Connect with me on social media</div>
        <div className='flex gap-4 mt-3'>
          {
            socialMediaLinks.map((socialMediaLink) => (
              <Link href={socialMediaLink.link} target='_blank' key={socialMediaLink.id}>
                <img src={socialMediaLink.icon} alt={socialMediaLink.name} width={30} height={30}/>
              </Link>
            ))
          }
        </div>
        <div className='mt-3'>Or shoot me an email</div>
        <form className="">
          <div className="gap-4">
            <div className="mt-2">
              <div><label>Full name<span className='text-red-500'>*</span></label></div>
              <div>
                <input id='fullName' className="border border-black p-2 w-full" placeholder="Jane Smith" value={formDetails.fullName} onChange={updateFormValue}/>
              </div>
            </div>
            <div className="mt-2">
              <div><label>Email<span className='text-red-500'>*</span></label></div>
              <div>
                <input id='email' placeholder="jane.smith@gmail.com" className="border border-black p-2 w-full" value={formDetails.email} onChange={updateFormValue}/>
              </div>
            </div>
            <div className="mt-2">
              <div><label>Subject<span className='text-red-500'>*</span></label></div>
              <div>
                <input id='subject' placeholder="Subject" className="border border-black p-2 w-full" value={formDetails.subject} onChange={updateFormValue}/>
              </div>
            </div>
            <div className="mt-2">
              <div><label>Message<span className='text-red-500'>*</span></label></div>
              <div>
                <textarea id='message' value={formDetails.message} onChange={updateFormValue} className="border border-black p-2 w-full h-40"/>
              </div>
            </div>
            <div className="mt-2">
              <button className=" p-3 w-full bg-gradient-to-br text-white font-semibold" onClick={sendEmail}>Connect</button>
            </div>
          </div>
        </form>
        </div>
      </div>
    </div>
  )
}

export default page