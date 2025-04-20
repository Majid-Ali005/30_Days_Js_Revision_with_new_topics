let date6 = new Date(2025, 3, 19, 15, 21, 30); // Full date with seconds
console.log(date6.toLocaleString()); // 4/19/2025, 3:21:30 PM

let date4 = new Date(2025, 3, 19, 15); // Only till hours
console.log(date4.toLocaleString()); // 4/19/2025, 3:00:00 PM

let date3 = new Date(2025, 3); // Only year, month
console.log(date3.toLocaleString()); // 4/1/2025, 12:00:00 AM