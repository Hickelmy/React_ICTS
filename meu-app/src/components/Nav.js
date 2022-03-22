import { Link } from 'react-router-dom';


function Nav() {
  return (
    <ul >
      <li >
        <Link to="/">Upload</Link>
      </li>
      <li >
        <Link to="/Relatorio">Relatorio</Link>
      </li>
      <li >
        <Link to="/Politica">Politica</Link>
      </li>
    </ul>
  )
}

export default Nav