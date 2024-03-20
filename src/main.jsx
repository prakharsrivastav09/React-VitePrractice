import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
function MyApp(){
  return(
    <div>
      <h1>Customapp !</h1>
    </div>
  )
}

const AnotherElement = (
  <a href="https://google.com" target='blank'>Visit Google</a>
)
const reactElement = React.createElement(
  'a',
  {href: 'https//google.com',target: 'blank'},
  'click me to visit google'
)


ReactDOM.createRoot(document.getElementById('root'))
.render(

 <App/>
)
