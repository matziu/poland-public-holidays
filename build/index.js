"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isWorkingDay = exports.isWeekendOrHoliday = exports.isWeekend = exports.isHoliday = exports.getHolidayOnDate = exports.getHolidaysInYear = void 0;
const helpers_1 = require("./helpers");
const holidays_1 = require("./holidays");
function getHolidaysInYear(year) {
    const yearDate = (0, helpers_1.validateYear)(year);
    const yearString = yearDate.getFullYear().toString().padStart(4, '0');
    const yearNumber = parseInt(yearString);
    const easterDate = (0, helpers_1.getEasterDate)(yearNumber);
    return holidays_1.default
        .map((holiday) => {
        let date;
        if (holiday.type === 'fixed') {
            date = new Date(`${yearString}-${holiday.date}`);
        }
        else {
            date = new Date((0, helpers_1.addDays)(easterDate, holiday.afterEaster));
        }
        const { name, namePL } = holiday;
        return {
            name,
            namePL,
            date,
        };
    })
        .sort((a, b) => (a.date < b.date ? -1 : 1));
}
exports.getHolidaysInYear = getHolidaysInYear;
function getHolidayOnDate(dateInput) {
    const date = (0, helpers_1.validateDate)(dateInput);
    return getHolidaysInYear(date.getFullYear()).find((holiday) => (0, helpers_1.isSameDay)(holiday.date, date));
}
exports.getHolidayOnDate = getHolidayOnDate;
function isHoliday(dateInput) {
    const date = (0, helpers_1.validateDate)(dateInput);
    return getHolidayOnDate(date) !== undefined;
}
exports.isHoliday = isHoliday;
function isWeekend(date) {
    return [0, 6].includes(date.getDay());
}
exports.isWeekend = isWeekend;
function isWeekendOrHoliday(date) {
    return isWeekend(date) || isHoliday(date);
}
exports.isWeekendOrHoliday = isWeekendOrHoliday;
function isWorkingDay(date) {
    return !isWeekendOrHoliday(date);
}
exports.isWorkingDay = isWorkingDay;
//# sourceMappingURL=index.js.map