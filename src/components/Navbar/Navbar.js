import add from "../../img/add.png";
import logout from "../../img/logout.png";

function Navbar() {
    return (
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <img src="img/9camp.png" alt="Logo 9CAMP" />
                </div>
                <div className="menu">
                    <div className="botao">
                        <img src={add} alt="Botão Adicionar" />
                    </div>
                    <div className="botao">
                        <img src={logout} alt="Botão Logout" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar
