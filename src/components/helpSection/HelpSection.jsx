import { Button, Typography } from "@material-tailwind/react"
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/20/solid";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { AccordionComp } from "./AccordionComp";

export const HelpSection = () => {
    return (
        <div className="w-full h-full p-20 flex justify-between items-center gap-8 flex-col md:flex-row">
            <div className="flex flex-col gap-4 justify-start text-left">
                <Typography variant="h1" className="font-normal">Need help ?</Typography>
                <div className="flex gap-3 items-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex justify-center items-center">
                        <PhoneIcon className="w-5 h-5 text-teal-300" />
                    </div>
                    <div>
                        <p>+49 176 123 456</p>
                        <p className="text-gray-500">Support Hotline</p>
                    </div>
                </div>
                <div className="flex gap-3 items-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex justify-center items-center">
                        <EnvelopeIcon className="w-5 h-5 text-teal-300" />
                    </div>
                    <div>
                        <p>help@banquee.com</p>
                        <p className="text-gray-500">Support Email</p>
                    </div>
                </div>
                <div>
                    <Button variant="text" size="sm" color="teal" className="font-normal text-md normal-case flex items-center justify-center">
                        <p>Support</p>
                        <ArrowRightIcon className="w-4 h-4 ml-2" />
                    </Button>
                </div>
            </div>
            <div>
                <AccordionComp/>
            </div>
        </div>
    )
}