import { Topbar } from '../../Topbar/Topbar';
import { Navbar } from '../../Navbar/Navbar';
import { Footer } from '../../Footer/Footer';
import { Login } from '../../Forms/Login/Login';

export const LoginPage = () => {
    return (
        <>
            <Topbar />
            <Navbar />
            <Login />
            <Footer />
        </>
    );
}