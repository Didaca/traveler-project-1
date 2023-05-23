import { render, screen } from '@testing-library/react';
import { Testimonials } from './Testimonials';
import { BrowserRouter } from 'react-router-dom';
import { IdContext } from '../../../contexts/IdContext';
import { AuthorContext } from '../../../contexts/AuthorContext';


describe('Testimonials', () => {
    test('render testimonial section', () => {

        const context_one = {
            userId: 1,
            isLogged: true
        };

        const context_two = {
            haveTestim: true,
            testim_obj: [{
                _id: 1,
                _ownerId: 1,
                firstname: "test",
                lastname: "test",
                text: "test text"
            }]
        };

        render(
            <BrowserRouter>
                <AuthorContext.Provider value={context_one}>
                    <IdContext.Provider value={context_two}>
                        <Testimonials />
                    </IdContext.Provider>
                </AuthorContext.Provider >
            </BrowserRouter >
        );


        const section = screen.getByTestId('testimonial');

        expect(section).toBeInTheDocument();

    });


    test('render all testimonial headings, img', () => {

        const context_one = {
            userId: 1,
            isLogged: true
        };

        const context_two = {
            haveTestim: true,
            testim_obj: [{
                _id: 1,
                _ownerId: 1,
                firstname: "test",
                lastname: "test",
                text: "test text"
            }]
        };

        render(
            <BrowserRouter>
                <AuthorContext.Provider value={context_one}>
                    <IdContext.Provider value={context_two}>
                        <Testimonials />
                    </IdContext.Provider>
                </AuthorContext.Provider >
            </BrowserRouter >
        );


        const headingElement = screen.getAllByRole("heading", {level: 5});

        expect(headingElement).toHaveLength(8);


        const img = screen.getAllByRole("img").length;

        expect(img).toBe(3);

        const text = screen.getByText('test text');
        expect(text).toBeInTheDocument();
        
    });


    test('Does not render all headings, obj:empty', () => {

        const context_one = {
            userId: 1,
            isLogged: true
        };

        const context_two = {
            haveTestim: true,
            testim_obj: []
        };

        render(
            <BrowserRouter>
                <AuthorContext.Provider value={context_one}>
                    <IdContext.Provider value={context_two}>
                        <Testimonials />
                    </IdContext.Provider>
                </AuthorContext.Provider >
            </BrowserRouter >
        );


        const headingElement = screen.getAllByRole("heading", {level: 5});

        expect(headingElement).toHaveLength(6);

        const articleElement = screen.getAllByRole('article');

        expect(articleElement).toHaveLength(3);
        
    });


    test('Does not render all headings, not testimonials in DB', () => {

        const context_one = {
            userId: 1,
            isLogged: true
        };

        const context_two = {
            haveTestim: false,
            testim_obj: [{
                _id: 1,
                _ownerId: 1,
                firstname: "test",
                lastname: "test",
                text: "test text"
            }]
        };

        render(
            <BrowserRouter>
                <AuthorContext.Provider value={context_one}>
                    <IdContext.Provider value={context_two}>
                        <Testimonials />
                    </IdContext.Provider>
                </AuthorContext.Provider >
            </BrowserRouter >
        );


        const headingElement = screen.getAllByRole("heading", {level: 5});

        expect(headingElement).toHaveLength(6);

        const paragraphElement = screen.queryByText('test text');

        expect(paragraphElement).not.toBeInTheDocument();
        
    });
});