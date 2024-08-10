document.addEventListener('DOMContentLoaded', () => {
    const aboutMe = document.querySelector('.aboutMe');
    const home = document.querySelector('.homeWrapper');
    const projects = document.querySelector('.projectsWrapper');

    var menuList = document.querySelector('#menuList');

    document.querySelector('.linkedinLogo').addEventListener('click', () => {
        window.location.href = 'https://www.linkedin.com/in/jonathan-wiesinger-79487b1a9/';
    })
    // event listener for github button
    document.querySelector('.githubLogo').addEventListener('click', () => {
        window.location.href = 'https://github.com/kingjon95';
    })
    // event listener for twitter button
    document.querySelector('.twitterLogo').addEventListener('click', () => {
        window.location.href = 'https://twitter.com/Fightingwolf95';
    })


    menuList.style.maxHeight = '0px';
    // Event listener for mobile menu
    document.querySelector('.menuIcon').addEventListener('click', () => {
        if (menuList.style.maxHeight == '0px') {


            menuList.style.maxHeight = '150px'
        } else {
            menuList.style.maxHeight = '0px';
        }
    })


    document.querySelector('.about').addEventListener('click', e => {
        e.preventDefault();

        aboutMe.classList.remove('hide')
        if (home.classList.contains('hide') === false) {
            home.classList.add('hide')
        } else if (projects.classList.contains('hide') === false) {
            projects.classList.add('hide')
        }


    })
    document.querySelector('.home').addEventListener('click', e => {
        e.preventDefault();
        home.classList.remove('hide')
        if (aboutMe.classList.contains('hide') === false) {
            aboutMe.classList.add('hide')

        } else if (projects.classList.contains('hide') === false) {
            projects.classList.add('hide')
        }
    })
    document.querySelector('.project').addEventListener('click', e => {
        e.preventDefault()
        projects.classList.remove('hide')
        if (aboutMe.classList.contains('hide') === false) {
            aboutMe.classList.add('hide')
        } else if (home.classList.contains('hide') === false) {
            home.classList.add('hide')
        }
    })
    window.addEventListener('keydown', e => {

        while (e.keyCode == 38) {
            home.style.transform += 'rotateY(10deg)';


            break;

        };
    })

});


let buttons = Array.from(document.getElementsByClassName("btn"));
// where the numbers will apear
let displayNumbers = document.getElementById('displayText');
console.log(buttons);
// audio variables
var britishInvasion = new Audio('Ts.mp3');
var queen = new Audio('Br.mp3');
var johnny = new Audio('J.mp3');
var bob = new Audio('Rs.mp3');
const allAudio = [britishInvasion, johnny, bob, queen];

// Calculator app
buttons.map(button => {
    button.addEventListener('click', (e) => {
            console.log('clicked');
                console.log(e);
                console.log(e.target.innerHTML);
                switch (e.target.innerText) {
                    case 'clear':
                        for (let i = 0; i < allAudio.length; i++) {
                            allAudio[i].currentTime = 0;
                            allAudio[i].pause();
                        };
                        displayNumbers.innerText = '';
                        break;
                    case 'Del': displayNumbers.innerText = displayNumbers.innerText.slice(0, -1);
                        break;
                    case '=':
                        if (displayNumbers.innerText === '1964') {

                            displayNumbers.innerText = 'Cue British Invasion!';

                            britishInvasion.play();

                        } else if (displayNumbers.innerText === '1958') {
                            displayNumbers.innerText = "Here's Johnny!";
                            johnny.play();
                        } else if (displayNumbers.innerText === '1965') {
                            displayNumbers.innerText = 'The year Dylan went electric.';
                            bob.play();
                        } else if (displayNumbers.innerText === '1975') {
                            displayNumbers.innerText = 'Gallileo! Gallileo!';
                            queen.play();
                        } else {

                            try {
                                displayNumbers.innerText = eval(displayNumbers.innerText);
                            } catch {
                                displayNumbers.innerText = "Do you even Math broh?";
                            }};

                        break;

                        default : displayNumbers.innerText += e.target.innerText;
                    };
            }
        );
    }
);
