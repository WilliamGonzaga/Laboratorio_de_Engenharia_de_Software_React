import {Link} from "react-router-dom"
import ContadorDePessoas from "./ContadorDePessoas"
 
export default function Atv02() {
    return (
        <>
            <h2>Atividade 2</h2>
            <ContadorDePessoas />

            
            <Link to="/">Voltar</Link>
        </>
    );
}