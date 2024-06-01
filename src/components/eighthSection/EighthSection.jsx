import { Button, Typography } from "@material-tailwind/react"
import { CreditCard } from "../commonComponents/CreditCard"

export const EighthSection = () => {
    return (
        <div className="w-full h-full p-8 text-center flex flex-col gap-4 items-center justify-center">
            <div className="relative lg:w-1/2 w-full h-full text-center flex flex-col justify-center items-center">
                <p>Account</p>
                <Typography variant="h1" className="font-normal px-8 md:px-20">Perfect card for your needs</Typography>
                <p className="pt-4 px-8 md:px-16">Senectus et netus et malesuada fames ac turpis. Sagittis vitae et leo duis ut diam.</p>
                <div className="relative my-8 h-16 flex justify-center">
                    <div className="absolute top-0">
                        <CreditCard bgColor={"bg-teal-400"} visa={false} />
                    </div>
                    <div className="absolute top-12">
                        <CreditCard bgColor={"bg-gray-800"} visa={false} />
                    </div>
                    <div className="absolute top-24">
                        <CreditCard bgColor={"bg-orange-300"} visa={false} />
                    </div>
                </div>
                <div className="mt-56 flex gap-4">
                    <Button color="teal" variant="filled" className="font-normal normal-case rounded-md">
                        Open Account
                    </Button>
                    <Button variant="outlined" size="sm" color="black" className="font-normal normal-case border-gray-400 rounded-md">
                        Compare Cards
                    </Button>
                </div>
            </div>
        </div>
    )
}