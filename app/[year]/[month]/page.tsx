(() => {
var exports = {};
exports.id = 879;
exports.ids = [879];
exports.modules = {

/***/ 7849:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/action-async-storage.external");

/***/ }),

/***/ 2934:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ 5403:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/request-async-storage.external");

/***/ }),

/***/ 4580:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ 4749:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/static-generation-async-storage.external");

/***/ }),

/***/ 5869:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ 399:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.prod.js");

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 7310:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 3911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default.a),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(482);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9108);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2563);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8300);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
"TURBOPACK { transition: next-ssr }";


// We inject the tree and pages here so that we can use them in the route
// module.
const tree = {
        children: [
        '',
        {
        children: [
        '[year]',
        {
        children: [
        '[month]',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8177)), "/Users/aksharprabhudesai/Downloads/assets-and-data/sonyps/app/[year]/[month]/page.tsx"],
          
        }]
      },
        {
        
        
      }
      ]
      },
        {
        
        metadata: {
    icon: [(async (props) => (await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7481))).default(props))],
    apple: [],
    openGraph: [],
    twitter: [],
    manifest: undefined
  }
      }
      ]
      },
        {
        'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2917)), "/Users/aksharprabhudesai/Downloads/assets-and-data/sonyps/app/layout.tsx"],
'not-found': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9361, 23)), "next/dist/client/components/not-found-error"],
        metadata: {
    icon: [(async (props) => (await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7481))).default(props))],
    apple: [],
    openGraph: [],
    twitter: [],
    manifest: undefined
  }
      }
      ]
      }.children;
const pages = ["/Users/aksharprabhudesai/Downloads/assets-and-data/sonyps/app/[year]/[month]/page.tsx"];


const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/[year]/[month]/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__/* .RouteKind */ .x.APP_PAGE,
        page: "/[year]/[month]/page",
        pathname: "/[year]/[month]",
        // The following aren't used in production.
        bundlePath: "",
        filename: "",
        appPaths: []
    },
    userland: {
        loaderTree: tree
    }
});

//# sourceMappingURL=app-page.js.map

/***/ }),

/***/ 4210:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3654))

/***/ }),

/***/ 9000:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2583, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6840, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 8771, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3225, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9295, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3982, 23))

/***/ }),

/***/ 613:
/***/ (() => {



/***/ }),

/***/ 3654:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Page)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(5344);
// EXTERNAL MODULE: ./node_modules/next/dist/client/components/navigation.js
var navigation = __webpack_require__(4767);
;// CONCATENATED MODULE: ./node_modules/next/dist/api/navigation.js
 //# sourceMappingURL=navigation.js.map

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js
var react = __webpack_require__(3729);
;// CONCATENATED MODULE: ./app/[year]/[month]/calendar.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 

/**
 * Calendar component that can be shared across the app. 
 * @param year - valid year as integer 
 * @param month - valid month as integer
 * @paramt events - array of events for the year and month
 * @returns 
 */ async function Calendar({ year, month, events }) {
    const inputDate = new Date(year, month, 0);
    const currentDate = new Date(year, month, 1);
    // compute the next and prev month which will be used to navigate to the next and previous month.
    const prevMonth = new Date(currentDate.setMonth(currentDate.getMonth() - 2));
    const nextMonth = new Date(currentDate.setMonth(currentDate.getMonth() + 2));
    // convert the launchDate to a Date object and store it in a new property launchDateObj
    const updatedEvents = events.map((event)=>{
        event.launchDateObj = new Date(event.launchDate);
        return event;
    });
    // events applicable for the current month. 
    // Depending on how heavy the api paload is, we may design a backedn api that returns only specific month's events. 
    const currentMonthEvents = updatedEvents.filter((item)=>item.launchDateObj?.getFullYear() === year && item.launchDateObj?.getMonth() + 1 === month);
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("main", {
        "data-testid": "calendar-events",
        className: "flex min-h-screen flex-col items-center p-6",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                className: "flex w-full ",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(NavigationButton, {
                        date: prevMonth,
                        direction: "<"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                        className: "grow h-10 items-center text-center",
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("h1", {
                            className: "text-2xl text-center",
                            "data-testid": "calendar-year-month",
                            children: [
                                inputDate.toLocaleString("default", {
                                    month: "long"
                                }),
                                " ",
                                inputDate.getFullYear()
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)(NavigationButton, {
                        date: nextMonth,
                        direction: ">"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)(Month, {
                year: year,
                month: month,
                events: currentMonthEvents
            })
        ]
    });
}
/**
 * This is a navigation button that appears on the calendar control. Should not be used outside of the Calendar component.
 * @param param0 
 * @returns 
 */ function NavigationButton({ date, direction, title }) {
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
        className: "flex-none w-14 h-10",
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("a", {
            title: title,
            className: "text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700",
            href: `/${date.getFullYear()}/${date.getMonth() + 1}`,
            children: direction
        })
    });
}
/**
 * This component renders a Month view of the calendar. Should not be used outside of the Calendar component.
 * @param param0 
 * @returns 
 */ function Month({ year, month, events }) {
    const days = getDaysInMonth(year, month);
    const firstDay = new Date(year, month - 1, 1).getDay();
    const weeks = Math.ceil((days + firstDay) / 7);
    const weeksArray = Array.from({
        length: weeks
    }, (_, i)=>i);
    const [selectedEvent, setSelectedEvent] = (0,react.useState)(undefined);
    const [selectedWeek, setSelectedWeek] = (0,react.useState)(undefined);
    // TODO: The weeks days names here should come from locale and should be translatable. 
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        className: "mb-32 grid text-center w-full",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("hr", {
                className: "h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                className: "flex justify-between",
                children: [
                    "Su",
                    "Mo",
                    "Tu",
                    "We",
                    "Th",
                    "Fr",
                    "Sa"
                ].map((day)=>{
                    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                        className: "w-1/6 font-bold text-center text-sm",
                        children: day
                    }, day);
                })
            }),
            weeksArray.map((week)=>{
                return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(Week, {
                    week: week,
                    firstDay: firstDay,
                    days: days,
                    events: events,
                    onEventSelected: (week, event)=>{
                        setSelectedWeek(week);
                        setSelectedEvent(event);
                    },
                    event: selectedWeek == week ? selectedEvent : undefined
                }, `week-${week}`);
            })
        ]
    });
}
function Week({ week, firstDay, days, events, event, onEventSelected }) {
    const daysArray = Array.from({
        length: 7
    }, (_, i)=>i);
    const handleEventClick = (event)=>{
        // Event bubbling !
        onEventSelected(week, event);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                className: "flex justify-between",
                children: daysArray.map((day)=>{
                    const dayNumber = week * 7 + day - firstDay + 1;
                    if (dayNumber <= 0 || dayNumber > days) {
                        return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                            className: "w-1/6 aspect-square border m-1 bg-gray-300 shadow"
                        }, day);
                    }
                    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(Day, {
                        day: dayNumber,
                        events: events,
                        onClick: handleEventClick
                    }, `day-${day}`);
                })
            }),
            event && /*#__PURE__*/ (0,react_jsx_runtime.jsx)(EventDetails, {
                event: event
            }, event.title)
        ]
    });
}
/**
 * Component that displays event details on click of the event.
 * @param param0 
 * @returns 
 */ function EventDetails({ event }) {
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
        className: "w-full px-1 flex items-center justify-center",
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
            className: "w-full min-h-96 flex items-center justify-center",
            style: {
                backgroundImage: `url(/assets/${event.imageFilenameFull}.webp)`,
                backgroundSize: `cover`
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("section", {
                className: "m-5 text-white  bg-black bg-opacity-60 p2",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("h1", {
                        className: "lg:text-xl text-base font-extrabold dark:text-white my-1  sm:line-clamp-1 xs:line-clamp-1",
                        children: event.title
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsx)("p", {
                        className: "my-1 text-xs  p-2 text-start sm:line-clamp-2 xs:line-clamp-2 md:line-clamp-2 line-clamp-5",
                        children: event.summary
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("p", {
                        className: "font-extrabold text-xs my-1 mb-3  p-2",
                        children: [
                            " ",
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("span", {
                                children: "Available "
                            }),
                            event.launchDateObj?.toLocaleString("default", {
                                month: "long"
                            }),
                            ", ",
                            event.launchDateObj?.getDate(),
                            " ",
                            event.launchDateObj?.getFullYear()
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                        className: "flex font-extrabold my-1 mb-3 p-2 justify-center",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("a", {
                                    href: event.learnMoreLink,
                                    target: "_new",
                                    className: "text-sm bg-red-500 hover:bg-red-700 text-white font-boltext-white bg-yellow-400 hover:bg-yellow-500 focus:text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-center mb-2outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900d py-2 px-4 rounded",
                                    children: "Learn More"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("a", {
                                    href: event.purchaseLink,
                                    target: "_new",
                                    className: "text-sm text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2",
                                    children: "Pre-Order Now"
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
}
function Day({ day, events, onClick }) {
    const dayEvents = events.filter((event)=>event.launchDateObj?.getDate() === day);
    const event = dayEvents.length > 0 ? dayEvents[0] : null;
    if (!event) return /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
        className: "w-1/6 aspect-square border relative m-1 light:bg-black dark:bg-black shadow",
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
            className: "absolute top-0 right-0 m-1 p-1",
            children: day
        })
    });
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        className: "w-1/6 aspect-square border relative m-1 light:bg-black dark:bg-black shadow cursor-pointer",
        onClick: ()=>onClick(event),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("img", {
                alt: event.title,
                src: `/assets/${event.imageFilenameThumb}.webp`,
                className: "w-full h-full"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsx)("div", {
                className: "absolute top-0 right-0 m-1 bg-sky-500 p-1 rounded-full",
                children: day
            })
        ]
    });
}
function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

;// CONCATENATED MODULE: ./app/[year]/[month]/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


async function Page({ params }) {
    const { year, month } = params;
    if (!isValidYear(year) || !isValidMonth(month)) {
        (0,navigation.redirect)(`/${new Date().getFullYear()}/${new Date().getMonth() + 1}`);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime.jsx)(Calendar, {
        year: parseInt(year, 10),
        month: parseInt(month, 10),
        events: mockAPI(parseInt(year, 10), parseInt(month, 10))
    });
}
function isValidYear(year) {
    return year.length === 4 && parseInt(year, 10) > 0;
}
function isValidMonth(month) {
    return parseInt(month, 10) > 0 && parseInt(month, 10) < 13;
}
/**
 * 
 * @param year USing this method instead of a real api call just to make sure we have sufficient data to show.
 * @param month 
 * @returns 
 */ function mockAPI(year, month) {
    const totalList = [
        {
            "id": "7060050195c6b3a514f7300",
            "launchDate": `${year}-${month.toString().padStart(2, "0")}-20T14:36:38.034Z`,
            "title": "Fall Guys",
            "summary": "Stumble towards greatness. Fall Guys is a free, cross-platform, massively multiplayer, party royale game where you and your fellow contestants compete through escalating rounds of absurd obstacle course chaos until one lucky victor remains!",
            "imageFilenameThumb": "fall-guys__1x1",
            "imageFilenameFull": "fall-guys__16x9",
            "learnMoreLink": "https://www.playstation.com/en-us/games/fall-guys-ultimate-knockout/",
            "purchaseLink": "https://www.playstation.com/en-us/games/fall-guys-ultimate-knockout/#buy-now"
        },
        {
            "id": "2a25599465c6b3a81c11501",
            "launchDate": `${year}-${month.toString().padStart(2, "0")}-11T17:21:14.503Z`,
            "title": "Resident Evil 4",
            "summary": "A thrilling reimagining of Capcom's groundbreaking action-horror classic. Resident Evil 4, 2005's legendary survival horror, is brought fully up-to-date in this ground-up remake.",
            "imageFilenameThumb": "resident-evil-4__1x1",
            "imageFilenameFull": "resident-evil-4__16x9",
            "learnMoreLink": "https://www.playstation.com/en-us/games/resident-evil-4-remake/",
            "purchaseLink": "https://www.playstation.com/en-us/games/resident-evil-4-remake/#buy-now"
        },
        {
            "id": "6615829505c6b88b4e30e02",
            "launchDate": `${year}-${month.toString().padStart(2, "0")}-19T20:14:52.687Z`,
            "title": "Hogwarts Legacy",
            "summary": "Experience Hogwarts in the late 1800s and decide the fate of the wizarding world.",
            "imageFilenameThumb": "hogwarts-legacy__1x1",
            "imageFilenameFull": "hogwarts-legacy__16x9",
            "learnMoreLink": "https://www.playstation.com/en-us/games/hogwarts-legacy/",
            "purchaseLink": "https://www.playstation.com/en-us/games/hogwarts-legacy/#buy-now"
        },
        {
            "id": "18213007415c6b3aceb83602",
            "launchDate": `${year}-${month.toString().padStart(2, "0")}-13T09:01:30.152Z`,
            "title": "Gran Turismo 7",
            "summary": "Gran Turismo 7 brings together the very best features of the Real Driving Simulator. Whether youre a competitive or casual racer, collector, tuner, livery designer or photographer. Find your line with a staggering collection of game modes including fan-favorites like GT Campaign, Arcade and Driving School.",
            "imageFilenameThumb": "gran-turismo-7__1x1",
            "imageFilenameFull": "gran-turismo-7__16x9",
            "learnMoreLink": "https://www.playstation.com/en-us/games/gran-turismo-7/",
            "purchaseLink": "https://www.playstation.com/en-us/games/gran-turismo-7/#buy-now"
        },
        {
            "id": "939715715c6b3898dd3da5",
            "launchDate": `${year}-${month.toString().padStart(2, "0")}-25T21:32:46.879Z`,
            "title": "Metal Gear Solid: The Phantom Pain",
            "summary": "Ushering in a new era for the franchise with cutting-edge technology powered by the Fox Engine, MGSV: The Phantom Pain, will provide players a first-rate gaming experience as they are offered tactical freedom to carry out open-world missions.",
            "imageFilenameThumb": "metal-gear-solid__1x1",
            "imageFilenameFull": "metal-gear-solid__16x9",
            "learnMoreLink": "https://www.playstation.com/en-us/games/metal-gear-solid-v-the-phantom-pain/",
            "purchaseLink": "https://www.playstation.com/en-us/games/metal-gear-solid-v-the-phantom-pain/#buy-now"
        },
        {
            "id": "1785476915c6b3a21620b48",
            "launchDate": `${year}-${month.toString().padStart(2, "0")}-09T19:45:11.811Z`,
            "title": "Megaman 11",
            "summary": "Mega Man is back! The newest entry in this iconic series blends classic, challenging 2D platforming action with a fresh look. The stunning new visual style refreshes the series' iconic colorfulness, combining hand-drawn environments with detailed, 3D character models.",
            "imageFilenameThumb": "megaman-11__1x1",
            "imageFilenameFull": "megaman-11__16x9",
            "learnMoreLink": "https://www.playstation.com/en-us/games/mega-man-11/",
            "purchaseLink": "https://www.playstation.com/en-us/games/mega-man-11/#buy-now"
        },
        {
            "id": "2a25599465c6b3a81c11541",
            "launchDate": `${year}-${month.toString().padStart(2, "0")}-21T15:21:14.503Z`,
            "title": "Resident Evil 4",
            "summary": "A thrilling reimagining of Capcom's groundbreaking action-horror classic. Resident Evil 4, 2005s legendary survival horror, is brought fully up-to-date in this ground-up remake.",
            "imageFilenameThumb": "resident-evil-4__1x1",
            "imageFilenameFull": "resident-evil-4__16x9",
            "learnMoreLink": "https://www.playstation.com/en-us/games/resident-evil-4-remake/",
            "purchaseLink": "https://www.playstation.com/en-us/games/resident-evil-4-remake/#buy-now"
        },
        {
            "id": "2143690395c6a39ea9621c0",
            "launchDate": `${year}-${month.toString().padStart(2, "0")}-23T15:21:14.503Z`,
            "title": "Hotline Miami",
            "summary": "Hotline Miami is a high-octane action game overflowing with raw brutality, hard-boiled gunplay and skull crushing close combat. Set in an alternative 1989 Miami, you will assume the role of a mysterious antihero on a murderous rampage against the shady underworld at the behest of voices on your answering machine. Soon you'll find yourself struggling to get a grip of what is going on and why you are prone to these acts of violence.",
            "imageFilenameThumb": "hotline-miami__1x1",
            "imageFilenameFull": "hotline-miami__16x9",
            "learnMoreLink": "https://www.playstation.com/en-us/games/hotline-miami/",
            "purchaseLink": "https://www.playstation.com/en-us/games/hotline-miami/#buy-now"
        },
        {
            "id": "9692393625c6b390c959715",
            "launchDate": `${year}-${month.toString().padStart(2, "0")}-26T12:29:27.528Z`,
            "title": "Spiderman 2",
            "summary": "BE GREATER. TOGETHER. Spider-Men, Peter Parker and Miles Morales, return for an exciting new adventure in the critically acclaimed Marvels Spider-Man franchise for PS5. <br> Swing, jump and utilize the new Web Wings to travel across Marvels New York, quickly switching between Peter Parker and Miles Morales to experience different stories and epic new powers, as the iconic villain Venom threatens to destroy their lives, their city and the ones they love.",
            "imageFilenameThumb": "spiderman-2__1x1",
            "imageFilenameFull": "spiderman-2__16x9",
            "learnMoreLink": "https://www.playstation.com/en-us/games/marvels-spider-man-2/",
            "purchaseLink": "https://www.playstation.com/en-us/games/marvels-spider-man-2/#buy-now"
        },
        {
            "id": "9692393625c6b390c959715",
            "launchDate": `${year}-${month.toString().padStart(2, "0")}-26T00:29:27.528Z`,
            "title": "Spiderman 2",
            "summary": "BE GREATER. TOGETHER. Spider-Men, Peter Parker and Miles Morales, return for an exciting new adventure in the critically acclaimed Marvels Spider-Man franchise for PS5. <br> Swing, jump and utilize the new Web Wings to travel across Marvels New York, quickly switching between Peter Parker and Miles Morales to experience different stories and epic new powers, as the iconic villain Venom threatens to destroy their lives, their city and the ones they love.",
            "imageFilenameThumb": "spiderman-2__1x1",
            "imageFilenameFull": "spiderman-2__16x9",
            "learnMoreLink": "https://www.playstation.com/en-us/games/marvels-spider-man-2/",
            "purchaseLink": "https://www.playstation.com/en-us/games/marvels-spider-man-2/#buy-now"
        }
    ];
    switch(month){
        case 1:
        case 5:
        case 9:
            return [
                totalList[0],
                totalList[1],
                totalList[2]
            ];
        case 2:
        case 6:
        case 10:
            return [
                totalList[3],
                totalList[4],
                totalList[5]
            ];
        case 3:
        case 7:
        case 11:
            return [
                totalList[6],
                totalList[7],
                totalList[8]
            ];
        case 4:
        case 8:
        case 12:
            return [
                totalList[9],
                totalList[1],
                totalList[0]
            ];
    }
    return [];
} // SIMULATING A REQUEST TO THE API


/***/ }),

/***/ 8177:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6843);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/aksharprabhudesai/Downloads/assets-and-data/sonyps/app/[year]/[month]/page.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 2917:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout),
/* harmony export */   metadata: () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5036);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_font_google_target_css_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8592);
/* harmony import */ var next_font_google_target_css_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7272);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_globals_css__WEBPACK_IMPORTED_MODULE_1__);



const metadata = {
    title: "Create Next App",
    description: "Generated by create next app"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("html", {
        lang: "en",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("body", {
            className: (next_font_google_target_css_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_2___default().className),
            children: children
        })
    });
}


/***/ }),

/***/ 7481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(337);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"478x440"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 7272:
/***/ (() => {



/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [638,719,337], () => (__webpack_exec__(3911)));
module.exports = __webpack_exports__;

})();
