function Adduser() {
    vari_name = document.getElementById("username").value;
    localStorage.setItem("username", vari_name);
    window.location="kwitter_room.html";

}