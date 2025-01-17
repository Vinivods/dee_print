import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { Button } from "../ui/button"

  

export function Carrossel() {

  return (
    <Carousel className="md:mx-20 mx-14" id="produtos">
        <CarouselContent>
            <CarouselItem>
                {/* Primeiro item */}
                <div className="md:h-auto h-auto flex flex-col md:flex-row items-center justify-evenly gap-6">
                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                        <img className="rounded-t-lg object-cover md:h-60 h-60 w-full" src="./src/images/imp4.jpg" alt="impressora" />
                        <div className="p-5">
                            <h5 className="mb-2 md:text-2xl text-xl font-bold tracking-tight text-gray-900 font-poppins">Toner TN620</h5>
                            <p className="mb-3 font-normal text-gray-700 font-poppins">Toner Konica TN620 compatível com impressoras Konica X20, Y30, Z40.</p>
                            <div className="flex justify-start gap-4">
                                <a href="https://wa.me/5551985758293?text=Olá, eu gostaria de mais informações sobre Toner Konica TN620. Poderia me ajudar?" target="_blank">
                                    <Button className="bg-gray-900">
                                        <FaWhatsapp />
                                        WhatsApp
                                    </Button>
                                </a>
                                <a href="tel:+5551985758293">
                                    <Button className="bg-gray-900">
                                        <FaPhoneAlt />
                                        Telefone
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Segundo item */}
                    <div className="max-w-sm border bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <img className="rounded-t-lg object-cover h-60 w-full" src="./src/images/imp4.jpg" alt="impressora" />
                        <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-poppins">Toner TN620</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 font-poppins">Toner Konica TN620 compatível com impressoras Konica X20, Y30, Z40.</p>
                            <div className="flex justify-start gap-4">
                                <Button className="bg-gray-900">
                                    <FaWhatsapp />
                                    WhatsApp
                                </Button>
                                <Button className="bg-gray-900">
                                    <FaPhoneAlt />
                                    Telefone
                                </Button>
                            </div>
                        </div>
                    </div>
                    {/* Terceiro item */}
                    <div className="max-w-sm border bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <img className="rounded-t-lg object-cover h-60 w-full" src="./src/images/imp4.jpg" alt="impressora" />
                        <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-poppins">Toner TN620</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 font-poppins">Toner Konica TN620 compatível com impressoras Konica X20, Y30, Z40.</p>
                            <div className="flex justify-start gap-4">
                                <Button className="bg-gray-900">
                                    <FaWhatsapp />
                                    WhatsApp
                                </Button>
                                <Button className="bg-gray-900">
                                    <FaPhoneAlt />
                                    Telefone
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </CarouselItem>
            <CarouselItem>
                {/* Primeiro item */}
                <div className="md:h-auto h-auto flex flex-col md:flex-row items-center justify-evenly gap-6">
                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                        <a href="#">
                            <img className="rounded-t-lg object-cover md:h-60 h-60 w-full" src="./src/images/imp5.jpg" alt="impressora" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 md:text-2xl text-xl font-bold tracking-tight text-gray-900 font-poppins">Toner TN620</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 font-poppins">Toner Konica TN620 compatível com impressoras Konica X20, Y30, Z40.</p>
                            <div className="flex justify-start gap-4">
                                <Button className="bg-gray-900">
                                    <FaWhatsapp />
                                    WhatsApp
                                </Button>
                                <Button className="bg-gray-900">
                                    <FaPhoneAlt />
                                    Telefone
                                </Button>
                            </div>
                        </div>
                    </div>
                    {/* Segundo item */}
                    <div className="max-w-sm border bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="rounded-t-lg object-cover h-60 w-full" src="./src/images/imp5.jpg" alt="impressora" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-poppins">Toner TN620</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 font-poppins">Toner Konica TN620 compatível com impressoras Konica X20, Y30, Z40.</p>
                            <div className="flex justify-start gap-4">
                                <Button className="bg-gray-900">
                                    <FaWhatsapp />
                                    WhatsApp
                                </Button>
                                <Button className="bg-gray-900">
                                    <FaPhoneAlt />
                                    Telefone
                                </Button>
                            </div>
                        </div>
                    </div>
                    {/* Terceiro item */}
                    <div className="max-w-sm border bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="rounded-t-lg object-cover h-60 w-full" src="./src/images/imp5.jpg" alt="impressora" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-poppins">Toner TN620</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 font-poppins">Toner Konica TN620 compatível com impressoras Konica X20, Y30, Z40.</p>
                            <div className="flex justify-start gap-4">
                                <Button className="bg-gray-900">
                                    <FaWhatsapp />
                                    WhatsApp
                                </Button>
                                <Button className="bg-gray-900">
                                    <FaPhoneAlt />
                                    Telefone
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

            </CarouselItem>
            <CarouselItem>
                {/* Primeiro item */}
                <div className="md:h-auto h-auto flex flex-col md:flex-row items-center justify-evenly gap-6">
                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                        <a href="#">
                            <img className="rounded-t-lg object-cover md:h-60 h-60 w-full" src="./src/images/imp6.jpg" alt="impressora" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 md:text-2xl text-xl font-bold tracking-tight text-gray-900 font-poppins">Toner TN620</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 font-poppins">Toner Konica TN620 compatível com impressoras Konica X20, Y30, Z40.</p>
                            <div className="flex justify-start gap-4">
                                <Button className="bg-gray-900">
                                    <FaWhatsapp />
                                    WhatsApp
                                </Button>
                                <Button className="bg-gray-900">
                                    <FaPhoneAlt />
                                    Telefone
                                </Button>
                            </div>
                        </div>
                    </div>
                    {/* Segundo item */}
                    <div className="max-w-sm border bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="rounded-t-lg object-cover h-60 w-full" src="./src/images/imp6.jpg" alt="impressora" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-poppins">Toner TN620</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 font-poppins">Toner Konica TN620 compatível com impressoras Konica X20, Y30, Z40.</p>
                            <div className="flex justify-start gap-4">
                                <Button className="bg-gray-900">
                                    <FaWhatsapp />
                                    WhatsApp
                                </Button>
                                <Button className="bg-gray-900">
                                    <FaPhoneAlt />
                                    Telefone
                                </Button>
                            </div>
                        </div>
                    </div>
                    {/* Terceiro item */}
                    <div className="max-w-sm border bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="rounded-t-lg object-cover h-60 w-full" src="./src/images/imp6.jpg" alt="impressora" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-poppins">Toner TN620</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 font-poppins">Toner Konica TN620 compatível com impressoras Konica X20, Y30, Z40.</p>
                            <div className="flex justify-start gap-4">
                                <Button className="bg-gray-900">
                                    <FaWhatsapp />
                                    WhatsApp
                                </Button>
                                <Button className="bg-gray-900">
                                    <FaPhoneAlt />
                                    Telefone
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
    </Carousel>



    
  )
}

export default Carrossel
