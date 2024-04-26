"use client"
import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const sendEmail = (params) => {
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID, 
        process.env.NEXT_PUBLIC_TEMPLATE_ID, 
        params,
        {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        limitRate:{
            throttle: 5000, //cannot send more than 1 email every 5 seconds
        }
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const onSubmit = (data) => {
    const templateParams = {
        to_name: 'Iraklis',
        from_name: data.Name,
        reply_to: data.Email,
        message: data.Message,
    }
    sendEmail(templateParams);
  };
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='max-w-md w-full flex flex-col items-center space-y-4'>
      <input type="text" placeholder="Name" {...register("Name", {required: true})} className='w-full p-2 
      rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'/>

      <input type="email" placeholder="Email" {...register("Email", {required: true})} className='w-full p-2 
      rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'/>
      
      <textarea {...register("Message", {max: 256, min: 5})} placeholder="Message" className='w-full p-2 
      rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg' />

      <input
      value="Cast your Message"
      className='px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid
      hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50
      cursor-pointer capitalize' 
      type="submit"
      />
    </form>
  );
}