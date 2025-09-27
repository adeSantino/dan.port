export default function Portfolio() {
  const projects = [
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

  const skills = {
    programmingLanguages: ["HTML", "CSS", "JavaScript", "PHP", "Python", "Dart"],
    frameworks: ["React (Basic)", "Next.js", "Electron", "Node.js", "Express.js", "Laravel", "Flask", "Firebase", "RESTful APIs", "Tailwind CSS", "Bootstrap", "Flutter"],
    database: ["MySQL", "NoSQL (Firebase)", "PostgreSQL (Supabase)", "XAMPP"],
    tools: ["Git", "GitHub", "VS Code", "Jira", "Postman", "Agile Methodology"],
    design: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Responsive Web Design"],
    softSkills: ["Problem Solving", "Teamwork", "Quick Learner", "Leadership", "Adaptability"]
  };

  return (
    <div className="bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Portfolio</h1>
          <p className="text-gray-400 text-lg">My recent projects and technical skills</p>
        </div>

        {/* Projects Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.split(', ').map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                <ul className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-300 text-sm flex items-start">
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
          <h2 className="text-3xl font-bold text-white mb-8">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Programming Languages */}
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-lg font-semibold text-white mb-4">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                {skills.programmingLanguages.map((skill, index) => (
                  <span key={index} className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Frameworks & Libraries */}
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-lg font-semibold text-white mb-4">Frameworks & Libraries</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill, index) => (
                  <span key={index} className="bg-green-900 text-green-300 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Database */}
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-lg font-semibold text-white mb-4">Database</h3>
              <div className="flex flex-wrap gap-2">
                {skills.database.map((skill, index) => (
                  <span key={index} className="bg-purple-900 text-purple-300 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools & Platforms */}
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-lg font-semibold text-white mb-4">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill, index) => (
                  <span key={index} className="bg-orange-900 text-orange-300 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Design & UI */}
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-lg font-semibold text-white mb-4">Design & UI</h3>
              <div className="flex flex-wrap gap-2">
                {skills.design.map((skill, index) => (
                  <span key={index} className="bg-pink-900 text-pink-300 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-lg font-semibold text-white mb-4">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.softSkills.map((skill, index) => (
                  <span key={index} className="bg-yellow-900 text-yellow-300 px-3 py-1 rounded-full text-sm">
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
