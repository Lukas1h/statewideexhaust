'use client';

import React from 'react';
import { handleContactUs } from '@/app/lib/actions';
import { useFormState } from 'react-dom';
import { SubmitButton } from '.';

export default function ContactForm() {

  // const defaultState = {state:"is default"}
  // const [state,dispatch] = useFormState(handleContactUs, defaultState)

  return <></>

  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
      <h2 className="text-3xl font-semibold text-grey-500 mb-6 text-center">Contact Us for a Free Quote</h2>
      <form className="flex flex-col" action={handleContactUs} method='POST'>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
          <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500" required />
        </div>

        <div className="mb-4">
          <label htmlFor="companyName" className="block text-gray-700 text-sm font-bold mb-2">Company Name</label>
          <input type="tecompanyNamext" id="companyName" name="companyName" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500" required />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500" required />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
          <input type="phone" id="phone" name="phone" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500" required />
        </div>

        <div className="mb-4">
          <label htmlFor="location" className="block text-gray-700 text-sm font-bold mb-2">Location</label>
          <input type="location" id="location" name="location" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500" required />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
          <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500" required></textarea>
        </div>

        <SubmitButton />
      </form>
    </div>


  );
};

