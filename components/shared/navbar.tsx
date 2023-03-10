import Link from "next/link";
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand" href={"#page-top"}>Sathiyaraman M</a>
                <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
                        type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
                        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item mx-0 mx-lg-1">
                            <Link className={`nav-link py-2 px-1 px-lg-3 rounded`} href={"/"}>Home</Link>
                        </li>
                        <li className="nav-item mx-0 mx-lg-1">
                            <Link className={`nav-link py-2 px-1 px-lg-3 rounded`} href={"/projects"}>Projects</Link>
                        </li>
                        <li className="nav-item mx-0 mx-lg-1">
                            <Link className={`nav-link py-2 px-1 px-lg-3 rounded`} href={"/expertise"}>Expertise</Link>
                        </li>
                        <li className="nav-item mx-0 mx-lg-1">
                            <Link className={`nav-link py-2 px-1 px-lg-3 rounded`} href={"/blogs"}>Blogs</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;