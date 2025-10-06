import { FacebookIcon, GitHubIcon, LinkedInIcon } from "../assets/Icons"

const Footer = () => {
  return (
    <div className="relative footercontainer py-16 mt-16">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-xl">Márton László Ruzsik</h2>
        <div className="flex gap-6 mt-3 md:mt-0">
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/RuzsikMarton" className="link-buttons">
            <GitHubIcon fontSize="small"/>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/m%C3%A1rton-ruzsik-47561b313/" className="link-buttons">
            <LinkedInIcon fontSize="small"/>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/marton.ruzsik/" className="link-buttons">
            <FacebookIcon fontSize="small"/>
          </a>
        </div>
      </div>
      <div className="grid-background"></div>
      <div className="grid-background-mask"></div>
    </div>
  )
}

export default Footer