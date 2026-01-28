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
        <form onSubmit={handleSubmit}>

            <input id='name' 
            className='border w-110 border-gray-500 px-3 py-2 rounded-lg' 
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text" 
            placeholder='e.g Sepide Moqadasi'/>

            <input id='mail' 
            className='border w-110 border-gray-500 mt-2 mb-2 px-3 py-2 rounded-lg' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email" 
            placeholder='e.g sepide.moqadasi@gmai.com'/>

            <textarea id="comment"
            className='border w-110 border-gray-500 px-3 py-2 rounded-lg' 
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder='Let us know how we can help' >
            </textarea>

            <div className='flex justify-center ml-33 mt-2'>
                <button type='submit' 
                className='flex items-center w-20 gap-2 border border-gray-500 px-2 py-1 rounded-lg bg-blue-800 text-white '
                >Send <LuSendHorizontal /></button>
            </div>
        </form>
    </div>
    </>
  )
}

export default Signup