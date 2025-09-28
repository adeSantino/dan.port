'use client';

import { useState } from 'react';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('work');

  const workProjects = [
    {
      title: "Company Marketing Website",
      technologies: "Next.js, Firebase, API, JavaScript",
      description: "Redesigned and developed the company website from scratch, implementing key features to enhance functionality and user experience, including:",
      features: [
        "Integrated RSS feeds for real-time global news updates",
        "Developed a dedicated Careers page with job application capabilities",
        "Utilized EmailJS to manage form submissions for applications and inquiries",
        "Implemented a contact form to facilitate product inquiries and direct communication with the company"
      ]
    },
    {
      title: "Inspire Hub Website and Mobile",
      technologies: "Next.js, Firebase, API, JavaScript, React Native",
      description: "Contributed as a developer to a business platform for office tenants, enabling clients to:",
      features: [
        "Book reservations for Virtual Offices, Meeting Rooms, and Dedicated Seats",
        "Designed and supported the development of a mobile application (currently in progress) to allow users to track online billing, access booking history, and easily reserve meeting rooms"
      ]
    },
    {
      title: "Foreign Sales Website",
      technologies: "Next.js, Firebase, API, JavaScript, EmailJS",
      description: "Developed a subscription-based website (similar to Netflix) using Next.js and Tailwind CSS, providing a modern and responsive platform.",
      features: [
        "Expanded the website to support Foreign Sales Agents in marketing the company's products and services",
        "Integrated SQL for managing user accounts, subscriptions, product listings, and service details",
        "Implemented EmailJS to automate communication, including subscription confirmations, product inquiries, and customer updates",
        "Designed an intuitive UI/UX with seamless navigation to enhance accessibility for both customers and sales agents across desktop and mobile"
      ]
    },
    {
      title: "Subscription Service Platform Website",
      technologies: "Next.js, Firebase, API, JavaScript, EmailJS",
      description: "Built a subscription-based website similar to Netflix using Next.js and Tailwind CSS for a modern, responsive frontend.",
      features: [
        "Integrated Firebase Storage for user authentication, subscription management, and data storage",
        "Implemented EmailJS to automate subscription confirmations and user notifications",
        "Designed a clean UI/UX with seamless navigation across desktop and mobile devices"
      ]
    },
    {
      title: "Mobile POS System",
      technologies: "Flutter, PostgreSQL, Supabase, Dart",
      description: "Developed a comprehensive Point of Sale (POS) mobile application using Flutter for cross-platform compatibility.",
      features: [
        "Built responsive mobile interface with Flutter for iOS and Android platforms",
        "Integrated PostgreSQL database through Supabase for secure data management",
        "Implemented real-time inventory tracking and sales analytics",
        "Added user authentication and role-based access control",
        "Designed intuitive UI for transaction processing and receipt generation"
      ]
    }
  ];

  const personalProjects = [
    {
      title: "Personal Blog Website",
      technologies: "Next.js, Tailwind CSS, MDX",
      description: "A personal blog website built with Next.js and MDX for content management, featuring:",
      features: [
        "Custom MDX components for rich content formatting",
        "Dark/light mode toggle with system preference detection",
        "SEO optimization with meta tags and structured data",
        "Responsive design with mobile-first approach",
        "Search functionality with fuzzy matching"
      ]
    },
    {
      title: "Task Management App",
      technologies: "React, Node.js, MongoDB, Express",
      description: "A full-stack task management application with real-time updates and collaboration features:",
      features: [
        "Real-time task updates using WebSocket connections",
        "User authentication with JWT tokens",
        "Drag-and-drop task organization",
        "Team collaboration with shared workspaces",
        "Progress tracking and analytics dashboard"
      ]
    },
    {
      title: "Weather Dashboard",
      technologies: "Vue.js, Chart.js, OpenWeather API",
      description: "An interactive weather dashboard with data visualization and forecasting:",
      features: [
        "Real-time weather data from multiple sources",
        "Interactive charts for temperature and precipitation",
        "Location-based weather alerts",
        "7-day weather forecast with hourly breakdowns",
        "Offline functionality with service workers"
      ]
    }
  ];

  const skills = {
    programmingLanguages: ["HTML", "CSS", "JavaScript", "PHP", "Python", "Dart"],
    frameworks: ["React (Basic)", "Next.js", "Electron", "Node.js", "Express.js", "Laravel", "Flask", "Firebase", "RESTful APIs", "Tailwind CSS", "Bootstrap", "Flutter"],
    database: ["MySQL", "NoSQL (Firebase)", "PostgreSQL (Supabase)", "XAMPP"],
    tools: ["Git", "GitHub", "VS Code", "Jira", "Postman", "Agile Methodology"],
    design: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Responsive Web Design"],
    softSkills: ["Problem Solving", "Teamwork", "Quick Learner", "Leadership", "Adaptability"]
  };

  return (
    <div className="bg-black text-white p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-4">Portfolio</h1>
          <p className="text-gray-400 text-base sm:text-lg">My recent projects and technical skills</p>
        </div>

        {/* Projects Section */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6 sm:mb-8">Projects</h2>
          
          {/* Project Tabs */}
          <div className="flex space-x-1 mb-8 bg-gray-800 p-1 rounded-lg w-fit">
            <button
              onClick={() => setActiveTab('work')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'work'
                  ? 'bg-white text-black'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Work Projects
            </button>
            <button
              onClick={() => setActiveTab('personal')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'personal'
                  ? 'bg-white text-black'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Personal Projects
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {(activeTab === 'work' ? workProjects : personalProjects).map((project, index) => (
              <div key={index} className="bg-gray-900 p-4 sm:p-6 rounded-lg border border-gray-800">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.split(', ').map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gray-800 text-gray-300 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed text-sm sm:text-base">{project.description}</p>
                <ul className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-300 text-xs sm:text-sm flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills Section */}
        <div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6 sm:mb-8">Technical Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Programming Languages */}
            <div className="bg-gray-900 p-4 sm:p-6 rounded-lg border border-gray-800">
              <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                {skills.programmingLanguages.map((skill, index) => (
                  <span key={index} className="bg-blue-900 text-blue-300 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Frameworks & Libraries */}
            <div className="bg-gray-900 p-4 sm:p-6 rounded-lg border border-gray-800">
              <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Frameworks & Libraries</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill, index) => (
                  <span key={index} className="bg-green-900 text-green-300 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Database */}
            <div className="bg-gray-900 p-4 sm:p-6 rounded-lg border border-gray-800">
              <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Database</h3>
              <div className="flex flex-wrap gap-2">
                {skills.database.map((skill, index) => (
                  <span key={index} className="bg-purple-900 text-purple-300 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools & Platforms */}
            <div className="bg-gray-900 p-4 sm:p-6 rounded-lg border border-gray-800">
              <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill, index) => (
                  <span key={index} className="bg-orange-900 text-orange-300 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Design & UI */}
            <div className="bg-gray-900 p-4 sm:p-6 rounded-lg border border-gray-800">
              <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Design & UI</h3>
              <div className="flex flex-wrap gap-2">
                {skills.design.map((skill, index) => (
                  <span key={index} className="bg-pink-900 text-pink-300 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="bg-gray-900 p-4 sm:p-6 rounded-lg border border-gray-800">
              <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.softSkills.map((skill, index) => (
                  <span key={index} className="bg-yellow-900 text-yellow-300 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
