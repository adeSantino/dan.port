export default function Experience() {
  const experiences = [
    {
      title: "Software Developer",
      company: "Inspire NExt Global Inc",
      period: "Feb 2025 - Oct 2025",
      description: "Developed full-stack web applications using Next.js, Node.js, and Firebase. Built an Office Seat Booking System with real-time availability and Firebase authentication. Created a Company Product Showcase Website with optimized SEO and responsive design. Specialized in integrating frontend performance with backend reliability."
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency",
      period: "2022 - 2023",
      description: "Created responsive user interfaces and improved user experience across multiple client projects."
    },
    {
      title: "Junior Developer",
      company: "Startup Inc",
      period: "2021 - 2022",
      description: "Assisted in developing web applications and learned modern development frameworks and tools."
    },
    {
      title: "Web Development Intern",
      company: "Local Business",
      period: "2020 - 2021",
      description: "Gained hands-on experience in web development and contributed to various client projects."
    },
    {
      title: "Freelance Developer",
      company: "Self-employed",
      period: "2019 - 2020",
      description: "Worked on small projects and built a foundation in web development technologies."
    }
  ];

  return (
    <div className="bg-black text-white p-6">
      <h2 className="text-2xl font-bold text-white mb-6">Experience</h2>
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-gray-900 p-4 rounded-lg border border-gray-800">
            <h3 className="text-lg font-semibold text-white mb-1">{exp.title}</h3>
            <p className="text-gray-400 text-sm mb-2">{exp.company}</p>
            <p className="text-gray-500 text-xs mb-3">{exp.period}</p>
            <p className="text-gray-300 text-sm leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
