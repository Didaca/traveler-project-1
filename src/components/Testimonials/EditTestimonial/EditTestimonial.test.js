import { render, screen } from '@testing-library/react';
import { EditTestimonial } from './EditTestimonial';
import { IdContext } from '../../../contexts/IdContext';
import userEvent from '@testing-library/user-event';



describe('EditTestimonial', () => {

    test('render section', () => {

        const onEditTestimonial = () => {};
        const onDeleteTestimonial = () => {};

        const all = Object.assign({}, onEditTestimonial, onDeleteTestimonial);


        render(
            <IdContext.Provider value={all}>
                <EditTestimonial />
            </IdContext.Provider>
        );

        const sectionElement = screen.getByTestId('edit-testimonial');
        expect(sectionElement).toBeInTheDocument();

    });


    test('render elements', () => {

        const onEditTestimonial = () => {};
        const onDeleteTestimonial = () => {};

        const all = Object.assign({}, onEditTestimonial, onDeleteTestimonial);


        render(
            <IdContext.Provider value={all}>
                <EditTestimonial />
            </IdContext.Provider>
        );


        const editButton = screen.getByRole('button', {name: 'Edit'});
        expect(editButton).toBeInTheDocument();

        const deleteButton = screen.getByRole('button', {name: 'Delete'});
        expect(deleteButton).toBeInTheDocument();

        const textareaElement = screen.getByRole('textbox');
        expect(textareaElement).toBeInTheDocument();

    });

    test('render text in textarea', () => {

        const onEditTestimonial = jest.fn();
        const onDeleteTestimonial = jest.fn();

        const all = {
            onEditTestimonial: onEditTestimonial,
            onDeleteTestimonial: onDeleteTestimonial
        };


        render(
            <IdContext.Provider value={all}>
                <EditTestimonial />
            </IdContext.Provider>
        );



        const textareaValue = screen.getByDisplayValue('');
        expect(textareaValue).toBeInTheDocument();

    });

    test('calls onClick when button_Delete is clicked', () => {

        const onEditTestimonial = jest.fn();
        const onDeleteTestimonial = jest.fn();

        const all = {
            onEditTestimonial: onEditTestimonial,
            onDeleteTestimonial: onDeleteTestimonial
        };


        render(
            <IdContext.Provider value={all}>
                <EditTestimonial />
            </IdContext.Provider>
        );

        userEvent.click(screen.getByRole('button', {name: 'Delete'}));
        expect(onDeleteTestimonial).toHaveBeenCalledTimes(1);

    });
});