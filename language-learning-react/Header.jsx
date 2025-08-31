import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header id="header">
      <FontAwesomeIcon icon={faLanguage} />
      <Link to="/" className="header-link"><h1 className="header-title">Language Learning Journal</h1></Link>
    </header>
  )
}