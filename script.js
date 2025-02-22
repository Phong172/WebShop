const sliderItem = document.querySelectorAll('.slider-item')
for (let index = 0; index < sliderItem.length; index++) {

    sliderItem[index].style.left = index * 100 + "%"

}

const sliderItems = document.querySelector('.slider-items')
const arrowRight = document.querySelector('.fa-arrow-right')
const arrowLeft = document.querySelector('.fa-arrow-left')
let i = 0
if (arrowRight != null && arrowLeft != null) {
    // tạo sự kiện để click bên trái và phải
    arrowRight.addEventListener('click', () => {

        if (i < sliderItem.length - 1) {
            i++
            console.log(i)
            sliderMove(i)
        } else {
            return false

        }


    })
    arrowLeft.addEventListener('click', () => {
        if (i <= 0) {
            return false
        } {
            i--
            console.log(i)
            sliderMove(i)

        }
    })

}

function sliderMove(i) {
    sliderItems.style.left = -i * 100 + "%"

}


// function autoSlider() {

//     if (i < sliderItem.length - 1) { //điều kiện này nó nhảy ra thêm trang trắng -1 để khổi nhảy
//         i++
//         sliderMove(i)
//     } else {
//         i = 0
//         sliderMove(i)
//     }
// }


// setInterval(autoSlider, 2000)


//MENU BAR RÉPONSIVE
const Menubar = document.querySelector('.header-bar-icon')
const headerNav = document.querySelector('.header-nav')
Menubar.addEventListener('click', () => {
    headerNav.classList.toggle('active')
})

//sticky header
window.addEventListener('scroll', () => {
    if (scrollY > 50) {
        document.querySelector('#header').classList.add('active')
    } else {
        document.querySelector('#header').classList.remove('active')
    }
})

//click product images detail
// const imageSmall = document.querySelectorAll('.product-images-items img')
// const imageMain = document.querySelector('.main-image')
// for (let index = 0; index < imageSmall.length; index++) {
//     imageSmall[index].addEventListener('click', () => {
//         for (let a = 0; a < imageSmall.length; a++) {
//             imageSmall[a].classList.add('active')

//         }
//         imageMain.src = imageSmall[index].src

//         imageSmall[index].classList.add('active')

//     })

// }
const imageSmall = document.querySelectorAll('.product-images-items img');
const imageMain = document.querySelector('.main-image');

for (let index = 0; index < imageSmall.length; index++) {
    imageSmall[index].addEventListener('click', () => {
        // Loại bỏ class 'active' khỏi tất cả hình ảnh nhỏ
        imageSmall.forEach(img => img.classList.remove('active'));

        // Cập nhật ảnh chính
        imageMain.src = imageSmall[index].src;

        // Thêm class 'active' cho ảnh được chọn
        imageSmall[index].classList.add('active');
    });
}
//quantity-product
// phần nút tăng giảm số lượng
const quanPlus = document.querySelector('.fa-plus')
const quanMinus = document.querySelector('.fa-minus')
const quanInput = document.querySelector('.quantity-input')
let qty = 1
quanPlus.addEventListener('click', () => {
    inputValue =
        qty++
        quanInput.value = qty
        // console.log(quanInput.value)

})
quanMinus.addEventListener('click', () => {
    if (qty <= 1) {
        return false
    } else {
        qty--
        quanInput.value = qty
    }
})