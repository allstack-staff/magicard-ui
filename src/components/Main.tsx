import { Button } from "flowbite-react";
import { Jaro } from 'next/font/google';
import { Inter } from 'next/font/google';

const jaroStyle = Jaro({ subsets: ["latin"] });
const interStyle = Inter({ subsets: ["latin"] });

const Main = () => {
    return (
        <main className="">
            <div className="bg-gradient-to-r from-primary to-secondary px-4 sm:px-0">
                <div className="container mx-auto">
                    <div className="flex flex-col justify-between items-center spa py-16">
                        <div className="mb-4">
                            <img src="../../Logo.png" alt="" />
                        </div>
                        <div className="mb-10">
                            <p className={`${jaroStyle.className} text-2xl text-center text-white`}>
                                Memorize tudo o que precisar com flashcards. O MAGICARD é feito para ser fácil, prático e divertido de usar. Atinja seus objetivos de estudo com menos peso, use para estudar sua lingua estrangeira preferida.
                            </p>
                        </div>
                        <Button className={`${interStyle.className} text-black font-bold py-2 px-11 rounded-3xl bg-magicButton hover:bg-magicButton-HOVER`}>
                            Criar Conta
                        </Button>
                    </div>
                </div>
            </div>

            <div className="bg-magicButton-150 px-40 sm:px-0">
                <div className="container mx-auto">
                    <div className="flex flex-col sm:flex-row justify-between items-center py-16 sm:space-x-8 space-y-8
                        ">
                        <div className="flex flex-col space-y-1">
                            <div className="h-64">
                                <img className="h-full object-contain mx-auto" src="../../Illustration-2.png" alt="" />
                            </div>
                            <div className="h-full space-y-2">
                                <h5 className={`${jaroStyle.className} font-normal text-2xl text-center`}>Fácil de usar</h5>
                                <p className="text-sm font-normal text-center">Painel feito para uso fácil e contínuo, sem desespero na hora de estudar.</p>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-1">
                            <div className="h-64">
                                <img className="h-full object-contain mx-auto" src="../../Illustration-1.png" alt="" />
                            </div>
                            <div className="space-y-2">
                                <h5 className={`${jaroStyle.className} font-normal text-2xl text-center`}>Fácil compartilhamento</h5>
                                <p className="text-sm font-normal text-center">Crie e compartilhe link dos seus baralhos e permita seus amigos estudar o mesmo que vc.</p>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-1">
                            <div className="h-64">
                                <img className="h-full object-contain mx-auto" src="../../Illustration.png" alt="" />
                            </div>
                            <div className="space-y-2">
                                <h5 className={`${jaroStyle.className} font-normal text-2xl text-center`}>Potencialize os estudos</h5>
                                <p className="text-sm font-normal text-center">Estude com flashcards e potencialize seus estudos e torne-se mais eficiente.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
};

export default Main;