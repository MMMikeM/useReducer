import { useRef, useState } from "react"

export default function Controlleduncontrolled() {
  const [fieldValue, setFieldValue] = useState("")
  const inputRef = useRef(null)

  console.log(inputRef)

  const handleChange = (e) => {
    setFieldValue(e.target.value.replaceAll("083", "+2783"))
  }

  return (
    <>
      <input type="text" onChange={(e) => handleChange(e)} value={fieldValue} />
      <input
        type="text"
        ref={inputRef}
        onBlur={() => console.log(inputRef.current.value)}
      />
      <button onClick={() => console.log(inputRef.current.value)}>Stuff</button>
    </>
  )
}
