import { Header } from "../../Header/Header";
import { Topbar } from '../../Topbar/Topbar';
import { Navbar } from '../../Navbar/Navbar';
import { About } from '../../About/About';
import { Footer } from '../../Footer/Footer';

export const HomePage = () => {
    return (
        <>
            <Topbar />
            <Navbar />
            <Header />
            <About />
            <Footer />
        </>
    );
}