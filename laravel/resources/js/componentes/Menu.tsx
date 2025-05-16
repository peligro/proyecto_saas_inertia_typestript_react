import { Link } from "@inertiajs/react";


const Menu = () => {
  return (
    <>
      <nav id="sidebar" className="sidebar js-sidebar">
        <div className="sidebar-content js-simplebar">
          <Link className="sidebar-brand" href="/">
            <span className="align-middle">
              <img src="/img/loguito.png" style={{ width: "150px" }} />
            </span>
          </Link>

          <ul className="sidebar-nav">
            <li className="sidebar-header">Administración</li>

            {/* Menú desplegable */}
            {/* Menú desplegable de configuración */}
            <li className="sidebar-item has-submenu">
              <a
                className="sidebar-link collapsed"
                data-bs-toggle="collapse"
                href="#submenuAdmin"
                role="button"
                aria-expanded="false"
                aria-controls="submenuAdmin"
              >
                <i className="align-middle fas fa-cogs"></i>
                <span className="align-middle">Configuración </span>
                <i className="ms-auto align-middle fas fa-chevron-down"></i>
              </a>
              <ul className="collapse list-unstyled ms-3" id="submenuAdmin">
                <li className="sidebar-item">
                  <Link
                    className={`sidebar-link ${location.pathname === '/modulos' ? 'active-menu' : ''}`}
                    href="/modulos"
                  >
                    <i className="align-middle fas fa-list-ol"></i>
                    <span className="align-middle">Módulos</span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link className="sidebar-link" href="/perfiles">
                    <i className="align-middle fas fa-list"></i>
                    <span className="align-middle">Perfiles</span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link className="sidebar-link" href="/usuarios">
                    <i className="align-middle fas fa-lock"></i>
                    <span className="align-middle">Usuarios</span>
                  </Link>
                </li>
              </ul>
            </li>

            {/* Otros elementos sin desplegar */}
            <li className="sidebar-header">Clientes</li>
            <li className="sidebar-item">
              <Link className="sidebar-link" href="/cuentas">
                <i className="align-middle far fa-list-alt"></i>
                <span className="align-middle">Cuentas</span>
                <span className="sidebar-badge badge bg-primary">12</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link className="sidebar-link" href="/clientes">
                <i className="align-middle fas fa-users"></i>
                <span className="align-middle">Clientes</span>
              </Link>
            </li>

            <li className="sidebar-header">Cobranza</li>
            <li className="sidebar-item">
              <Link className="sidebar-link" href="/cobranzas">
                <i className="align-middle fas fa-hand-holding-usd"></i>
                <span className="align-middle">Cobranza</span>
              </Link>
            </li>
            <li className="sidebar-item">
              <Link className="sidebar-link" href="/mail-masivo">
                <i className="align-middle fas fa-mail-bulk"></i>
                <span className="align-middle">Mail masivo</span>
              </Link>
            </li>

            <li className="sidebar-header">Reportes</li>
            <li className="sidebar-item">
              <Link className="sidebar-link" href="/reportes">
                <i className="align-middle fas fa-file-excel"></i>
                <span className="align-middle">Reporte mensual</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Menu;