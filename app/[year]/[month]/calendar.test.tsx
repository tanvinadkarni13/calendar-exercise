import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calendar from './calendar';
import { expect, test, describe } from '@jest/globals';

describe('Calendar', () => {
  test('renders Calendar component', () => {
    const events = [
        {
            "id": "1",
            "launchDate": "2023-03-01T00:00:00Z",
            "title": "New Year's Day",
            "imageFilenameFull": "some file",
            "summary": "some summary",
            "learnMoreLink": "some link",
            "purchaseLink": "some link",
            "imageFilenameThumb": "some file"
        } as LaunchEvent
    ]
    render(<Calendar year={2023} month={3} events={events}/>);

    // Check that the calendar is present in the document
    expect(screen.getByTestId('calendar-events')).not.toBeNull();

    // Check that the calendar has 12 months
    const months = screen.getAllByTestId('month');
    expect(months).toHaveLength(12);

    // Check that the calendar has the correct year
    const year = screen.getByTestId('calendar-year-month');
    expect(year).toEqual("2023");
  });
});
