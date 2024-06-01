/* eslint-disable react/prop-types */
import { LuNfc } from "react-icons/lu";
import { BiLogoVisa } from "react-icons/bi";

export const CreditCard = ({bgColor,visa})=>{
    return(
        <div className={`flex flex-col justify-between gap-4 p-5 rounded-lg h-48 w-80 text-white ${bgColor}`}>
            <div className="flex justify-between items-center">
                <p className="text-xl">banquee.</p>
                <LuNfc className="w-8 h-6"/>
            </div>
            <div className="flex flex-col gap-2">
                <div className="text-xl flex font-kredit-back tracking-widest justify-between">
                    <p>1234</p>
                    <p>5678</p>
                    <p>9000</p>
                    <p>0000</p>
                </div>
                
                <div className="flex justify-between items-center">
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
                    {visa ? <div className="flex justify-center items-center">
                        <BiLogoVisa className="h-14 w-14"/>
                    </div> : <div className="relative flex items-center">
                        <div className="rounded-full w-6 h-6 bg-white opacity-80"></div>
                        <div className="absolute right-4 rounded-full w-6 h-6 bg-white opacity-40"></div>
                    </div>}
                </div>
            </div>

        </div>
    )
}