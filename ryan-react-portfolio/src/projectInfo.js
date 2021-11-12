import Krashians from './assets/Project1a.png';
import Blog from './assets/main-loggedin.png';
import Profile from './assets/3.png';
import Forecast from './assets/Forecast2.png';
import Quiz from './assets/Quiz1.png'

const projectArray = [
    {
        name: 'Avoiding the Kar Krashians',
        github: 'https://github.com/RyeBowTie/Car-Crashians',
        deployed: 'https://ryebowtie.github.io/Car-Crashians/',
        img: Krashians,
        description: 'First group project. It was made to demonstrate a knowledge of Fetch Requests. Using a Map API and the city of Ottawa API, this application tallies the number of crashes that have occurred along a given route.',
    },
    {
        name: 'Tech Blog',
        github: 'https://github.com/RyeBowTie/Ryan-Tech-Blog',
        deployed: 'http://ryantechblog.herokuapp.com/',
        img: Blog,
        description: 'A blog application that allows users to signup for an account, make posts and comment on people\'s posts.',
    },
    {
        name: 'JavaScript Quiz',
        github: 'https://github.com/RyeBowTie/Ryan-s-Javascript-Quiz',
        deployed: 'https://ryebowtie.github.io/Ryan-s-Javascript-Quiz/.',
        img: Quiz,
        description: 'Application made to demonstrate DOM manipulation. Users answer questions to get points, but lose time if they are incorrect.',
    },
    {
        name: 'Team Profile Generator',
        github: 'https://github.com/RyeBowTie/Ryan-Team-Profile-Generator',
        deployed: 'https://github.com/RyeBowTie/Ryan-Team-Profile-Generator',
        img: Profile,
        description: 'CLI application that will generate a website using the information provided.',
    },
    {
        name: 'Weather Forecaster',
        github: 'https://ryebowtie.github.io/Ryan-weather-forecaster-/',
        deployed: 'https://ryebowtie.github.io/Ryan-weather-forecaster-/',
        img: Forecast,
        description: 'A weather app that allows users to see a five day forecast of whatever city they search. Past searches are saved to local storage.',
    },
]

export default projectArray;