import React from 'react';
// @ts-ignore
import saga from '../../../assets/pictures/projects/software/portfolio.png';
// @ts-ignore
import computer from '../../../assets/pictures/projects/software/alamnusa.png';
// @ts-ignore
import ResumeDownload from '../ResumeDownload';
import VideoAsset from '../../general/VideoAsset';

export interface SoftwareProjectsProps {}

const SoftwareProjects: React.FC<SoftwareProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Software</h1>
            <h3>Projects</h3>
            <br />
            <p>
                Below are some of my favorite software projects I have worked on
                over the last few years.
            </p>
            <br />
            <ResumeDownload />
            <br />
            <div className="text-block">
                <h2>Alam Nusa</h2>
                <br />
                <p>
                  The website is called AlamNusa and appears to be a travel-oriented site focused on showcasing natural destinations in Indonesia. It has a navigation menu with sections like Home, Destinations, Gallery, and Contact. The main hero section invites visitors to “Explore the beauty of Indonesia’s nature,
                  ” highlighting beaches, majestic mountains, and tropical forests as experiences to enjoy.
Below the hero, the site presents featured destinations such as Telaga Biru Cicerem (a clear blue lake), Curug Putri (a waterfall), Gunung Ciremai (a mountain), Kebun Raya Kuningan (a botanical garden), and Cibulan (a natural bathing site). Each destination has a brief description intended to convey its vibe and appeal.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={computer} />
                    <p style={styles.caption}>
                    
                    </p>
                </div>
                <p>
                   There’s also a section where users can filter destinations by category (e.g., lakes, waterfalls, mountains) and activity level, plus a “recommended” list of places to visit based on those filters.
                  
                
                  At the bottom, the website provides a contact form for trip planning or general questions, plus team developer credits showing a group called Casper B team behind the project. The overall design suggests a modern travel guide with an emphasis on Indonesian nature and user engagement through interactive content and visuals.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>

                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://webdesign-casper-b-technoversary25.vercel.app/"
                        >
                            <p>
                                <b>[OS Site]</b> - Alam nusa.vercel.app
                            </p>
                        </a>
                    </li>
                    
                </ul>
                
            </div>
            <div className="text-block">
                <h2>Portfolio V1</h2>
                <br />
                <p>
                    Portfolio v1 is a modern personal website that introduces Ilham Nur Salam as a Full Stack Web Developer. 
                    The landing page opens with a bold hero section featuring large, high-contrast typography that clearly states 
                    the developer’s name and role, creating a strong first impression.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={saga} />
                    <div style={styles.caption}>
                    </div>
                </div>
                <p>
                   The design uses a dark, minimalist theme with subtle star-like background details, 
                   giving the site a tech-focused and futuristic feel. On the right side, 
                   a 3D-styled visual grid of technology icons represents the tools and frameworks Ilham works with, such as JavaScript, 
                   TypeScript, React, Vue, Node.js, and other modern web technologies. This visual element acts as both decoration and a skills showcase.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://ilhamnursalam.vercel.app/"
                        >
                            <p>
                                <b>[vercel]</b> - my portfolio v1
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            
        </div>
    );
};

const styles: StyleSheetCSS = {
    video: {
        width: '100%',
        padding: 12,
    },
    caption: {
        width: '80%',
    },
};

export default SoftwareProjects;
