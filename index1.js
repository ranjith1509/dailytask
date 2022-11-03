let submittEl=document.getElementById('submitt')
let userName=document.getElementById('username')
let passWord=document.getElementById('password')

let columns=[1,8,5,3,10,15,1,8,5,3,10,15]
let rows=[5,15,65,78,5,15,65,78]
let row_1=document.getElementById("row-1")
let myArray1=[] 

for(let i = 0;i < rows.length;i++){
    myArray1[i] = []
    for(let j = 0;j < columns.length;j++){
    myArray1[i][j] = rows[i]*columns[j]}
}

//disappear----task---


let user_value=document.getElementById("usernumber-value")
let numbers_list=document.getElementById("numbers-list")
let numbers = [1,2,3,4,5,6,7,8,9,10]

let index_no=user_value.value


function disappear(index_no){
    var t1=numbers.splice(index_no,1);
    numbers_list.innerText=t1 // displaying the array elements
    }
    



//1=0000001
//2=0000010
//3=0000011
function myFunction(){

if (userName.value===''|| passWord.value===''){
    submittEl.style.display="none"
  
}else{submittEl.style.display="flex"}


}

function promptPassword( )
{
    
    if(userName.value != 'ranjith'){
        alert("Login is incorrect");
        passWord.value=""
        submittEl.style.display="none"
        return false
    }

    else if(passWord.value!='ranjith'){
alert("Login password is incorrect")
userName.value=""
submittEl.style.display="none"
return false
    }
    else {
        alert("Password is correct, you are allowed to enter the site"); 
   
        
        
    }
     
}