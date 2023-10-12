import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Show from './../Show';
import userEvent from '@testing-library/user-event';

const testShow = {
    name: '',
    summary: '',
    seasons: [{
        id: 1,
        name: '',
        episodes: []
    }, {
        id: 2,
        name: '',
        episodes: []
    }],

}

test('renders without errors', () => {
    render(<Show show={testShow} selectedSeason={"none"} />)
});

test('renders Loading component when prop show is null', () => {
    render(<Show show={null} />)
    const loadingMessage = screen.queryByText('Fetching data...');
    expect(loadingMessage).toBeInTheDocument();

});

test('renders same number of options seasons are passed in', () => {
    render(<Show show={testShow} selectedSeason={"none"} />);

    expect(screen.getAllByTestId("season-option")).toHaveLength(2);

});

test('handleSelect is called when an season is selected', () => {
    const handleSelect = jest.fn();
    render(<Show show={testShow} selectedSeason={'none'} handleSelect={handleSelect} />);
    const select = screen.getByLabelText(/Select A Season/i);
    userEvent.selectOptions(select, ["1"]);
    expect(handleSelect).toBeCalled();
});

test('component renders when no seasons are selected and when rerenders with a season passed in', () => {
    const { rerender } = render(<Show show={testShow} selectedSeason={"none"} />)
    let episodeComp = screen.queryByTestId('episodes-container');
    expect(episodeComp).not.toBeInTheDocument();
    rerender(<Show show={testShow} selectedSeason={1} />);
    episodeComp = screen.queryByTestId('episodes-container');
    expect(episodeComp).toBeInTheDocument();
});
