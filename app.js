// round (if the decimal  is equal to or greater  than .5 the next number will be consider)
// ceil  (not effected the decimal the next number will be consider)
// floor (not effected the decimal the prevoius number will be consider)
// parse Int
// parse float



// let num = 30.5;
// console.log(Math.round(num));

// console.log(Math.ceil(num));

// console.log(Math.floor(num));




// let numb = '20.22222';
// let numb1 = 20.22222;

// parseInt (not effected the decimal the prevoius number will be consider)

// console.log(typeof(parseInt(numb)));
// console.log(typeof(parseFloat(numb)));
// console.log(parseInt(numb));

// console.log(parseInt(numb));

// console.log(parseInt(numb1));

// console.log(parseFloat(numb));

// console.log(parseFloat(numb1));


// Toss Task Started

// 0 Chaand
// 1 Masjid

const div = document.querySelector('.div');
let paragraph =document.querySelector('.paragraph');


function toss(clickBtn){
    
    let tossVal = Math.floor(Math.random()*2);
    console.log(tossVal);

if(tossVal===0){

div.innerHTML=`<p><img src="./Chaand.jpeg" alt="chaand-image" width='200px' height="200px"></p> <br> `;

}else if(tossVal===1){
div.innerHTML=`<p><img src="./masjid.jpg" alt="masjid-image" width='200px' height="200px"></p> <br> `

} if(clickBtn === 'Chaand' && tossVal=== 0 || clickBtn ==='Masjid' && tossVal === 1){
    paragraph.innerHTML="You win the toss";
    // console.log(`You win the toss`);

}else{
   paragraph.innerHTML= `You lose the toss`;

}
}















// function Chaand(){
//     if(div.innerHTML===`<p><img src="./masjid.jpg" alt="masjid-image" width='100px' height="100px"></p>`){
//         div.innerHTML=`you win the toss`;
//     }
// }

























// Toss Task ended










