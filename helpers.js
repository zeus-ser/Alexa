function successfullMessage(msg) {
    return "β *Alexa*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "π *Alexa*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "βΊοΈ *Alexa*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
