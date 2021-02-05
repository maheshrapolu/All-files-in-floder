var x=[1,2,3,4,5,6,7,8];
function prim(){
	var y=x.filter(ele=>{
    if(ele%2==0){
        return true
    }
});
document.getElementById('prime').innerHTML=y
}

function odd(){
var z=x.filter(ele=>{
    if(ele%2!=0){
        return true
    }
});

document.getElementById('odd').innerHTML=z	
}

function pro(){
	var k=x.reduce((a,b)=>{
      return a+b
},0)

document.getElementById('product').innerHTML=k
}


function small(){
	
var arr = [14, 58, 20, 77, 66, 82, 42, 67, 42, 4]
var min = Math.min.apply(Math, arr)

document.getElementById('smallest').innerHTML=min
}


function find(){
var g=Number(document.getElementById('num1').value)
var j=x.find(ele=>{
    if(ele==g){
        return ele;
    }
});
document.getElementById('Search').innerHTML=j
}