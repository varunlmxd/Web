var slider = document.getElementsByClassName('slider')[0]
slider.oninput  = function(){
    document.getElementById('percentage').innerHTML = "Tip : "+slider.value+"%"
}
document.getElementById('submit').addEventListener('click',result);

function result(event){
    document.getElementById('Calculate').innerHTML =""
    var num = Number(document.getElementsByClassName('amount')[0].value)
    if(num > 0){
    document.getElementById('Calculate').innerHTML = "Total Amount : "+ Math.round(( num + (num * Number(slider.value)/100))* 100) / 100
    }
}