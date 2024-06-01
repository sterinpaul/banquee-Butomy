import { ArrowRightIcon } from "@heroicons/react/24/outline"
import { Button, Typography } from "@material-tailwind/react"
import { FcCamera,FcPlus } from "react-icons/fc";


export const FourthSection = ()=>{
    return(
        <div className="w-full h-full p-20 flex gap-8 flex-col">
            <p>Saving Accounts</p>
            <div>
            <Typography 
                variant="h1"
                className="font-normal"
            >
                Organize your
            </Typography>
            <Typography 
                variant="h1"
                className="font-normal"
            >
                money the right way
            </Typography>
            </div>
            <div className="flex justify-between">
                <p className="line-clamp-2 w-1/2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <Button variant="text" size="sm" color="teal" className="font-normal text-md normal-case flex items-center gap-1 self-end">
                        <p>All Features</p>
                        <ArrowRightIcon className="w-4 h-4" />
                </Button>
            </div>
            {/* <div className="flex justify-between items-start gap-4 flex-wrap"> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-items-center">
                <article className="text-left">
                    <div className="w-44 h-44 bg-green-50 rounded-lg mb-2">
                        <img src="https://3.imimg.com/data3/YV/IX/MY-12517236/laptop-computer-250x250.jpg" className="w-full h-full  object-fill"/>
                    </div>
                    <p>New Laptop</p>
                    <p className="text-gray-500 text-sm">400$</p>
                </article>
                <article className="text-left">
                <div className="w-44 h-44 bg-pink-50 rounded-lg mb-2">
                        <img src="https://previews.123rf.com/images/rastudio/rastudio1201/rastudio120100177/12137208-cartoon-motorcycle.jpg" className="w-full h-full  object-fill"/>
                    </div>
                    <p>Dream bike</p>
                    <p className="text-gray-500 text-sm">200$</p>
                </article>
                <article className="text-left">
                <div className="w-44 h-44 bg-teal-50 rounded-lg mb-2">
                        <img src="https://previews.123rf.com/images/iimages/iimages1603/iimages160300283/53485337-airplane-flying-in-the-sky-illustration.jpg" className="w-full h-full  object-fill"/>
                    </div>
                    <p>Holiday</p>
                    <p className="text-gray-500 text-sm">1400$</p>
                </article>
                <article className="text-left">
                <div className="w-44 h-44 bg-deep-orange-50 rounded-lg mb-2 grid place-items-center">
                    <FcCamera className="w-12 h-12" />
                    </div>
                    <p>Camera</p>
                    <p className="text-gray-500 text-sm">100$</p>
                </article>
                <article className="text-left">
                <div className="w-44 h-44 bg-gray-100 rounded-lg mb-2 grid place-items-center">
                    <FcPlus className="w-12 h-12" />
                    </div>
                </article>
            </div>
            
        </div>
    )
}