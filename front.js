const button = document.getElementById('boton');
var MyArray = ['Alcornoque', 'zote', 'mendrugo', 'bausán', 'vaina', 'cenutrio', 'tontucio', 'tontorrón', 'descerebrado', 'simple', 'meliloto','cernícalo', 'percebe'];
const inputBox = document.getElementById('h1');

button.addEventListener("click", (e)=>{
    let randomItem = MyArray[Math.floor(Math.random() * MyArray.length)]
    console.log(randomItem);
    e.preventDefault();
    inputBox.innerHTML = randomItem;
})
