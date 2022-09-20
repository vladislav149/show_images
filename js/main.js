// image.onload = (imageTarget) => {
//   this.imageSizeValidate(readerEvent.target.result, imageTarget.target.width, imageTarget.target.height)
// }
const BUTTON_SHOW = document.querySelector('.show-files')
const LIST_IMG = document.querySelector('.list-img')
BUTTON_SHOW.addEventListener('click', show)

function show() {
  const files = document.querySelector('.load-files').files
  console.log(files)

  Object.keys(files).forEach(i => {
        const file = files[i]
        console.log(i, file.name);
        const reader = new FileReader()
        reader.onload = (readerEvent) => {
          const image = new Image(100,100)
          console.log(image);
          image.src = readerEvent.target.result
          // LIST_IMG.appendChild(image)
          const text = document.createElement('span')
          text.innerHTML = file.name
          const li = document.createElement('li');
          LIST_IMG.prepend(li)
          const uiLi = document.querySelector('li');
          uiLi.appendChild(image)
          uiLi.appendChild(text)
        }
        reader.readAsDataURL(file)
      })
}