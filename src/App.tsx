import './index.css'

function App() {
  return (
    <main className="bg-gray-100 text-gray-900 min-h-screen font-sans">
      <header className="bg-indigo-700 text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold">Pranav Kumar Pathak</h1>
          <p className="mt-4 flex flex-col md:flex-row justify-center gap-4 text-sm md:text-base">
            <span>📞 +91 6390111311</span>
            <span>
              📧{' '}
              <a href="mailto:Pranavpathak332@gmail.com" className="underline">
                Pranavpathak332@gmail.com
              </a>
            </span>
            <span>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                LinkedIn
              </a>
            </span>
            <span>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                GitHub
              </a>
            </span>
          </p>
        </div>
      </header>

      <section className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold mb-4">Education</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-medium">
              B.Tech in Computer Science, Vellore Institute of Technology
            </h3>
            <p className="text-sm text-gray-600">
              Specialization in AI/ML • CGPA 8.03 • 2021 – 2025
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium">
              Class 12th, Seth Anandram Jaipuria School
            </h3>
            <p className="text-sm text-gray-600">
              Percentage 88.75 • 2021 • Chennai, TN, India
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8 bg-gray-50">
        <h2 className="text-3xl font-semibold mb-4">Skills</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-medium">Soft Skills</h3>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Problem-solving</li>
              <li>Communication</li>
              <li>Adaptability</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium">Languages &amp; Tools</h3>
            <p className="text-sm">
              Java, Python, C, C++, SQL, Jenkins, Jira, Gherkin
            </p>
          </div>
          <div>
            <h3 className="font-medium">Frameworks &amp; Technologies</h3>
            <p className="text-sm">
              TensorFlow, Keras, scikit-learn, OpenCV, Git, GitLab, Selenium,
              Raddish BDD, PySpark
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold mb-4">Experience</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-medium">
              Associate Software Engineer – BT Group
            </h3>
            <p className="text-sm text-gray-600">
              Bangalore, Karnataka • Jan 2025 – Present
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-sm">
              <li>
                Developed and maintained 300+ end-to-end automated test scripts
                using Python and Selenium.
              </li>
              <li>
                Designed reusable Gherkin step definitions for BDD, enabling
                seamless UI validation in ServiceNow.
              </li>
              <li>
                Eliminated JSON dependency in VA system, reducing parsing errors
                and improving maintainability by 35%.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium">
              Software Developer Intern – CNH Industrials (FIAT)
            </h3>
            <p className="text-sm text-gray-600">
              Gurugram, Haryana • Aug 2023 – Oct 2023
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-sm">
              <li>
                Automated data transfer between combine harvester components,
                parsing 18k+ lines of XML.
              </li>
              <li>
                Utilized OpenCV for machine vision to separate waste from usable
                sugarcane.
              </li>
              <li>
                Streamlined operations by integrating automation technologies,
                boosting efficiency.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium">
              Advanced Textual Analyst – NeuroNexus Innovations
            </h3>
            <p className="text-sm text-gray-600">Nov 2023 – Dec 2023</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-sm">
              <li>
                Engineered predictive model classifying movie genres using ML
                techniques.
              </li>
              <li>
                Designed fraud detection models (Random Forest, XGBoost etc.)
                improving precision.
              </li>
              <li>
                Conducted EDA to enhance feature engineering and model
                performance.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8 bg-gray-50">
        <h2 className="text-3xl font-semibold mb-4">Projects &amp; Achievements</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-medium">Pathology Classification</h3>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-sm">
              <li>
                Achieved 95.14% accuracy in classifying medical images using
                transfer learning.
              </li>
              <li>
                Optimized CNN models with hyperparameter tuning, improving
                accuracy by 8%.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium">
              Gesture &amp; Voice Controlled Virtual Mouse
            </h3>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-sm">
              <li>
                Implemented real-time gesture recognition supporting 5 gestures
                across 1k+ images.
              </li>
              <li>
                Integrated voice commands for system controls and application
                launch.
              </li>
              <li>
                Ensured usability in healthcare, public spaces, and for users
                with physical limitations.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="text-center py-6 text-sm bg-indigo-700 text-white">
        © {new Date().getFullYear()} Pranav Kumar Pathak
      </footer>
    </main>
  )
}

export default App
