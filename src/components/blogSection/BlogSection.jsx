import { ArrowRightIcon } from "@heroicons/react/24/outline"
import { Button, Typography } from "@material-tailwind/react"
import { SingleBlog } from "./SingleBlog"

const blogs = [
    {
        img:"https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
        title:"How To Start Using Banko For Your Startup",
        desc:"The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to Naviglio where you can enjoy the main night life in Barcelona."
    },
    {
        img:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
        title:"10 Things Nobody Told You About Banko",
        desc:"The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to Naviglio where you can enjoy the main night life in Barcelona."
    },
    {
        img:"https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        title:"7 Ways To Improve You Saving Habits",
        desc:"The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to Naviglio where you can enjoy the main night life in Barcelona."
    }
]

export const BlogSection = () => {
    return (
        <div className="w-full h-full p-20">
            <div className="flex items-center gap-8 justify-between">
                <Typography variant="h1" className="font-normal">Blog</Typography>
                <Button variant="text" size="sm" color="teal" className="font-normal text-md normal-case flex items-center justify-center">
                    <p>All Articles</p>
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Button>
            </div>
            
            <div className=" py-8 flex justify-center md:justify-between flex-wrap items-center gap-4">
                {blogs.map((single,index)=>{
                    return <SingleBlog key={index} single={single}/>
                })}
            </div>
        </div>
    )
}