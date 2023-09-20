let { log } = console;
let showResult = document.querySelector("#show-result")
let checkPalindromeFun = () => {
  let s = document.querySelector("#query").value;
 
  let n = s.length;
let stack = []; // extra space 
log(n)
if(n % 2==1 || n == 0){
return showResult.innerHTML = 'This is false'
}

for(let i = 0; i<n;i++){ // iterate n time 
    
    if(s[i]=="("||s[i]=="{"||s[i]=="["){
        stack.push(s[i])
    }else{
        let value = pair(s[i])
        
        if(value == stack[stack.length - 1]){
            stack.pop()
        }else{
      return   showResult.innerHTML = 'This is false'
        }
    }
}

 if(stack.length == 0){
        
        showResult.innerHTML = 'This is true'
    }else{
     showResult.innerHTML = 'This is false'
       
    }
};

function pair(value){
 if(value == ")"){
     return "("
 }
 
  if(value == "}"){
     return "{"
 }
 
  if(value == "]"){
     return "["
 }
}