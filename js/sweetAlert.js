
function updateHealthPoints(points) {
    
    
    healthPoints = points;
    var healthBar = document.querySelector("#healthBar");

    healthBar.style.width = points + "%";

    if(healthPoints < 1) {
        swal("Contact Me!");
        window.location.reload();
    }
}