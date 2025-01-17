import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { Button } from "../ui/button"

  

export function CarrosselIgor() {

  return (
    <Carousel className="md:mx-20 mx-14" id="produtos">
        <CarouselContent>
            <CarouselItem>
                {/* Primeiro item */}
                <div className="md:h-auto h-auto flex flex-col md:flex-row items-center justify-evenly gap-6">
                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                        <img className="rounded-t-lg object-cover md:h-60 h-60 w-full" src="./src/images/Tonertn620 (1).png" alt="impressora" />
                        <div className="p-5">
                            <h5 className="mb-2 md:text-2xl text-xl font-bold tracking-tight text-gray-900 font-poppins">Toner TN620</h5>
                            <p className="mb-3 font-normal text-gray-700 font-poppins">Toner Konica TN620 compatível com impressoras Konica X20, Y30, Z40.</p>
                            <p className="my-4 font-poppins text-emerald-500 font-semibold text-xl">R$99,90</p>
                            <div>
                                <a href="https://wa.me/5551985758293?text=Olá, eu gostaria de mais informações sobre Toner Konica TN620. Poderia me ajudar?" target="_blank">
                                    <Button className="bg-sky-500 w-full">
                                        <FaWhatsapp />
                                        WhatsApp
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                        <img className="rounded-t-lg object-cover md:h-60 h-60 w-full" src="./src/images/Tonertn620 (1).png" alt="impressora" />
                        <div className="p-5">
                            <h5 className="mb-2 md:text-2xl text-xl font-bold tracking-tight text-gray-900 font-poppins">Toner TN620</h5>
                            <p className="mb-3 font-normal text-gray-700 font-poppins">Toner Konica TN620 compatível com impressoras Konica X20, Y30, Z40.</p>
                            <p className="my-4 font-poppins text-emerald-500 font-semibold text-xl">R$99,90</p>
                            <div>
                                <a href="https://wa.me/5551985758293?text=Olá, eu gostaria de mais informações sobre Toner Konica TN620. Poderia me ajudar?" target="_blank">
                                    <Button className="bg-sky-500 w-full">
                                        <FaWhatsapp />
                                        WhatsApp
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Segundo item */}
                    <div className="max-w-sm border bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <img className="rounded-t-lg object-fill h-60 w-full" src="./src/images/Belt de fusão.png" alt="impressora" />
                        <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-poppins">Toner TN620</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 font-poppins">Toner Konica TN620 compatível com impressoras Konica X20, Y30, Z40.</p>
                            <p className="my-4 font-poppins text-emerald-500 font-semibold text-xl">R$129,90</p>
                            <div>
                                <Button className="bg-gray-800 w-full">
                                    <FaWhatsapp />
                                    WhatsApp
                                </Button>
                            </div>
                        </div>
                    </div>
                    {/* Terceiro item */}
                    <div className="max-w-sm border bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <img className="rounded-t-lg object-cover h-60 w-full" src="./src/images/Beltimagem.png" alt="impressora" />
                        <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-poppins">Toner TN620</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 font-poppins">Toner Konica TN620 compatível com impressoras Konica X20, Y30, Z40.</p>
                            <div className="flex items-start justify-start gap-4">
                                <span className="my-4 font-poppins text-emerald-500 font-semibold text-xl line-through">R$129,90</span>
                                <span className="my-4 font-poppins text-fuchsia-500 font-semibold text-xl">R$100,00</span>
                            </div>
                            <div>
                                <Button className="bg-gray-800 w-full">
                                    <FaWhatsapp />
                                    WhatsApp
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

export default CarrosselIgor





{/* <div id="lista">
      <ul>
        <li>
          <div class="product-card">
            <div class="product-image-container">
              <img src="imagens/Tonertn620 (1).png" alt="Imagem do Produto" class="product-image">
            </div>
            <div class="product-content">
              <h2 class="product-title">Toner TN620</h2>
              <p class="product-description">Este é um breve texto descrevendo as características principais do produto.
              </p>
              <p class="product-price">R$ 99,90</p>
              <a href="#" class="buy-button">Comprar pelo Whatsapp</a>
            </div>
          </div>
        </li>
        <li>
          <div class="product-card">
            <div class="product-image-container">
              <img src="imagens/Belt de fusão.png" alt="Imagem do Produto" class="product-image">
            </div>
            <div class="product-content">
              <h2 class="product-title">Belt de Fusão</h2>
              <p class="product-description">Este é um breve texto descrevendo as características principais do produto.
              </p>
              <p class="product-price">R$ 99,90</p>
              <a href="#" class="buy-button">Comprar pelo Whatsapp</a>
            </div>
          </div>
        <li>
          <div class="product-card">
            <div class="product-image-container">
              <img src="imagens/Beltimagem.png" alt="Imagem do Produto" class="product-image">
            </div>
            <div class="product-content">
              <h2 class="product-title">Belt de Imagem</h2>
              <p class="product-description">Este é um breve texto descrevendo as características principais do produto.
              </p>
              <p class="product-price">R$ 99,90</p>
              <a href="#" class="buy-button">Comprar pelo Whatsapp</a>
            </div>
          </div>
        <li>

          <div class="product-card">
            <div class="product-image-container">
              <img src="imagens/ReveladorC3070.png" alt="Imagem do Produto" class="product-image">
            </div>
            <div class="product-content">
              <h2 class="product-title">Revelador C3070</h2>
              <p class="product-description">Este é um breve texto descrevendo as características principais do produto.
              </p>
              <p class="product-price">R$ 99,90</p>
              <a href="#" class="buy-button">Comprar pelo Whatsapp</a>
            </div>
          </div>
        </li>

        <li>

          <div class="product-card">
            <div class="product-image-container">
              <img src="imagens/ConjuntolimpezaC3070.png" alt="Imagem do Produto" class="product-image">
            </div>
            <div class="product-content">
              <h2 class="product-title">Conjunto de Limpeza C3070</h2>
              <p class="product-description">Este é um breve texto descrevendo as características principais do produto.
              </p>
              <p class="product-price">R$ 99,90</p>
              <a href="#" class="buy-button">Comprar pelo Whatsapp</a>
            </div>
          </div>
          
        </li>

        <li>

          <div class="product-card">
            <div class="product-image-container">
              <img src="imagens/Coronacarga.png" alt="Imagem do Produto" class="product-image">
            </div>
            <div class="product-content">
              <h2 class="product-title">Corona de Carga</h2>
              <p class="product-description">Este é um breve texto descrevendo as características principais do produto.
              </p>
              <p class="product-price">R$ 99,90</p>
              <a href="#" class="buy-button">Comprar pelo Whatsapp</a>
            </div>
          </div>

        </li>

        <li>

          <div class="product-card">
            <div class="product-image-container">
              <img src="imagens/Cilindroimagem.png" alt="Imagem do Produto" class="product-image">
            </div>
            <div class="product-content">
              <h2 class="product-title">Cilindro de Imagem</h2>
              <p class="product-description">Este é um breve texto descrevendo as características principais do produto.
              </p>
              <p class="product-price">R$ 99,90</p>
              <a href="#" class="buy-button">Comprar pelo Whatsapp</a>
            </div>
          </div>

        </li>

        <li>

          <div class="product-card">
            <div class="product-image-container">
              <img src="imagens/LonaTexturizada.png" alt="Imagem do Produto" class="product-image">
            </div>
            <div class="product-content">
              <h2 class="product-title">Lona Texturizada</h2>
              <p class="product-description">Este é um breve texto descrevendo as características principais do produto.
              </p>
              <p class="product-price">R$ 99,90</p>
              <a href="#" class="buy-button">Comprar pelo Whatsapp</a>
            </div>
          </div>

        </li>
      </ul>
    </div> */}
