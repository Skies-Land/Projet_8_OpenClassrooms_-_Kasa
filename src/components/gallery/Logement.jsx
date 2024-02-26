import { Link } from "react-router-dom"

function Logement() {
  return (
    <div className="logement">

      <Link to={`/fiche-logement`}>

        <div className="logement__subtitle">
          Titre de la location
        </div>

      </Link>

    </div>
  )
}

export default Logement
