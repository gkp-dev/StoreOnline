import Navbar from '../Navbar'
import Footer from '../Footer'

function Layout({children,className}) {
    return (
        <div className={className}>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    )
}

export default Layout
