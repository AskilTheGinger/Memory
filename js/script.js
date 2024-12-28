let images_array = [
    'flodhest.jpg',
    'hest.jpg',
    'hund.jpg',
    'katt.jpg',
    'løve.jpg',
    'skildpadde.jpg',
    'slange.jpg',
    'elg.jpg',
    'Mus.jpg',
    'sjiraff.jpg'

]
let x = 0
let image1 = ""

//Fisher-Yates shuffle som er den mest populære korrekte måten å shuffle en array.
function shuffle(array) {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
}
function turnImage(element) {
    let openedImage = document.getElementsByClassName("opened")
    console.log(openedImage)
    if (x == 1 && element.classList.contains("closed") === true){

        if (element.getAttribute("style") === image1) {

            x = 0
            element.classList.replace("closed", "opened")
            console.log("bra jobba")
            
            for (let i = 0; i < openedImage.length;) {
                openedImage[i].classList.replace("opened", "cleared")

            }
        } else {
            for (let i = 0; i < openedImage.length;) {
                openedImage[i].classList.replace("opened", "closed")
                console.log(openedImage)
            }
            x = 0
        }


    } else {
        element.id = "open"
        console.log(element.classList)
        element.classList.replace("closed", "opened")
    //Henter bakgrunnsbildet som elementet har og lagrer det som en string
        image1 = element.getAttribute("style")
        

        x++
    }
}
function assignImage(){
    let doubleImage = images_array.concat(images_array)

    shuffle(doubleImage)
    console.log(doubleImage)
    for (let i = 0; i < doubleImage.length; i++) {
        let children = document.getElementById("main").children
        children[i].style.backgroundImage = `url('bilder/${doubleImage[i]}')`;
        children[i].style.backgroundSize = 'cover'; // Ensure the image covers the entire div
        children[i].style.backgroundPosition = 'center'; // Center the image
        
    }
}
assignImage()