import { render, screen } from '@testing-library/react';
import { DropdownProfileIn } from './DropdownProfileIn';
import { BrowserRouter } from 'react-router-dom';


describe('DropdownProfileIn', () => {

    test('render component' , () => {

        render(
            <BrowserRouter>
                <DropdownProfileIn />
            </BrowserRouter>
        );

        const linkElements = screen.getAllByRole('link');

        expect(linkElements).toHaveLength(2);

        const linkElementLogin = screen.getByRole('link', {
            name: 'LogIn'
        });

        expect(linkElementLogin).toBeInTheDocument();

        const linkElementSignup = screen.getByRole('link', {
            name: 'SignUp'
        });

        expect(linkElementSignup).toBeInTheDocument();
    }); 

});