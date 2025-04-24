
// tho aap Dates ko b convert kr sakty hy jaise string me krna etc jiss ko hum log abhi kr b rhy hy

let date = new Date("2023-10-01");

console.log(date.toString()); // "Sun Oct 01 2023 00:00:00 GMT+0000 (UTC)"
console.log(date.toDateString()); // "Sun Oct 01 2023"
console.log(date.toTimeString()); // "00:00:00 GMT+0000 (UTC)"
console.log(date.toISOString()); // "2023-10-01T00:00:00.000Z"
console.log(date.toLocaleString("en-US")); // "10/1/2023, 12:00:00 AM"