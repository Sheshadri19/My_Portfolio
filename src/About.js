import { Link } from "react-router-dom";
import { FaReact, FaNodeJs, FaDatabase, FaGithub, FaJs, FaServer, FaLinkedin } from "react-icons/fa";
import starryBackground from "./assets/starry-background.jpg";


function About() {
  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center relative px-4"
      style={{ backgroundImage: `url(${starryBackground})` }}

    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content Card */}
      <div className="relative z-10 bg-white bg-opacity-5 backdrop-blur-lg shadow-2xl rounded-2xl p-8 max-w-4xl text-center">
        <h1 className="text-5xl font-extrabold text-white mb-4">About Me</h1>
        <p className="text-lg text-gray-300">
          Certified MERN Stack Developer | Passionate About Full-Stack Development | Adaptive & Quick Learner
        </p>

        {/* Skills Section */}
        <div className="mt-6 grid grid-cols-3 sm:grid-cols-6 gap-6 text-white">
          <div className="flex flex-col items-center">
            <FaJs size={50} className="text-yellow-400 animate-bounce" />
            <span className="mt-2">JavaScript</span>
          </div>
          <div className="flex flex-col items-center">
            <FaReact size={50} className="text-blue-400 animate-bounce" />
            <span className="mt-2">React.js</span>
          </div>
          <div className="flex flex-col items-center">
            <FaNodeJs size={50} className="text-green-500 animate-bounce" />
            <span className="mt-2">Node.js</span>
          </div>
          <div className="flex flex-col items-center">
            <FaServer size={50} className="text-gray-400 animate-bounce" />
            <span className="mt-2">Express.js</span>
          </div>
          <div className="flex flex-col items-center">
            <FaDatabase size={50} className="text-yellow-400 animate-bounce" />
            <span className="mt-2">MongoDB</span>
          </div>
          <div className="flex flex-col items-center">
            <a href="https://github.com/Sheshadri19" target="_blank" rel="noopener noreferrer">
              <FaGithub size={50} className="text-gray-300 animate-bounce hover:text-white transition" />
            </a>
            <span className="mt-2">GitHub</span>
          </div>
          <div className="flex flex-col items-center">
            <a href="https://www.linkedin.com/in/sheshadri-prasad-mondal-18434717a/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={50} className="text-blue-500 animate-bounce hover:text-blue-700 transition" />
            </a>
            <span className="mt-2">LinkedIn</span>
          </div>
        </div>

        {/* Details */}
        <p className="mt-6 text-gray-200 text-lg">
          A highly motivated MERN Stack Developer with a strong foundation in JavaScript, React.js, Redux, Node.js, Express.js, and MongoDB. 
          Coming from a non-IT background, I have successfully upskilled myself, demonstrating adaptability and a keen interest in emerging technologies.
        </p>

        {/* Tech Stack */}
        <ul className="mt-6 text-lg text-left list-disc list-inside text-gray-300">
          <li>🚀 Front-end Development: React.js, Redux, Material-UI, Responsive UI Design</li>
          <li>🛠️ Back-end Development: RESTful API Development using Node.js & Express.js</li>
          <li>🔄 Database Management: MongoDB, Mongoose, Data Modeling</li>
          <li>🔗 Version Control: Git & GitHub</li>
        </ul>

        {/* Navigation */}
        <nav className="mt-8">
          <Link 
            to="/" 
            className="inline-block px-6 py-3 text-lg font-bold text-white rounded-full shadow-lg transition duration-300 transform bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-110 hover:shadow-2xl hover:from-purple-600 hover:to-blue-500"
          >
            ⬅️ Back to Home
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default About;
