import { render, screen } from '@testing-library/react';
import { SendTestimonial } from './SendTestimonial';
import { IdContext } from '../../../contexts/IdContext';



describe('SendTestimonial', () => {

    test('render section', () => {

        const onAddTestimonial = () => {};

        render(
            <IdContext.Provider value={onAddTestimonial}>
                <SendTestimonial />
            </IdContext.Provider>
        );

        const sectionElement = screen.getByTestId('send-testimonial');

        expect(sectionElement).toBeInTheDocument();

        const placeholder = screen.getByPlaceholderText('Text...');

        expect(placeholder).toBeInTheDocument();

        const button = screen.getByRole('button', {name: 'Submit'});

        expect(button).toBeInTheDocument();
    });
});