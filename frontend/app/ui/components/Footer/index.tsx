
export default function Footer(){
    const currentYear = new Date().getFullYear();

    return (
        <div className="h-20 flex items-center justify-around text-white bg-red-500 font-semibold  mt-4">

            <p>&copy;{currentYear} Statewide Exhaust Hood Cleaning LLC.</p>

        </div>
    )
}