let reservationsDatabase = [];

// Function to add a new reservation to the database
function addReservation(reservation) {
    reservationsDatabase.push(reservation);
}

function getAllReservations() {
    return reservationsDatabase;
}

//
function getReservationById(id) {
    return reservationsDatabase.find(reservation => reservation.id === id);
}

function makeReservation(tableNumber, customerName, reservationTime, contactName, contactEmail) {
    const reservation = {
        id: reservationsDatabase.length + 1,
        tableNumber,
        customerName,
        reservationTime,
        contactName,
        contactEmail,
    };

    addReservation(reservation);

    window.location.href = '/thank-you.html';
}

console.log(getAllReservations());

console.log(getReservationById(1));