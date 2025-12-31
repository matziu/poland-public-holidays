import { Holiday } from './types';
export declare function getHolidaysInYear(year: any): Holiday[];
export declare function getHolidayOnDate(dateInput: any): Holiday | undefined;
export declare function isHoliday(dateInput: any): boolean;
export declare function isWeekend(date: Date): boolean;
export declare function isWeekendOrHoliday(date: Date): boolean;
export declare function isWorkingDay(date: Date): boolean;
