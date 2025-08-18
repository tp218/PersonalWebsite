import './App.css';
import me from './Assets/portrait.jpg'
import { Link } from 'react-router-dom';



function AboutMe(){
    return(
        <div className='App'>
            <div className='main-page-text'>
                Hello! My name is Anastasios Pagiatakis. I am a WPI <br></br>
                computer science student from the class of 2027 who <br></br>
                loves to work on projects relating to all different <br></br>
                types of computer science disciplines. Specifically, <br></br>
                I am planning on projects that cover networks, machine <br></br>
                learning, web development, and the foundations of <br></br>
                programming languages. I have an extensive history in <br></br>
                working in teams and real desire to work on projects that <br></br>
                explore how everyday programs function and how those <br></br>
                learning and services could be done in different and new <br></br>
                ways. I enjoy learning about different aspects of code and <br></br>
                computer science through practice and use in projects. <br></br>
                On this site, you will find all of the projects I have <br></br>
                worked on so far and links to their github repositories <br></br>
            </div>
            <div>
                <Link to={'https://github.com/tp218'}>
                    <img src={me} className="portrait"/>
                </Link>
            </div>
        </div>
    );
}

export default AboutMe;