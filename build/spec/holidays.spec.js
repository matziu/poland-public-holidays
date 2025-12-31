"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const __1 = require("..");
const holidays_cases_1 = require("./holidays.cases");
describe('getHolidayOnDate', function () {
    it('accepts valid Date objects and date strings as arguments', function () {
        for (const validDate of holidays_cases_1.validDates) {
            (0, chai_1.expect)(function () {
                (0, __1.getHolidayOnDate)(validDate);
            }).to.not.throw();
        }
    });
    it('otherwise throws an error', function () {
        for (const invalidDate of holidays_cases_1.invalidDates) {
            (0, chai_1.expect)(function () {
                (0, __1.getHolidayOnDate)(invalidDate);
            }).to.throw(Error, 'Invalid date');
        }
    });
    it('returns an object with information about a holiday if there is a holiday on the provided date', function () {
        for (const testCase of holidays_cases_1.existingHolidays) {
            const { name, date } = testCase;
            const holiday = (0, __1.getHolidayOnDate)(date);
            (0, chai_1.expect)(holiday).to.not.equal(undefined);
            (0, chai_1.expect)(holiday?.namePL).to.not.equal(undefined);
            (0, chai_1.expect)(holiday?.date).to.be.a('Date');
            (0, chai_1.expect)(holiday?.name).to.equal(name);
        }
    });
    it('returns undefined if there is no holiday on the provided date', function () {
        for (const date of holidays_cases_1.nonHolidays) {
            const holiday = (0, __1.getHolidayOnDate)(date);
            (0, chai_1.expect)(holiday).to.equal(undefined);
        }
    });
});
describe('isHoliday', function () {
    it('accepts valid Date objects and date strings as arguments', function () {
        for (const validDate of holidays_cases_1.validDates) {
            (0, chai_1.expect)(function () {
                (0, __1.isHoliday)(validDate);
            }).to.not.throw();
        }
    });
    it('otherwise throws an error', function () {
        for (const invalidDate of holidays_cases_1.invalidDates) {
            (0, chai_1.expect)(function () {
                (0, __1.isHoliday)(invalidDate);
            }).to.throw(Error, 'Invalid date');
        }
    });
    it('returns true if there is a holiday on the provided date', function () {
        for (const { date } of holidays_cases_1.existingHolidays) {
            (0, chai_1.expect)((0, __1.isHoliday)(date)).to.equal(true);
        }
    });
    it('returns false if there is no holiday on the provided date', function () {
        for (const date of holidays_cases_1.nonHolidays) {
            (0, chai_1.expect)((0, __1.isHoliday)(date)).to.equal(false);
        }
    });
});
describe('getHolidaysInYear', function () {
    it('accepts valid Date objects, date strings and positive numbers as arguments', function () {
        for (const validYear of holidays_cases_1.validYears) {
            (0, chai_1.expect)(function () {
                (0, __1.getHolidaysInYear)(validYear);
            }).to.not.throw();
        }
    });
    it('otherwise throws an error', function () {
        for (const invalidYear of holidays_cases_1.invalidYears) {
            (0, chai_1.expect)(function () {
                (0, __1.getHolidaysInYear)(invalidYear);
            }).to.throw(Error, 'Invalid year');
        }
    });
    it('returns correct dates of public holidays for the given year', function () {
        for (const testCase of holidays_cases_1.holidaysInYears) {
            const { year, holidayName, holidayDate } = testCase;
            const holidaysInYear = (0, __1.getHolidaysInYear)(year);
            const holiday = holidaysInYear.find(({ name }) => name === holidayName);
            (0, chai_1.expect)(holiday).to.not.equal(undefined);
            (0, chai_1.expect)(holiday?.date.toISOString().slice(0, 10)).to.equal(holidayDate);
        }
    });
    it('returns names of public holidays in English and Polish', function () {
        for (const year of holidays_cases_1.yearsInPastAndFuture) {
            const holidays = (0, __1.getHolidaysInYear)(year);
            for (const holiday of holidays) {
                (0, chai_1.expect)(holiday.name).to.not.equal(undefined);
                (0, chai_1.expect)(holiday.namePL).to.not.equal(undefined);
                (0, chai_1.expect)(holiday.name).to.not.equal(holiday.namePL);
            }
        }
    });
    it('returns valid dates for years in the past and future', function () {
        for (const year of holidays_cases_1.yearsInPastAndFuture) {
            const holidays = (0, __1.getHolidaysInYear)(year);
            for (const holiday of holidays) {
                (0, chai_1.expect)(holiday.date.toString()).to.not.contain('Invalid');
            }
        }
    });
});
//# sourceMappingURL=holidays.spec.js.map