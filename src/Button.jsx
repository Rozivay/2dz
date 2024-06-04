import { useDispatch } from "react-redux"
import { incrementNum, decrementNum, resetNum, setText, incrementNumByFive, decrementNumByFive } from "./redux/reducers"
import { useState, useEffect } from "react";

const Buttons = () => {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState(localStorage.getItem('text') || '')

  useEffect(() => {
    localStorage.setItem('text', inputText);
  }, [inputText]);

  return (
    <div>
       <button onClick={()=>{
        dispatch(incrementNum());
       }}>+</button>
       <button onClick={()=>{
        dispatch(decrementNum());
       }}>-</button>
       <button onClick={()=>{
        dispatch(resetNum())
       }}>reset</button>
       <br />
       <input type="text" value={inputText}
      onChange={ e => {
        setInputText(e.target.value);
        dispatch(setText(e.target.value));
      }} />
      <button onClick={()=>{
        dispatch(incrementNumByFive())
      }}>+5</button>
      <button onClick={()=>{
        dispatch(decrementNumByFive())
      }}>-5</button>
    </div>
  )
}

export default Buttons
