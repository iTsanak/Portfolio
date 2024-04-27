"use client"
import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'sonner'




export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const sendEmail = (params) => {

    const toastId = toast.loading('Sending your message...')
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
          toast.success('Message cast successfully', {id: toastId});
        },
        (error) => {
          toast.success('There was an error while casting your message, please try again!', {id: toastId});
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
  
  
  return (
    <>
      <Toaster richColors={true}/>
      <form onSubmit={handleSubmit(onSubmit)} className='max-w-md w-full flex flex-col items-center space-y-4'>

        <input type="text" placeholder="Name" {...register("Name", {required: 'This field is required!',
        minLength:{
          value: 3,
          message: 'Name should be at least 3 characters'

        }})} className='w-full p-2 
        rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'
        />
        {
          errors.Name && <span className='inline-block self-start text-accent'>{errors.Name.message}</span>
        }
        
        <input type="email" placeholder="Email" {...register("email", {required: 'This field is required!'})} 
        className='w-full p-2   
        rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'
        />
        {
          errors.email && <span className='inline-block self-start text-accent'>{errors.email.message}</span>
        }

        <textarea {...register("Message", {required: 'This field is required!', maxLength: {
            value: 500,
            message: "Message should be less than 500 characters"
          }, minLength: {
            value: 30,
            message: "Message should be more than 30 characters"
          } })} 
          placeholder="Message" className='w-full p-2 
          rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg' 
        />
        {
          errors.Message && <span className='inline-block self-start text-accent'>{errors.Message.message}</span>
        }

        <input
        value="Cast your Message"
        className='px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid
        hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50
        cursor-pointer capitalize' 
        type="submit"
        />
      </form>
    </>
  );
}