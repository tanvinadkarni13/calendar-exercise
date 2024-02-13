"use client"
import { redirect } from 'next/navigation'
import Calendar from "./calendar";


export default function Page({ params }: { params: { year: string, month: string } }) {
    const { year, month } = params;

    if (!isValidYear(year) || !isValidMonth(month)) {
        redirect(`/${new Date().getFullYear()}/${new Date().getMonth() + 1}`)
    }

    return <Calendar year={parseInt(year, 10)} month={parseInt(month, 10)} events={mockAPI(parseInt(year, 10), parseInt(month, 10))} />
}


function isValidYear(year: string) {
    return year.length === 4 && parseInt(year, 10) > 0
}

function isValidMonth(month: string) {
    return parseInt(month, 10) > 0 && parseInt(month, 10) < 13
}

/**
 *  Using this method instead of a real api call just to make sure we have sufficient data to show. 
 *  
 * The mocked API looks weird because I have avoided random even generation and kept it stable for a given month.
 */
function mockAPI(year: number, month: number) {
    const totalList = [
        {
            "id": "7060050195c6b3a514f7300",
            "launchDate": `${year}-${month.toString().padStart(2, '0')}-20T14:36:38.034Z`,
            "title": "Fall Guys",
            "summary": "Stumble towards greatness. Fall Guys is a free, cross-platform, massively multiplayer, party royale game where you and your fellow contestants compete through escalating rounds of absurd obstacle course chaos until one lucky victor remains!",
            "imageFilenameThumb": "fall-guys__1x1",
            "imageFilenameFull": "fall-guys__16x9",
            "learnMoreLink": "https://www.playstation.com/en-us/games/fall-guys-ultimate-knockout/",
            "purchaseLink": "https://www.playstation.com/en-us/games/fall-guys-ultimate-knockout/#buy-now"
        },
        {
            "id": "6615829505c6b88b4e30e02",
            "launchDate": `${year}-${month.toString().padStart(2, '0')}-19T20:14:52.687Z`,
            "title": "Hogwarts Legacy",
            "summary": "Experience Hogwarts in the late 1800s and decide the fate of the wizarding world.",
            "imageFilenameThumb": "hogwarts-legacy__1x1",
            "imageFilenameFull": "hogwarts-legacy__16x9",
            "learnMoreLink": "https://www.playstation.com/en-us/games/hogwarts-legacy/",
            "purchaseLink": "https://www.playstation.com/en-us/games/hogwarts-legacy/#buy-now"
        },
        {
            "id": "18213007415c6b3aceb83602",
            "launchDate": `${year}-${month.toString().padStart(2, '0')}-13T09:01:30.152Z`,
            "title": "Gran Turismo 7",
            "summary": "Gran Turismo 7 brings together the very best features of the Real Driving Simulator. Whether you’re a competitive or casual racer, collector, tuner, livery designer or photographer – find your line with a staggering collection of game modes including fan-favorites like GT Campaign, Arcade and Driving School.",
            "imageFilenameThumb": "gran-turismo-7__1x1",
            "imageFilenameFull": "gran-turismo-7__16x9",
            "learnMoreLink": "https://www.playstation.com/en-us/games/gran-turismo-7/",
            "purchaseLink": "https://www.playstation.com/en-us/games/gran-turismo-7/#buy-now"
        },
        {
            "id": "939715715c6b3898dd3da5",
            "launchDate": `${year}-${month.toString().padStart(2, '0')}-25T21:32:46.879Z`,
            "title": "Metal Gear Solid: The Phantom Pain",
            "summary": "Ushering in a new era for the franchise with cutting-edge technology powered by the Fox Engine, MGSV: The Phantom Pain, will provide players a first-rate gaming experience as they are offered tactical freedom to carry out open-world missions.",
            "imageFilenameThumb": "metal-gear-solid__1x1",
            "imageFilenameFull": "metal-gear-solid__16x9",
            "learnMoreLink": "https://www.playstation.com/en-us/games/metal-gear-solid-v-the-phantom-pain/",
            "purchaseLink": "https://www.playstation.com/en-us/games/metal-gear-solid-v-the-phantom-pain/#buy-now"
        },
        {
            "id": "1785476915c6b3a21620b48",
            "launchDate": `${year}-${month.toString().padStart(2, '0')}-09T19:45:11.811Z`,
            "title": "Megaman 11",
            "summary": "Mega Man is back! The newest entry in this iconic series blends classic, challenging 2D platforming action with a fresh look. The stunning new visual style refreshes the series' iconic colorfulness, combining hand-drawn environments with detailed, 3D character models.",
            "imageFilenameThumb": "megaman-11__1x1",
            "imageFilenameFull": "megaman-11__16x9",
            "learnMoreLink": "https://www.playstation.com/en-us/games/mega-man-11/",
            "purchaseLink": "https://www.playstation.com/en-us/games/mega-man-11/#buy-now"
        },
        {
            "id": "339715715c6b3898dd3da5",
            "launchDate": `${year}-${month.toString().padStart(2, '0')}-25T21:32:46.879Z`,
            "title": "Metal Gear Solid: The Phantom Pain 2",
            "summary": "Ushering in a new era for the franchise with cutting-edge technology powered by the Fox Engine, MGSV: The Phantom Pain, will provide players a first-rate gaming experience as they are offered tactical freedom to carry out open-world missions.",
            "imageFilenameThumb": "metal-gear-solid__1x1",
            "imageFilenameFull": "metal-gear-solid__16x9",
            "learnMoreLink": "https://www.playstation.com/en-us/games/metal-gear-solid-v-the-phantom-pain/",
            "purchaseLink": "https://www.playstation.com/en-us/games/metal-gear-solid-v-the-phantom-pain/#buy-now"
        },
    ];
    switch (month) {
        case 1:
        case 5:
        case 9:
            return [
                totalList[0],
                totalList[1],
                totalList[2],
            ]
        case 2:
        case 6:
        case 10:
            return [
                totalList[3],
                totalList[4],
                totalList[5],
            ]
        case 3:
        case 7:
        case 11:
            return [
                totalList[4],
                totalList[2],
                totalList[1],
            ]
        case 4:
        case 8:
        case 12:
            return [
                totalList[5],
                totalList[1],
                totalList[0],
            ]
    }
    return [
       
    ];
}
