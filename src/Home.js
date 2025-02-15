import React, { useEffect, useState } from "react";
import { fetchGitHubRepos } from "./project";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaJs } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import background from "./assets/starry-background.jpg";
import "./index.css";

function LiveClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return <div className="live-clock">{time.toLocaleTimeString()}</div>;
}

function TechIcons() {
  const icons = [
    { id: 1, component: <FaJs className="icon js" />, name: "JavaScript" },
    { id: 2, component: <FaReact className="icon react" />, name: "React.js" },
    { id: 3, component: <FaNodeJs className="icon node" />, name: "Node.js" },
    { id: 4, component: <SiExpress className="icon express" />, name: "Express.js" },
    { id: 5, component: <SiMongodb className="icon mongo" />, name: "MongoDB" },
  ];

  return (
    <section className="tech-stack" style={{ backgroundColor: "#282c34", padding: "20px", borderRadius: "10px" }}>
      <h2>Tech Stack</h2>
      <div className="icons-container">
        {icons.map((icon) => (
          <motion.div
            key={icon.id}
            className="icon-wrapper"
            drag
            dragConstraints={{ top: -50, bottom: 50, left: -50, right: 50 }}
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
          >
            {icon.component}
          </motion.div>
        ))}
      </div>
    </section>
  );
}


function Home() {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const reposPerPage = 6;

  useEffect(() => {
    fetchGitHubRepos()
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const filteredRepos = repos.filter(repo => repo.name.toLowerCase().includes(searchTerm.toLowerCase()));
  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = filteredRepos.slice(indexOfFirstRepo, indexOfLastRepo);
  const totalPages = Math.ceil(filteredRepos.length / reposPerPage);

  return (
    <div className="home-container" style={{ backgroundImage: `url(${background})` }}>
      <LiveClock />
      <motion.div className="header" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <h1>Sheshadri Prasad Mondal</h1>
        <p>Welcome to my portfolio 🚀</p>
        <Link to="/about" className="about-link">
          About Us 😄
        </Link>
      </motion.div>

      <input 
        type="text" 
        placeholder="Search projects..." 
        className="search-bar"
        style={{ backgroundColor: "#333", color: "white", padding: "10px", borderRadius: "5px", width: "100%" }}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      <TechIcons />

      <section className="projects-section">
        <h2>Projects</h2>
        <motion.ul className="projects-list">
          {currentRepos.map((repo) => (
            <motion.li key={repo.id} className="project-item box shadow">
              <img src={`https://opengraph.githubassets.com/1/${repo.owner.login}/${repo.name}`} alt={repo.name} className="project-image" />
              <div className="project-info">
                <h2>{repo.name}</h2>
                <p>{repo.description || "No description provided."}</p>
                <motion.a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="project-link">
                  View Repository 🔗
                </motion.a>
              </div>
            </motion.li>
          ))}
        </motion.ul>

        {filteredRepos.length > reposPerPage && (
          <div className="pagination">
            <button 
              onClick={() => setCurrentPage(currentPage - 1)} 
              disabled={currentPage === 1} 
              className="pagination-button"
            >
              Previous
            </button>
            {[...Array(totalPages).keys()].map((num) => (
              <button 
                key={num + 1} 
                onClick={() => setCurrentPage(num + 1)} 
                className={`pagination-button ${currentPage === num + 1 ? 'active' : ''}`}
              >
                {num + 1}
              </button>
            ))}
            <button 
              onClick={() => setCurrentPage(currentPage + 1)} 
              disabled={currentPage === totalPages} 
              className="pagination-button"
            >
              Next
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

export default Home;
