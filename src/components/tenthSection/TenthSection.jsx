import { Button, Typography } from "@material-tailwind/react"
import { MdVerified } from "react-icons/md"
import { RiAppleFill } from "react-icons/ri";
import { IoLogoGooglePlaystore } from "react-icons/io5"
import { MobileScreen } from "../commonComponents/MobileScreen";

export const TenthSection = () => {
    return (
        <div className="w-full h-full p-20 flex gap-8 flex-col">
            <div className="bg-teal-300 rounded-lg p-6 flex justify-between overflow-hidden">
                <div className="text-white">
                    <Typography variant="h1" color="white" className="font-normal">One app</Typography>
                    <Typography variant="h1" color="white" className="font-normal">One banking</Typography>
                    <p className="p-2 w-full lg:w-1/2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                    <div className="flex">
                        <ul className="flex flex-col gap-4 p-4">
                            <li className="flex gap-3"><MdVerified className="h-5 w-5 text-white" />Instant transactions</li>
                            <li className="flex gap-3"><MdVerified className="h-5 w-5 text-white" />Payments worldwide</li>

                        </ul>
                        <ul className="flex flex-col gap-4 p-4">

                            <li className="flex gap-3"><MdVerified className="h-5 w-5 text-white" />Saving accounts</li>
                            <li className="flex gap-3"><MdVerified className="h-5 w-5 text-white" />100% mobile banking</li>
                        </ul>
                    </div>
                    <div className="flex gap-4 p-4">
                        <Button className="px-4 w-32 normal-case p-1 flex gap-1">
                            <div>
                                <RiAppleFill className="h-5 w-5 text-white" />
                            </div>
                            <div className="text-left">
                                <p className="text-xs font-thin">Download on the</p>
                                <p className="text-md">App Store</p>
                            </div>
                        </Button>
                        <Button className="px-4 w-32 normal-case p-1 flex justify-center gap-1">
                            <div>
                                <IoLogoGooglePlaystore className="h-5 w-5 text-white" />
                            </div>
                            <div className="text-left">
                                <p className="text-xs font-thin">GET IT ON</p>
                                <p className="text-md">Google Play</p>
                            </div>
                        </Button>

                    </div>
                </div>
                <div className="relative flex justify-center">
                    <div className="right-0 top-12 hidden lg:block absolute h-96">
                        <MobileScreen />
                    </div>
                </div>
                
            </div>
        </div>
    )
}