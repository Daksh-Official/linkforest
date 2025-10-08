'use client'
import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const Generate = () => {
  const params = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const handleName = params.get("handle");
    if (handleName) {
      setHandle(handleName);
      setDisalbe(true);
    }
  }, [])
  
  const [handle, setHandle] = useState("")
  const [links, setLinks] = useState([{ name: "", address: "" }])
  const [profile, setProfile] = useState("")
  const [desc, setDesc] = useState("")
  const [disable, setDisalbe] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e, index) => {
    setLinks(links.map((item, i) => {
      if (i == index) {
        return { ...item, [e.target.name]: e.target.value };
      }
      else {
        return item;
      }
    }))
  }

  const handleSubmit = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      handle: handle,
      links: links,
      profile: profile,
      desc: desc
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    let res = await fetch("http://localhost:3000/api/add", requestOptions)
      .then((response) => response.json())
    if (res.success) {
      setLinks([{ name: "", address: "" }]);
      setProfile("");
      setDesc("");
      setSuccess(true);
      toast.success(res.message);
      setTimeout(() => {
        router.push(`/${handle}`)
      }, 3000);
    }
    else {
      toast.error(res.message)
    }
  }

  return (
    <div className='grid grid-cols-2 h-screen overflow-hidden bg-pink-50'>
      <div className='flex flex-col items-center overflow-y-scroll'>
        <div className="nav flex justify-between items-center mb-6 p-4 w-full">
          <div className="logo">
            <Link href="/"><img src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66634daccb34e6d65a41c76d_download.svg" alt="logo" className='w-30' /></Link>
          </div>
          <div>
            <Link href='/'><button className='bg-black font-semibold px-3 py-1 rounded-lg text-white cursor-pointer hover:bg-slate-800'>go back</button></Link>
          </div>
        </div>
        <div className='w-2/3 h-[80vh]'>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <h2 className='font-extrabold text-4xl mb-4'>Create your own LinkForest in just 3 Easy Steps:</h2>
          <div className='py-4 w-full flex justify-around flex-col font-bold min-h-4/5'>
            <div>
              <h3 className='text-xl my-3'>Step-1 Claim your Handle</h3>
              <input type="text" value={handle} disabled={disable} onChange={(e) => { setHandle(e.target.value) }} placeholder='megatron' name="handle" id="handle" className='focus:outline-pink-600 disabled:bg-gray-100 bg-white rounded-full px-2 py-1' />
            </div>
            <div>
              <h3 className='text-xl my-3'>Step-2 Add your Links</h3>
              {links && links?.map((item, i) => {
                return <div key={i} className='flex gap-4 my-4'>
                  <input type="text" placeholder='linkname' name="name" value={item.name} onChange={(e) => { handleChange(e, i) }} id="name" className='focus:outline-pink-600 bg-white rounded-full px-2 py-1' />
                  <input type="text" placeholder='linkaddress' name="address" value={item.address} onChange={(e) => { handleChange(e, i) }} id="address" className='focus:outline-pink-600 bg-white rounded-full px-2 py-1' />
                </div>
              })}

              <button className='bg-black text-white font-bold px-2 py-1 mt-2 rounded-xl cursor-pointer hover:bg-slate-800' onClick={() => {
                setLinks(links.concat({ name: "", address: "" }));
              }}>add link</button>
            </div>
            <div>
              <h3 className='text-xl my-3'>Step-3 Add profile pic</h3>
              <div className='flex flex-col gap-6'>
                <input type="text" value={profile} onChange={(e) => { setProfile(e.target.value) }} placeholder='https://www.example.com' name="profile" id="profile" className='focus:outline-pink-600 bg-white rounded-full px-2 py-1' />
                <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} placeholder='your description' name="desc" id="desc" className='focus:outline-pink-600 bg-white rounded-full px-2 py-1' />
              </div>
            </div>
            <button className='bg-black text-white font-bold p-2 my-6 rounded-xl cursor-pointer hover:bg-slate-800' onClick={handleSubmit}>Generate Tree</button>
            {success && <p>redirecting....</p>}
          </div>
        </div>
      </div>
      <div className='w-full h-full relative'>
        <img src="https://assets.production.linktr.ee/auth/3558/media/banner-register-social-desktop.18fa56fce6ad2db4f48b.webp" className='object-cover object-center w-full h-full absolute' />
      </div>
    </div>
  )
}

export default Generate
