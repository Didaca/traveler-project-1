import { render, screen } from '@testing-library/react';
import { DropdownProfileOut } from './DropdownProfileOut';
import { BrowserRouter } from 'react-router-dom';
import { AuthorContext } from '../../../contexts/AuthorContext';
import React from 'react';
import userEvent from '@testing-library/user-event';


describe('DropdownProfileOut', () => {

    test('render component', () => {

        const data = {
            userId: 1,
            token: 123,
            changeAuthor: jest.fn()
        };

        render(
            <BrowserRouter>
                <AuthorContext.Provider value={data}>
                    <DropdownProfileOut />
                </AuthorContext.Provider>
            </BrowserRouter>
        );

        const linkElementProfile = screen.getByRole('link', {
            name: 'Your Profile'
        });

        expect(linkElementProfile).toBeInTheDocument();

        const paragraph = screen.getByText('Logout');

        expect(paragraph).toBeInTheDocument();

    });


    test('calls onClick when Logout is clicked', () => {

        const logout = jest.fn();

        const data = {
            userId: 1,
            token: 123,
            onLogout: logout
        };

        render(
            <BrowserRouter>
                <AuthorContext.Provider value={data}>
                    <DropdownProfileOut />
                </AuthorContext.Provider>
            </BrowserRouter>
        );

        userEvent.click(screen.getByText(/^Logout$/i));

        expect(logout).toHaveBeenCalledTimes(1);


    });

});