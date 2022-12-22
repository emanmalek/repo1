 // string
 let name ="hello eman";
console.log(name);
// number 
let age =1000;
console.log(age);
// varaible un defined
 let  fullName ;
 // varabile have an value not declared قيمه غير معروفه
 let salary =  null;  
 // boolean 
 let message = true;
 // type of help me to identify the data type of variables
     let age1= 30;
     age1='eman essam mahmoud';
     age1=true;
     console.log( typeof (age1));
     // NaN is mean not anumber
     // to set a const value 
     const  id = 1234456789;
     console.log(id);
     //ctrl+k - ctrl+c to comment ctrl+u to remove comment 
     
// // cannot redeclare the same variable 
// let x = 30;
// let x=20;
var y= 20;
var y=30;  
  
  let name2 ='mohsmed';
  let pass =12344;
    // 1 challenge 
    let a=10;
    let b ="20";
    let c = 80 ;
    console.log(++a + +b++ + +c++ - +a++);
//11  + 20 + 80 - 11 = 100
console.log(++a  + -b + +c++ - -a++ + +a);
// 11 -20 + 80 +11 +12 =94


// 2 challenge
let d ='-100';
let e ='20';
let f= 30 
let g  =true;
// out put must displayed 2000
 console.log( -d*e );
 
 // if statement 
  let holidays = 5;
  let money =0;
  if (holidays===0)
  {
     money= 5000;
     console.log ( 'the price is'+ money);
  }
  else if (holidays===1)
  {
    money =3000;
    console.log ( 'the price is'+ money);

  }
  else if ( holidays===2)
  {
    money =3000;
    console.log ( 'the price is'+ money);
  }
  else if (  holidays===3)
  { money =3000;
    console.log ( 'the price is'+ money);
  }
  
else{ 
  money=1000;
  console.log ( `the prise is ${money}`);
}


// arrays  create arrays 
    let myboys = [ "eman" ,"  essam"   , [" mahmoud " , " hoseein "] ];
    console.log( `this is my firend ${myboys[0]}`);
    // to show the elemnt in index 
    console.log( `this is my boy ${myboys [0][1]}`);

    myboys[0]= "malek";
    console.log(myboys); 
     myboys[2][0]= "ahmed " ;
    console.log(myboys);
    
    // length of array 
      console.log(myboys.length);
    // to added an item to array 
    myboys[myboys.length]=" safaa" ;
    console.log(myboys);
    // control length of array 
    myboys.length=2;
    console.log(myboys);   
    // to added an elemnt in first arrayrs 
    myboys.unshift(" hello ahmed " , 1);
    console.log(myboys);
    // to push elemnt in last arrays 
    myboys.push( 1, 2,3 );
    console.log(myboys); 
    //to remove the first elemnt in arrays 
    let firstitem = myboys.shift();
    console.log(myboys);
    console.log(firstitem);
    //to remove the last elemnt in arrays 
    let x =myboys.pop();
    console.log(myboys);
    console.log(x);
  //  to search in in index in array used 'indexof" by3ad mn awel el array
  let arr =[ 1 , 2, 3, 4 ,5 ,6,7];
  console.log(arr.indexOf(1));
  console.log(arr.indexOf(5,2));
  // to search in last index in arr hna by3d mn awel le a5er (index 4)
  console.log(arr.lastIndexOf(5));
  console.log(arr.lastIndexOf(4 ,-2));
  // to check on value on array
  console.log(arr.includes(2));
// sort method reverse method 
console.log(arr.reverse()); 

 // to concatenate a 2 arr
 let arr1 =[1,2];
 let arr2=['eman','essam'];
 let arr3=arr1.concat(arr2);
 console.log(arr3);
 // looooooooooop
 for(let i=0 ;i<10 ;i++)
 {
console.log(i);

 }

 //arr loop on it 
 let aar5=[1,2,3,4,5,6,'eman','ahmed'];
for( let) {

}



 


  