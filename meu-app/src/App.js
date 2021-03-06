import  {Switch} from "react-router";

import Politica from './Pages/Politica';
import Upload from './Pages/Upload';
import Relatorio from './Pages/Relatorio';
import { BrowserRouter as Router, Route } from 'react-router-dom';







function App() {
  return (
    <Router>
      
      <Switch>
        <Route exact path="/">
          <Upload />
        </Route>
        <Route path="/Relatorio">
          <Relatorio />
        </Route>
        <Route path="/Politica">
          <Politica />
        </Route>
      </Switch>
    
    </Router>
  )
}


export default App