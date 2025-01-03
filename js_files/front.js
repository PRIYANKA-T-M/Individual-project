document.getElementById('volunteerButton').addEventListener('click', function()) {
    alert("Thank you for your interest in volunteering! We will get back to you soon.");
};

document.getElementById('contactForm').addEventListener('submit', function(e)) {
    e.preventDefault(); // Prevent the form from submitting
    alert('Thank you');
}