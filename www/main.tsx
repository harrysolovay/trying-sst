import { render } from "preact"

render(<Main />, document.getElementById("app")!)

function Main() {
  console.log(`Server Url: ${process.env.API_URL}`)
  return <div>Hi</div>
}
