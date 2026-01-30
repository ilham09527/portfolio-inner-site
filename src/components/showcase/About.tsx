import React from 'react';

import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">
            {/* <img src={me} style={styles.topImage} alt="" /> */}
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>I'm Ilham nur salam</h3>
            <br />
            <div className="text-block">
               <div className="text-block">
    <p>
        I am a student at SMK Pertiwi Kuningan with a strong interest in
        technology, especially in web and software development. I enjoy
        learning how applications work, from designing user interfaces to
        understanding the logic behind them.
    </p>
    <br />
    <p>
        Thank you for taking the time to check out my portfolio. This website
        was built as a personal learning project and a place to my
        progress in programming. If you have any questions or feedback, feel
        free to contact me using{' '}
        <Link to="/contact">this form</Link> or email me at{' '}
        <a href="mailto:ilhamnursalam99@gmail.com">
            ilhamnursalam99@gmail.com
        </a>
    </p>
</div>

<ResumeDownload />

<div className="text-block">
    <h3>About Me</h3>
    <br />
    <p>
        My interest in technology started from a simple curiosity about how
        websites and applications work. I enjoy breaking things down, learning
        how they are built, and trying to recreate them in my own way.
    </p>
    <br />

    <div className="captioned-image">
        
       
    </div>

    <p>
        I began learning programming more seriously during my time in vocational
        school, focusing mainly on web development. I often spend my free time
        building small projects, experimenting with new tools, and learning
        from documentation, online tutorials, and developer communities.
    </p>
    <br />
    <p>
        Through these projects, I have learned not only how to write code, but
        also how to think logically, solve problems, and continuously improve
        my skills. I see programming as a long-term journey, and I am motivated
        to keep learning and growing.
    </p>

    <br />
    <br />

    <div style={{}}>
        <div
            style={{
                flex: 1,
                textAlign: 'justify',
                alignSelf: 'center',
                flexDirection: 'column',
            }}
        >
            <h3>My Hobbies</h3>
            <br />
            <p>
                Outside of programming, I enjoy exploring creative and physical
                activities. Some of my hobbies include music, digital design,
                working out, cooking, and playing video games. These interests
                help me stay creative and balanced while learning technical
                skills.
            </p>
            <br />
            <p>
                I believe having hobbies outside of technology is important, as
                it helps me stay motivated, disciplined, and open to new ideas.
            </p>
        </div>

        <div style={styles.verticalImage}>
           
            <p>
               
            </p>
        </div>
    </div>

    <br />
    <br />

    <p>
        Thanks for taking the time to read about me. I hope you enjoy exploring
        the rest of my portfolio and seeing the projects I have worked on. I am
        always open to feedback and learning opportunities.
    </p>
    <br />
    <p>
        If you have any questions or would like to get in touch, you can reach
        me through the{' '}
        <Link to="/contact">contact page</Link> or by email at{' '}
        <a href="mailto:ilhamnursalam99@gmail.com">
            ilhamnursalam99@gmail.com
        </a>
    </p>
</div>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        width: '100%',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    verticalImage: {
        alignSelf: 'center',
        // width: '80%',
        marginLeft: 32,
        flex: 0.8,

        alignItems: 'center',
        // marginBottom: 32,
        textAlign: 'center',
        flexDirection: 'column',
    },
};

export default About;
