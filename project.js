// Project content objects
const project = document.getElementById("specific-project");
const projectData = {
    PACER: {
      subHeading: "JIS",
      title: "PACER",
      description: "PACER is a Judiciary Information System that improves case management and accessibility for lawyers, judges, and registrars.",
      technologies: [
        "./images/js-logo.png",
        "./images/react-logo.png",
        "./images/spring.png",
        "./images/tailwind.png",
        "./images/git.png",
      ],
      keyFeatures: [
        "Manage court case details and status updates.",
        "Lawyers access past cases after payment.",
        "Role-based dashboards for judges, lawyers, and registrars.",
        "Account management with user registration and photo uploads.",
        "Real-time updates on case progress and hearing dates.",
        "Search functionality for lawyers to find relevant cases.",
        "Case adjournment and hearing schedule management.",
        "Secure document upload and storage for case files.",
      ],
      gitLink: "https://github.com/AkulaVishnuVardhanReddy/PACER-Frontend",
      demoLink: "https://your-live-demo-link.com",
      imageSrc: "./images/pacer-logo.png",
    },
    VSR: {
      subHeading: "Booking System",
      title: "VSR Booking",
      description: "The VSR Booking System allows users to book buses, trains, airplanes, and hotels, providing a seamless experience for travelers.",
      technologies: [
        "./images/js-logo.png",
        "./images/react-logo.png",
        "./images/bootstrap.png",
        "./images/git.png",
        "./images/mongodb.png",
      ],
      keyFeatures: [
        "Book buses, trains, airplanes, and hotels in one platform.",
        "User-friendly interface for browsing and booking transportation options.",
        "Option to print receipts for successful bookings.",
        "Form validation for secure and error-free user inputs.",
        "Responsive design for smooth experience across devices.",
        "Easy navigation with intuitive user interface.",
        "Advanced error handling and user-friendly error messages.",
      ],
      gitLink: "https://github.com/AkulaVishnuVardhanReddy/PACER-Frontend",
      demoLink: "https://vsr-booking.onrender.com/",
      imageSrc: "./images/vsr-logo.jpg",
    },
    TajHotel: {
      subHeading: "Responsive",
      title: "Hotel Taj",
      description: "Hotel Taj website is a static, responsive project, offering an attractive and user-friendly interface.",
      technologies: [
        "./images/html-logo.png",
        "./images/css-logo.png",
      ],
      keyFeatures: [
          "Fully responsive design for seamless viewing across all devices.",
          "Attractive user interface showcasing hotel facilities and features.",
          "Built using modern HTML and CSS with media queries for responsiveness.",
          "Includes a custom favicon for a polished and professional look.",
          "Efficient and clean code structure for faster loading times.",
          "Dynamic layouts that adjust to different screen sizes using media queries.",
          "Easy navigation with clear and concise content presentation.",
      ],  
      gitLink: "https://github.com/AkulaVishnuVardhanReddy/Hotel-Taj",
      demoLink: "https://hotel-taj.onrender.com/",
      imageSrc: "./images/taj-logo.jpg",
    },
    ElectionResults: {
      subHeading: "Checking",
      title: "Election Results",
      description: "The Election Results project is a web application that displays election results with an interactive table",
      technologies: [
        "./images/html-logo.png",
        "./images/css-logo.png"
      ],
      keyFeatures: [
          "Interactive table displaying election results.",
          "Sidebar navigation for easy access to different sections.",
          "Custom favicon for a professional look and branding.",
          "Attractive background images to enhance the visual appeal of the platform.",
          "Intuitive UI/UX for users to browse and analyze election data effortlessly.",
          "Efficient code structure to ensure fast loading and smooth performance.",
      ],  
      gitLink: "https://github.com/AkulaVishnuVardhanReddy/Elections",
      demoLink: "https://electionsresults.onrender.com/",
      imageSrc: "./images/elections-logo.webp",
    },
};

function loadProjectContent(projectKey) {
    const data = projectData[projectKey];
  
    project.classList.remove("hidden");
    document.getElementById("projectImage").src = data.imageSrc;
    document.getElementById("subHeading").innerHTML = data.subHeading;
    document.getElementById("projectTitle").innerText = data.title;
    document.getElementById("projectDescription").innerText = data.description;
  
    const technologies = document.getElementById("technologies");
    technologies.innerHTML = data.technologies
      .map(
        (tech) => `
          <li class="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
            <img src=${tech} alt="${tech}" class="w-9 sm:w-7">
          </li>`
      )
      .join("");
  
    const featuresList = document.getElementById("featuresList");
    featuresList.innerHTML = data.keyFeatures
      .map((feature) => `-> ${feature}`)
      .join("<br>");
  
    document.getElementById("gitLink").href = data.gitLink;
    document.getElementById("demoLink").href = data.demoLink;
}
  
  // Event Listeners
  document.getElementById("pacerDiv").addEventListener("click", () => {
    loadProjectContent("PACER");
  });
  
  document.getElementById("vsrDiv").addEventListener("click", () => {
    loadProjectContent("VSR");
  });
  
  document.getElementById("hotelTaj").addEventListener("click", () => {
      loadProjectContent("TajHotel");
  });
  
  document.getElementById("electionsResults").addEventListener("click", () => {
      loadProjectContent("ElectionResults");
});
  