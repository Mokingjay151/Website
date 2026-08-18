
function Header() {

    return(
        <header>
            <h1>Andy Mok's Website 💗</h1>
            <img src="src/assets/profile.jpg" alt="Andy Mok" style={{ width: '300px', height: '400px' }} />
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>My Portfolio</title>
            <button>🌙 Dark Mode</button>
            
            <link rel="stylesheet" href="index.css" />
            <nav>
                <ul>
                    <li><a href="#about_me">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <hr></hr>
         </header>
    );
}

export default Header