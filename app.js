import Navbar from "./components/Navbar.js"
import Container from "./components/Container.js"
import BoxContainer from "./components/BoxContainer.js"

const App = () => {
document.getElementById("root").innerHTML += 
`
${Navbar()}
${Container()}
${BoxContainer()}
`
}

App()