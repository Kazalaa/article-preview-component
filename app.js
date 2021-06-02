const shareButton = document.querySelector(".share-modal")
const sharePopup = document.querySelector(".modal-infos")


shareButton.addEventListener("click", () => {
    sharePopup.classList.toggle("active")
    shareButton.classList.toggle("active")
})