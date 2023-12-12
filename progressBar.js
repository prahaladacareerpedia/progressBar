let backgroundColor = document.getElementById('color1');

let intervalID; 





const color = () => {
    intervalID = setInterval(() => {
        let random = Math.floor(Math.random() * 16777216).toString(16);
        backgroundColor.style.backgroundColor = '#' + random;
    }, 1500);
};

backgroundColor.addEventListener('mouseover', color);

backgroundColor.addEventListener('mouseout', () => {
    clearInterval(intervalID);
});


const button = () => {
    let circle = document.querySelector('.box2');
    let progressPercentage = document.querySelector(".percentage");
    let progressBar=document.querySelector(".box3");
    let progressBar1=document.querySelector('.percentage1');
    let giffileAdd=document.getElementById('gifFile');

    let percentageStart = 0;
    let percentageEnd = 99;
    let speed = 200;

    let interval = setInterval(() => {
        if (percentageStart <= percentageEnd) {
            percentageStart++;
            circle.style.background=`conic-gradient( green ${percentageStart*3.6}deg,#ffffff 0deg)`
            progressPercentage.textContent = `${percentageStart}%`;
            progressBar.style.width = `${percentageStart}%`;
            progressBar1.textContent=`${percentageStart}%`;
            progressBar1.style.left = `calc(${percentageStart}% - 50%)`;
            


        } else {
            clearInterval(interval); 
            backgroundColor.style.backgroundImage = `url('celebrations.gif')`;

        }
    }, speed);
};






// const button = () => {
//     let circle = document.querySelector('.box2');
//     let progressPercentage = document.querySelector(".percentage");

//     let percentageStart = 0;
//     let percentageEnd = 90;
//     let speed = 100;

//     setInterval(() => {
//         if (percentageStart < percentageEnd) {
//             percentageStart++;
//             progressPercentage.textContent = `${percentageStart}%`;
          
//         }
//     }, speed);
// };


// JavaScript
// const rangeInput = document.getElementById('myRange');
// const box2 = document.querySelector('.box2');
// const box3 = document.querySelector('.box3');
// const percentageText = document.querySelector('.percentage');
// const percentageText1 = document.querySelector('.percentage1');

// rangeInput.addEventListener('input', function () {
//     const value = this.value;
//     const percent = `${value}%`;

    
//     percentageText.textContent = percent;
//     percentageText1.textContent = percent;

 
//     box2.style.setProperty('--angle', `calc(${value} * 3.6deg)`);
//     box3.style.width = percent;
// });
















 