import { Link, Outlet } from 'react-router-dom';

export const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to={`./`}>
            HomeScreen
          </Link>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link
                className="nav-link active"
                aria-current="page"
                to={`./about`}
              >
                About
              </Link>
              <Link className="nav-link" to={`./login`}>
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};
