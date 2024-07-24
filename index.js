document.addEventListener("DOMContentLoaded",function(){
    const searchcontent=document.getElementById("searchcontent");
    const flightsearch=document.getElementById("flightsearch");
    flightsearch.onclick=function(){
        if(searchcontent.style.display==="none"){
            searchcontent.style.display="block";
            flightsearch.style.backgroundColor="dodgerblue";
            flightsearch.style.color="white";
        }
        else{
            searchcontent.style.display="none";
            flightsearch.style.backgroundColor="";
            flightsearch.style.color="";
        }
    }
});
document.addEventListener("DOMContentLoaded",function(){
    const flightdetails=document.getElementById("flightdetails");
    const detailscontent=document.getElementById("detailscontent");
    flightdetails.onclick=function(){
        if(detailscontent.style.display==="none"){
            detailscontent.style.display="block";
            flightdetails.style.backgroundColor="dodgerblue";
            flightdetails.style.color="white";
        }
        else{
            detailscontent.style.display="none";
            flightdetails.style.backgroundColor="";
            flightdetails.style.color="";
        }
    }
});
document.addEventListener("DOMContentLoaded",function(){
    const addpassenger=document.getElementById("addpassenger");
    const add=document.getElementById("add");
    addpassenger.onclick=function(){
        if(add.style.display==="none"){
            add.style.display="block";
            addpassenger.style.backgroundColor="dodgerblue";
            addpassenger.style.color="white";
        }
        else{
            add.style.display="none";
            addpassenger.style.backgroundColor="";
            addpassenger.style.color="";
        }
    }
});
document.addEventListener("DOMContentLoaded",function(){
    const updatepassenger=document.getElementById("updatepassenger");
    const update=document.getElementById("update");
    updatepassenger.onclick=function(){
        if(update.style.display==="none"){
            update.style.display="block";
            updatepassenger.style.backgroundColor="dodgerblue";
            updatepassenger.style.color="white";
        }
        else{
            update.style.display="none";
            updatepassenger.style.backgroundColor="";
            updatepassenger.style.color="";
        }
    }
});
document.addEventListener("DOMContentLoaded",function(){
    const paymentoption=document.getElementById("paymentoption");
    const payment=document.getElementById("payment");
    paymentoption.onclick=function(){
        if(payment.style.display==="none"){
            payment.style.display="block";
            paymentoption.style.backgroundColor="dodgerblue";
            paymentoption.style.color="white";
        }
        else{
            payment.style.display="none";
            paymentoption.style.backgroundColor="";
            paymentoption.style.color="";
        }
    }
});
document.addEventListener("DOMContentLoaded",function(){
    const paymentoption=document.getElementById("paymentoption");
    const payment=document.getElementById("payment");
    paymentoption.onclick=function(){
        if(payment.style.display==="none"){
            payment.style.display="block";
            paymentoption.style.backgroundColor="dodgerblue";
            paymentoption.style.color="white";
        }
        else{
            payment.style.display="none";
            paymentoption.style.backgroundColor="";
            paymentoption.style.color="";
        }
    }
});
document.addEventListener("DOMContentLoaded",function(){
    function generateRandomId() {
        return + Math.floor(Math.random() * 1000000);
    }
    document.getElementById('passengerForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const country = document.getElementById('country').value;
        const state = document.getElementById('state').value;
        const phone = document.getElementById('phone').value;
        const gender = document.getElementById('gender').value;
        const address = document.getElementById('address').value;
        const id = generateRandomId();
        const passenger = { id, name, email, country, state,phone, gender, address };
        let passengers = JSON.parse(localStorage.getItem('passengers')) || [];
        passengers.push(passenger);
        localStorage.setItem('passengers', JSON.stringify(passengers));
        passengerForm.reset();
        alert('Passenger details added successfully!');
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById('search');
    const searchButton = document.getElementById('searchpass');
    const table = document.getElementById('passengerDetails');

    // Function to render passenger table
    function renderTable(passengers) {
        // Clear existing rows except the header
        while (table.rows.length > 1) {
            table.deleteRow(1);
        }

        if (passengers.length > 0) {
            passengers.forEach(passenger => {
                const row = table.insertRow();
                row.insertCell(0).textContent = passenger.id;
                row.insertCell(1).textContent = passenger.name;
                row.insertCell(2).textContent = passenger.email;
                row.insertCell(3).textContent = passenger.country;
                row.insertCell(4).textContent = passenger.state;
                row.insertCell(5).textContent = passenger.phone;
                row.insertCell(6).textContent = passenger.gender;
                row.insertCell(7).textContent = passenger.address;

                const actionsCell = row.insertCell(8);

                const flightDetailsButton = document.createElement('button');
                flightDetailsButton.className = 'view-flight-details';
                flightDetailsButton.setAttribute('data-id', passenger.id);
                flightDetailsButton.textContent = 'Flight';
                actionsCell.appendChild(flightDetailsButton);

                const deleteCell = row.insertCell(9);

                const deleteButton = document.createElement('button');
                deleteButton.className = 'delete-passenger';
                deleteButton.setAttribute('data-id', passenger.id);
                deleteButton.textContent = 'Delete';
                deleteCell.appendChild(deleteButton);

                flightDetailsButton.addEventListener('click', function() {
                    localStorage.setItem('currentPassengerId', passenger.id);
                    window.location.href = 'flightdetails.html';
                });

                deleteButton.addEventListener('click', function() {
                    if(confirm(`Do you want to delete passenger ${passenger.id} ?`)){
                    deletePassenger(passenger.id);
                    }
                });
            });
        } else {
            const row = table.insertRow();
            const cell = row.insertCell(0);
            cell.colSpan = 10;
            cell.textContent = 'No passenger details found.';
        }
    }

    // Function to delete passenger
    function deletePassenger(id) {
        let passengers = JSON.parse(localStorage.getItem('passengers')) || [];
        passengers = passengers.filter(passenger => passenger.id !== id);
        localStorage.setItem('passengers', JSON.stringify(passengers));
        renderTable(passengers);
    }

    // Event listener for search button
    searchButton.addEventListener('click', function() {
        const searchTerm = searchInput.value.toLowerCase();
        const passengers = JSON.parse(localStorage.getItem('passengers')) || [];
        const filteredPassengers = passengers.filter(passenger => {
            return (
                passenger.name.toLowerCase().includes(searchTerm) ||
                passenger.email.toLowerCase().includes(searchTerm) ||
                passenger.country.toLowerCase().includes(searchTerm)
            );
        });
        renderTable(filteredPassengers);
    });

    // Initial table rendering
    const passengers = JSON.parse(localStorage.getItem('passengers')) || [];
    renderTable(passengers);
});
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('flightDetailsForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const passengerId = document.getElementById('passengerId').value;
        const flightNumber = document.getElementById('flightNumber').value;
        const flightBrand = document.getElementById('flightBrand').value;
        const flightModel = document.getElementById('flightModel').value;
        const seatNumber = document.getElementById('seatNumber').value;
        const origin = document.getElementById('origin').value;
        const destination = document.getElementById('destination').value;
        const arrivalTime = document.getElementById('arrivalTime').value;
        const departureTime = document.getElementById('departureTime').value;

        const flightDetails = { passengerId, flightNumber, flightBrand, flightModel, seatNumber, origin, destination, arrivalTime, departureTime };

        let flights = JSON.parse(localStorage.getItem('flights')) || [];
        flights.push(flightDetails);
        localStorage.setItem('flights', JSON.stringify(flights));
        flightDetailsForm.reset();

        alert('Flight details added successfully!');
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const updateForm = document.getElementById('updatePassengerForm');
    const updateId = document.getElementById('updateId');
    const updateName = document.getElementById('updateName');
    const updateEmail = document.getElementById('updateEmail');
    const updateCountry = document.getElementById('updateCountry');
    const updateState = document.getElementById('updateState');
    const updatePhone = document.getElementById('updatePhone');
    const updateGender = document.getElementById('updateGender');
    const updateAddress = document.getElementById('updateAddress');

    // Show update form and populate fields
    function showUpdateForm(passenger) {
        updateId.value = passenger.id;
        updateName.value = passenger.name;
        updateEmail.value = passenger.email;
        updateCountry.value = passenger.country;
        updateState.value = passenger.state;
        updatePhone.value = passenger.phone;
        updateGender.value = passenger.gender;
        updateAddress.value = passenger.address;
    }

    // Update passenger details
    updateForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const passengers = JSON.parse(localStorage.getItem('passengers')) || [];
        const updatedPassenger = {
            id: parseInt(updateId.value),
            name: updateName.value,
            email: updateEmail.value,
            country: updateCountry.value,
            state: updateState.value,
            phone: updatePhone.value,
            gender: updateGender.value,
            address: updateAddress.value
        };

        const passengerIndex = passengers.findIndex(passenger => passenger.id === updatedPassenger.id);
        if (passengerIndex !== -1) {
            passengers[passengerIndex] = updatedPassenger;
            localStorage.setItem('passengers', JSON.stringify(passengers));
            updatePassengerForm.reset();
            alert('Passenger details updated successfully!');
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    if (window.location.pathname.endsWith('flightdetails.html')) {
        const passengerId = localStorage.getItem('currentPassengerId');
        document.getElementById('passengerId').textContent = passengerId;

        const flights = JSON.parse(localStorage.getItem('flights')) || [];
        const flightDetailsContent = document.getElementById('flightDetailsContent');

        const flight = flights.find(f => f.passengerId == passengerId);
        if (flight) {
            flightDetailsContent.innerHTML = `
                <p>Flight No: ${flight.flightNumber}</p>
                <p>Brand: ${flight.flightBrand}</p>
                <p>Model: ${flight.flightModel}</p>
                <p>Seat No: ${flight.seatNumber}</p>
                <p>Origin: ${flight.origin}</p>
                <p>Destination: ${flight.destination}</p>
                <p>Arrival: ${new Date(flight.arrivalTime).toLocaleString()}</p>
                <p>Departure: ${new Date(flight.departureTime).toLocaleString()}</p>
            `;
        } else {
            flightDetailsContent.textContent = 'No flight details found for this passenger.';
        }
    }
});
