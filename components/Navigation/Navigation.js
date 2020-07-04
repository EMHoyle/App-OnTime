import React from 'react';
import Link from 'next/link';

const Navigation = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link href="/"><a className="navbar-brand">OnTime</a></Link>
                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link href="/manager"><a className="nav-link">Manager</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/contacto"><a className="nav-link">Contacto</a></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navigation
