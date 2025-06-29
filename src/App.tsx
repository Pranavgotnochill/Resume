import { useEffect, useState } from 'react';
import './index.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { 
      icon: '📧', 
      text: 'Pranavpathak332@gmail.com', 
      href: 'mailto:Pranavpathak332@gmail.com?subject=Hello%20Pranav&body=Hi%20Pranav,%0D%0A%0D%0AI%20came%20across%20your%20resume%20and%20wanted%20to%20connect...',
      newTab: true 
    },
    { 
      icon: '💼', 
      text: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/pranav-kumar-pathak-7594b9222/', 
      newTab: true 
    },
    { 
      icon: '💻', 
      text: 'GitHub', 
      href: 'https://github.com/Pranavgotnochill', 
      newTab: true 
    },
    { 
      icon: '📱', 
      text: '+91 6390111311', 
      href: 'tel:+916390111311',
      newTab: false
    },
  ];

  return (
    <main className="bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 min-h-screen font-sans">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Pranav Pathak
            </h1>
            <div className="hidden md:flex space-x-6">
              {['about', 'education', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-700 hover:text-indigo-600 transition-colors capitalize"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-r from-indigo-600 to-purple-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bS0yMiA0NGMwIDEuMTA0LS44OTYgMi0yIDJoLTJjLTEuMTA1IDAtMi0uODk2LTItMnYtMmMwLTEuMTA1Ljg5NS0yIDItMmgyYzEuMTA0IDAgMiAuODk1IDIgMnYyem0yLTQ0YzAtMS4xMDUtLjg5Ni0yLTItMmgtMmMtMS4xMDUgMC0yIC44OTUtMiAydjJjMCAxLjEwNC44OTUgMiAyIDJoMmMxLjEwNCAwIDItLjg5NiAyLTJ2LTJ6bTM2LTZhMiAyIDAgMSAwLTIgMiAyIDIgMCAwIDAgMi0yem0tNDAgMmMwIDEuMTA0LS44OTYgMi0yIDJoLTJjLTEuMTA1IDAtMi0uODk2LTItMnYtMmMwLTEuMTA1Ljg5NS0yIDItMmgyYzEuMTA0IDAgMiAuODk1IDIgMnYyek0yIDM0YzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00em0yMi0yMmMwLTEuMTA1LS44OTYtMi0yLTJoLTJjLTEuMTA1IDAtMiAuODk1LTIgMnYyYzAgMS4xMDQuODk1IDIgMiAyaDJjMS4xMDQgMCAyLS44OTYgMi0ydi0yem0xOC0yYzAtMS4xMDUtLjg5Ni0yLTItMmgtMmMtMS4xMDUgMC0yIC44OTUtMiAydjJjMCAxLjEwNC44OTUgMiAyIDJoMmMxLjEwNCAwIDItLjg5NiAyLTJ2LTJ6bTI0IDBjLTEuMTA1IDAtMiAuODk1LTIgMnYyYzAgMS4xMDQuODk1IDIgMiAyaDJjMS4xMDQgMCAyLS44OTYgMi0ydi0yYzAtMS4xMDUtLjg5Ni0yLTItMmgtMnoiLz48L2c+PC9nPjwvc3ZnPg==')]" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
              Hi, I'm <span className="text-yellow-300">Pranav Kumar Pathak</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-indigo-100">
              Computer Science Student | AI/ML Enthusiast | SDET 
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target={link.newTab ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105"
                >
                  <span>{link.icon}</span>
                  <span>{link.text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 md:py-16 max-w-5xl">
        {/* About Section */}
        <section id="about" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold mb-8 relative inline-block">
            <span className="relative">
              About Me
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></span>
            </span>
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-2/3 space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900">Hello, I'm Pranav Kumar Pathak</h3>
                <p className="text-gray-700 leading-relaxed">
                  A passionate <span className="text-indigo-600 font-medium">AI/ML Engineer</span> and <span className="text-indigo-600 font-medium"></span> currently pursuing my degree in Computer Science at Vellore Institute of Technology. I specialize in building intelligent systems and scalable applications that bridge the gap between cutting-edge technology and real-world impact.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                    <span className="text-gray-700">AI/ML Engineering</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                    <span className="text-gray-700">Full-Stack Development</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                    <span className="text-gray-700">Computer Vision</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                    <span className="text-gray-700">Cloud Technologies</span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
                  <span className="text-6xl">👨‍💻</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold mb-8 relative inline-block">
            <span className="relative">
              Education & Achievements
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></span>
            </span>
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  B.Tech in Computer Science
                </h3>
                <span className="inline-block px-3 py-1 text-sm font-semibold text-indigo-700 bg-indigo-100 rounded-full mt-2 md:mt-0">
                  2021 – 2025
                </span>
              </div>
              <p className="text-indigo-600 font-medium mb-2">Vellore Institute of Technology</p>
              <p className="text-gray-600">
                Specialization in AI/ML • CGPA 8.03
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Class 12th (ICSE)
              </h3>
              <span className="inline-block px-3 py-1 text-sm font-semibold text-indigo-700 bg-indigo-100 rounded-full mt-2 md:mt-0">
                2021
              </span>
            </div>
            <p className="text-indigo-600 font-medium mb-2">Seth Anandram Jaipuria School</p>
            <div className="flex flex-wrap items-center gap-4 text-gray-600">
              <span className="flex items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                Percentage: 88.75%
              </span>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold mb-6 relative inline-block">
            <span className="relative">
              Skills & Technologies
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></span>
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-semibold text-indigo-700 mb-3">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Java', 'C++', 'C', 'SQL', 'JavaScript', 'TypeScript'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-semibold text-indigo-700 mb-3">Frameworks & Libraries</h3>
              <div className="flex flex-wrap gap-2">
                {['TensorFlow', 'Keras', 'PyTorch', 'scikit-learn', 'OpenCV', 'React', 'Node.js'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-semibold text-indigo-700 mb-3">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {['Git', 'Docker', 'Jenkins', 'Jira', 'Selenium', 'PySpark'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold mb-6 relative inline-block">
            <span className="relative">
              Work Experience
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></span>
            </span>
          </h2>
          <div className="space-y-8">
            {/* Experience 1 */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Associate Software Engineer
                </h3>
                <span className="inline-block px-3 py-1 text-sm font-semibold text-indigo-700 bg-indigo-100 rounded-full mt-2 md:mt-0">
                  Jan 2025 – Present
                </span>
              </div>
              <p className="text-indigo-600 font-medium mb-4">BT Group • Bangalore, Karnataka</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  <span>Developed and maintained 300+ end-to-end automated test scripts using Python and Selenium</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  <span>Designed reusable Gherkin step definitions for BDD, enabling seamless UI validation in ServiceNow</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  <span>Eliminated JSON dependency in VA system, reducing parsing errors and improving maintainability by 35%</span>
                </li>
              </ul>
            </div>

            {/* Experience 2 */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Software Developer Intern
                </h3>
                <span className="inline-block px-3 py-1 text-sm font-semibold text-indigo-700 bg-indigo-100 rounded-full mt-2 md:mt-0">
                  Aug 2023 – Oct 2023
                </span>
              </div>
              <p className="text-indigo-600 font-medium mb-4">CNH Industrials (FIAT) • Gurugram, Haryana</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  <span>Automated data transfer between combine harvester components, parsing 18k+ lines of XML</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  <span>Utilized OpenCV for machine vision to separate waste from usable sugarcane</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold mb-6 relative inline-block">
            <span className="relative">
              Projects & Achievements
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></span>
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Project 1 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Pathology Classification</h3>
              <p className="text-gray-600 mb-4">Achieved 95.14% accuracy in classifying medical images using transfer learning and optimized CNN models.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs">Python</span>
                <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs">TensorFlow</span>
                <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs">Computer Vision</span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Gesture & Voice Controlled Mouse</h3>
              <p className="text-gray-600 mb-4">Implemented real-time gesture recognition supporting 5 gestures across 1k+ images with voice command integration.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs">Python</span>
                <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs">OpenCV</span>
                <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs">MediaPipe</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold mb-6 relative inline-block">
            <span className="relative">
              Get In Touch
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></span>
            </span>
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <p className="text-lg text-gray-700 mb-6">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll get back to you as soon as possible!
            </p>
            <a 
              href="mailto:Pranavpathak332@gmail.com" 
              className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium py-3 px-8 rounded-full hover:opacity-90 transition-opacity"
            >
              Say Hello 👋
            </a>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-300 transition-colors text-2xl"
                aria-label={link.text}
              >
                {link.icon}
              </a>
            ))}
          </div>
          <p className="text-sm text-indigo-100">
            © {new Date().getFullYear()} Pranav Kumar Pathak. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}

export default App
