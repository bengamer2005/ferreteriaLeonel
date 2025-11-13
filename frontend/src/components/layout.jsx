import Footer from "./layout/footer"
import Header from "./layout/header"
import Navbar from "./layout/navbar"

const Layout = ({ children }) => {
    return (
        <>
            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
            </div>
        </>
    )
}

export default Layout