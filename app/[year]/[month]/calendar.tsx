
"use client"
import { on } from "events";
import { useState } from "react";

type CalendarProps = {
    year: number,
    month: number,
    events: LaunchEvent[]
}
/**
 * Calendar component that can be shared across the app. 
 * @param year - valid year as integer 
 * @param month - valid month as integer
 * @paramt events - array of events for the year and month
 * @returns 
 */
export default async function Calendar({ year, month, events }: CalendarProps) {

    const inputDate = new Date(year, month, 0);
    const currentDate = new Date(year, month, 1);
    // compute the next and prev month which will be used to navigate to the next and previous month.
    const prevMonth = new Date(currentDate.setMonth(currentDate.getMonth() - 2));
    const nextMonth = new Date(currentDate.setMonth(currentDate.getMonth() + 2));
    // convert the launchDate to a Date object and store it in a new property launchDateObj
    const updatedEvents = events
        .map((event: LaunchEvent) => {
            event.launchDateObj = new Date(event.launchDate);
            return event
        });
    // events applicable for the current month. 
    // Depending on how heavy the api paload is, we may design a backedn api that returns only specific month's events. 
    const currentMonthEvents = updatedEvents.filter((item: LaunchEvent) => item.launchDateObj?.getFullYear() === year && (item.launchDateObj?.getMonth() + 1) === month)
    return (
        <main data-testid="calendar-events" className="flex min-h-screen flex-col items-center p-6">
            <div className="flex w-full ">
                <NavigationButton date={prevMonth} direction="&lt;" />
                <div className="grow h-10 items-center text-center">
                    <h1 className="text-2xl text-center" data-testid="calendar-year-month">{inputDate.toLocaleString('default', { month: 'long' })} {inputDate.getFullYear()}</h1>
                </div>
                <NavigationButton date={nextMonth} direction="&gt;" />
            </div>
            <Month year={year} month={month} events={currentMonthEvents} />
        </main>
    );
}

/**
 * This is a navigation button that appears on the calendar control. Should not be used outside of the Calendar component.
 * @param param0 
 * @returns 
 */
function NavigationButton({ date, direction, title }: { date: Date, direction: string, title?: string }) {
    return (
        <div className="flex-none w-14 h-10">
            <a title={title} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" href={`/${date.getFullYear()}/${date.getMonth() + 1}`}>{direction}</a>
        </div>
    )
}

/**
 * This component renders a Month view of the calendar. Should not be used outside of the Calendar component.
 * @param param0 
 * @returns 
 */
function Month({ year, month, events }: { year: number, month: number, events: LaunchEvent[] }) {
    const days = getDaysInMonth(year, month);
    const firstDay = new Date(year, month - 1, 1).getDay();
    const weeks = Math.ceil((days + firstDay) / 7);
    const weeksArray = Array.from({ length: weeks }, (_, i) => i);
    const [selectedEvent, setSelectedEvent] = useState<LaunchEvent | undefined>(undefined);
    const [selectedWeek, setSelectedWeek] = useState<number | undefined>(undefined);
    // TODO: The weeks days names here should come from locale and should be translatable. 
    return (
        <div className="mb-32 grid text-center w-full">
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
            <div className="flex justify-between">
                {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => { return (<div key={day} className="w-1/6 font-bold text-center text-sm">{day}</div>) }
                )}
            </div>
            {weeksArray.map((week) => {
                return (
                    <Week key={`week-${week}`} week={week} firstDay={firstDay} days={days} events={events} onEventSelected={(week, event)=>{ setSelectedWeek(week); setSelectedEvent(event);}} event={
                        selectedWeek == week ? selectedEvent : undefined
                    }/>
                );
            })}
        </div>
    );
}

function Week({ week, firstDay, days, events, event, onEventSelected }: { week: number, firstDay: number, days: number, events: LaunchEvent[], event?: LaunchEvent, onEventSelected: (week:number, vent: LaunchEvent) => void}) {
    const daysArray = Array.from({ length: 7 }, (_, i) => i);
    const handleEventClick = (event: LaunchEvent) => {
        // Event bubbling !
        onEventSelected(week, event);
    }
    return (<div>
        <div className="flex justify-between">
            {daysArray.map((day) => {
                const dayNumber = week * 7 + day - firstDay + 1;
                if (dayNumber <= 0 || dayNumber > days) {
                    return <div key={day} className="w-1/6 aspect-square border m-1 light:bg-gray dark:bg-black shadow"></div>;
                }
                return <Day key={`day-${day}`} day={dayNumber} events={events} onClick={handleEventClick} />;
            })}
        </div>
        {event && <EventDetails key={event.title} event={event} />}
    </div>
    );
}

/**
 * Component that displays event details on click of the event.
 * @param param0 
 * @returns 
 */
function EventDetails({ event }: { event: LaunchEvent }) {
    return (
        <div className="w-full px-1 flex items-center justify-center">
            <div className="w-full min-h-96 flex items-center justify-center" style={{
                backgroundImage: `url(/assets/${event.imageFilenameFull}.webp)`,
                backgroundSize: `cover`,
            }}>
                <section className="m-5 text-white  bg-black bg-opacity-60 p2">
                    <h1 className="lg:text-xl text-base font-extrabold dark:text-white my-1  sm:line-clamp-1 xs:line-clamp-1">{event.title}</h1>
                    {/* event.summary has unsafe html characters and hence not displaying them as markup. */}
                    <p className="my-1 text-xs  p-2 text-start sm:line-clamp-2 xs:line-clamp-2 md:line-clamp-2 line-clamp-5">{event.summary}</p>
                    <p className="font-extrabold text-xs my-1 mb-3  p-2"> <span>Available </span>{event.launchDateObj?.toLocaleString('default', { month: 'long' })}, {event.launchDateObj?.getDate()} {event.launchDateObj?.getFullYear()}</p>
                    <div className="flex font-extrabold my-1 mb-3 p-2 justify-center">
                        <div>
                            <a href={event.learnMoreLink} target="_new" className="text-sm bg-red-500 hover:bg-red-700 text-white font-boltext-white bg-yellow-400 hover:bg-yellow-500 focus:text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-center mb-2outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900d py-2 px-4 rounded">Learn More</a>


                        </div>
                        <div>
                            <a href={event.purchaseLink} target="_new" className="text-sm text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Pre-Order Now</a>

                        </div>
                    </div>
                </section>
            </div>
        </div>);
}

function Day({ day, events, onClick }: { day: number, events: LaunchEvent[], onClick: (event: LaunchEvent) => void }) {
    const dayEvents = events.filter((event: LaunchEvent) => event.launchDateObj?.getDate() === day)
    const event = dayEvents.length > 0 ? dayEvents[0] : null;
    if (!event) return (<div className="w-1/6 aspect-square border relative m-1 light:bg-black dark:bg-black shadow"><div className="absolute top-0 right-0 m-1 p-1">{day}</div></div>);
    return (<div className="w-1/6 aspect-square border relative m-1 light:bg-black dark:bg-black shadow cursor-pointer" onClick={() => onClick(event)}>
        <img alt={event.title} src={`/assets/${event.imageFilenameThumb}.webp`} className="w-full h-full" />
        <div className="absolute top-0 right-0 m-1 bg-sky-500 p-1 rounded-full">{day}</div>
    </div>);
}


function getDaysInMonth(year: number, month: number) {
    return new Date(year, month, 0).getDate();
}