import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import './Componentes/Header/Header.js'
import Header from './Componentes/Header/Header.js';
import './Componentes/Formulario/Formulario.js'
import Formulario from './Componentes/Formulario/Formulario.js';
import MiOrg from './Componentes/MiOrg';
import Equipo from './Componentes/Equipo';
import Footer from './Componentes/Footer';

function App() {
  const [mostrarFormulario, actualizaMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/napito1512.png",
    nombre: "Christopher Siguenza",
    puesto: "Ingeniero",
    fav: true
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
    fav: false
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav: true
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    fav: true
  }])

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo:  "Programación",
      colorPrimario: '#57C278',
      colorSecudario: '#D9F7E9',
    },
    {
      id: uuid(),
      titulo:  "Front End",
      colorPrimario: '#82CFFA',
      colorSecudario: '#E8F8FF',
    },
    {
      id: uuid(),
      titulo:  "Data Science",
      colorPrimario: '#A6D157',
      colorSecudario: '#F0F8E2',
    },
    {
      id: uuid(),
      titulo:  "Devops",
      colorPrimario: '#E06B69',
      colorSecudario: '#FDE7E8',
    },
    {
      id: uuid(),
      titulo:  "UX y Diseño",
      colorPrimario: '#DB6EBF',
      colorSecudario: '#FAE9F5',
    },
    {
      id: uuid(),
      titulo:  "Móvil",
      colorPrimario: '#FFBA05',
      colorSecudario: '#FFF5D9',
    },
    {
      id: uuid(),
      titulo:  "Innovación y  Gestión",
      colorPrimario: '##FF8A29',
      colorSecudario: '#FFEEDF',
    },        
])
  // Ternario --> condicion? seMuestra : noSeMuestra
  // condicion && seMuestra

  const cambiarMostrar = () => {
    actualizaMostrar(!mostrarFormulario)
  }

  //registrar colaborador
  const registrarColaborador = (colaborador) => {
    //Spread operator
    actualizarColaboradores([...colaboradores,colaborador])
  }

  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //Actualizar color de equipo
  const actualizarColor = (color, id) => {
    const equiposActualizados = equipos.map((equipo)=>{
      if(equipo.id === id){
        equipo.colorPrimario = color
      }

      return equipo
    })

    actualizarEquipos(equiposActualizados)
  }


  //Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid()} ])
  }

  //Dar like a colaboradores
  const like = (id) => {
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    } )

    actualizarColaboradores(colaboradoresActualizados)
  }
  return (
    <div>
      <Header/>
      
      {
        mostrarFormulario && <Formulario 
            equipos={equipos.map((equipo)=>equipo.titulo)}
            registrarColaborador={registrarColaborador}
            crearEquipo = {crearEquipo}
          />
      }

      <MiOrg cambiarMostrar = {cambiarMostrar} />
      
      {
        equipos.map( (equipo) => <Equipo 
        datos={equipo} 
        key={equipo.titulo}
        colaboradores = {colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
        eliminarColaborador = {eliminarColaborador}
        actualizarColor={actualizarColor}
        like = {like}
        />)
      }

      <Footer />
    
    </div>
  );
}

export default App;
