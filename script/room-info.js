let currentInfoDiv = document.getElementById("instruction");

function showRoomInfo(roomId) {
    const infoDiv = document.getElementById(roomId + "-info");
    if (currentInfoDiv) {
        currentInfoDiv.style.display = "none";
    }
    infoDiv.style.display = "block";
    currentInfoDiv = infoDiv;
};

const rooms = document.querySelectorAll(".room");
for (let i = 0; i < rooms.length; i++) {
    const room = rooms[i];
    room.addEventListener("click", function () {
        showRoomInfo(this.id);
    });
}