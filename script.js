const str = document.querySelector('#str')
const button = document.querySelector('#submit')

button.addEventListener('click', function () {
    if (str.value.length > 5 && str.value.match(/[a-z].*[A-Z]|[A-Z].*[a-z]/) && str.value.match(/(.*\d){2,}/)) {
        console.log(true)
    } else {
        console.log(false)
    }
})