import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import Artigos from './pages/Artigos';
import Projetos from './pages/Projetos';
import Ferramentas from './pages/Ferramentas';
import Videos from './pages/Videos';
import Contatos from './pages/Contatos';
import Sobre from './pages/Sobre';
import Page404 from './pages/page404';

function AppRouter() {
  return ( 
    <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/artigos" element={<Artigos />}></Route>
          <Route path="/projetos" element={<Projetos />}></Route>
          <Route path="/ferramentas" element={<Ferramentas />}></Route>
          <Route path="/videos" element={<Videos />}></Route>
          <Route path="/contatos" element={<Contatos />}></Route>
          <Route path="/sobre" element={<Sobre />}></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Routes>
    </BrowserRouter>
   );
}

export default AppRouter;