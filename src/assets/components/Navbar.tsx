import { Link } from "react-router-dom"
import { FC } from "react"


const Navbar:FC = () => {
        

    return(
        <>
           <>
        <header className={`fixed center w-full left-0 top-0 h-[10vh] md:h-[12vh] z-50 transition-all duration-1000 bg-white border-b border-gray-100`}>
            <div className="flex items-center justify-between w-11/12 lg:w-10/12">

                <Link to={'/'} className='w-3/12 md:w-2/12 flex items-center gap-3 text-xl font-bold'>
                    St. Thomas
                </Link>


                <nav className="flex items-center text-primary gap-4 w-9/12 justify-end">
                    <Link to="/Services" className="p-2 px-5">Services</Link>
                    <Link to="/Contact" className="p-2 px-5">Contact</Link>
                </nav>
       
            </div>

            
        </header>
        </>
        </>
    )
}


export default Navbar
