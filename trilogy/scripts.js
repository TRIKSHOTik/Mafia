let verBtn = document.querySelector('.chooseVersion');
let mas = document.querySelectorAll('.chooseVersion button')

verBtn.addEventListener('click', (event) => {
    if (event.target.id == 'physical' || event.target.id == 'digital') {
        mas.forEach(item => {
            item.classList.remove('active');
            item.classList.remove('activeAr');
        })
        event.target.classList.add('active');
        event.target.classList.add('activeAr');
    }
})

//---------------------------------------------------------

let control = document.querySelector('.selectControl');
let arr = document.querySelectorAll('.selectControl button')


control.addEventListener('click', (event) => {
    if (event.target.id == 'epic' || event.target.id == 'steam' || event.target.id == 'ps' || event.target.id == 'xbox') {
        arr.forEach(item => {
            item.classList.remove('active-control');
        })
        event.target.classList.add('active-control');
    }
})



