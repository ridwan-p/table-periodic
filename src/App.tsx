import { useState } from 'react'
import './App.css'
import { Element } from './components'
import data from './assets/elements.json'

function App() {
  const [element, setElement] = useState(data[0])

  return (
    <div className="App">
      {
        data.map((item, key) => (
          <Element
            key={key}
            xPos={item.xpos}
            yPos={item.ypos}
            symbol={item.symbol}
            name={item.name}
            nomor={item.number}
            massa={item.atomic_mass}
            color={item['cpk-hex']}
          />
        ))
      }
    </div>
  )
}

export default App
