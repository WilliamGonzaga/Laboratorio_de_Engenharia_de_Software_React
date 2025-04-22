import Relogio from "./Relogio";
import Letreiro from "./Letreiro";
import {Link} from "react-router-dom"
 
export default function Atv01() {
    return (
        <>
        <h2>Atividade 1</h2>
        <Relogio />
        <hr/>
        <Letreiro />
        <hr/>
        <Link to="/">Voltar</Link>
        </>
    );
}
  

  