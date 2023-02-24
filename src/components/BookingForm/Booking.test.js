import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
    const formData = {
        date: new Date(),
        time: '',
        guests: 0,
        occasion: ''
    };
    const availableItems = []
    render(<BookingForm
        formData={formData}
        availableTimes={availableItems}
    />);
    const headingElement = screen.getByText("Book a Table");
    expect(headingElement).toBeInTheDocument();
})