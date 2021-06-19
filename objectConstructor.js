// function Hotel (name, rooms, booked) {
//     this.name = name;
//     this.rooms = rooms;
//     this.booked = booked;
//     this.checkAvailability = function () {
//         return this.rooms - this.booked;
//     };
// };

// const Hotel = (name, rooms, booked) => {
//     const hotel = new Object();
//     hotel.name = name;
//     hotel.rooms = rooms;
//     hotel.booked = booked;
//     hotel.checkAvailability = () => {
//         return this.rooms - this.booked;
//     }
//     return hotel;
// };

const Hotel = (name, rooms, booked) => {
    return {
        name,
        rooms,
        booked,
        checkAvailability () {
            return this.rooms - this.booked;
        }
    };
};

const hyatt = Hotel('Hyatt', 100, 60);
const sheraton = Hotel('Sheraton', 80, 20);

console.log(hyatt);
console.log(`Hyatt has ${hyatt.checkAvailability()} rooms available.`);
console.log(sheraton);
console.log(`The Sheraton had ${sheraton.checkAvailability()} rooms available.`)
