var x=[1,2,3,4,5,6,7,8];

var y=x.filter(ele=>{
    if(ele%2==0){
        return true
    }
});
console.log(y);



var z=x.filter(ele=>{
    if(ele%2!=0){
        return true
    }
});
console.log(z);


var k=x.reduce((a,b)=>{
      return a+b
},0)
console.log(k)


var arr = [14, 58, 20, 77, 66, 82, 42, 67, 42, 4]
var min = Math.min.apply(Math, arr)
console.log(min)



var arr = [14, 58, 20, 77, 66, 82, 42, 67, 42, 4]
var min = Math.max.apply(Math, arr)
console.log(min)





function find(){
var g=Number(document.getElementById('num1').value)
var j=x.find(ele=>{
    if(ele==g){
        return ele;
    }
});
console.log(j)

}