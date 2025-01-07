'use client'
import React, { useState } from 'react'
import { MdArrowOutward } from 'react-icons/md';

function QuteBlock() {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        category: "",
        email: "",
        subject: "",
        message: "",
      });
    
      const [error, setError] = useState("");
    
      const handleChange = (e : any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e : any) => {
        e.preventDefault();
    
        // Basic validation
        if (!formData.firstName || !formData.lastName || !formData.email) {
          setError("Please fill in all required fields.");
          return;
        }
    
        setError("");
        alert("Form submitted successfully!");
        // You can integrate this with an API or email service
      };
  return (
    <div className='pb-12 md:pb-24'>

        <div className='resContainer bg-primary p-4  md:p-8 flex  flex-col md:flex-row  items-center gap-5 md:gap-8 '>
            <div>
                <img src='/images/quote.png'  alt='image'  width={501}  height={487} />
                       
            </div>

            <div className="flex-1">
               <div className="w-full mx-auto flex flex-col gap-1.5 sm:gap-3">

                <div className='text-white text-lg  font-serif '>
                Get a quote 
                </div>

                <div className='text-white text-lg font-bold font-serif'>
                Request a Quote
                </div>

                </div>

                

    <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-4">
       
       <div className="grid md:grid-cols-2 gap-6 mt-7">

       
        <div>
          
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder='FirstName'
            className=' w-full h-[44px] sm:h-[53px] placeholder-white bg-transparent px-4 sm:px-5  text-body focus:shadow-primary/10 text-sm sm:text-base shadow-lg shadow-black/5 focus:outline-none border-2 '
            required
            // className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
         
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder=' Last Name'
            className=' w-full h-[44px] sm:h-[53px] placeholder-white bg-transparent px-4 sm:px-5  text-body focus:shadow-primary/10 text-sm sm:text-base shadow-lg shadow-black/5 focus:outline-none border-2 '
            required
            // className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
         
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
    
            className=' w-full h-[44px] sm:h-[53px] placeholder-white bg-transparent px-4 sm:px-5  text-white text-body focus:shadow-primary/10 text-sm sm:text-base shadow-lg shadow-black/5 focus:outline-none border-2 '
            required
            // className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="" >Select a category</option>
            <option value="consulting">others</option>
           
          </select>
        </div>
        <div>
        
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder='Email'
            className=' w-full h-[44px] sm:h-[53px] placeholder-white bg-transparent px-4 sm:px-5  text-body focus:shadow-primary/10 text-sm sm:text-base shadow-lg shadow-black/5 focus:outline-none border-2 '
            // className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        </div>
        <div>
          
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder='Subject'
            className={` w-full placeholder-white py-3 bg-transparent px-4 sm:px-5  text-body focus:shadow-primary/10 text-sm sm:text-base shadow-lg shadow-black/5 focus:outline-none border-2 resize-none`}
            // className={` w-full h-[44px] sm:h-[53px] placeholder-white bg-transparent px-4 sm:px-5  text-body focus:shadow-primary/10 text-sm sm:text-base shadow-lg shadow-black/5 focus:outline-none borer-2 `}
            
            // className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
       
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder='Your Message'
            className={` w-full placeholder-white py-3 bg-transparent px-4 sm:px-5  text-body focus:shadow-primary/10 text-sm sm:text-base shadow-lg shadow-black/5 focus:outline-none border-2 resize-none`}
            // className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            // rows="4"
          />
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        {/* <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit
        </button> */}

        <div className="hidden lg:flex gap-x-5 items-center ">
          <button
           type='submit'
            className="w-[100px] sm:w-[145px] h-[40px] md:h-[49px] bg-white text-primary text-sm font-normal sm:text-base hover:bg-orange-500 flex justify-center items-center gap-2"
          >
            <span className="text-lg sm:text-xl transition-all duration-500 text-primary sm:inline-block group-hover:scale-110">
              <MdArrowOutward />
            </span>
            Submit
          </button>
        </div>
      </form>
      </div>


                </div>
                </div>





  )
}

export default QuteBlock