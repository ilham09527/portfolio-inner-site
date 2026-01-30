import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Frontend Development</h1>
                       
                    </div>
                    <div style={styles.headerRow}>
                        <h3>basic html,css,javascript</h3>
                        <b>
                            <p>2024 - present</p>
                        </b>
                    </div>
                </div>
            </div>
           <div className="text-block">
    
</div>

<div className="text-block">
    <p>
        Personal and school-based web development projects focused on learning
        modern frontend technologies and best practices. Most projects were
        built using JavaScript, React, HTML, CSS, and basic backend integration.
    </p>
    <br />
    <ul>
        <li>
            <p>
                Built responsive web interfaces using React and modern CSS
                layouts such as Flexbox and Grid.
            </p>
        </li>
        <li>
            <p>
                Implemented reusable components and basic state management to
                improve code organization and maintainability.
            </p>
        </li>
        <li>
            <p>
                Practiced consuming REST APIs and handling asynchronous data
                fetching for dynamic content.
            </p>
        </li>
        <li>
            <p>
                Focused on clean code, readability, and continuous improvement
                through refactoring and feedback.
            </p>
        </li>
    </ul>
</div>

<div style={styles.headerContainer}>
    <div style={styles.header}>
        <div style={styles.headerRow}>
            <h1>Backend Development</h1>
        </div>
        <div style={styles.headerRow}>
            <h3>PHP-Based Systems & Server Logic</h3>
            <b>
                <p>2025</p>
                <p>Ongoing</p>
            </b>
        </div>
    </div>
</div>

<div className="text-block">
<p>
Through hands-on projects and independent practice, I have developed
a strong foundation in backend development using PHP, focusing on
server-side logic, data handling, and application structure.
</p>
<br />
<ul>
<li>
<p>
Built backend features using PHP for handling forms, sessions,
and basic authentication flows.
</p>
</li>
<li>
<p>
Worked with databases (MySQL) to design tables, manage data,
and perform CRUD operations securely.
</p>
</li>
<li>
<p>
Practiced writing clean, structured PHP code while learning to
debug server-side errors and logic issues.
</p>
        </li>
    </ul>
</div>

<div style={styles.headerContainer}>
    <div style={styles.header}>
        <div style={styles.headerRow}>
            <h1>School Web Project</h1>
            <h4>SMK Pertiwi Kuningan</h4>
        </div>
        <div style={styles.headerRow}>
            <h3> Student Project</h3>
            <b>
                
            </b>
        </div>
    </div>
</div>

<div className="text-block">
    <p>
        A web-based project developed as part of a school assignment, focusing
        on applying fundamental web development concepts and teamwork.
    </p>
    <br />
    <ul>
        <li>
            <p>
                Designed and implemented user interfaces using HTML, CSS, and
                JavaScript.
            </p>
        </li>
        <li>
            <p>
                Collaborated with classmates to plan features and divide tasks
                effectively.
            </p>
        </li>
        <li>
            <p>
                Improved problem-solving skills by debugging layout and logic
                issues during development.
            </p>
        </li>
        <li>
            <p>
                Learned the basics of version control using Git and GitHub.
            </p>
        </li>
    </ul>
</div>


        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    hoverLogo: {
        height: 32,
        marginBottom: 16,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Experience;
