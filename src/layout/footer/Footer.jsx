import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">

        <NavLink to={`/`}>
          <img src="src\assets\image\logo_footer.svg" alt="Logo de Kasa" className="footer__img" />
        </NavLink>

        <div className="footer__text">
            © 2020 Kasa. All rights reserved
        </div>

    </div>
  )
}

export default Footer
