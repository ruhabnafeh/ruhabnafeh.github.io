const scaleFactor = 1 / 20
function moveBackground(event) {
    const shapes = document.querySelectorAll('.shape')
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;
    console.log(x, y)
    for (let i = 0; i < shapes.length; ++i) {
        const isOdd = i % 2 !== 0
        const boolInt = isOdd ? -1 : 1
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }
}

function contact(event) {
    event.preventDefault()
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += ' modal__overlay--visible'
    emailjs
        .sendForm(
            'service_22i5uui',
            'template_cz69ovr',
            event.target,
            'WoOkcJ00FRiWOqWoU'
        ).then(() => {
            loading.classList.remove('modal__overlay--visible')
            success.classList += ' modal__overlay--visible'
        }).catch(() => {
            loading.classList.remove('modal__overlay--visible')
            alert(
                "The email service is temporarily unavailable. Please contact me directly through habi.nafeh@gmail.com"
            )
        })
}

let ifModalOpen = false
function toggleModal() {
    if (ifModalOpen) {
        ifModalOpen = false
        return document.body.classList.remove('modal--open')
    }
    ifModalOpen = true
    document.body.classList += ' modal--open'
}

let ifToggleDark = false
function toggleDarkMode() {
    ifToggleDark = !ifToggleDark
    if (ifToggleDark) {
        document.body.classList += ' dark-theme'
    }
    else {
        document.body.classList.remove('dark-theme')
    }
}