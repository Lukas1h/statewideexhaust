

export default function Footer(){
    const currentYear = new Date().getFullYear();

    return (
        <div className="h-20 flex items-center justify-around text-white footer bg-gradient-to-r from-red-300 to-red-400 font-semibold">

            <p>&copy;{currentYear} Statewide Exhaust Hood Cleaning LLC.</p>

        </div>
    )
}