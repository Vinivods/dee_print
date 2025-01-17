import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"



export function Navbar() {

  return (
    <div className="container md:mx-auto flex justify-center md:justify-between items-center bg-transparent">
        <img src="./src/images/Dee Print Logo.png" alt="logo" className="md:h-16 md:m-4 h-6 m-4"/>
      <Menubar className="border-0 font-poppins md:mt-2">
        <MenubarMenu>
          <a href="#logoquemsomos">
            <MenubarTrigger className="text-xs md:text-base cursor-pointer nav-item">A DEEPRINT</MenubarTrigger>
          </a>
        </MenubarMenu>
        <MenubarMenu>
          <a href="#produtos">
            <MenubarTrigger className="text-xs md:text-base cursor-pointer nav-item">PRODUTOS</MenubarTrigger>
          </a>
        </MenubarMenu>
        <MenubarMenu>
          <Drawer>
            <MenubarTrigger className="text-xs md:text-base nav-item">
              <DrawerTrigger>CONTATO</DrawerTrigger>
            </MenubarTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle className="text-center font-poppins">Entre em contato conosco!</DrawerTitle>
                <DrawerDescription className="text-center font-poppins">Estamos sempre dispostos a ajudar.</DrawerDescription>
                <div className="text-3xl flex flex-col items-center gap-6 md:flex-row md:justify-evenly py-8">
                  <span className="flex items-center gap-2">
                    <FaWhatsapp className="text-emerald-500" />
                    51 99801-1234</span>
                  <span className="flex items-center gap-2">
                    <FaInstagram /> 
                    smartprint.ins</span>
                  {/* <span className="flex items-center gap-2 ">
                    <FaPhoneAlt /> 
                    3333-3333</span> */}
                </div>
              </DrawerHeader>
              <DrawerFooter>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </MenubarMenu>
      </Menubar>
      {/* <Button>Enviar solicitação</Button> */}
    </div>
    
  )
}

export default Navbar
