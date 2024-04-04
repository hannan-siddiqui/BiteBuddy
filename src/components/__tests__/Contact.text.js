import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Contact from "../Contact"

test('contact render test',() => { 
        
    render(<Contact/>)

    const heading = screen.getByRole("heading")
    
    expect(heading).toBeInTheDocument();

    }

)