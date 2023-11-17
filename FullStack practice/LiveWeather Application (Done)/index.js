// input elements
let inpt = document.querySelector('.search-bar')
let serachBtn=document.querySelector('.search-btn')

//initial data shown
fetchData('india')

//output elements
let temp=document.querySelector('.sec-1')
let place=document.querySelector('#place')
let date=document.querySelector('#time')
let icon=document.querySelector('#icn')
let cndtn=document.querySelector('#cndt')


serachBtn.addEventListener('click',(e)=>{
    e.preventDefault() //to prevent screen from getting refresh
    fetchData(inpt.value)
})

//function to fetch data
async function fetchData(target) {
  let url = `http://api.weatherapi.com/v1/current.json?key=63505a36320046e1943221721230811&q=${target}&aqi=no`
  const response = await fetch(url)
  const data= await response.json()

  //mapping data
  let rTemp=data.current.temp_c;
  let rLocation=data.location.name;
  let rTime=data.location.localtime;
  let rLogo=data.current.condition.icon;
  let rCondition=data.current.condition.text;

  //updating the screen data
    updateData(rTemp,rLocation,rTime,rLogo,rCondition)
}

function updateData(temperature,location,time,logo,condition){
    temp.innerText=temperature
    place.innerText=location
    date.innerText=time
    icon.src=logo
    cndtn.innerText=condition
}
