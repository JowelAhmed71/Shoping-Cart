function updateProductNumber(product ,price , isIncracing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value ;
    if (isIncracing == true ) {
        productNumber = parseInt(productNumber)  + 1 ;
    } else if( productNumber > 0 ) {
        productNumber = parseInt(productNumber)  - 1 ;

    }
    productInput.value = productNumber ;
    
    const productTotal  = document.getElementById(product +'-total');
    productTotal.innerText = productNumber * price ;
    
}
// phone event handler :
document.getElementById('phone-plus').addEventListener('click' , function () {
    updateProductNumber('phone' ,1229 , true) ;
})
document.getElementById('phone-minus').addEventListener('click' , function () {
    updateProductNumber('phone' ,1229 , false) ;
})

// case event handler :

document.getElementById('case-plus').addEventListener('click' , function(){
    updateProductNumber('case', 59 , true);
})
document.getElementById('case-minus').addEventListener('click' , function(){
    updateProductNumber('case' , 59 ,false)    
})