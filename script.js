
const items=document.querySelectorAll(".color");

const resetbtn=document.querySelector(".resetbtn");
const user=document.querySelector(".user");
const player=document.querySelector(".comp");
const start=document.querySelector(".start");
const info=document.querySelector("#info");

const arr=['redc','redc','yellowc','yellowc','greenc','greenc'];
let i=0;
let p=0;


function find()
{
    return Math.floor(Math.random()*arr.length);
}

resetbtn.addEventListener('click',()=>
{
    i=0;
    p=0;
    info.textContent="player vs computer";
    user.textContent=i;
    player.textContent=p;
})






items.forEach(function(item)
{
    item.addEventListener("click",function()
    {
        
        let rand=find();
        
        if(arr[rand]==item.value)
        {   
            info.textContent=`match draw`;
        }
        else if(arr[rand]=='redc' && item.value=='yellowc')
        {
                i++;
                user.textContent=i;
                info.textContent=`player1 got ${1} point`;
        }
        else if(arr[rand]=='yellpwc' && item.value=='greenc')
        {
                i++;
                user.textContent=i;
                info.textContent=`player1 got ${1} point`;
        }
        else if(arr[rand]=='greenc' && item.value=='redc')
        {
                i++;
                user.textContent=i;
                info.textContent=`player1 got ${1} point`;
        }
        else{
            p++;
            player.textContent=p;
            info.textContent=`player2 got ${1} point`;
        }
        
    })
   
})