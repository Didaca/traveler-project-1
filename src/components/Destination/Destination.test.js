import {render, screen } from '@testing-library/react';
import { Destination } from './Destination';


describe('Destination', () => {
    test('render destination article', () => {
        render(<Destination/>);
    
        const section_one = screen.queryByAltText('North Africa');
        const section_two = screen.queryByAltText('UK');
        const section_three = screen.queryByAltText('North America');
        const section_four = screen.queryByAltText('Thailand');
        const section_five = screen.queryByAltText('South America');
        const section_six = screen.queryByAltText('Europe');
    
        expect(section_one).toBeInTheDocument();
        expect(section_two).toBeInTheDocument();
        expect(section_three).toBeInTheDocument();
        expect(section_four).toBeInTheDocument();
        expect(section_five).toBeInTheDocument();
        expect(section_six).toBeInTheDocument();
    })
});