var body = document.getElementsByName('slides');

var itemsData = [
    {
        nameItem: 'Вахтёр',
        procentAlc: '1%',
        ccal: '35',
        structure: 'Ржаной хлеб, Вода, Солод, Соль',
        infoItem: 'Терпкий и мощный, вкус этого кваса взбодрит после тяжёлого дня и придаст сил для вечерних приключений!',
        price: '150 P.',
        img: '../img/bottle-left.jpg'
    },
    {
        nameItem: 'Романтик',
        procentAlc: '0,5%',
        ccal: '27',
        structure: 'Ячменный хлеб, Вода, Солод, Апельсин',
        infoItem: 'Лёгкий и освежающий напиток поможет сохранять отличное настроение в течение всего дня.',
        price: '90 P.',
        img:'../img/bottle-right.jpg'
    }
];

var product = function(){
    let productItem = document.createElement('div');

}

var slides = document.querySelectorAll('.slides .slide');
var currentSlide = 0;
//var slideInterval = setInterval(nextSlide,8000);
 
function nextSlide() {
    let productImg = document.querySelector('.product_item_first img');
    productImg.src = itemsData[currentSlide].img;
    if (currentSlide > itemsData.length - 1) {
        currentSlide = 0;
    } else { 
        currentSlide += 1;
        console.log('Зашел');
    }
}