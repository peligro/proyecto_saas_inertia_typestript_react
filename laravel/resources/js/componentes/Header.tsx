import { useEffect, useState } from 'react'
import dayjs from "dayjs";//npm i dayjs
import "dayjs/locale/es";
const Header = () => {
    const [valorMenu, setvalorMenu] = useState('Ocultar');
    const [iconoMenu, setIconoMenu] = useState('fa-long-arrow-alt-left');
    let setMenu=()=>{
        var e = document.getElementsByClassName("js-sidebar")[0];
        e.classList.toggle("collapsed"), e.addEventListener("transitionend", (function() {
            window.dispatchEvent(new Event("resize"));
            if(valorMenu=='Mostrar')
            {
                setvalorMenu('Ocultar');
                setIconoMenu('fa-long-arrow-alt-left');
            }else
            {
                setvalorMenu('Mostrar');
                setIconoMenu('fa-long-arrow-alt-right');
            }
        }));
    };
    const genFechaActual = () => {
        dayjs.locale('es') ;
        let fecha = new Date();
        let date=dayjs(fecha)
        .format("dddd") +" "+dayjs(fecha).format("DD")+" de "+dayjs(fecha).format("MMMM")+" de "+dayjs(fecha).format("YYYY");
        return date;
        };
      let [time, changeTime] = useState(new Date().toLocaleTimeString());
      useEffect(function(){
          setInterval(()=>{
              changeTime(new Date().toLocaleTimeString());
          }, 1000);
      }, []);
  return (
    <>
   <nav className="navbar navbar-expand navbar-light navbar-bg">
    <a className="sidebar-toggle js-sidebar-toggle" onClick={()=>{setMenu()}} title={valorMenu}>
    <i className={`fas ${iconoMenu} align-self-center`}></i>
</a>

    <div className="navbar-collapse collapse">
        <ul className="navbar-nav navbar-align">
            <li className="nav-item dropdown">
                <a className="nav-icon dropdown-toggle d-inline-block d-sm-none" href="#" data-bs-toggle="dropdown">
                    <i className="fas fa-long-arrow-alt-down align-middle"></i>
                </a>
                <a className="nav-link d-none d-sm-inline-block">
                    {genFechaActual()}
                </a>
                <a className="nav-link d-none d-sm-inline-block">
                    <span className="text-dark">|</span>
                </a>
                <a className="nav-link d-none d-sm-inline-block">
                    {time}
                </a>
                <a className="nav-link d-none d-sm-inline-block">
                    <span className="text-dark">|</span>
                </a>
                <a className="nav-link d-none d-sm-inline-block">
                    perfil
                </a>
                <a className="nav-link d-none d-sm-inline-block">
                    <span className="text-dark">|</span>
                </a>
                <a className="nav-link dropdown-toggle d-none d-sm-inline-block" href="#" data-bs-toggle="dropdown">
                    <span className="text-dark">
                       nombre
                    </span>
                    <img src="/img/perfil.png"
                    className="avatar img-fluid rounded me-1" />
                </a>
                <div className="dropdown-menu dropdown-menu-end">
                
                    <a className="dropdown-item" title="Cerrar sesión" >
                        <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i> Mi perfil</a>
                        <hr/>
                    <a className="dropdown-item" title="Cerrar sesión" >
                        <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i> Cerrar sesión</a>
                </div>
            </li>
        </ul>
        
    </div>
</nav>
    </>
  )
}

export default Header