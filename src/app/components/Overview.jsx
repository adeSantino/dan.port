export default function Overview() {
  const experiences = [
    {
        title: "Software Developer",
        company: "Inspire Next Global Inc",
        period: "Feb 2025 - Oct 2025",
        description: "Developed full-stack web applications using Next.js, Node.js, and Firebase. Built an Office Seat Booking System with real-time availability and Firebase authentication. Created a Company Product Showcase Website with optimized SEO and responsive design. Specialized in integrating frontend performance with backend reliability."
      },
    {
      title: "Web Developer -Internship",
      company: "DevTeam Outsourcing Inc",
      period: "Feb  2024 - May  2024",
      description: "Developed responsive web applications using Laravel, HTML, CSS, and Tailwind CSS. Built inventory and employee management systems, improving user experience and efficiency. Utilized Git for version control and Jira for project management, enhancing development workflow and productivity."
    },
    {
        title: "Information Technology - Hello World",
        company: "Colegio San Agustin - Bacolod City",
        period: "2020 - 2024",
        description: "Gained my first hands-on experience in programming, learning the fundamentals of web development and exploring modern frameworks and tools."
    }
  ];

  return (
    <div className="bg-black text-white p-4 sm:p-6 lg:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Left Column - About me and Skills */}
        <div className="space-y-8 lg:space-y-12">
          {/* About me section */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">About me</h2>
            <div className="bg-gray-900 p-4 sm:p-6 rounded-lg border border-gray-800">
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                I'm a Backend Developer specializing in building efficient and scalable web applications, 
                with a strong focus on the Next.js framework. Passionate about problem-solving and clean 
                architecture, I strive to create solutions that are both functional and user-friendly.
              </p>
              <br />
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Currently, I'm based in Manila, where I continue to enhance my skills, collaborate on 
                impactful projects, and explore new technologies to grow as a developer.
              </p>
            </div>
          </div>

          {/* Skills section */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Skills</h2>
            <div className="bg-gray-900 p-4 sm:p-6 rounded-lg border border-gray-800">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h3 className="text-base sm:text-lg font-semibold text-white">Programming Languages</h3>
                  <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
                    <li>• JavaScript</li>
                    <li>• TypeScript</li>
                    <li>• Python</li>
                    <li>• PHP</li>
                    <li>• Java</li>
                    <li>• Dart</li>
                    <li>• HTML5 & CSS3</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="text-base sm:text-lg font-semibold text-white">Frameworks</h3>
                  <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
                    <li>• React & Next.js</li>
                    <li>• Flutter</li>
                    <li>• Node.js</li>
                    <li>• Tailwind CSS</li>
                    <li>• Express.js</li>
                    <li>• Laravel</li>
                    <li>• flask</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="text-base sm:text-lg font-semibold text-white">Tools</h3>
                  <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
                    <li>• Git & GitHub</li>
                    <li>• AWS</li>
                    <li>• VS Code</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="text-base sm:text-lg font-semibold text-white">Other</h3>
                  <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
                    <li>• UI/UX Design</li>
                    <li>• Agile Methodologies</li>
                    <li>• API Development</li>
                    <li>• Testing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Experience */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Experience</h2>
          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gray-900 p-4 sm:p-6 rounded-lg border border-gray-800">
                <h3 className="text-base sm:text-lg font-semibold text-white mb-1">{exp.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm mb-2">{exp.company}</p>
                <p className="text-gray-500 text-xs mb-3">{exp.period}</p>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
