import { render, screen } from '@testing-library/react';
import { About } from './About';


describe('About', () => {
    test('render about section', () => {
        render(<About/>);
    
        const section = screen.queryByAltText('Bridge');
    
        expect(section).toBeInTheDocument();
    });
});