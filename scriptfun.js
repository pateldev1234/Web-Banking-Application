import { people } from "./scriptp.js";

// to handle the invalid task 
function invalid(){
    document.querySelectorAll('.container2')[0].style.opacity=0;
    document.getElementById("user").value="";
    document.getElementById("pin").value="";
    document.getElementById("greet").innerText="";
    setTimeout(()=>{alert("Invalid Credentials");},500);
}

// to handle amount display
function amounthandle(pos,neg){
    document.getElementById("in").innerText=pos;
    document.getElementById("out").innerText=neg;
    document.getElementById("db").innerText=pos-neg;
}
// To check the credentials enter initially 
function credentials(user,pin){
    let flag=false;
    let name="";
    let pos,neg;
    for (let data of people){
        if(data.user==user && data.pin==pin){
            flag=true;
            name=data.name;
            neg=data.negative;
            pos=data.positive;

            document.querySelectorAll('.container2')[0].style.opacity=1;
            document.getElementById("greet").innerText=` Welcome ${name}`;
            document.getElementById("logged").innerText=dateandtime();
            amounthandle(pos,neg);
            transdisplay(data);
            break;
        }
    }
    if(flag==false){
        invalid();
    }
}

// to display current date and time 
function dateandtime(){
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1; // Months are zero-based, so we add 1
    var year = currentDate.getFullYear();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
    // Format day, month, and year
    var formattedDate = day + "/" + month + "/" + year;
    // Format time in 12-hour format with AM/PM
    var ampm = hours >= 12 ? 'PM' : 'AM';
    var formattedHours = hours % 12 || 12; // Convert to 12-hour format
    var formattedTime = formattedHours + ":" + (minutes < 10 ? '0' : '') + minutes + ":" + (seconds < 10 ? '0' : '') + seconds + " " + ampm;

    var val=`${formattedDate}  ${formattedTime}`;
    return val;
}

// to dynamically display the transaction 
function transdisplay(data){
    document.getElementById("trans").innerHTML="";
            
    let size=data.transactions.length;
    for(let i=0 ;i<size;i++){
        let obj=data.transactions[i];
        let innnerdiv=`<div class="innerdiv">`;
        if(obj.type=="withdrawl"){
            innnerdiv+=`<div class="dynamicdrawl">${obj.p}</div>`;
            innnerdiv+=`<div class="dynamicdrawl">${obj.amount}</div>`;
            innnerdiv+=`<div class="dynamicdrawl">${obj.dates}</div>`;
            innnerdiv+=`</div>`;
        }
        else if(obj.type=="deposit"){
            innnerdiv+=`<div class="dynamicdep">${obj.p}</div>`;
            innnerdiv+=`<div class="dynamicdep">${obj.amount}</div>`;
            innnerdiv+=`<div class="dynamicdep">${obj.dates}</div>`;
            innnerdiv+=`</div>`;
        }
        document.getElementById("trans").insertAdjacentHTML("afterbegin",innnerdiv);
    }
}

// deposit 
function addtransactiondeposit(user,pin,rup){

    let pos,neg;
    for (let data of people){
        if(data.user==user && data.pin==pin){
            let obj=new Object();
            obj.type='deposit';
            obj.amount=rup;
            obj.dates=dateandtime();
            obj.p=toLowerCaseCustom(data.name);

            data.transactions.push(obj);
            data.positive=data.positive+rup;

            pos=data.positive;
            neg=data.negative;

            amounthandle(pos,neg);
            transdisplay(data);
            break;
        }
    }
}

// transfer

function transferamount(user,pin,tuser,rup){
    console.log(user,pin,tuser,rup);
    let flag=false;
    let flag1=false;
    let obj1,obj2;
    
    for (let data of people){
        if(data.user==user && data.pin==pin){
            flag1=true;
            obj1=data;
        }
        else if(data.user==tuser){
            flag=true;
            obj2=data;
        }

        if(flag && flag1)
            break;
    }

    if(user==tuser){
        flag=false;
        flag1=false;
    }
    if(flag && flag1 && !(isNaN(rup))){
        let available = obj1.positive-obj1.negative;
        if(available<rup){
            document.getElementById("tid").innerText="";
            document.getElementById("tamount").innerText="";
            setTimeout(()=>{alert("Insufficint Fund");},500);

        }
        else{
            let object1=new Object();
            object1.type='withdrawl';
            object1.amount=rup;
            object1.dates=dateandtime();
            object1.p=toLowerCaseCustom(obj2.name);

            obj1.transactions.push(object1);
            obj1.negative+=rup;
           
            let object2=new Object();
            object2.type='deposit';
            object2.amount=rup;
            object2.dates=dateandtime();
            object2.p=toLowerCaseCustom(obj1.name);

            obj2.transactions.push(object2);
            obj2.positive+=rup;
            amounthandle(obj1.positive,obj1.negative);
            transdisplay(obj1);            
        }
        
    }
    else
    {
        document.getElementById("tid").innerText="";
        document.getElementById("tamount").innerText="";
        setTimeout(()=>{alert("Invalid Transferid");},500);
    }
}

function deleteaccount(user,pin){
    let flag=false;
    for(let data of people){
        if(data.user==user && data.pin==pin){
            flag=true;
            let index=people.indexOf(data);
            people.splice(index,1);
            document.getElementById("cid").value="";
            document.getElementById("cpin").value ="";
            document.querySelectorAll('.container2')[0].style.opacity=0;
            document.getElementById("user").value="";
            document.getElementById("pin").value="";
            document.getElementById("greet").innerText="";

            break;
        }
    }

    if(flag==false){
        document.getElementById("cid").value="";
        document.getElementById("cpin").value ="";
        setTimeout(()=>{alert("Invalid Credentials");},500);
    }
}

// to check whether userid exist or not for new registeration 
function noduplicate(userid){
    let flag=true;
    for(let data of people){
        if(data.user==userid){
            flag=false;
            break;
        }
    }
    return flag;
}

function removeuser(){
    document.getElementById("newname").value="";
    document.getElementById("newuserId").value="";
    document.getElementById("newpin").value="";
}

function toUpperCaseCustom(inputString) {
    return inputString.toUpperCase();
}
function toLowerCaseCustom(inputString) {
    return inputString.toLowerCase();
}

function newuser(){
    const nam=toUpperCaseCustom(document.getElementById("newname").value);
    const userid=toLowerCaseCustom(document.getElementById("newuserId").value);
    const p=parseInt(document.getElementById("newpin").value);
   
    if(p>9999 || p<999 || isNaN(p)){
        document.getElementById("newpin").value="";
        setTimeout(()=>{
            alert("Invalid PIN \n"+"Must be in a range of 1000 - 9999");
        },500)
    }
    else if(noduplicate(userid)){
        let obj =new Object();
        obj.name=nam;
        obj.user=userid;
        obj.pin=p;
        obj.transactions=new Array();
        obj.positive=0;
        obj.negative=0;

        let userConfirmation = confirm(" name:"+nam+"\n"+" user:"+userid+"\n"+"PIN:"+p);
        if(userConfirmation)
        {
            people.push(obj);
            document.querySelectorAll("#container3")[0].style.display="none";
            document.querySelectorAll(".container2")[0].style.display="flex";
            document.querySelectorAll(".container1")[0].style.display="flex";

            document.querySelectorAll('.container2')[0].style.opacity=0;
            document.getElementById("user").value="";
            document.getElementById("pin").value="";
            document.getElementById("greet").innerText="";

        }   
            removeuser();
    }
    else{
        removeuser();
        setTimeout(()=>{
            alert("Userid already Exist");
        },500)
    }
}
export {credentials,addtransactiondeposit,transferamount,deleteaccount,newuser}
