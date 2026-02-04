

// -> 1 The number increases, decreases, and resets correctly when the respective buttons are clicked.

import { useState } from "react";
import {Button_inc, Button_dec, Button_reset, Paragraph} from "./components/Btn";

function App(){
  const [setCount, getCount] = useState(0);
  return(
    <>
    <Paragraph value={setCount}></Paragraph>
    <Button_inc on_Click={()=>{getCount(setCount+1)}}></Button_inc>
    <Button_dec on_Click={()=>{getCount(setCount-1)}}></Button_dec>
    <Button_reset on_Click={()=>{getCount(0)}}></Button_reset>
    </>
  );
}
export default App;

// ---------------------------------------------------------

// -> 2 The number increases, decreases, and resets correctly when the respective buttons are clicked.












































