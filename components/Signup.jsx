import React, { useState } from 'react'
import { LuSendHorizontal } from "react-icons/lu"
import fetchAxios from '../axios/fetchAxios'

const Signup = () => {

    const [name , setName ] = useState("")
    const [email , setEmail] = useState("")
    const [comment , setComment] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = { name, email, comment}

        try {
           const res = await fetchAxios.post("/invoices" , data)

            alert("Malumot jonatildi !")
            setName("")
            setEmail("")
            setComment("")
            console.log(res.data)
            console.log({ name, email, comment})

        }catch (error) {
            console.error(error)
            alert("Xatolik yuz berdi")
        }
    }



  return (
    <>
    <div>
        <select className='px-3 py-2 w-[80%] border rounded-lg' name="" id="">
            <option className='rounded-md p-2' value="">Category of question</option>
            <option className='rounded-md p-2' value="">Category of question</option>
            <option  className='rounded-md p-2'value="">Category of question</option>
        </select>
        <form onSubmit={handleSubmit}>
            <h2 className='font-semibold mt-2'>Name</h2>
            <input id='name' 
            className='border w-[80%] border-gray-500 px-3 py-2 rounded-lg' 
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text" 
            placeholder='e.g Sepide Moqadasi'/>

            <h2 className='font-semibold mt-2'>Email address</h2>
            <input id='mail' 
            className='border w-[80%] border-gray-500  px-3 py-2 rounded-lg' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email" 
            placeholder='e.g sepide.moqadasi@gmail.com'/>

            <h2 className='font-semibold mt-2'>Your Message</h2>
            <textarea id="comment"
            className='border w-[80%] border-gray-500 px-3 py-2 rounded-lg' 
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder='Let us know how we can help' >
            </textarea>

            <div className=''>
                <button type='submit' 
                className='flex items-center justify-center w-[80%] gap-2 border border-gray-500 px-2 py-1 rounded-lg bg-green-700 text-white '
                >Submit your message <LuSendHorizontal /></button>
            </div>
        </form>
    </div>
    </>
  )
}

export default Signup