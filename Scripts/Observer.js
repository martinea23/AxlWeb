const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
}); 

const hidden = document.querySelectorAll('.hidden');
hidden.forEach((el) => observer.observe(el));

//for more delay
const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('show2');
        } else {
            entry.target.classList.remove('show2');
        }
    })
}); 

const hidden2 = document.querySelectorAll('.hidden2');
hidden2.forEach((el) => observer2.observe(el));

//for staggers
const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('show3');
        } else {
            entry.target.classList.remove('show3');
        }
    })
}); 

const hidden3 = document.querySelectorAll('.hidden3');
hidden3.forEach((el) => observer3.observe(el));
