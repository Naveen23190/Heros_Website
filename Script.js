let count = 0;
function showSidebar()
{
    const sidebar = document.querySelector(".Side-bar");
    sidebar.style.display = "flex";
}
function hideSidebar()
{
    const hideSidebar = document.querySelector(".Side-bar")
    hideSidebar.style.display = "none";
}
function Congrats()
{
   const congrats = document.querySelector(".Congratulations");
   congrats.style.display = "flex"; 
   const col = document.querySelector(".round");
   setTimeout(function() {
    congrats.style.display = "none"
   },1000);
   count++;
   console.log("Score is : ",count);
   localStorage.setItem("Myscore",count);
}
function Refresh()
{
    const reset = document.querySelector(".Congratulations");
    reset.textContent = "OOOPs!! Wrong Ball";
    reset.style.fontSize = "35px";
    reset.style.fontWeight = "bolder";
    reset.style.color = "red";
    reset.style.display = "flex";
    let a = localStorage.getItem("Myscore");
    alert(`Your Score is : ${a}`);

}
 



