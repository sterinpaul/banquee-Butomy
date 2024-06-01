import { Typography } from "@material-tailwind/react"
import { MdVerified } from "react-icons/md"

export const SeventhSection = () => {
    return (
        <div className="w-full h-full md:px-20 py-12 flex flex-col items-center md:items-start gap-4">
            <div className="lg:flex-row gap-8 lg:justify-between items-center flex flex-col justify-center">
                <div className="w-1/2">
                    <p>Tools</p>
                    <Typography variant="h1" className="font-normal">
                        Seemless
                    </Typography>
                    <Typography variant="h1" className="font-normal">
                        integration
                    </Typography>
                    <p className="py-4">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>
                <div>

                    <ul className="self-end flex flex-col gap-4 pr-12">
                        <li className="flex gap-3"><MdVerified className="h-5 w-5 text-teal-300" />Secure and encrypted integration</li>
                        <li className="flex gap-3"><MdVerified className="h-5 w-5 text-teal-300" />Fully API interface</li>
                        <li className="flex gap-3"><MdVerified className="h-5 w-5 text-teal-300" />Payments worldwide</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}