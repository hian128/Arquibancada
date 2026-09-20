import { Link } from "react-router-dom";

export default function pageFooter(props) {
    const mostrar = props.mostrar;
    return (
        <footer className="bg-sky-500 h-auto p-3 text-center">
            <div className="w-auto mx-auto">
                {mostrar && (<a href="#header" className="text-black inline-block font-semibold hover:-translate-y-1 transition duration-300 hover:text-sky-100">VOLTAR PARA O TOPO</a>) || <p className="font-semibold">ENTRE EM CONTATO</p>}

                <div className="border-b border-black my-3"></div>

                <div className="flex flex-col md:flex-row justify-around items-center gap-5">
                    <p className="">&copy; {new Date().getFullYear()} Arquibancada.<br /> Todos os direitos ilusoriamente reservados. </p>

                    <nav className="flex flex-wrap justify-center gap-5 ">
                        {mostrar && (
                            <>
                                <a href="#times" className="font-semibold hover:text-sky-100 hover:-translate-y-1 transition-all duration-300">Times</a>

                                <a href="#campeonatos" className="font-semibold hover:text-sky-100 hover:-translate-y-1 transition-all duration-300">Campeonatos</a>
                            </>)}

                        <Link to={props.destino} className="font-semibold hover:text-sky-100 hover:-translate-y-1 transition-all duration-300">{props.nome}</Link>
                    </nav>
                </div>
            </div>

        </footer>
    );
};