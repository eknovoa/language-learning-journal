import { Link } from "react-router-dom";

const languages = [{language:"🇰🇷 Korean", route: "/korean"}, {language:"🇪🇸 Spanish", route: "/spanish"}, {language:"🇫🇷 French", route: "/french"}] 

const languagesHtml = languages.map(language => (<Link to={language.route} className="language-link" key={language.language}><div className="language-box"><p className="language">{language.language}</p></div></Link>))
    
export default function Main () {
  return (
    <main id="main">
      <div id="languages-container">
        {languagesHtml}
      </div>
    </main>
  )
}