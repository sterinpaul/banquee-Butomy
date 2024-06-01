/* eslint-disable react/prop-types */
import { LuNfc } from "react-icons/lu";

export const CreditCardVertical = ({ bgColor,position }) => {
    return (
        <div style={{top:`${position}rem`}} className={`${position === "8" ? "hidden md:flex" : "flex"} relative flex flex-col justify-between p-6 rounded-lg h-80 w-48 text-white ${bgColor}`}>
            <div className="transform rotate-90 flex flex-col gap-8">
                <div className="flex justify-between relative">
                    <p className="text-2xl ml-3">banquee.</p>
                    <LuNfc className="w-8 h-8 absolute -right-[6.7rem]" />
                </div>
                <div className="flex flex-col gap-3">
                    <div className="text-xl font-kredit-back tracking-widest flex justify-between">
                        <p className="ml-2">1234</p>
                        <p className="ml-2">5678</p>
                        <p className="ml-2">9000</p>
                        <p className="ml-2">0000</p>
                    </div>

                    <div className="flex justify-between ml-3">
                        <div className="flex justify-between gap-8">
                            <div>
                                <div className="text-xs font-thin text-nowrap">Card holder</div>
                                <p className="text-nowrap">John Doe</p>
                            </div>
                            <div>
                                <div className="text-xs font-thin text-nowrap">Expiry Date</div>
                                <p className="text-nowrap">09/28</p>
                            </div>
                        </div>
                        <div className="relative flex items-center ml-12">
                            <div className="rounded-full w-6 h-6 bg-white opacity-80"></div>
                            <div className="absolute right-4 rounded-full w-6 h-6 bg-white opacity-40"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}