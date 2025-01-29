document.addEventListener('DOMContentLoaded', () => {
    // Project Modal Handling
    const projects = [
        { 
            title: 'Prediction of Cervical Cancer Using SMOTE and RFERF Machine Learning Algorithms ', 
            Description: 'Developed a Python-based prediction model with 98% accuracy. Implemented SMOTE for data balancing and RFERF for feature selection. ' 
        },
        { 
            title: 'This Portfolio',
            Description: 'A modern portfolio website featuring a smooth tab-based About Me section, a project showcase with a modal popup, and fully responsive navigation with smooth scrolling. The JavaScript-powered tabs allow dynamic content switching for Summary, Skills & Education, and Experience. The design includes transparent sections, interactive UI elements, and a clean, user-friendly layout.' 
        },
        { 
            title: 'Wether Forecasting',
            Description: 'Developed a responsive weather application that fetches real-time weather data from the OpenWeatherMap API based on user input.Key Features: Dynamic UI updates, API integration, error handling, and a user-friendly interface for seamless weather lookup.'
        }
    ];

    document.querySelectorAll('.project-card').forEach((card, index) => {
        card.addEventListener('click', () => {
            const project = projects[index];
            document.getElementById('project-title').textContent = project.title;
            document.getElementById('project-description').textContent = project.Description;
            document.getElementById('project-modal').classList.add('visible');
        });
    });

    // Close Modal Handlers
    document.getElementById('close-modal').addEventListener('click', () => {
        document.getElementById('project-modal').classList.remove('visible');
    });

    document.getElementById('project-modal').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) {
            e.currentTarget.classList.remove('visible');
        }
    });

    // Smooth Scroll for Navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
});
// Tab Functionality
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.dataset.tab;
        
        // Remove active classes
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active-tab'));
        document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active-content'));
        
        // Add active classes
        button.classList.add('active-tab');
        document.getElementById(tabId).classList.add('active-content');
    });
});