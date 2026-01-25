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
function reload()
{
    window.location.reload();
    alert("Your Page Has Been Reloaded.....");
}