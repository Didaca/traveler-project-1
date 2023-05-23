import { render, screen } from '@testing-library/react';
import { Header } from './Header';
import { BrowserRouter } from 'react-router-dom';



describe('Header', () => {
    test('render header section', () => {

        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );
    
        const section = screen.getByTestId('header');
    
        expect(section).toBeInTheDocument();
    }); 
});