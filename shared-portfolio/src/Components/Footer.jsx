function Footer() {
return(
        <>
            <footer className="bg-black mt-10">
                <div className="w-full max-w-screen mx-auto shadow-sm p-3">
                    <div className="flex justify-center mt-5">
                        <span className="text-white"></span>
                        <ul className="flex flex-wrap text-white">
                            <li>
                                <a href="#" className="hover:underline md:me-8">Home</a>
                                <a href="#" className="hover:underline md:me-8">About</a>
                                <a href="#" className="hover:underline md:me-8">Projects</a>
                                <a href="#" className="hover:underline md:me-8">Contact</a>
                            </li>
                        </ul>
                    </div>
                <hr className="h-1 mx-auto my-15 bg-white border-0 rounded-sm"></hr>
                <span className="flex text-white text-2xl justify-center align-center flex-row mb-5">Aghilesh Arasu and Joshua Aldridge 2025</span>
                </div>
            </footer>   
        </>
    )
}
export default Footer;