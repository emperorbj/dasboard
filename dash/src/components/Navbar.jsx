import { Button } from "./ui/button"
import { Moon, Sun } from "lucide-react"
import {MdSearch} from 'react-icons/md'
import {LuHeartHandshake} from 'react-icons/lu'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "@/components/theme-provider"


const Navbar = () => {
    const { setTheme } = useTheme()
    return (
        <div className="shadow-md px-4 md:px-8 rounded-md p-4 flex items-center justify-between">
            <div className='flex gap-2 items-center'>
                <div className='shadow-md h-[35px] w-[35px] rounded-md flex items-center justify-center bg-sky-400'>
                    <LuHeartHandshake className='text-white h-[26px] w-[26px]'/>
                </div>
                <h1 className='text-sky-400 font-bold text-xl'><span className='text-green-500'>U</span>Life</h1>
            </div>
            <div className="flex items-center gap-3">

                <Button className='px-6 py-3 dark:bg-sky-400'>Sign up</Button>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon">
                            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setTheme("light")}>
                            Light
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("dark")}>
                            Dark
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("system")}>
                            System
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}

export default Navbar
