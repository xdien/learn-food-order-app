import { render,screen } from "@testing-library/react";
import Greeting from "./Greeting";

describe('greeting component', () =>{
    test('renders Hello world test ',()=>{
        render(<Greeting />);
        const helloWorldElement = screen.getByText("Hello world");
    });
    test('render good to see if the button was not clicked',() => {
        render(<Greeting />);
        const outElm  = screen.getByText('good to see you',{exact:false});
        expect(outElm).toBeInTheDocument();
    });
    test( '')
});