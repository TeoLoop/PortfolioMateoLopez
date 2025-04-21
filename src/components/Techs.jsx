import React from 'react';
import { FaReact, FaNodeJs, FaJava, FaHtml5, FaCss3Alt, FaGithub, FaTools, FaLinux, FaWindows, FaDatabase } from 'react-icons/fa'; // Usamos FaDatabase para Microsoft SQL
import { SiSpringboot, SiPostman, SiGit, SiBootstrap, SiJira, SiNotion, SiCplusplus } from 'react-icons/si'; // Algunos íconos de Si disponibles
import './Techs.css';
import { useTheme } from '../context/ThemeContext';

const techData = [
    {
        name: "React",
        icon: <FaReact size={50} />,
        url: "https://reactjs.org",
        color: "#61dafb",
    },
    {
        name: "Node.js",
        icon: <FaNodeJs size={50} />,
        url: "https://nodejs.org",
        color: "#68a063",
    },
    {
        name: "Java",
        icon: <FaJava size={50} />,
        url: "https://www.java.com",
        color: "#f89800",
    },
    {
        name: "HTML5",
        icon: <FaHtml5 size={50} />,
        url: "https://developer.mozilla.org/es/docs/Web/HTML",
        color: "#e34f26",
    },
    {
        name: "CSS3",
        icon: <FaCss3Alt size={50} />,
        url: "https://developer.mozilla.org/es/docs/Web/CSS",
        color: "#264de4",
    },
    {
        name: "C++",
        icon: <SiCplusplus size={50} />,
        url: "https://isocpp.org/",
        color: "#00599c",
    },
    {
        name: "Microsoft SQL Server",  // Cambio de nombre y usamos un ícono genérico
        icon: <FaDatabase size={50} />,  // Usamos FaDatabase como ícono
        url: "https://www.microsoft.com/sql-server",
        color: "#cc2927",
    },
    {
        name: "Spring Boot",
        icon: <SiSpringboot size={50} />,
        url: "https://spring.io/projects/spring-boot",
        color: "#6db33f",
    },
    {
        name: "Postman",
        icon: <SiPostman size={50} />,
        url: "https://www.postman.com/",
        color: "#ff6c37",
    },
    {
        name: "Git",
        icon: <SiGit size={50} />,
        url: "https://git-scm.com/",
        color: "#f1502f",
    },
    {
        name: "GitHub",
        icon: <FaGithub size={50} />,
        url: "https://github.com/",
        color: "#666666",
    },
    {
        name: "Bootstrap",
        icon: <SiBootstrap size={50} />,
        url: "https://getbootstrap.com/",
        color: "#563d7c",
    },
    {
        name: "Linux",
        icon: <FaLinux size={50} />,
        url: "https://www.linux.org/",
        color: "#ffcc00",
    },
    {
        name: "Windows",
        icon: <FaWindows size={50} />,
        url: "https://www.microsoft.com/windows",
        color: "#0078d4",
    },
    {
        name: "Jira",
        icon: <SiJira size={50} />,
        url: "https://www.atlassian.com/software/jira",
        color: "#0052cc",
    },
    {
        name: "Notion",
        icon: <SiNotion size={50} />,
        url: "https://www.notion.so/",
        color: "#666666",
    },
];

const Techs = () => {
    const { theme } = useTheme();

    return (
        <section className={`techs-container ${theme === 'light' ? 'light-theme' : 'dark-theme'}`}>
            <div className="techs-scroll-wrapper">
                <div className="techs-icons">
                    {[...techData, ...techData].map((tech, index) => (
                        <a
                            key={`${tech.name}-${index}`}
                            href={tech.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="tech-icon"
                            style={{ color: tech.color }}
                        >
                            {tech.icon}
                            <p>{tech.name}</p>
                        </a>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default Techs;
