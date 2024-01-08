'use client';

import React from 'react';
import { handleContactUs } from '@/app/lib/actions';
import { useFormState } from 'react-dom';
import { SubmitButton } from '.';

export default function ContactForm(){

  // const defaultState = {state:"is default"}
  // const [state,dispatch] = useFormState(handleContactUs, defaultState)
 

  return (
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" action={handleContactUs} method='POST'>
        <input type="text" id="name" name='name'/>
        <SubmitButton/>
      </form>
  );
};

