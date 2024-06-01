import { Typography } from "@material-tailwind/react"
import { StarIcon } from "@heroicons/react/20/solid";
export const NinethSection = () => {
    return (
        <div className="w-full h-full px-20 flex gap-8 flex-col">
            <div>
                <p>Testimonials</p>
                <div className="flex justify-between gap-4 items-center md:flex-row flex-col">
                    <div className="flex flex-col">
                        <Typography variant="h1" className="font-normal">
                            People all over the
                        </Typography>
                        <Typography variant="h1" className="font-normal">
                            world use banko.
                        </Typography>
                    </div>
                    <div className="flex items-center justify-center gap-2 self-end">
                        <StarIcon className="w-8 h-8 p-1 bg-gray-200  text-teal-300 rounded-full" />
                        <p>Rated <span className="text-teal-300">4.8/5</span> from over 1000 users</p>
                    </div>
                </div>
            </div>
            <div className="mx-auto">
            {/* <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4"> */}
            <div className="flex flex-wrap items-center justify-center gap-4 p-4">
                <div className="border border-gray-300 rounded-lg p-4 h-96 w-80 flex flex-col justify-between gap-4">
                    <div className="flex gap-1">
                        <StarIcon className="w-6 h-6 text-teal-300" />
                        <StarIcon className="w-6 h-6 text-teal-300" />
                        <StarIcon className="w-6 h-6 text-teal-300" />
                        <StarIcon className="w-6 h-6 text-teal-300" />
                        <StarIcon className="w-6 h-6 text-teal-300" />
                    </div>
                    <Typography variant="h5" className="mt-2 font-normal">Sunt qui esse pariatur duis deserunt mollit</Typography>
                    <p className="text-sm">Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.</p>
                    <div>
                        <p>Cody Fisher</p>
                        <p className="text-gray-500 font-thin">Medical Assistant</p>
                    </div>
                </div>
                <div className="border border-gray-300 rounded-lg p-4 h-96 w-80 flex flex-col justify-between gap-4">
                    <div className="flex gap-1">
                        <StarIcon className="w-6 h-6 text-teal-300" />
                        <StarIcon className="w-6 h-6 text-teal-300" />
                        <StarIcon className="w-6 h-6 text-teal-300" />
                        <StarIcon className="w-6 h-6 text-teal-300" />
                        <StarIcon className="w-6 h-6 text-teal-300" />
                    </div>
                    <Typography variant="h5" className="mt-2 font-normal">At lectus urna duis convallis tellus</Typography>
                    <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit amet nulla facilisi morbi.
                        In nibh mauris cursus mattis. At lectus urna duis convallis convallis tellus. At lectus urna duis convallis convallis tellus.</p>
                    <div>
                        <p>Jenny Wilson</p>
                        <p className="text-gray-500 font-thin">Nursing Assistant</p>
                    </div>
                </div>
                <div className="border border-gray-300 rounded-lg p-4 h-96 w-80 flex flex-col justify-between gap-4">
                    <div className="flex gap-1">
                        <StarIcon className="w-6 h-6 text-teal-300" />
                        <StarIcon className="w-6 h-6 text-teal-300" />
                        <StarIcon className="w-6 h-6 text-teal-300" />
                        <StarIcon className="w-6 h-6 text-teal-300" />
                        <StarIcon className="w-6 h-6 text-teal-300" />
                    </div>
                    <Typography variant="h5" className="mt-2 font-normal">Donec et fringilla neque</Typography>
                    <p className="text-sm">Etiam accumsan porta neque in viverra. Proin eleifend, eros in tristique hendrerit, nisi purus cursus sapien, id ultrices nunc tellus a ipsum. Donec et fringilla neque. Aenean consequat purus quis lectus maximus fermentum.</p>
                    <div>
                        <p>Cody Fisher</p>
                        <p className="text-gray-500 font-thin">Medical Assistant</p>
                    </div>
                </div>
                <div className="border border-gray-300 rounded-lg p-4 h-96 w-80 flex flex-col justify-between gap-4">
                    <div className="flex gap-1">
                        <StarIcon className="w-6 h-6 text-teal-300" />
                        <StarIcon className="w-6 h-6 text-teal-300" />
                        <StarIcon className="w-6 h-6 text-teal-300" />
                        <StarIcon className="w-6 h-6 text-teal-300" />
                        <StarIcon className="w-6 h-6 text-teal-300" />
                    </div>
                    <Typography variant="h5" className="mt-2 font-normal">Sunt qui esse pariatur duis deserunt mollit</Typography>
                    <p className="text-sm">Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.</p>
                    <div>
                        <p>Darlene Robertson</p>
                        <p className="text-gray-500 font-thin">Dog Trainer</p>
                    </div>
                </div>
                <div className="border border-gray-300 rounded-lg p-4 h-96 w-80 flex flex-col justify-between gap-4">
                    <div className="flex gap-1">
                        <StarIcon className="w-6 h-6 text-teal-300" />
                        <StarIcon className="w-6 h-6 text-teal-300" />
                        <StarIcon className="w-6 h-6 text-teal-300" />
                        <StarIcon className="w-6 h-6 text-teal-300" />
                        <StarIcon className="w-6 h-6 text-teal-300" />
                    </div>
                    <Typography variant="h5" className="mt-2 font-normal">Sunt qui esse pariatur duis deserunt mollit</Typography>
                    <p className="text-sm">Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.</p>
                    <div>
                        <p>Dianne Russell</p>
                        <p className="text-gray-500 font-thin">Medical Assistant</p>
                    </div>
                </div>
                <div className="border border-gray-300 rounded-lg p-4 h-96 w-80 flex flex-col justify-between gap-4">
                    <div className="flex gap-1">
                        <StarIcon className="w-6 h-6 text-teal-300" />
                        <StarIcon className="w-6 h-6 text-teal-300" />
                        <StarIcon className="w-6 h-6 text-teal-300" />
                        <StarIcon className="w-6 h-6 text-teal-300" />
                        <StarIcon className="w-6 h-6 text-teal-300" />
                    </div>
                    <Typography variant="h5" className="mt-2 font-normal">Sunt qui esse pariatur duis deserunt mollit</Typography>
                    <p className="text-sm">Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.</p>
                    <div>
                        <p>Cody Fisher</p>
                        <p className="text-gray-500 font-thin">Medical Assistant</p>
                    </div>
                </div>

                </div>
            </div>
        </div>
    )
}