'use client'
 
import { useFormStatus } from 'react-dom'
 
export function SubmitButton() {
  const { pending } = useFormStatus()
 
  return (
    <button type="submit" aria-disabled={pending} disabled={pending} className={` bg-gradient-to-r ${ pending ? "from-red-700 to-red-700" : "from-red-500 to-red-600 " } text-white hover:shadow-md transition-all font-bold px-4 py-2 rounded-lg`}>
      {pending ? "..." : "Submit"}
    </button>
  )
}