document.addEventListener('DOMContentLoaded', () => {
function imageClick() {
const image = document.querySelectorAll('img')

image.forEach(img => {
    img.addEventListener('click', () => {
        window.open('https://www.disneyplus.com/en-ca', '_blank')
     })
  })
}
imageClick()
})