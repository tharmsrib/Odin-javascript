const container = document.querySelector('#container')
const p = document.createElement('p');
p.textContent = 'Hey im red';
const h3 = document.createElement('h3');
h3.textContent = 'I\'m a blue h3';
h3.style.color = 'blue';

container.appendChild(p)

container.appendChild(h3)

const div = document.createElement('div');
div.setAttribute('style', 'border: black; background-color: pink');
const h1 = document.createElement('h1');
h1.textContent = ' i\'m in div';
const p2 = document.createElement('p');
p2.textContent = 'me too';
div.appendChild(h1);
div.appendChild(p2);
container.appendChild(div);

function alertFunction() {
    alert("YAY! YOU DID IT!");
}

// btn.addEventListener('click', alertFunction);
btn.addEventListener('click', function (e) {
    // console.log(e.target);
    e.target.style.background = 'blue';
});




