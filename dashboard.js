// Mock data for demonstration purposes
const userStats = {
    totalCourses: 5,
    completedCourses: 3,
    ongoingCourses: 2,
    enrolledCourses: [
        {
            title: "Machine Learning Basics",
            progress: 60,
            detailsLink: "course-details.html"
        },
        {
            title: "Thermodynamics",
            progress: 45,
            detailsLink: "course-details.html"
        },
        {
            title: "Circuit Analysis",
            progress: 80,
            detailsLink: "course-details.html"
        }
    ]
};

// Function to update user stats dynamically
function updateStats() {
    document.querySelector(".stat-card:nth-child(1) p").textContent = userStats.totalCourses;
    document.querySelector(".stat-card:nth-child(2) p").textContent = userStats.completedCourses;
    document.querySelector(".stat-card:nth-child(3) p").textContent = userStats.ongoingCourses;
}

// Function to update enrolled courses dynamically
function updateEnrolledCourses() {
    const courseList = document.querySelector(".course-list");
    courseList.innerHTML = ""; // Clear existing list

    userStats.enrolledCourses.forEach((course) => {
        const courseItem = document.createElement("div");
        courseItem.classList.add("course-item");
        courseItem.innerHTML = `
            <h3>${course.title}</h3>
            <p>Progress: ${course.progress}%</p>
            <a href="${course.detailsLink}" class="btn">Continue</a>
        `;
        courseList.appendChild(courseItem);
    });
}

// Initialize the dashboard
function initDashboard() {
    updateStats();
    updateEnrolledCourses();
}

// Run the initialization function when the page loads
document.addEventListener("DOMContentLoaded", initDashboard);
