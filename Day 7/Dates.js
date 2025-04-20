
// Yeh example dikhata hai ki Date object banakar hum current date aur time ko alag-alag formats mein display kar sakte hain.



let currentTime = new Date();
console.log(currentTime);

// readable format me date ko show krwane k liye
console.log(currentTime.toDateString()); 
// ab time ko hum readable format me show karenge
console.log(currentTime.toTimeString());