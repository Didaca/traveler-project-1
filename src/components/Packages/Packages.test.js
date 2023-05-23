import { render, screen } from '@testing-library/react';
import { Packages } from './Packages';


describe('Packages', () => {
    test('render packages section', () => {

        render(<Packages/>);
    
        const first_picture = screen.queryByAltText('Izrael');
        const second_picture = screen.queryByAltText('Nederland');
        const third_picture = screen.queryByAltText('Africa');
    
    
        expect(first_picture).toBeInTheDocument();
        expect(second_picture).toBeInTheDocument();
        expect(third_picture).toBeInTheDocument();
    }); 
});