import ButtonData from "../components/button/button-data"

var playMusic = new ButtonData("Play music", "Task 1 Page", playStart(), "blue")

function playStart(params) {
    console.log(params)
}

export default playMusic