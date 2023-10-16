function display(num){
    var ans=document.getElementById('result')
    ans.value+=num;
   
}
function cancel(del){
    var ans=document.getElementById('result')
    ans.value=del;
}
function evalvate(){
    var ans=document.getElementById('result')
    var result=eval(ans.value);
    ans.value=result;
    }

function del(){
    var ans=document.getElementById('result')
    var r=ans.value.slice(0,-1)
    ans.value=r
}
document.addEventListener("keypress", function(event) {
    if (event.key < "0" || event.key > "9") {
      alert("Only numbers are allowed");
      event.preventDefault();
    }
  });
