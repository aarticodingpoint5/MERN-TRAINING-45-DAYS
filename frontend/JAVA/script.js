// ==============================
// DAY 7 - PART 1
// JavaScript Introduction
// ==============================

// First JavaScript Program

console.log("Welcome to SkillHub LMS");

// Trainer Variable

let trainer = "Sahil Saini";

console.log(trainer);

// Student Variables

let studentName = "Aarti";
let batch = "2026";
let courseName = "MERN Stack Development";
let duration = 45;

// Data Types

let fees = 12000;

let isCourseActive = true;

// Output

console.log(studentName);
console.log(batch);
console.log(courseName);
console.log(duration);
console.log(fees);
console.log(isCourseActive);

alert("Welcome to SkillHub LMS");

let name = prompt("Enter your name");

alert("Welcome " + name);

let heading = document.getElementById("hero-title");

heading.innerHTML = "Welcome " + name;

document.getElementById("join-button").innerHTML = "Enroll Today";

document.getElementById("join-button").style.background = "green";

// ===================== DAY 7 PART 3 =====================

// Feature 1 - Join Button Alert

let joinButton = document.getElementById("join-button");

joinButton.addEventListener("click", function () {
    alert("Registration Starts Soon!");
});


// Feature 2 - Theme Changer

let themeButton = document.getElementById("theme-button");

themeButton.addEventListener("click", function () {
    document.body.style.background = "#DBEAFE";
});


// Feature 3 - Course Counter

let total = 6;

document.getElementById("course-btn").addEventListener("click", function () {
    total++;
    document.getElementById("count").innerHTML = total;
});


// Feature 4 - Today's Date

let today = new Date();

document.getElementById("date").innerHTML = today.toDateString();


// Mini Challenge

let student = prompt("Enter your name");

document.getElementById("banner").innerHTML =
"Hello " + student + ", Welcome to SkillHub LMS!";
// =========================
// DAY 7 - PART 3
// EVENTS & FUNCTIONS
// =========================

// Join Button Function
function joinCourse() {
    alert("Congratulations! You have successfully enrolled in SkillHub LMS.");
}

// Change Hero Title
function changeTitle() {
    document.getElementById("hero-title").innerHTML =
    "Start Your MERN Stack Journey Today!";
}

// Change Theme
function changeTheme() {
    document.body.style.backgroundColor = "#dbeafe";
}

// Reset Theme
function resetTheme() {
    document.body.style.backgroundColor = "#f4f8fc";
}

// Show Total Courses
function showCourses() {
    alert("Total Courses Available : 9");
}