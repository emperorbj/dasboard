
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

import { Button } from "./ui/button"


const UserCard = ({ item }) => {


    return (
        <div>

            <div>

                <Card className="w-[300px] hover:bg-sky-100 hover:shadow-xl hover:shadow-sky-100 sm:w-[280px] 
                flex flex-col justify-center items-center md:w-[270px] lg:w-[320px]">
                    <CardHeader>
                        <CardTitle className="dark:text-blue-500 flex items-center gap-6 mb-3">
                                <div>
                                    <Avatar>
                                        <AvatarImage src={item?.img} alt="@shadcn" />
                                        <AvatarFallback>
                                            <div className="bg-slate-400"></div>
                                        </AvatarFallback>
                                    </Avatar>
                                </div>
                                <div className="flex dark:text-white flex-col gap-2">
                                    <h1 className="font-bold md:text-lg lg:text-xl text-sky-600">
                                    {item?.fullName}
                                    </h1>
                                    <h2 className="font-normal md:text-[12px] lg:text-[13px]">
                                    {item?.job}
                                    </h2>
                                    <h2 className="font-normal md:text-[12px] lg:text-[13px]">
                                        {item?.email}
                                    </h2>
                                </div>
                            </CardTitle>
                        <CardDescription className='md:text-[12px] lg:text-[13px]'> 
                            {item?.shortbio}
                        </CardDescription>
                    </CardHeader>
                    <CardContent  className="flex items-center md:gap-2 lg:gap-6">
                        <div className="flex flex-col items-center gap-2">
                            <h2 className="text-sky-600 font-semibold">
                                Weight
                            </h2>
                            <h1 className="font-bold">
                                {item?.weight}
                            </h1>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h2 className="text-sky-600 font-semibold">
                                Height
                            </h2>
                            <h1 className="font-bold">
                                {item?.height}
                            </h1>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h2 className="text-sky-600 font-semibold">
                                Age
                            </h2>
                            <h1 className="font-bold">
                                {item?.age}
                            </h1>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <div className="flex md:flex-col lg:flex-row gap-2">
                            <Button variant='outline'>Contact</Button>
                            <Button className='bg-sky-600'>Dashboard</Button>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

export default UserCard
