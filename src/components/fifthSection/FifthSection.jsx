import { ArrowRightIcon } from "@heroicons/react/24/outline"
import { Button, Typography } from "@material-tailwind/react"
import { MdVerified } from "react-icons/md"

export const FifthSection = () => {
    return (
        <div className="w-full h-full px-8 py-8 flex flex-col lg:flex-row gap-12 items-center justify-center">
            <div className="flex gap-4 flex-col w-1/2">
                <p>Notifications</p>
                <Typography variant="h1" className="font-normal">
                    Stay notified
                </Typography>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                <ul className="flex flex-col gap-4 pt-4">
                    <li className="flex gap-3"><MdVerified className="h-5 w-5 text-teal-300" />Malesuada Ipsum</li>
                    <li className="flex gap-3"><MdVerified className="h-5 w-5 text-teal-300" />Vestibulum</li>
                    <li className="flex gap-3"><MdVerified className="h-5 w-5 text-teal-300" />Parturient Lorem</li>
                </ul>
                <Button variant="text" size="sm" color="teal" className="font-normal text-md normal-case flex items-center justify-start">
                        <p>Compare Cards</p>
                        <ArrowRightIcon className="w-4 h-4 ml-2" />
                    </Button>
            </div>
            <div className="flex flex-col gap-2 px-4 w-96 lg:self-end lg:p-0">
                    <div className="flex justify-between items-center p-2 bg-gray-100 rounded-lg">
                        <div className="flex gap-3 items-center">
                        <span className="bg-teal-300 rounded">
                                <Typography variant="h4" className="font-normal w-8 h-8 grid place-items-center">b.
                                </Typography>
                            </span>
                            <div>
                                <p className="text-md">Banko.</p>
                                <p className="text-xs">You payment of 49€ has been processed!</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-100 rounded-lg">
                        <div className="flex gap-3 items-center">
                        <span className="bg-teal-300 rounded">
                                <Typography variant="h4" className="font-normal w-8 h-8 grid place-items-center">b.
                                </Typography>
                            </span>
                            <div>
                                <p className="text-md">Banko.</p>
                                <p className="text-xs">You got a new support message!</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-100 rounded-lg">
                        <div className="flex gap-3 items-center">
                        <span className="bg-teal-300 rounded">
                                <Typography variant="h4" className="font-normal w-8 h-8 grid place-items-center">b.
                                </Typography>
                            </span>
                            <div>
                                <p className="text-md">Banko.</p>
                                <p className="text-xs">You payment was declined!</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-100 rounded-lg">
                        <div className="flex gap-3 items-center">
                        <span className="bg-teal-300 rounded">
                                <Typography variant="h4" className="font-normal w-8 h-8 grid place-items-center">b.
                                </Typography>
                            </span>
                            <div>
                                <p className="text-md">banko.</p>
                                <p className="text-xs">Please verify your payment of 99€!</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-100 rounded-lg">
                        <div className="flex gap-3 items-center">
                        <span className="bg-teal-300 rounded">
                                <Typography variant="h4" className="font-normal w-8 h-8 grid place-items-center">b.
                                </Typography>
                            </span>
                            <div>
                                <p className="text-md">Banko.</p>
                                <p className="text-xs">New account statistics are available!</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}