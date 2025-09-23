import "../App.css"

function Home() {
    return( 
        <>
            <div className="flex-col justify-center items-center px-6 pt-20 lg:px-9">  
                    <div className="justify-center text-center">
                    <h1 className="text-5xl">Welcome to our portfolio site - By Aghi & Josh!</h1>
                </div>
                <div className="justify-center text-center">
                    <h3 className="text-2xl mt-10">IT Graduates</h3>
                </div>
                <div className="flex justify-center pt-10 gap-[25%]">
                    <button type="button" className="" href="/">About Us</button>
                    <button type="button" className="" href="/">Contact Us</button>

                </div>
                <hr className="h-1 mx-auto my-30 bg-white border-0 rounded-sm"></hr>
            </div>

            <div className="flex flex-row justify-center m-5">
                <div className="grid grid-cols-3 grid-rows-2 gap-4 mt-7">
                    <div className="col-span-2">IMAGE</div>
                    <div className="">Aghilesh Arasu</div>
                    <div className="col-start-3">Deakin University IT Grad [PLACEHOLDER]</div>
                </div>
            </div>

            <div className="flex flex-row justify-center m-5 pt-5">
                <div className="grid grid-cols-3 grid-rows-2 gap-4 mt-7">
                    <div className="col-span-2 col-start-3">IMAGE</div>
                    <div className="">Joshua Aldridge</div>
                    <div className="col-start-1">Deakin University IT Grad [PLACEHOLDER]</div>
                </div>
            </div>

            <div className="flex max-w-screen justify-center">
                <div className=" text-white p-5">
                    <p className="text-4xl">Tech Stack used [PLACEHOLDER]</p>
                </div>
            </div>
        </>
    ); 
}

export default Home;