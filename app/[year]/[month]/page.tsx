"use client"
import { useState } from "react";
import { redirect } from 'next/navigation'
import Calendar  from "./calendar";

// TODO: Should become from some common library/environment and not be hardcoded.
const APP_URL = "https://calendar-exercise-git-main-tanvinadkarni13s-projects.vercel.app/data/events.json";

export default async function Page({ params }: { params: { year: string, month: string } }) {
    const { year, month } = params;

    if (!isValidYear(year) || !isValidMonth(month)) {
        redirect(`/${new Date().getFullYear()}/${new Date().getMonth() + 1}`)
    }
   
    const events = await fetch(`${APP_URL}`).then(res => res.json());
    return <Calendar year={parseInt(year,10)} month={parseInt(month,10)} events={events} />
}


function isValidYear(year: string) {
    return year.length === 4 && parseInt(year, 10) > 0
}

function isValidMonth(month: string) {
    return parseInt(month, 10) > 0 && parseInt(month, 10) < 13
}