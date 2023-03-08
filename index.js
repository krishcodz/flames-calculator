var name1;
var name2;
var count1={a:0,b:0,c:0,d:0,e:0,f:0,g:0,h:0,i:0,j:0,k:0,l:0,m:0,n:0,o:0,p:0,q:0,r:0,s:0,t:0,u:0,v:0,w:0,x:0,y:0,z:0};
var count2={a:0,b:0,c:0,d:0,e:0,f:0,g:0,h:0,i:0,j:0,k:0,l:0,m:0,n:0,o:0,p:0,q:0,r:0,s:0,t:0,u:0,v:0,w:0,x:0,y:0,z:0};
for(i=0;i<2;i++){
    document.querySelectorAll("input")[i].addEventListener("click",function () {
        document.querySelector("h1").textContent="Enter Names";
    })
}
document.querySelector(".done").addEventListener("click",flames);
document.querySelector(".restart").addEventListener("click",restart);
function getVal1() {
    name1 = document.querySelectorAll("input")[0].value;
}

function getVal2() {
    name2 = document.querySelectorAll("input")[1].value;
}

function flames() {
    for(var k in count1){
        for(var j=0;j<name1.length;j++){
            if(k==name1.charAt(j)){
                count1[k]+=1;
            }
        }
    }

    for(var k in count2){
        for(var j=0;j<name2.length;j++){
            if(k==name2.charAt(j)){
                count2[k]+=1;
            }
        }
    }
var con=0;
console.log(count1);
console.log(count2);
for(var k in count1){
    let a1=count1[k]-count2[k];
    let a2=count2[k]-count1[k];
    if(a1>0){
        con+=a1;
    }
    else if(a2>0){
        con+=a2;
    }
    else {
        continue;
    }
}

var list=[1,2,3,4,5,6];
var c = 0;
while(list.length>1){
    let temp=list.length;
    for(var j=0;j<temp;j++){
        c++;
        if(c==con){
            c=0;
            list.splice(j-(temp-list.length),1);
        }
    }
}
switch(list[0]){
    case 1:
        document.querySelector("h1").textContent="The relation between "+name1+" and "+name2+" is friends";
        break;
    case 2:
        document.querySelector("h1").textContent="The relation between "+name1+" and "+name2+" is love";
        break;
    case 3:
        document.querySelector("h1").textContent="The relation between "+name1+" and "+name2+" is affection";
        break;
    case 4:
        document.querySelector("h1").textContent="The relation between "+name1+" and "+name2+" is marriage";
        break;
    case 5:
        document.querySelector("h1").textContent="The relation between "+name1+" and "+name2+" is enemy";
        break;
    case 6:
        document.querySelector("h1").textContent="The relation between "+name1+" and "+name2+" is siblings";
        break;    

    }
}

function restart() {
    location.reload();
}