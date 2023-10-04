let text = document.querySelectorAll('ul li a').forEach(
    text=> {
        text.innerHTML = text.innerText.split('').map((letters,
            i) => `<span style= "transition-delay: ${i*40}ms;">${letters}</span>`).join('');
    }
)