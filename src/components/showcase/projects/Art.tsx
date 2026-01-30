import React from 'react';

import design from '../../../assets/pictures/projects/art/design.png';
import artwork from '../../../assets/pictures/projects/art/artwork.jpg';import gsts from '../../../assets/pictures/projects/art/gsts.png';

export interface ArtProjectsProps {}

const ArtProjects: React.FC<ArtProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
        <h1>Design & Traditional Art</h1>
<h3>Visual Thinking on Paper</h3>
<br />

<div className="text-block">
    <p>
        Alongside my interest in software, I explore visual ideas through design
        and traditional drawing. This page highlights how I think visually and
        translate ideas using physical mediums.
    </p>
</div>

<div className="text-block">
    <h2>Visual Design Studies</h2>
    <br />
    <p>
        My design work focuses on composition, balance, and visual clarity.
        These studies explore how layout, shape, and contrast can communicate
        ideas effectively, even without color or digital tools.
    </p>
</div>

<div className="captioned-image">
        <img src={design} style={{ width: '55%'  }} alt="design grafis" />
    </div>

<div className="text-block">
    <h2>Traditional Drawing & Illustration</h2>
    <br />
    <p>
        I primarily work with traditional materials such as pencil and ink.
        Drawing is my way of training observation, understanding form, and
        capturing movement through line and structure.
    </p>
    <br />

    <div className="captioned-image">
        <img src={artwork} style={{ width: '500px'  }} alt="Traditional drawing study" />
        <p>
            <sub>
                <b>Figure 1:</b> Hand-drawn study focusing on basic shading,shadow management,pencil pressure techniques and detailed texture.
            </sub>
        </p>
    </div>

    <p>
        These works are practice-oriented and process-driven. Imperfections are
        intentional, serving as part of the learning and exploration process.
    </p>
</div>
        </div>
    );
};

export default ArtProjects;
