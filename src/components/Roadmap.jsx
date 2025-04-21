import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Certificaciones } from '../components/Certificaciones';
import ScrollToTop from '../components/ScrollToTop';
import './Roadmap.css';

const roadmapData = [
    {
        type: 'study',
        title: 'Professional Developer',
        place: 'Digital House',
        date: '2024-Actualidad',
        description: 'Formación integral en tecnologías clave como HTML, CSS, JavaScript, Java, Spring Boot, React.js, bases de datos MySQL y herramientas de infraestructura como AWS. Además, aborda metodologías ágiles como Scrum, diseño UX/UI, testing de software y habilidades blandas como comunicación efectiva y trabajo colaborativo.',
    },
    {
        type: 'study',
        title: 'Database Developer',
        place: 'Linkedin Learning',
        date: '2025',
        description: 'Formación integral en el diseño, implementación y gestión de bases de datos. A lo largo de 12 cursos (32 horas de contenido), aprenderás a trabajar con bases de datos relacionales y no relacionales, optimizar consultas SQL, y utilizar herramientas empresariales líderes. El programa cubre desde el diseño hasta la optimización del rendimiento de bases de datos, preparando a los participantes para enfrentar desafíos en la administración de datos y aplicaciones.',
    },
    {
        type: 'study',
        title: 'Ingeniería en Sistemas',
        place: 'Universidad de la Republiva',
        date: '2021 - 2022',
        description: 'Primer año cursado y aprobado...',
    },
    {
        type: 'job',
        title: 'Implementador de Software',
        place: 'Codere',
        date: '2022 - Actualidad',
        description: 'Administración y mantenimiento de bases de datos relacionales con SQL, desarrollo de soluciones tecnológicas para optimizar procesos, ejecución de pruebas de calidad con herramientas como Postman y JMeter, configuración y administración de servidores Windows, trabajo en proyectos ágiles con Scrum y Jira, y gestión de sitios web institucionales e internos.',
    },
    {
        type: 'study',
        title: 'Desarrollador Web',
        place: 'Digital House',
        date: '2023',
        description: 'Habilidades en HTML, CSS, JavaScript y frameworks modernos, enfocándose en el desarrollo frontend. Incluye fundamentos de diseño web, creación de sitios responsivos, y optimización de la experiencia del usuario.',
    },
    {
        type: 'job',
        title: 'Freelancer',
        place: 'Proyectos independientes',
        date: '2023 - 2024',
        description: 'Aplicaciones web fullstack usando React y Java.',
    },
    {
        type: 'study',
        title: 'Técnico en Soporte IT',
        place: 'BIOS',
        date: '2021',
        description: 'Formación en soporte técnico, mantenimiento y reparación de sistemas informáticos. Incluye conocimientos sobre hardware, software, redes y resolución de problemas en entornos corporativos. El programa proporciona habilidades prácticas para ofrecer asistencia técnica a usuarios, gestionar incidencias y garantizar el buen funcionamiento de la infraestructura IT en empresas.',
    }

];

const Roadmap = () => {
    const { theme } = useTheme();

    const studies = roadmapData.filter(item => item.type === 'study');
    const jobs = roadmapData.filter(item => item.type === 'job');

    return (
        <div className={`roadmap-page ${theme === 'light' ? 'light-theme' : 'dark-theme'}`}>
            <Navbar />

            <section className="roadmap-container">
                <h2 className="roadmap-title">EXPERIENCIA</h2>
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
                <Certificaciones/>
            </section>
            <Footer />
            <ScrollToTop theme={theme} />
        </div>
    );
};

export default Roadmap;
