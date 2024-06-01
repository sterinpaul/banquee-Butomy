import { ArrowRightIcon } from "@heroicons/react/24/outline"
import { Button } from "@material-tailwind/react"
import { AiFillApple, AiOutlineAmazon, AiOutlineDollar, AiOutlineGoogle, AiOutlineTwitter } from "react-icons/ai"
import { MdOutlineCreditCard } from "react-icons/md"
import { RiHomeLine, RiUser3Line, RiUserReceived2Line, RiUserShared2Line } from "react-icons/ri"
import { CreditCard } from "./CreditCard"

export const MobileScreen = () => {
    return (
        <div className="flex flex-col gap-4 rounded-[3rem] w-96 mt-4 h-full border-[.4rem] border-black py-6 px-4 bg-white">
            <div className="text-nowrap flex items-center justify-between px-4">
                <p>Current balance</p>
                <p className="text-2xl">$ 4.658,50</p>
            </div>
            <div className="flex justify-center">
                <CreditCard bgColor={"bg-gray-800"} visa={true} />
            </div>
            <div className="flex gap-2 justify-between px-4 pt-2">
                <div className="flex gap-2 items-center"><RiUserShared2Line className="w-9 h-9 p-2 bg-gray-100 rounded-full text-teal-300" />Send money</div>
                <div className="flex gap-2 items-center"><RiUserReceived2Line className="w-9 h-9 p-2 bg-gray-100 rounded-full text-teal-300" />Receive Money</div>
            </div>
            <div className="flex items-center justify-between px-4">
                <p>Transactions</p>
                <Button variant="text" size="sm" color="teal" className="font-normal text-md normal-case flex items-center gap-1">
                    <p>View all</p>
                    <ArrowRightIcon className="w-4 h-4" />
                </Button>
            </div>
            {/* Transactions */}

            <div className="flex flex-col gap-2 px-4">
                <div className="flex justify-between items-center p-2 bg-blue-gray-50 rounded-lg">
                    <div className="flex gap-3 items-center">
                        <span className="bg-teal-300 rounded">
                            <AiFillApple className="h-8 w-8 p-1  text-white" />
                        </span>
                        <div>
                            <p className="text-md">Apple</p>
                            <p className="text-xs">Electronics</p>
                        </div>
                    </div>
                    <p>-799$</p>
                </div>
                <div className="flex justify-between items-center p-2 bg-blue-gray-50 rounded-lg">
                    <div className="flex gap-3 items-center">
                        <span className="bg-teal-300 rounded">
                            <AiOutlineGoogle className="h-8 w-8 p-1  text-white" />
                        </span>
                        <div>
                            <p className="text-md">Google Play Store</p>
                            <p className="text-xs">Apps</p>
                        </div>
                    </div>
                    <p>-49$</p>
                </div>
                <div className="flex justify-between items-center p-2 bg-blue-gray-50 rounded-lg">
                    <div className="flex gap-3 items-center">
                        <span className="bg-teal-300 rounded">
                            <AiOutlineAmazon className="h-8 w-8 p-1  text-white" />
                        </span>
                        <div>
                            <p className="text-md">Amazon</p>
                            <p className="text-xs">Shopping</p>
                        </div>
                    </div>
                    <p>-59$</p>
                </div>
                <div className="flex justify-between items-center p-2 bg-blue-gray-50 rounded-t-lg">
                    <div className="flex gap-3 items-center">
                        <span className="bg-teal-300 rounded">
                            <AiOutlineTwitter className="h-8 w-8 p-1  text-white" />
                        </span>
                        <div>
                            <p className="text-md">Twitter</p>
                            <p className="text-xs">Ads</p>
                        </div>
                    </div>
                    <p>-9$</p>
                </div>
            </div>
            <div className="px-4 flex justify-between items-center text-center">
                <div className="text-teal-300 flex flex-col gap-1 items-center">
                    <RiHomeLine className="w-5 h-5" />
                    <p className="text-xs">Home</p>
                </div>
                <div className="flex flex-col gap-1 items-center">
                    <AiOutlineDollar className="w-5 h-5" />
                    <p className="text-xs">Savings</p>
                </div>
                <div className="flex flex-col gap-1 items-center">
                    <MdOutlineCreditCard className="w-5 h-5" />
                    <p className="text-xs">Cards</p>
                </div>
                <div className="flex flex-col gap-1 items-center">
                    <RiUser3Line className="w-5 h-5" />
                    <p className="text-xs">Account</p>
                </div>
            </div>
        </div>
    )
}