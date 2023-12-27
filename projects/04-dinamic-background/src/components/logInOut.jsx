import "../styles/log-in-out.css"

export const LogInOut = () => {
    return (
        <div className="signin">
            <div className="content">
                <h2>Iniciar Sesion</h2>
                <form className="form" method="post">
                    <div className="inputbx">
                        <input type="email" name="login-email" id="" autoFocus required/>
                        <label>Correo Electrónico</label>
                        <b></b>
                    </div>
                    <div className="inputbx">
                        <input type="password" name="login-password" id="" required/>
                        <label>Contraseña</label>
                        <b></b>
                    </div>
                    <div className="links">
                        <a href="">Olvidé mi contraseña</a>
                        <a href="../../index.html?rute=signup">Registrarse</a> 
                    </div>
                    <div className="inputbx">
                        <input type="submit" value="Entrar"/>
                    </div>
                </form>
            </div>
        </div>
    )
}