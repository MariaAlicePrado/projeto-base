import '../node_modules/bootstrap/dist/js/bootstrap.js';
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Inicial from './components/Pages/Inicial.jsx'
import Login from'./components/Login.jsx'
import Devolucoes from './components/Pages/Devolucoes.jsx'
import Solicitacoes from './components/Pages/Solicitacoes'
import Ocorrencia from './components/Pages/Ocorrencia.jsx'
import OcorrenciaDetails from './components/Pages/OcorrenciaDetails.jsx'
import OcDetails2 from './components/Pages/OcDetails2.jsx'
import OcDetails3 from './components/Pages/OcDetails3.jsx'
import Dev1 from './components/Pages/Dev1.jsx'
import Dev2 from './components/Pages/Dev2.jsx'
import Dev3 from './components/Pages/Dev3.jsx'
import Mensagem from "./templates/Mensagem/Mensagem.jsx"
import MensagemLer from "./templates/Mensagem/MensagemLer.jsx"
import Usuario from "./templates/Usuario/Usuario.jsx"
import UsuarioEditar from "./templates/Usuario/UsuarioEditar.jsx"
import UsuarioNovo from "./templates/Usuario/UsuarioNovo.jsx"
import UsuariosLista from "./templates/Usuario/UsuariosLista.jsx"   
   
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [ 
      {
      path: "/",
      element: <Login/>
    },
      {
        path: "/Inicial",
        element: <Inicial />
      },
      {
        path: "/Devolucoes",
        element: <Devolucoes />
      },
      {
        path: "/Solicitacoes",
        element: <Solicitacoes />
      },
      {
        path: "/Ocorrencia",
        element: <Ocorrencia/>
      }, 
      {
        path: "/OcorrenciaDetails",
        element: <OcorrenciaDetails/>
      }, 
      {
        path: "/OcDetails2",
        element: <OcDetails2/>
      }, 
      {
        path: "/OcDetails3",
        element: <OcDetails3/>
      }, 
      {
        path: "/Dev1",
        element: <Dev1/>
      }, 
       {
        path: "/Dev2",
        element: <Dev2/>
      }, 
      {
        path: "/Dev3",
        element: <Dev3/>
      },
      {
        path: "/Mensagem",
        element: <Mensagem/>
      },
      {
        path: "/MensagemLer",
        element: <MensagemLer/>
      },
      {
        path: "/Usuario ",
        element: <Usuario/>
      },
      {
        path: "/UsuariosLista",
        element: <UsuariosLista/>
      },
      {
        path: "/UsuarioNovo",
        element: <UsuarioNovo/>
      },
      {
        path: "/UsuarioEditar",
        element: <UsuarioEditar/>
      },
      
      
    ]
  }
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      </RouterProvider>
  </React.StrictMode>,
)
