'use client';

 
import { useEffect } from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  const router = useRouter()
 
  return (

        <div className="text-center">
            <h1 className="text-3xl font-bold text-grey-500 text-center mt-8 mb-2 items-left">Looks like there was an error</h1>
            <p>Maybe <button onClick={() => reset()} className="underline font-semibold">try again</button> or <Link href={"/"} className="underline font-semibold">go home</Link>.</p>
        </div>

  )
}
