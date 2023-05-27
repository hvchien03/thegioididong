//------------address form-------------------
const addressbtn = document.querySelector('#address_form')
addressbtn.addEventListener("click", function(){
    document.querySelector('.address_form').style.display = "flex"
})
const addressclose = document.querySelector('#address_close')
addressclose.addEventListener("click", function(){
    document.querySelector('.address_form').style.display = "none"
})
//-------------slider product 1-----------------
const rightbtn = document.querySelector('#btn-r01')
const leftbtn = document.querySelector('#btn-l01')
let index = 0;
const slider_product = document.querySelectorAll('.slider-product-one-content-items')
rightbtn.addEventListener("click", function(){
    index++;
    if(index > slider_product.length - 1){
        index = 0;
    }
    document.querySelector('.slider-product-one-content-items-content').style.right = index *100+"%";
})
leftbtn.addEventListener("click", function(){
    index--;
    if(index < 0){
        index = slider_product.length - 1;
    }
    document.querySelector('.slider-product-one-content-items-content').style.right = index *100+"%";
})
//----------------slider product 2-----------------------
const rightbtn2 = document.querySelector('#btn-r02')
const leftbtn2 = document.querySelector('#btn-l02')
const slider_product2 = document.querySelectorAll('.slider-product-two-content-items')
rightbtn2.addEventListener("click", function(){
    index++;
    if(index > slider_product2.length - 1){
        index = 0;
    }
    document.querySelector('.slider-product-two-content-items-content').style.right = index *100+"%";
})
leftbtn2.addEventListener("click", function(){
    index--;
    if(index < 0){
        index = slider_product2.length - 1;
    }
    document.querySelector('.slider-product-two-content-items-content').style.right = index *100+"%";
})