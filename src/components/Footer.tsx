import { Jaro } from 'next/font/google';
import { Inter } from 'next/font/google';

const jaroStyle = Jaro({ subsets: ["latin"] });
const interStyle = Inter({ subsets: ["latin"] });

const Footer = () => {
    return (
        <footer>
            <section className="container mx-auto px-4 sm:px-0">
                <div className="flex flex-row justify-between py-6">
                    <div className="flex flex-col"> 
                        <h5 className={`${jaroStyle.className} font-normal`}>Ajuda</h5>
                        <span className={`${jaroStyle.className} font-normal`}>Fale com a equipe All Stack</span>
                        <span className={`${jaroStyle.className} font-normal`}>Docs</span>
                    </div>
                    <div className="flex flex-col">
                        <h5 className={`${jaroStyle.className} font-normal`}>Comunidade</h5>
                        <span className={`${jaroStyle.className} font-normal`}>Github</span>
                        <span className={`${jaroStyle.className} font-normal`}>Discord</span>
                        <span className={`${jaroStyle.className} font-normal`}>Acesse a comunidade no WhatsApp</span>
                    </div>
                    <div className="flex flex-col">
                        <h5 className={`${jaroStyle.className} font-normal`}>Mais</h5>
                        <span className={`${jaroStyle.className} font-normal`}>Apoie</span>
                    </div>
                </div>
                <div className='py-6 flex items-center justify-center'>
                    <span className={`${interStyle.className} font-normal text-sm`}>Copyright © 2024 All Stack Community ◦ V 1.0</span>
                </div>
            </section>
        </footer>
    )
}

export default Footer;