import { Header } from "../../Header/Header";
import { Topbar } from '../../Topbar/Topbar';
import { Navbar } from '../../Navbar/Navbar';
import { Packages } from "../../Packages/Packages";
import { Footer } from '../../Footer/Footer';
import { Testimonials } from "../../Testimonials/Testimonials/Testimonials";

export const PackagesPage = () => {
    return (
        <>
            <Topbar />
            <Navbar />
            <Header />
            <Packages />
            <Testimonials />
            <Footer />
        </>
    );
}