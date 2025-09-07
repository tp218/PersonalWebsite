import './App.css';
import JPStories from './Assets/JPStories.png';
import portfolio from './Assets/portfolio.png';
import { Link } from 'react-router-dom';

function Projects(){
    return(
        <div className="App-projects">
            <div className='project'>
                <Link to={'https://tp218.github.io/StoryWebsite/'}>
                        <img src={JPStories} className="project-photo"/>
                </Link>  
                <div className='project-caption'>
                    A website for hosting short stories <br></br>
                    <a href='https://github.com/tp218/StoryWebsite' className='github-link'> Github Repo --> </a>
                </div>
            </div>
            <div className='project'>
                <Link to={'https://github.com/tp218/PersonalWebsite'}>
                        <img src={portfolio} className="project-photo"/>
                </Link>  
                <div className='project-caption'>
                    A website to display information about me and project's I've created <br></br>
                    <a href='https://github.com/tp218/PersonalWebsite' className='github-link'> Github Repo --> </a>
                </div>
            </div>
        </div>
    );
}

export default Projects;