import { Topbar } from '../../Topbar/Topbar';
import { Navbar } from '../../Navbar/Navbar';
import { Footer } from '../../Footer/Footer';
import { SendTestimonial } from '../../Testimonials/SendTestimonials/SendTestimonial';


export const TestimonialsPage = () => {
    return (
        <>
            <Topbar />
            <Navbar />
            <SendTestimonial />
            <Footer />
        </>
    );
}