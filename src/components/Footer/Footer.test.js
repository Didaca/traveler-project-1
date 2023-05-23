import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';
import { BrowserRouter } from 'react-router-dom';


describe('Footer', () => {
    test('render footer section', () => {
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        );
    
        const section = screen.queryByTestId('footer');
        const contacts = screen.queryByTestId('contact');
        const info = screen.queryByTestId('info');
    
    
        expect(section).toBeInTheDocument();
        expect(contacts).toBeInTheDocument();
        expect(info).toBeInTheDocument();
    });
});

