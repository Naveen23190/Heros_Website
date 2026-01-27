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
   setTimeout(function() 
   {
     congrats.style.display = "none"
   },1000);
   count++;
   console.log("Score is : ",count);
   localStorage.setItem("Myscore",count);
}
function Refresh()
{
    let a = localStorage.getItem("Myscore");
    if(a>0)
    {
      console.log("This is If Block");
      console.log(`Score is : ${a}`);
      alert(`Game Over!! Your Score is : ${a}`);
      localStorage.clear();
    }
    else
    {
      let count = 0; 
      console.log("This is Else Block");
      console.log(`Score is :${count}`);
      alert(`Game Over Your Score is : ${count}`);
    }
    setTimeout(function () 
     {
        window.location.reload();
     },1000)
}




