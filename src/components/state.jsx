import { useEffect } from "react"
import { useRef, useState } from "react"



const CounterComponent = (props) => {
  const { value, onClick, title } = props

  console.log(`child component ${title} rendered`)

  return (
    <div className="flex flex-col">
      <h1>{title}</h1>
      <button className="btn" onClick={onClick}>
        Increment {title}
      </button>
      <h2>{value}</h2>
    </div>
  )
}

class StateCounterComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    }
    
  }

  render() {
    const [count, setCount] = useState(0);
    return (<div className="flex flex-col shadow-md p-8 bg-white rounded-lg">
      <h1>State</h1>
      <button className="btn" onClick={onClick={() => this.setState({ counter: this.state.counter + 1}) }}>
        Increment state
      </button>
      <h2>{count}</h2>
    </div>);
  }

}

export default function State() {
  const countRef = useRef(0)
  const [count, setCount] = useState(0)

  console.log("parent rerendered")

  let letCounter = 0

  const handleLetClick = () => {
    letCounter++
    console.log("incrementing let:", letCounter)
  }

  const handleRefClick = () => {
    countRef.current++
    console.log("incrementing ref:", countRef.current)
  }

  const handleParentStateClick = () => {
    setCount(count + 1)
  }

  return (
    <div className="flex gap-x-16 bg-red-500">
      {/* <StateCounterComponent />
      <StateCounterComponent />
      <CounterComponent
        title="Parent State"
        onClick={handleParentStateClick}
        value={count}
      />
      <CounterComponent
        title="Let"
        onClick={handleLetClick}
        value={letCounter}
      />
      <CounterComponent
        title="Ref"
        onClick={handleRefClick}
        value={countRef.current}
      /> */}
      <Pokemans name="koffing" />
      <Pokemans name="bulbasaur" />
      <Pokemans name="snorlax" />
      <Pokemans name="umbreon" />
      <Pokemans name="charmander" />
      <Pokemans name="pikachu" />
    </div>
  )
}
