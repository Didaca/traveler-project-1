import { Topbar } from '../../Topbar/Topbar';
import { Navbar } from '../../Navbar/Navbar';
import { Footer } from '../../Footer/Footer';
import { Registration } from '../../Forms/Registration/Registration';


export const RegistrationPage = () => {
    return (
        <>
            <Topbar />
            <Navbar />
            <Registration />
            <Footer />
        </>
    );
}