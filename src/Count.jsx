import { useSelector } from "react-redux"

const Count = () => {
    const num = useSelector(s => s.reducer.num)
    const text = useSelector(s => s.reducer.text)
  return (
    <div>
        <h1>{text}</h1>
    <h1>{num}</h1>
    </div>
  )
}

export default Count