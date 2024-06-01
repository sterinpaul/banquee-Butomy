/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import {
    Navbar,
    Collapse,
    Typography,
    Button,
    IconButton,
    List,
    ListItem
} from "@material-tailwind/react";
import {
    ChevronDownIcon,
    Bars3Icon,
    XMarkIcon,
} from "@heroicons/react/24/outline";



const ListWithArrow = ({ label,arrowDown }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <Typography
            as="a"
            href="#"
            variant="small"
            color="blue-gray"
            className="font-medium"
        >
            <ListItem
                className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
                selected={isMenuOpen || arrowDown}
                onClick={() => setIsMenuOpen((cur) => !cur)}
            >
                {label}
                <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`h-3 w-3 transition-transform lg:block ${isMenuOpen || arrowDown ? "rotate-180" : ""
                        }`}
                />
            </ListItem>
        </Typography>
    )
}


function NavList() {

    return (
        <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
            <Typography
                as="a"
                href="#"
                variant="small"
                color="blue-gray"
                className="font-medium"
            >
                <ListItem className="flex items-center gap-2 py-2 pr-4">Features</ListItem>
            </Typography>
            <ListWithArrow label={"Compare"} arrowDown={true} />

            <Typography
                as="a"
                href="#"
                variant="small"
                color="blue-gray"
                className="font-medium"
            >
                <ListItem className="flex items-center gap-2 py-2 pr-4">
                    Support
                </ListItem>
            </Typography>
            <ListWithArrow label={"Blog"} arrowDown={false} />
        </List>
    );
}

export function NavBar() {
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    return (
        <Navbar className="fixed z-50 max-w-none px-8 py-2 rounded-none bg-white shadow-sm">
            <div className="flex items-center justify-between lg:justify-around text-teal-300">
                <Typography
                    as="a"
                    href="#"
                    variant="h3"
                    className="mr-4 cursor-pointer py-1.5 lg:ml-2 "
                >
                    banquee.
                </Typography>
                <div className="hidden lg:block">
                    <NavList />
                </div>
                <div className="hidden gap-2 lg:flex">
                    <Button variant="text" size="sm" color="teal" className="font-normal normal-case">
                        Login
                    </Button>
                    <button className="text-white bg-teal-300 rounded px-4 font-normal normal-case">
                        Open Account
                    </button>
                </div>
                <IconButton
                    variant="text"
                    color="blue-gray"
                    className="lg:hidden"
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <NavList />
                <div className="flex w-full flex-nowrap justify-center items-center gap-2 lg:hidden">
                    <Button variant="text" size="sm" color="teal" fullWidth className="font-normal normal-case">
                        Login
                    </Button>
                    <button className="text-white bg-teal-300 w-full text-nowrap rounded py-1 font-normal normal-case">
                        Open Account
                    </button>
                </div>
            </Collapse>
        </Navbar>
    );
}