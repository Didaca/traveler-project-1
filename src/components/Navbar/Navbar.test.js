import { render, screen } from '@testing-library/react';
import { Navbar } from './Navbar';

import { BrowserRouter } from 'react-router-dom';
import { AuthorContext } from '../../contexts/AuthorContext';

import userEvent from '@testing-library/user-event';


describe('Navbar', () => {

    test('render navbar section', () => {

        const data = {
            show: true,
            isLogged: true,
            onShowHandler: jest.fn()
        }

        render(
            <BrowserRouter>
                <AuthorContext.Provider value={data}>
                    <Navbar />
                </AuthorContext.Provider>
            </BrowserRouter>
        );

        const section = screen.getByTestId('nav');
        expect(section).toBeInTheDocument();

        const linkElements = screen.getAllByRole('link');
        expect(linkElements).toHaveLength(7);

        const spanElement = screen.getByText('TRAVEL');
        expect(spanElement).toBeInTheDocument();

        const svgElement = screen.getByTestId('prof-icon');
        expect(svgElement).toBeInTheDocument();

    });

    test('no user logged in', () => {

        const data = {
            show: true,
            isLogged: false,
            onShowHandler: jest.fn()
        }

        render(
            <BrowserRouter>
                <AuthorContext.Provider value={data}>
                    <Navbar />
                </AuthorContext.Provider>
            </BrowserRouter>
        );

        const spanElement = screen.getByText('Profile');
        expect(spanElement).toBeInTheDocument();

        const linkElements = screen.getAllByRole('link');
        expect(linkElements).toHaveLength(8);

    });

    test('calls onClick when profile is clicked', () => {

        const onshowHandler = jest.fn();

        const data = {
            show: true,
            isLogged: false,
            onShowHandler: onshowHandler
        }

        render(
            <BrowserRouter>
                <AuthorContext.Provider value={data}>
                    <Navbar />
                </AuthorContext.Provider>
            </BrowserRouter>
        );

        userEvent.click(screen.getByText('Profile'));
        expect(onshowHandler).toHaveBeenCalledTimes(1);


    });

    test('calls onClick when icon_profile is clicked', () => {

        const onshowHandler = jest.fn();

        const data = {
            show: true,
            isLogged: true,
            onShowHandler: onshowHandler
        }

        render(
            <BrowserRouter>
                <AuthorContext.Provider value={data}>
                    <Navbar />
                </AuthorContext.Provider>
            </BrowserRouter>
        );

        userEvent.click(screen.getByTestId('prof-icon'));
        expect(onshowHandler).toHaveBeenCalledTimes(1);


    });
});