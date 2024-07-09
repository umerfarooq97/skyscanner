document.addEventListener('DOMContentLoaded', function() {
    const bookNowLinks = document.querySelectorAll('.book-now');
    const bookingDetails = document.getElementById('booking-details');
    const destinationEl = document.getElementById('destination');
    const dateEl = document.getElementById('date');
    const routeEl = document.getElementById('route');
    const typeEl = document.getElementById('type');
    const confirmationMessage = document.getElementById('confirmation-message');
    const bookingForm = document.getElementById('booking-form');

    bookNowLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const destination = this.dataset.destination;
            const date = this.dataset.date;
            const route = this.dataset.route;
            const type = this.dataset.type;

            destinationEl.textContent = `Destination: ${destination}`;
            dateEl.textContent = `Date: ${date}`;
            routeEl.textContent = `Route: ${route}`;
            typeEl.textContent = `Type: ${type}`;

            bookingDetails.classList.remove('hidden');
        });
    });

    bookingForm.addEventListener('submit', function(event) {
        event.preventDefault();
        confirmationMessage.classList.remove('hidden');
        this.reset();
    });
});
