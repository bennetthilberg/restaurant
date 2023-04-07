console.log('init');

let content = document.getElementById('content');

let navCont = document.createElement('div');

let homeBtn = document.createElement('button');
homeBtn.textContent = 'home'
homeBtn.addEventListener('click', () => showHomeScreen());
homeBtn.style.border = '1px solid #000';
homeBtn.style.padding = '2px';
homeBtn.style.cursor = 'pointer';

let menuBtn = document.createElement('button');
menuBtn.textContent = 'menu'
menuBtn.addEventListener('click', () => showMenuScreen());
menuBtn.style.border = '1px solid #000';
menuBtn.style.padding = '2px';
menuBtn.style.cursor = 'pointer';
menuBtn.style.marginLeft = '10px';

navCont.appendChild(homeBtn);
navCont.appendChild(menuBtn);
content.appendChild(navCont);


let header = document.createElement('h1');
header.textContent = 'The Javascript Restaurant';


let subt = document.createElement('h2');
subt.textContent = 'HTML and CSS strictly forbidden';


let splash = document.createElement('img');
splash.src = 'https://media.istockphoto.com/id/1279955158/vector/closed-restaurant-front-view-background-economy-fail-due-to-covid-epidemic-vector.jpg?s=612x612&w=0&k=20&c=8niy8KmF-aMd48ypRiY2mICDgYdU7ur5puPYoWB6knc=';


let desc = document.createElement('p');
desc.textContent = 'We serve lots of things, but HTML and CSS are off the menu';

let menu = document.createElement('p');
menu.textContent = 'I am too lazy to make an actual list. Pretend this is a menu.'

function showHomeScreen(){
    // clear out
    for(const child of Array.from(content.children)){
        if(child != navCont){
            content.removeChild(child);
        }
    }
    content.appendChild(header);
    content.appendChild(subt);
    content.appendChild(splash);
    content.appendChild(desc);
}

function showMenuScreen(){
    // clear out
    for(const child of Array.from(content.children)){
        if(child != navCont){
            content.removeChild(child);
        }
    }
    content.appendChild(menu);
}

content.appendChild(header);
content.appendChild(subt);
content.appendChild(splash);
content.appendChild(desc);