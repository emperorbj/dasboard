

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SearchIcon } from "lucide-react"
import { Users } from "@/database/users"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import UserCard from "@/components/UserCards"

const Home = () => {
    const [searchPatients, setSearchPatients] = useState("")
    const [patients, setPatients] = useState([])

    useEffect(() => {
        
            setPatients(Users)

        

    }, [])

    
    const filteredNames = patients.filter((item) =>
        item.fullName.toLowerCase().includes(searchPatients.toLowerCase())
    );

    // Handle search input changes
    const handleSearchChange = (event) => {
        setSearchPatients(event.target.value);
    };


    return (
        <div className="">
            
            {/* Welcome page */}
            <div className="">
                <div className="mt-32 flex items-center justify-center">
                    <h2 className="text-2xl font-semibold">Monitoring your{" "}<span className="text-sky-500 font-bold">Health</span> is our priority</h2>
                </div>

                {/* search bar */}
                <form className="flex gap-4 my-5 items-center justify-center">
                    <Input value={searchPatients} // Bind input value to search term
                        onChange={handleSearchChange} className='w-fit py-3 px-10 shadow-md' placeholder='search your best coin' />
                    <Button className="bg-sky-500 flex items-center justify-center shadow-sm p-2 rounded-full h-[36px] w-[36px]">
                        <SearchIcon className="h-4 w-4" />
                    </Button>
                </form>

                {/* coin card display */}
                <div className="mx-3 gap-3 md:gap-5 md:mx-2 lg:mx-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {filteredNames.length > 0 ? (
                        filteredNames.map((item) => (
                            <Link key={item.id} to={`/dashboard/${item.id}`}>
                                <UserCard item={item}/>
                            </Link>
                        ))
                    ) : (
                        <p className="col-span-full text-center text-lg">No coins found</p>
                    )}
                </div>

                {/* lower section */}
                <section className="flex items-center justify-center">
                    <div className="mx-2 mt-14 md:mt-8 md:mx-14 flex flex-col 
                    md:flex-row gap-5 md:gap-20 items-center">
                        <div className="flex items-center justify-center">
                            <h2 className="text-2xl md:text-3xl font-semibold">The Best{" "}<span className="text-purple-400 font-bold">Decentralized</span> platform</h2>
                        </div>
                        <div>

                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Home

