// console.log("running");
const taskSnippet=document.querySelector('.typeof2');
const participant=document.querySelector('.participant2');
const prices=document.querySelector('.prices2')
const btn =document.querySelector("#btn")
const UserInput= document.querySelector('#UserInput');
const randomBtn=document.querySelector('#Randombtn');

function fillDetails(res){
        taskSnippet.innerHTML=res.activity;
        participant.innerHTML=res.participants;
        prices.innerHTML=res.price;
}

function getWeather() {
    fetch('http://www.boredapi.com/api/activity/').then((value)=>{
        // return value.json();
        return value.json();
    }).catch((e)=>{
        console.log('E: ',e);
    }).then((res)=>{
        fillDetails(res);
    })
}
// getWeather()
// if random clicked
randomBtn.addEventListener('click',getWeather);
// user input submitted
btn.addEventListener('click',(event)=> {
    event.preventDefault();
    // fetch('http://www.boredapi.com/api/activity/')
    const url='http://www.boredapi.com/api/activity/?type='+UserInput.value;
    fetch(url).then((res)=>{
        return res.json();
    }).catch((e)=>console.log(e)).then((res)=>{
        fillDetails(res);
    })
})
