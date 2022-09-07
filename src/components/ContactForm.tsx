import React, { useState } from 'react'
import emailjs from "emailjs-com"

const ContactForm = () => {

  const [formData, setFormData] = useState(
    {
      name: "",
      email: "",
      message: ""
    }
  )

  const [isSent, setIsSent] = useState(false)

  function handleChange(e: { target: { name: string; value: string } }){
    const {name, value} = e.target
      setFormData(prevFormData => ({
        ...prevFormData,
        [name]: value
      }))

      setIsSent(false)
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()

    emailjs.sendForm(
      "service_zk261fg", 
      "template_v2d8ugd", 
      e.currentTarget, 
      "QciK6HGG5Knq5Br9t"
      ).then(res=>{console.log(res)}).catch(err=>console.log(err))
      
    e.currentTarget.reset()

    setFormData({
      name: "",
      email: "",
      message: ""
    })

    setIsSent(true)
  }

  return (
    <section className="kontakt">
    
      <h5 className='form' 
          id="kontakt-ref">
            Napiš mi:
      </h5>
      
      <h5 style={{opacity: isSent? "1" : "0"}} 
          className='form-result success'>
            Email odeslán
      </h5> 

      <form onSubmit={(handleSubmit)} 
            className="contact-form"
      >
        <input 
          type="text" 
          name="name" 
          placeholder="Jméno Příjmení"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea 
          name="message"   
          onChange={handleChange}
          value={formData.message}
          required
        />
        <button>Odeslat</button>
      </form>
    </section>
  )
}

export default ContactForm