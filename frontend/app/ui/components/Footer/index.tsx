
export default function Footer(){
    const currentYear = new Date().getFullYear();

    return (
        <div className="h-20 flex items-center justify-around text-white footer bg-red-500 font-semibold footer">

            <p>&copy;{currentYear} Statewide Exhaust Hood Cleaning LLC.</p>

        </div>
    )
}