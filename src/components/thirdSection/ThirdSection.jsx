import { Typography } from "@material-tailwind/react"
import { AiFillApple } from "react-icons/ai"
import { MdVerified } from "react-icons/md";

export const ThirdSection = ()=>{
    return(
        <div className="bg-teal-50 w-full h-full flex flex-col items-center gap-20 lg:flex-row">
            <div className="flex flex-col gap-6 lg:w-1/2 pt-20 pl-20 pr-12 lg:pb-12">
                <div>
                <Typography 
                    variant="h1"
                    className="font-normal">
                    Send & receive
                </Typography>
                <Typography 
                    variant="h1"
                    className="font-normal">
                    money instantly
                </Typography>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                <ul className="flex flex-col gap-4">
                    <li className="flex gap-3"><MdVerified className="h-5 w-5 text-teal-300"/>Malesuada Ipsum</li>
                    <li className="flex gap-3"><MdVerified className="h-5 w-5 text-teal-300"/>Vestibulum</li>
                    <li className="flex gap-3"><MdVerified className="h-5 w-5 text-teal-300"/>Parturient Lorem</li>
                </ul>
            </div>


            {/* Right side section */}
            {/* <div> */}
                <div className="flex flex-col gap-2 px-4 w-96 lg:self-end lg:p-0">
                    <div className="flex justify-between items-center p-2 bg-white rounded-lg">
                        <div className="flex gap-3 items-center">
                            <span className="bg-teal-300 rounded">
                                <AiFillApple className="h-8 w-8 p-1  text-white"/>
                            </span>
                            <div>
                                <p className="text-md">Apple</p>
                                <p className="text-xs">Macbook</p>
                            </div>
                        </div>
                        <p>-999€</p>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-white rounded-lg">
                        <div className="flex gap-3 items-center">
                            <span className="bg-teal-300 rounded">
                                <AiFillApple className="h-8 w-8 p-1  text-white"/>
                            </span>
                            <div>
                                <p className="text-md">Amazon</p>
                                <p className="text-xs">Electronics</p>
                            </div>
                        </div>
                        <p>-49€</p>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-white rounded-lg">
                        <div className="flex gap-3 items-center">
                            <span className="bg-teal-300 rounded">
                                <AiFillApple className="h-8 w-8 p-1  text-white"/>
                            </span>
                            <div>
                                <p className="text-md">Twitter</p>
                                <p className="text-xs">Ads</p>
                            </div>
                        </div>
                        <p>-29€</p>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-white rounded-lg">
                        <div className="flex gap-3 items-center">
                            <span className="bg-teal-300 rounded">
                                <AiFillApple className="h-8 w-8 p-1  text-white"/>
                            </span>
                            <div>
                                <p className="text-md">Microsoft</p>
                                <p className="text-xs">Office Suit</p>
                            </div>
                        </div>
                        <p>-149€</p>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-white rounded-lg">
                        <div className="flex gap-3 items-center">
                            <span className="bg-teal-300 rounded">
                                <AiFillApple className="h-8 w-8 p-1  text-white"/>
                            </span>
                            <div>
                                <p className="text-md">Dropbox</p>
                                <p className="text-xs">Cloud</p>
                            </div>
                        </div>
                        <p>-14€</p>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-white rounded-lg">
                        <div className="flex gap-3 items-center">
                            <span className="bg-teal-300 rounded">
                                <AiFillApple className="h-8 w-8 p-1  text-white"/>
                            </span>
                            <div>
                                <p className="text-md">Paypal</p>
                                <p className="text-xs">Shopping</p>
                            </div>
                        </div>
                        <p>-200€</p>
                    </div>
                </div>
            {/* </div> */}
        </div>
    )
}