import { ReactNode, Suspense } from "react"

export default async function Layout(
    {children}:{children:ReactNode}
){



return (
    <Suspense>
        {children}
    </Suspense>
)
}