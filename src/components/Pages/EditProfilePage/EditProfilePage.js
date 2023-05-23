import { Topbar } from '../../Topbar/Topbar';
import { Navbar } from '../../Navbar/Navbar';
import { Footer } from '../../Footer/Footer';
import { EditProfile } from "../../Forms/EditProfile/EditProfile";


export const EditProfilePage = () => {
    return (
        <>
        <Topbar />
        <Navbar />
        <EditProfile />
        <Footer />
    </>
    );
}