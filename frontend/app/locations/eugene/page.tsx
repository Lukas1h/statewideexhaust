export default function Eugene() {
    return (
        <div className=" flex flex-col items-center w-full">
            <div className="bg-[url(/eugene1.jpg)] bg-black/10 bg-blend-multiply py-20 w-full flex items-center justify-center flex-col">
                <img src="/logo-full.png" alt="" className="h-[20rem]" />
                <h1 className="text-2xl sm:text-3xl text-center max-w-[800px] text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">has been proudly serving the <span className="font-bold text-3xl sm:text-5xl whitespace-nowrap">Eugene / Springfield</span><br /> area for over <span className="italic">two decades</span>. </h1>
            </div>

            <h1 className="text-4xl md:text-5xl font tracking-tight text-black text-center mt-20 mb-6 max-w-[500px]">Why <span className="font-extrabold">Eugene</span> Businesses Choose <span className="font-extrabold whitespace-nowrap">Statewide Exhaust</span></h1>
        </div>
    )
}
