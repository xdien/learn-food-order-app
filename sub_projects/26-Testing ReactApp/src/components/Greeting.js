import { useState } from "react";

const Greeting = () => {
    const [changedText, setChangedText] = useState(false);
    const changedTextHanlder = () =>{
        setChangedText(true);
    };
  return <div>
    <h2>Hello world</h2>
    {!changedText && <p>It's good to see you!</p>}
    {changedText && <p>Changed!</p>}
    <button onClick={changedTextHanlder}>Changed text</button>
    </div>;
};

export default Greeting;
