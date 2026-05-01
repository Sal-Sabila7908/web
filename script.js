
// ===== DOCTOR DATA =====
let doctors = [
    { id: 1, name: "Dr. Rafiqul Islam",   specialty: "Cardiologist",  hospital: "Square Hospital",   img: "https://randomuser.me/api/portraits/men/32.jpg" },
    { id: 2, name: "Dr. Farzana Akter",   specialty: "Dermatologist", hospital: "United Hospital",   img: "https://randomuser.me/api/portraits/women/44.jpg" },
    { id: 3, name: "Dr. Abdullah Mamun",  specialty: "Neurologist",   hospital: "Evercare Hospital", img: "https://randomuser.me/api/portraits/men/45.jpg" }
];

let selectedDoctor = null;
let currentRatingDoctor = null;
let ratings = {};

// ===== LOGIN / LOGOUT =====
function login() {
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("mainApp").style.display = "block";
    renderDoctors();
}

function logout() {
    location.reload();
}

// ===== RENDER DOCTORS =====
function renderDoctors() {
    let grid = document.getElementById("doctorsGrid");
    grid.innerHTML = "";

    for (let i = 0; i < doctors.length; i++) {
        let d = doctors[i];
        let avg = ratings[d.id] ? (ratings[d.id].total / ratings[d.id].count).toFixed(1) : "0.0";

        grid.innerHTML += `
        <div class="doctor-card">
            <div class="doctor-img" style="background-image:url('${d.img}')"></div>
            <div class="doctor-info">
                <h3>${d.name}</h3>
                <p>${d.specialty}</p>
                <p>${d.hospital}</p>
                <p>Rating: ${avg} / 5</p>
                <button class="btn" onclick="openBookingModal(${d.id})">Book Appointment</button>
                <button class="rate-btn" onclick="openRatingModal(${d.id})">Rate Doctor</button>
            </div>
        </div>`;
    }
}

// ===== BOOKING =====
function openBookingModal(id) {
    selectedDoctor = doctors.find(d => d.id === id);
    document.getElementById("modalDoctorName").innerText = selectedDoctor.name;
    document.getElementById("modalSpecialty").innerText = selectedDoctor.specialty;
    document.getElementById("modalHospital").innerText = selectedDoctor.hospital;
    document.getElementById("appointmentModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("appointmentModal").style.display = "none";
}

function confirmBooking() {
    alert("Thank you");
    closeModal();
}

// ===== RATING =====
function openRatingModal(id) {
    currentRatingDoctor = doctors.find(d => d.id === id);
    document.getElementById("ratingDoctorName").innerText = currentRatingDoctor.name;
    document.getElementById("selectedRating").value = 0;
    document.getElementById("ratingModal").style.display = "flex";
}

function setRating(value) {
    document.getElementById("selectedRating").value = value;
    let stars = document.querySelectorAll('.star-rating i');
    stars.forEach((star, i) => {
        star.classList.toggle('active', i < value);
    });
}

function closeRatingModal() {
    document.getElementById("ratingModal").style.display = "none";
}


function submitRating() {
    let value = parseInt(document.getElementById("selectedRating").value);
    
    if (value > 0) {
        alert("Thank u");
        closeRatingModal();
        renderDoctors();
    } else {
        alert("Please select a rating");
    }
}
