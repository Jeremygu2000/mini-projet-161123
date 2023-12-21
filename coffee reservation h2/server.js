const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// In-memory storage for reservations (replace with a database in production)
let reservations = [];

// Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/makeReservation', (req, res) => {
    const { tableNumber, customerName, reservationTime, contactName, contactEmail } = req.body;

    // Validate the data (add more validation as needed)
    if (!tableNumber || !customerName || !reservationTime || !contactName || !contactEmail) {
        return res.status(400).send('Invalid data. Please fill in all details.');
    }

    // Check if the table is available (replace with a real database check in production)
    if (reservations.some(reservation => reservation.tableNumber === tableNumber)) {
        return res.status(400).send('Table already booked. Please choose another.');
    }

    // Save the reservation (replace with a real database save in production)
    reservations.push({ tableNumber, customerName, reservationTime, contactName, contactEmail });
    
    res.status(200).send('Reservation successful!');
});

app.post('/contactUs', (req, res) => {
    const { name, email, message } = req.body;

    // Validate the data (add more validation as needed)
    if (!name || !email || !message) {
        return res.status(400).send('Invalid data. Please fill in all details.');
    }

    // Handle the contact form submission (replace with your desired logic)
    console.log(`Contact form submission:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
    
    res.status(200).send('Contact form submitted!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


app.post('/makeReservation', isAuthenticated, (req, res) => {
    // Get the reservation details from the request body
    // Assume the reservation is successful
    // Redirect the user to the thank you page
    res.redirect('/thank-you');
});

app.get('/thank-you', (req, res) => {
    res.sendFile(__dirname + '/thank-you.html');
});