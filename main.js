var yes = document.getElementById('yes');

var firstPart = document.getElementById('first-part');

var secondPart = document.getElementById('second-part');

yes.addEventListener('click', function(){
    secondPart.style= `display: inline-block;`
    firstPart.style= `display: none;`
})

var helove = document.getElementById('helove');
var ilove = document.getElementById('ilove');

helove.addEventListener('click', function(){
    var ansOne = document.getElementById('second-part-ans-one');
    ansOne.style = `display: inline-block;`
    secondPart.style= `display: none;`
})

ilove.addEventListener('click',  function(){
    var ansTwo = document.getElementById('second-part-ans-two');
    ansTwo.style = `display: inline-block;`
    secondPart.style= `display: none;`
})

var subans = document.getElementById('sub-ans');

subans.addEventListener('click', function(){
    var anotherAns = document.getElementById('another-ans');
    anotherAns.style = `display: inline-block;`
    var ansTwo = document.getElementById('second-part-ans-two');
    ansTwo.style = `display: none;`
})