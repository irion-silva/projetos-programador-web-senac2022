import calculate from './calc.js'
import copyToClipboard from './copy.js'
import { input, handleButtonPress, handleClear, handleTyping } from "./key.js"
import switchTheme from './theme.js'

document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", handleButtonPress)
})

document.querySelector("#clear").addEventListener("click", handleClear)
document.querySelector("#input").addEventListener("keydown", handleTyping)
document.querySelector("#equal").addEventListener("click", calculate)
document.querySelector("#copyToClipboard").addEventListener("click", copyToClipboard)
document.querySelector("#themeSwitcher").addEventListener("click", switchTheme)