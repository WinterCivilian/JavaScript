const days = 365;
const leapYearDays = 366;
const hours = 24;
const minutes = 60;
const seconds = 60;

const secondsInYear = days*hours*minutes*seconds;
const secondsInLeapYear = leapYearDays*hours*minutes*seconds;

console.log(secondsInYear);
console.log(secondsInLeapYear);