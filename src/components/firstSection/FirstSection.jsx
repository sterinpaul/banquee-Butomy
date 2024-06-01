import { Button, Typography } from "@material-tailwind/react"
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { CreditCardVertical } from "../commonComponents/CreditCardVertical";


export const FirstSection = () => {
    return (
        <div className="h-full w-full px-4 pt-28 bg-teal-50">
            <div className="mt-8 text-center flex justify-center flex-col gap-2">
                <p>Features</p>
                <Typography
                    variant="h1"
                    className="font-normal"
                >
                    All in one card
                </Typography>
                <div className="m-2">
                    <p>Senectus et netus et malesuada fames ac turpis.</p>
                    <p>Sagittis vitae et leo duis ut diam.</p>
                </div>
                <div className="flex justify-center gap-2 m-2">
                    <button className="text-white bg-teal-300 rounded px-4 text-md font-normal">
                        Open Account
                    </button>
                    <Button variant="text" size="sm" color="teal" className="font-normal text-md normal-case flex items-center justify-center">
                        <p>Compare Cards</p>
                        <ArrowRightIcon className="w-4 h-4 ml-2" />
                    </Button>
                </div>
            </div>
            <div className="relative h-72 w-full  overflow-hidden">

                <div className="absolute left-0 right-0 flex justify-between gap-2 flex-wrap mt-20">
                    <CreditCardVertical bgColor={"bg-orange-300"} position={"8"} />
                    <CreditCardVertical bgColor={"bg-gray-800"} position={"4"} />
                    <CreditCardVertical bgColor={"bg-teal-400"} position={"0"} />
                    <CreditCardVertical bgColor={"bg-gray-800"} position={"4"} />
                    <CreditCardVertical bgColor={"bg-orange-300"} position={"8"} />
                </div>
            </div>
        </div>
    )
}