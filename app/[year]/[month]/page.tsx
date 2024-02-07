"use client"
import { useState } from "react";
import { redirect } from 'next/navigation'

// TODO: Should become from some common library/environment and not be hardcoded.
const APP_URL = "https://calendar-exercise-git-main-tanvinadkarni13s-projects.vercel.app/data/events.json";

type Event = {
    launchDate: string,
    title: string,
    imageFilenameThumb: string,
    launchDateObj?: Date,
    imageFilenameFull: string,
    summary: string,
    learnMoreLink: string,
    purchaseLink: string
}; 

type CalendarParams = {
    year: string,
    month: string
};

export default async function Calendar({ params }: { params: CalendarParams }) {
    const { year, month } = params;

    if (!isValidYear(year) || !isValidMonth(month)) {
        redirect(`/${new Date().getFullYear()}/${new Date().getMonth() + 1}`)
    }
    const inputDate = new Date(parseInt(year, 10), parseInt(month, 10), 0);
    const currentDate = new Date(parseInt(year, 10), parseInt(month, 10), 1);
    const prevMonth = new Date(currentDate.setMonth(currentDate.getMonth() - 2));
    const nextMonth = new Date(currentDate.setMonth(currentDate.getMonth() + 2));

    const events = await fetch(APP_URL, { cache: "no-store" }).then((res) => res.json());
    const updatedEvents = events
        .map((event: Event) => {
            event.launchDateObj = new Date(event.launchDate);
            return event
        })
    const currentMonthEvents = updatedEvents.filter((item: Event) => item.launchDateObj?.getFullYear() === parseInt(year, 10) && (item.launchDateObj?.getMonth() + 1) === parseInt(month, 10))
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="flex w-full ">
                <div className="flex-none w-14 h-10">
                    <a className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" href={`/${prevMonth.getFullYear()}/${prevMonth.getMonth() + 1}`}>&lt;</a>
                </div>
                <div className="grow h-10 items-center text-center">
                    <h1 className="text-2xl text-center">{inputDate.toLocaleString('default', { month: 'long' })} {inputDate.getFullYear()}</h1>
                </div>
                <div className="flex-none w-14 h-10 text-end">
                    <a className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" href={`/${nextMonth.getFullYear()}/${nextMonth.getMonth() + 1}`}>&gt;</a>
                </div>
            </div>
            <Month year={year} month={month} events={currentMonthEvents} />
        </main>
    );
}

function Month({ year, month, events }: { year: string, month: string, events: Event[] }) {
    const days = getDaysInMonth(year, month);
    const firstDay = new Date(parseInt(year), parseInt(month, 10) - 1, 1).getDay();
    const weeks = Math.ceil((days + firstDay) / 7);
    const weeksArray = Array.from({ length: weeks }, (_, i) => i);
    return (
        <div className="mb-32 grid text-center w-full">
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
            <div className="flex justify-between">
                {["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map((day) => { return (<div key={day} className="w-1/6 font-bold text-center text-sm">{day}</div>) }
                )}
            </div>
            {weeksArray.map((week) => {
                return (
                    <Week key={`week-${week}`} week={week} firstDay={firstDay} days={days} events={events} />
                );
            })}
        </div>
    );
}

function Week({ week, firstDay, days, events }: { week: number, firstDay: number, days: number, events: Event[] }) {
    const daysArray = Array.from({ length: 7 }, (_, i) => i);
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
    const handleEventClick = (event: Event) => {
        if (event == null || selectedEvent == event) {
            setSelectedEvent(null);
        } else {
            setSelectedEvent(event);
        }
    }
    return (<div>
        <div className="flex justify-between">
            {daysArray.map((day) => {
                const dayNumber = week * 7 + day - firstDay + 1;
                if (dayNumber <= 0 || dayNumber > days) {
                    return <div key={day} className="w-1/6 aspect-square border m-1 light:bg-black dark:bg-white shadow"></div>;
                }
                return <Day key={`day-${day}`} day={dayNumber} events={events} onClick={handleEventClick} />;
            })}
        </div>
        {selectedEvent && <EventDetails key={selectedEvent.title} event={selectedEvent} />}
    </div>
    );
}
function EventDetails({ event }: { event: Event }) {
    return (
        <div className="w-full px-1 flex items-center justify-center relative ">
            <img alt={event.title} src={`/assets/${event.imageFilenameFull}.webp`} className="h-full" />
            <section className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-1 text-white  bg-dark bg-opacity-60 p2">
                <h1 className="text-2xl font-extrabold dark:text-white my-1 bg-black bg-opacity-60">{event.title}</h1>
                {/* event.summary has unsafe html characters and hence not displaying them as markup. */}
                <p className="my-1 text-sm bg-black bg-opacity-60 p-2 text-start sm:line-clamp-1 md:line-clamp-3">{event.summary}</p>
                <p className="font-extrabold my-1 mb-3 bg-black bg-opacity-60 p-2"> <span>Available </span>{event.launchDateObj?.toLocaleString('default', { month: 'long' })}, {event.launchDateObj?.getDate()} {event.launchDateObj?.getFullYear()}</p>
                <p className="font-extrabold my-1 mb-3 p-2">
                    <a href={event.learnMoreLink} target="_new" className="bg-red-500 hover:bg-red-700 text-white font-boltext-white bg-yellow-400 hover:bg-yellow-500 focus:text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900d py-2 px-4 rounded">Learn More</a>
                    <a href={event.purchaseLink} target="_new" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Pre-Order Now</a>
                </p>
            </section>
        </div>);
}

function Day({ day, events, onClick }: { day: number, events: Event[], onClick: (event: Event) => void }) {
    const dayEvents = events.filter((event: Event) => event.launchDateObj?.getDate() === day)
    const event = dayEvents.length > 0 ? dayEvents[0] : null;
    if (!event) return (<div className="w-1/6 aspect-square border relative m-1 light:bg-black dark:bg-white shadow"><div className="absolute top-0 right-0 m-1 p-1">{day}</div></div>);
    return (<div className="w-1/6 aspect-square border relative m-1 light:bg-black dark:bg-white shadow cursor-pointer" onClick={() => onClick(event)}>
        <img alt={event.title} src={`/assets/${event.imageFilenameThumb}.webp`} className="w-full h-full" />
        <div className="absolute top-0 right-0 m-1 bg-sky-500 p-1 rounded-full">{day}</div>
    </div>);
}

function getDaysInMonth(year: string, month: string) {
    return new Date(parseInt(year, 10), parseInt(month, 10), 0).getDate();
}

function isValidYear(year: string) {
    return year.length === 4 && parseInt(year, 10) > 0
}

function isValidMonth(month: string) {
    return parseInt(month, 10) > 0 && parseInt(month, 10) < 13
}
