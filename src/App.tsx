import Navbar from "./components/componentes/navbar";
// import Cards from "./components/componentes/cards";
import './style.css'
// import Carrossel from "./components/componentes/carrossel";
import { FaWhatsapp } from "react-icons/fa";
import { CarrosselIgor } from "./components/componentes/card_igor";


export function App() {

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className="w-10 h-10 fixed bottom-10 right-8 md:bottom-10 md:right-8 z-10">
        <a href="#" className="rounded">
          <FaWhatsapp className="text-emerald-600 w-12 h-12" />
        </a>
      </div>
      <div className="flex flex-col items-center justify-center h600 preto_suave gap-2">
        <h1 className="text-white font-thin text-xl md:text-4xl font-poppins"><span className="font-semibold border-l-8 border-sky-400 pl-2">Impressoras</span> como você nunca viu</h1>
        <h3 className="text-white font-thin text-base md:text-3xl font-poppins">mas impressões que você <span className="font-semibold border-r-8 border-sky-400 pr-2">verá</span></h3>
      </div>
      <div>
        <section className="m-10 md:h-20 flex items-center justify-center" id="logoquemsomos">
          <img src="./src/images/Dee Print Logo.png" alt="" className="h-20" />
        </section>
      </div>
      <div className="h-auto font-poppins md:text-base text-sm text-start md:text-center md:indent-6 mx-20 my-10 flex flex-col items-center justify-evenly gap-6" id="quemsomos">
        <h1 className="font-semibold font-poppins text-xl">QUEM SOMOS</h1>
        <p>A <b>DEE PRINT INK</b> é uma empresa criada para fornecer soluções em produtos de impressão, focada em insumos, peças e serviços para seus clientes, preocupada em manter <b>qualidade</b> e <b>responsabilidade</b>, buscando <b>excelência</b> em suas operações.</p>
      </div>
      {/* data-aos="fade-right" data-aos-duration="3000" */}
      <div className="preto_suave flex flex-col md:flex-row justify-center gap-4 h600">
        <div className="flex flex-col md:justify-evenly justify-center gap-4 items-start md:indent-4 md:w-5/12 p-6 md:p-16 text-white font-poppins font-thin md:text-xl text-base">
            <h5><span className="font-semibold font-poppins">Missão, visão e valores</span></h5>
            <p>Prover <b>soluções de impressão</b>, rápidas e eficazes, com elevado nível de <b>comprometimento</b> e <b>qualidade</b>, assegurando aos clientes a confiança na continuidade dos seus negócios, superando as expectativas de nossos clientes.</p>
            <p>Ser uma empresa <b>economicamente sustentável</b> com referência em produtos para impressão, com muita responsabilidade, qualidade dos produtos e serviços.</p>
            <p>Comprometimento, honestidade, confiança e credibilidade, conhecimento, ética, inovação, integridade, transparência, respeito aos colaboradores e suas diversidades.</p>
        </div>
        <div className="text-center flex grow flex-col justify-center items-center gap-6">
            <p className="text-xl md:text-3xl font-thin text-white font-poppins">Todo mundo sabe que a <span className="font-semibold border-b-4 border-sky-400 md:p-1 p-0.5 text-nowrap">primeira impressão</span> é a que fica</p>
            <p className="font-poppins font-thin text-white text-xl md:text-xl">E nós temos as <b>peças certas</b> para isso.</p>
        </div>
      </div>
        <div className="my-10">
          <h1 className="font-poppins text-xl text-center mb-10 font-semibold">PRODUTOS</h1>
          {/* <Cards /> */}
          {/* <Carrossel /> */}
        </div>
        <footer>
          <CarrosselIgor />
        </footer>
    </div>
    
  )
}

export default App
