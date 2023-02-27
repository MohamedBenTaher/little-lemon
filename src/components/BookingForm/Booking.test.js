import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from './BookingForm';
import { createMemoryHistory } from "@remix-run/router";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import ConfirmedBooking from "../ConfirmedBooking/ConfirmedBooking";

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

describe('BookingForm', () => {
    test('renders form inputs', () => {
        const availableItems = []
        render(<BookingForm availableTimes={availableItems} />);
        const guestsInput = screen.getByLabelText('Geusts:');
        const dateInput = screen.getByLabelText('Date:');
        const timeIput = screen.getByLabelText('Time:');
        const ocassionIput = screen.getByLabelText('Occasion:');
        const button = screen.getByText('Make a Reservation')
        expect(guestsInput).toBeInTheDocument();
        expect(dateInput).toBeInTheDocument();
        expect(timeIput).toBeInTheDocument();
        expect(ocassionIput).toBeInTheDocument();
        expect(button).toBeInTheDocument();
    });

    test('displays error message when guests field is empty', () => {
        const availableItems = []
        render(<BookingForm availableTimes={availableItems} />);

        const guestsInput = screen.getByLabelText('Geusts:');
        fireEvent.change(guestsInput, { target: { value: '' } });
        fireEvent.submit(screen.getByTestId('form'));
        const guestsError = screen.getByText('Guests is required');
        expect(guestsError).toBeInTheDocument();
    });

    test('displays error message when date field is empty', () => {
        const availableItems = []
        render(<BookingForm availableTimes={availableItems} />);
        const dateInput = screen.getByLabelText('Date:');
        fireEvent.change(dateInput, { target: { value: '' } });
        fireEvent.submit(screen.getByTestId('form'));
        const dateError = screen.getByText('Date is required');
        expect(dateError).toBeInTheDocument();
    });

    test('displays error message when time field is empty', () => {
        const availableItems = []
        render(<BookingForm availableTimes={availableItems} />);
        const timeIput = screen.getByLabelText('Time:');
        fireEvent.change(timeIput, { target: { value: '' } });
        fireEvent.submit(screen.getByTestId('form'));
        const messageError = screen.getByText('Time is required');
        expect(messageError).toBeInTheDocument();
    });
    test('displays error message when occasion field is empty', () => {
        const availableItems = []
        render(<BookingForm availableTimes={availableItems} />);
        const ocassionIput = screen.getByLabelText('Ocassion:');
        fireEvent.change(ocassionIput, { target: { value: '' } });
        fireEvent.submit(screen.getByTestId('form'));
        const messageError = screen.getByText('Occasion is required');
        expect(messageError).toBeInTheDocument();
    });

    test('displays success message when form is submitted successfully', async () => {
        const availableItems = []
        const history = createMemoryHistory();
        render(<Router history={history}>
            <BookingForm availableTimes={availableItems} /></Router>);
        const guestsInput = screen.getByLabelText('Geusts:');
        const dateInput = screen.getByLabelText('Date:');
        const timeIput = screen.getByLabelText('Time:');
        const ocassionIput = screen.getByLabelText('Occasion:');
        fireEvent.change(guestsInput, { target: { value: 7 } });
        fireEvent.change(dateInput, { target: { value: '2023-02-27' } });
        fireEvent.change(timeIput, { target: { value: '17:00' } });
        fireEvent.change(ocassionIput, { target: { value: 'Anniversary' } });
        fireEvent.submit(screen.getByTestId('form'));
        expect(history.location.pathname).toBe('/');
    });
});
