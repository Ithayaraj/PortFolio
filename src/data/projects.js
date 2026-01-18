const projects = [
    {
        id: 1,
        title: "Defect Tracking System",
        description:
            "A group project developed to track and manage software defects throughout the development lifecycle. The system features role-based access, defect reporting, status tracking, and analytics. The backend is built using Spring Boot, with a React.js frontend, MySQL database, and cloud deployment on Azure.",
        tech: ["Spring Boot", "React.js", "MySQL", "Azure", "REST API"],
        github: "https://github.com/DefectTrackerBackendSquad",
        demo: "http://74.235.80.66:3001/dashboard",
        image: "/images/defect-tracking-dashboard.png",
    },
    {
        id: 2,
        title: "BarLink",
        description:
            "A smart attendance system that uses IoT devices to capture student attendance in real time. The system integrates a React.js frontend with a Node.js backend and MongoDB database to store attendance records. Attendance data is processed instantly and deployed on Vercel for public access and monitoring.",
        tech: ["React.js", "Node.js", "MongoDB", "IoT", "Vercel"],
        github: "https://github.com/Ithayaraj/Attendance_management",
        demo: "https://attendance-management-smoky.vercel.app/dashboard",
        image: "/images/barlink-dashboard.png",
    },
    {
        id: 3,
        title: "Loan Prediction System",
        description:
            "A machine learning–based loan prediction system that analyzes applicant data to predict loan approval outcomes. The model is trained using Python and deployed with Streamlit, providing an interactive frontend where users can input data and receive real-time predictions.",
        tech: ["Python", "Machine Learning", "Streamlit", "Pandas", "Scikit-learn"],
        github: "https://github.com/Ithayaraj/Loan-Prediction-System",
        demo: "https://loan-prediction-sys.streamlit.app/",
        image: "/images/loan-prediction.png",
    },
    {
        id: 4,
        title: "UniMart",
        description:
            "A mobile application (APK) designed for university students to buy and sell items within the campus. The app features user authentication, real-time product listings with categories, and direct contact integration using Firebase for a secure campus marketplace experience.",
        tech: ["React Native", "Firebase", "Firebase Auth", "Firestore"],
        github: "https://github.com/Ithayaraj/UniMart",
        demo: "#",
        image: "/images/unimart.jpg",
    },
    {
        id: 5,
        title: "E-Learning Platform",
        description:
            "A full-stack MERN-based e-learning platform that allows students to access courses, view learning materials, and track progress. Admin users can manage courses and content, while the system ensures secure authentication and efficient data handling.",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
        github: "https://github.com/yourname/e-learning-platform",
        demo: "#",
    },

]

export default projects
