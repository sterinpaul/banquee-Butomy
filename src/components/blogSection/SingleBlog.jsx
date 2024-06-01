/* eslint-disable react/prop-types */

import {
    Card,
    CardBody,
    CardFooter,
    Typography
  } from "@material-tailwind/react";
   
  export function SingleBlog({single}) {
    return (
      <Card className="w-72 h-100 overflow-hidden shadow-none">
        <div className="h-64 w-100">
          <img
            src={single.img}
            alt="card-image"
            className="h-full w-full object-cover rounded-xl"
          />
        </div>
        <CardBody className="px-0">
          <Typography variant="h5" color="blue-gray" className="">
            {single.title}
          </Typography>
          <Typography className="pt-4">
            {single.desc}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0 flex gap-4 pl-0">
          <button className="bg-gray-200 hover:bg-gray-400 hover:text-white rounded text-xs font-normal px-2 py-1" >Product</button>
          <button className="bg-gray-200 hover:bg-gray-400 hover:text-white rounded text-xs font-normal px-2 py-1" >Technology</button>
        </CardFooter>
      </Card>
    );
  }