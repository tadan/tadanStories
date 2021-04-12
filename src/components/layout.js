import { Link } from 'gatsby'
import React from 'react'

const Layout = ({ children }) => (
    <div>
        <header>
            <nav>
                <Link to='/'>Home</Link>
            </nav>
        </header>
        <main>{children}</main>
        <footer>ending footer</footer>
    </div>
)
export default Layout
