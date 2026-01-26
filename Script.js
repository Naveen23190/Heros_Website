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
   setTimeout(function() {
    congrats.style.display = "none"
   },1000);
}



