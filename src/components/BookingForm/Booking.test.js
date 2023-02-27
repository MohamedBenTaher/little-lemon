import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import BookingForm from './BookingForm';
import { createMemoryHistory } from "@remix-run/router";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import ConfirmedBooking from "../ConfirmedBooking/ConfirmedBooking";
import { act } from 'react-dom/test-utils';
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
        const { container } = render(<BookingForm availableTimes={availableItems} />);
        const guestsInput = container.querySelector('input[name="guests"]')
        const dateInput = container.querySelector('input[name="date"]')
        const timeInput = screen.getByTestId('time-input');
        const occasionInput = screen.getByTestId('occasion-input');
        const button = container.querySelector('button[type="submit"]')
        expect(guestsInput).toBeInTheDocument();
        expect(dateInput).toBeInTheDocument();
        expect(timeInput).toBeInTheDocument();
        expect(occasionInput).toBeInTheDocument();
        expect(button).toBeInTheDocument();
    });
    test('displays error message when guests field is empty', async () => {
        const availableItems = [];
        const { container } = render(<BookingForm availableTimes={availableItems} />);
        const guestsInput = container.querySelector('input[name="guests"]');

        await act(async () => {
            fireEvent.change(guestsInput, { target: { value: '' } });
            fireEvent.submit(screen.getByTestId('form'));
        });

        const guestsError = screen.getByText('Guests is required');
        expect(guestsError).toBeInTheDocument();
    });
    test('displays error message when date field is empty', async () => {
        const availableItems = []
        const { container } = render(<BookingForm availableTimes={availableItems} />);
        const dateInput = container.querySelector('input[name="date"]')
        await act(async () => {
            fireEvent.change(dateInput, { target: { value: '' } });
            fireEvent.submit(screen.getByTestId('form'));
        });
        const dateError = screen.getByText('Date is required');
        expect(dateError).toBeInTheDocument();
    });

    test('displays error message when time field is empty', async () => {
        const availableItems = []
        const { container } = render(<BookingForm availableTimes={availableItems} />);
        const timeInput = screen.getByTestId('time-input');
        await act(async () => {
            fireEvent.change(timeInput, { target: { value: '' } });
            fireEvent.submit(screen.getByTestId('form'));
        });
        const messageError = screen.getByText('Time is required');
        expect(messageError).toBeInTheDocument();
    });
    test('displays error message when occasion field is empty', async () => {
        const availableItems = []
        const { container } = render(<BookingForm availableTimes={availableItems} />);
        const occasionInput = screen.getByTestId('occasion-input');
        await act(async () => {
            fireEvent.change(occasionInput, { target: { value: '' } });
            fireEvent.submit(screen.getByTestId('form'));
        });
        const messageError = screen.getByText('Occasion is required');
        expect(messageError).toBeInTheDocument();
    });

    test('displays success message when form is submitted successfully', async () => {
        const availableItems = ['12:00', '17:00'];
        const history = createMemoryHistory();
        const { container } = render(
            <Router history={history}>
                <BookingForm availableTimes={availableItems} />
            </Router>
        );
        const guestsInput = container.querySelector('input[name="guests"]');
        const dateInput = container.querySelector('input[name="date"]');
        const timeInput = screen.getByTestId('time-input');
        const occasionInput = screen.getByTestId('occasion-input');
        await act(async () => {
            fireEvent.change(guestsInput, { target: { value: 7 } });
            fireEvent.change(dateInput, { target: { value: '2023-02-27' } });
            fireEvent.change(timeInput, { target: { value: '12:00' } });
            fireEvent.change(occasionInput, { target: { value: 'Anniversary' } });
            fireEvent.submit(screen.getByTestId('form'));
        });

        expect(history.location.pathname).toBe('/');
    });
});
