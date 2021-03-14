const burger = document.querySelector('.menu-burger__header');
const  header = document.querySelector('.header__nav'); 

burger.addEventListener("click", function(){
if ( header.classList.contains('hidden')) {
    const  header = document.querySelector('.header__nav'); 
    header.style.display='none';
    header.classList.remove('hidden');
    console.log('removeclass');
}
else{
console.log('click');
const  header = document.querySelector('.header__nav');  
header.style.display="block";
header.classList.add('hidden');
console.log('addclass');

}
})