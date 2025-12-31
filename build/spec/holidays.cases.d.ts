declare const invalidDates: (string | number | boolean | Date | (() => void) | null | undefined)[];
declare const invalidYears: (string | number | boolean | Date | (() => void) | null | undefined)[];
declare const validDates: (string | Date)[];
declare const validYears: (string | number | Date)[];
declare const holidaysInYears: {
    year: number;
    holidayName: string;
    holidayDate: string;
}[];
declare const yearsInPastAndFuture: number[];
declare const existingHolidays: {
    date: string;
    name: string;
}[];
declare const nonHolidays: string[];
export { invalidDates, invalidYears, validDates, validYears, holidaysInYears, yearsInPastAndFuture, existingHolidays, nonHolidays };
