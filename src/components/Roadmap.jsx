import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import './Roadmap.css';

const roadmapData = [
    {
        type: 'study',
        title: 'Ingeniería en Sistemas',
        place: 'Universidad Nacional',
        date: '2018 - 2022',
        description: 'Formación integral en desarrollo de software, bases de datos y sistemas distribuidos.',
    },
    {
        type: 'job',
        title: 'Backend Developer',
        place: 'TechCorp',
        date: '2022 - Actualidad',
        description: 'Desarrollo de APIs REST con Spring Boot y mantenimiento de bases de datos SQL Server.',
    },
    {
        type: 'study',
        title: 'Curso React Avanzado',
        place: 'Udemy',
        date: '2023',
        description: 'Animaciones, hooks personalizados, performance y testing con Jest.',
    },
    {
        type: 'job',
        title: 'Freelancer',
        place: 'Proyectos independientes',
        date: '2020 - 2022',
        description: 'Aplicaciones web fullstack usando React y Node.',
    },
];

const Roadmap = () => {
    const { theme } = useTheme();

    const studies = roadmapData.filter(item => item.type === 'study');
    const jobs = roadmapData.filter(item => item.type === 'job');

    return (
        <div className={`roadmap-page ${theme === 'light' ? 'light-theme' : 'dark-theme'}`}>
            <Navbar />
            <ScrollToTop theme={theme} />

            <section className="roadmap-container">
                <h2 className="roadmap-title">Mi Trayectoria</h2>
                <div className="roadmap-section">
                    <h3 className="section-title">💼 Experiencia Laboral</h3>
                    <div className="timeline">
                        {jobs.map((item, index) => (
                            <div key={index} className="timeline-item job">
                                <div className="content">
                                    <h4>{item.title}</h4>
                                    <span className="place">{item.place}</span>
                                    <span className="date">{item.date}</span>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="roadmap-section">
                    <h3 className="section-title">📚 Estudios</h3>
                    <div className="timeline">
                        {studies.map((item, index) => (
                            <div key={index} className="timeline-item study">
                                <div className="content">
                                    <h4>{item.title}</h4>
                                    <span className="place">{item.place}</span>
                                    <span className="date">{item.date}</span>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Roadmap;
