import { credentials,addtransactiondeposit,transferamount,deleteaccount,newuser } from "./scriptfun.js";

function events(){

    // credentials arrow
    document.querySelectorAll("#arrow")[0].addEventListener("click",()=>{
        const user=document.getElementById("user").value ;
        const pin=document.getElementById("pin").value ;
        credentials(user,pin);
        
    })

    // deposit arrow
    document.querySelectorAll("#darrow")[0].addEventListener("click",()=>{

        const amount=parseInt(document.getElementById("damount").value );
        const user=document.getElementById("user").value ;
        const pin=document.getElementById("pin").value ;
        addtransactiondeposit(user,pin,amount);
        document.getElementById("damount").value="";
        })

    // transfer arrow
    document.querySelectorAll("#tarrow")[0].addEventListener("click",()=>{
        const user=document.getElementById("user").value ;
        const pin=document.getElementById("pin").value ;

        const transferuser=document.getElementById("tid").value ;
        const amount=parseInt(document.getElementById("tamount").value );
        transferamount(user,pin,transferuser,amount);
        document.getElementById("tid").value="";
        document.getElementById("tamount").value="";
        })

    document.getElementById("user").addEventListener("input",()=>{
        document.querySelectorAll('.container2')[0].style.opacity=0;
        document.getElementById("greet").innerText="";
        document.getElementById("pin").value="";
    })

    document.getElementById("pin").addEventListener("input",()=>{
        document.querySelectorAll('.container2')[0].style.opacity=0;
        document.getElementById("greet").innerText="";
    })

    document.querySelectorAll("#carrow")[0].addEventListener("click",()=>{
        const user=document.getElementById("cid").value ;
        const pin=document.getElementById("cpin").value ;
        deleteaccount(user,pin);
        
        })
    
    document.getElementById("image").addEventListener("click",()=>{
        document.querySelectorAll("#container3")[0].style.display="flex";
        document.querySelectorAll(".container2")[0].style.display="none";
        document.querySelectorAll(".container1")[0].style.display="none";
    })

    document.getElementById("register").addEventListener("click",()=>{
        newuser();
    })
}

export{events}