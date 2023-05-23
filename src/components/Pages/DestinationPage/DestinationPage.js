import { Header } from "../../Header/Header";
import { Topbar } from '../../Topbar/Topbar';
import { Navbar } from '../../Navbar/Navbar';
import { Footer } from '../../Footer/Footer';
import { Destination } from "../../Destination/Destination";


export const DestinationPage = () => {
    return (
        <>
            <Topbar />
            <Navbar />
            <Header />
            <Destination />
            <Footer />
        </>
    );
}