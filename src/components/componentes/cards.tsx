import { Button } from "../ui/button"
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";


export function Cards() {

  return (
    <div className="flex flex-col md:flex-row items-center justify-evenly gap-6">
        <div className="max-w-sm border bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg object-cover h-60 w-full" src="./src/images/imp4.jpg" alt="impressora" />
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
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg" src="./src/images/imp6.jpg" alt="impressora" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-poppins">Belt de imagem</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 font-poppins">Belt de imagem Konica compatível com impressoras Konica X20, Y30, Z40.</p>
                {/* <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a> */}
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
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg" src="./src/images/imp3.jpg" alt="impressora" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-poppins">Corona de carga</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 font-poppins">Corona de carga Konica compatível com impressoras Konica X20, Y30, Z40.</p>
                {/* <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a> */}
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


    
  )
}

export default Cards
