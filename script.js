let title = document.querySelector('.main-text');
let titleh2 = document.querySelector('h2');
let headerT = document.querySelectorAll('h1');
let colors = ["red", "black", "green", "pink", "yellow", "brown"];
let clickCounts = 0;

let about = document.querySelector('.about');

about.addEventListener('mouseover', function() {
    alert("Are you sure?!");
});

title.addEventListener('click', function () {
    for (let i in [0, 1])
    {
    headerT[i].style.color = colors[clickCounts%6];
    }
    clickCounts++;
});

titleh2.addEventListener('click', function () {
    titleh2.style.color = colors[clickCounts%6];
    clickCounts++;
});
