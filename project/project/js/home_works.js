const gmailInput = document.querySelector('#gmail_input');
const gmailButton = document.querySelector('#gmail_button');
const gmailResult = document.querySelector('#gmail_result');

const regExp = /^[a-z0-9]+@gmail\.com$/i
gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = 'Все правильно!'
        gmailInput.style.borderColor = 'green'
        gmailInput.style.Color = 'green'
    }
    else {
        gmailResult.innerHTML = 'Неправильно!'
        gmailInput.style.borderColor = 'red'
        gmailInput.style.Color = 'red'

    }
}

const parentBlock = document.querySelector('.parent_block')
const childBlock = document.querySelector('.child_block')
let posX = 0, posY = 0
// let maxWidth = 450



const offsetWidth = parentBlock.offsetWidth - childBlock.offsetWidth
const offsetHeight = parentBlock.offsetHeight - childBlock.offsetHeight

const moveBlock = () => {
    if (posX <= offsetWidth && posY === 0) {
        childBlock.style.left = `${posX}px`
        posX++
        // requestAnimationFrame(moveBlock)
    } else if (posX >= offsetWidth && posY <= offsetHeight) {
        posY++
        childBlock.style.top = `${posY}px`
        // requestAnimationFrame(moveBlock)
    } else if (posY >= offsetHeight && posX >= 0) {
        posX--
        childBlock.style.left = `${posX}px`
        // requestAnimationFrame(moveBlock)
    } else if (posX <= 0 && posY >=0) {
        console.log("d")
        posY--
        childBlock.style.top=`${posY}px`
    }
    setTimeout(moveBlock,1)
}
// const moveBlock = () => {
//     if (posX < offsetWidth) {
//         childBlock.style.right = `${posX}px`
//         posX++
//         requestAnimationFrame(moveBlock)
//     } else if (posX >= offsetWidth && posY < offsetHeight) {
//         posY++
//         childBlock.style.button = `${posY}px`
//         requestAnimationFrame(moveBlock)
//     }
// }
moveBlock()