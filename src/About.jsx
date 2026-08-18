
function About() {

    return(
        <div className="about" id="about_me">
            <h1>About Me</h1>
            <p>Hello my name is Andy! I'm 22 years old and a recent graduate from York University. This is my portfolio displaying some of
                the projects I have worked on. I am currently looking for a full-time position in the field of software development.
                I particularly enjoy working with machine learning models and developing web applications. I am always eager to learn 
                new technologies and improve my skills.

                Some personal interests of mine include playing video games, watching movies (especially horror movies), working out, 
                playing guitar, and watching basketball. I have a pet dog named Dooboo. She's a white jindo and is very cute.
            </p>

            <img src="./src/assets/dooboo.jpg" alt="Dooboo" style={{ width: '194px', height: '384px' } } />
            <img src="./src/assets/dooby.jpg" alt="Dooboo" style={{ width: '216px', height: '384px' }} />

            <p>
                I also really like k-pop music. My favourtie groups are IVE and LE SSERAFIM.
            </p>

            <img src="./src/assets/ive.jpg" alt="IVE" style={{ width: '370px', height: '207px' }} />
            <img src="./src/assets/lesserafim.jpg" alt="LE SSERAFIM" style={{ width: '370px', height: '207px' }} />

            <p>
                I am also a Christian and I enjoy reading the Bible and learning more about God. I served on a campus ministry called Kingdom Come 
                where we would do outreach events and share the gospel with students on campus and have fellowship events to learn more about God and
                build community. I also like to listen to worship songs and try to play them on my guitar.
            </p>

        </div>
    );
}

export default About