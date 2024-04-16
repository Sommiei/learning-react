import { useState } from "react";
import { CiSearch } from "react-icons/ci";

export const ShowInputValue = () => {
  // FIRST DECLARATION
  const [InputText, setInput] = useState("");
  // SECOND DECLARATION
  const [Visible, setInvisible] = useState(true);
  // THIRD DECLARARTION
  const [InputString, setInputString] = useState("");
  const [length, setLength] = useState(0);

  // FOURTH QUESTION
  const [item, setItems] = useState([]);
  const [inputString2, setInputString2] = useState("");

  // FIFTH QUESTION
  const [ColorChange, setColorChange] = useState("");
  const ColorOptions = ["yellow","black","white","blue","red"]

  // SIXTH QUESTION
  const [myItems, SetMyItems] = useState([
    "Banana",
    "Apple",
    "Pawpaw",
    "Watermelon",
    "Cherry"
  ]);
  const [searchQuery, setSearchQuery]= useState('');

 

  // FIRST QUESTION
  const ShowValue = (e) => {
    const ChangeInput = e.target.value;
    setInput(ChangeInput);
  };
  // SECOND QUESTION FUNCTION
  const ShowToggle = (e) => {
    setInvisible(!Visible);
  };

  // THIRD QUESTION FUNCTION
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setInputString(inputValue);
    setLength(inputValue.length);
  };

  // FOURTH QUESTION FUNCTION

  const addItem = () => {
    if (inputString2.trim() !== "") {
      // Check if the item already exists in the list
      if (!item.includes(inputString2)) {
        setItems([...item, inputString2]);
      }
      setInputString2("");
    }
  };

  const deleteItem = (index) => {
    const newItems = [...item];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const handleInputChange2 = (event) => {
    const inputValue = event.target.value;
    setInputString2(inputValue);
  };

  // FIFTH QUESTION FUNCTION
  const ChangeColor = (e)=>{
    setColorChange(e.target.value);
  }

  // SIXTH QUESTION FUNCTION
  const handleSearchInp =(e)=>{
    setSearchQuery(e.target.value);

  }

  const ItemFilter = myItems.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
    )



  return (
    <>
    <div className=" bg-pink-500 w-screen ">
      <div className="w-screen flex flex-col justify-center items-center h-screen bg-pink-500 brightness-75">
        <div className="text-center text-blue-500 font-bold text-3xl">
          <h3>Showing Input</h3>
        </div>
        <div className="bg-black w-[400px] h-[300px] flex flex-col justify-center items-center rounded-3xl ">
          <input
            type="text"
            value={InputText}
            onChange={ShowValue}
            className="w-[300px] h-[80px] rounded-2xl bg-grey-500 outline-none font-bold text-2xl"
          />
          <div className="text-2xl font-bold">
            <p>Input text:</p>
            {InputText}
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center bg-black text-xl font-bold text-white w-full">
        <button
          className="border bg-blue-500 w-[200px] h-[50px] rounded-full"
          onClick={ShowToggle}
        >
          show/hide Text
        </button>
        {Visible && <p>Toggle</p>}
      </div>

      <div className="flex justify-center items-center text-xl bg-pink-500 text-grey-500 font-bold py-20">
        <input
          type="text"
          value={InputString}
          onChange={handleInputChange}
          placeholder="Enter a word"
          className="w-[400px] h-[100px] outline-none bg-black rounded-xl flex-wrap "
        />
        <p>Length of the string: {length}</p>
      </div>

      {/* Adding input and list for managing items */}
      <div className="flex flex-col justify-center items-center bg-pink-500 text-xl font-bold py-20">
        <input
          type="text"
          value={inputString2}
          onChange={handleInputChange2}
          placeholder="Enter a word"
          className="w-[400px] h-[50px] outline-none bg-black rounded-xl"
        />
        <button
          onClick={addItem}
          className="bg-blue-500 text-white rounded-full px-4 py-2 mt-2"
        >
          Add Item
        </button>
        <ul>
          {item.map((item, index) => (
            <li key={index}>
              {item} <button onClick={() => deleteItem(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
            <div className=" flex flex-col  justify-center items-center w-[400px] rounded-3xl">
              <select
              value = {ColorChange} 
              onChange = {ChangeColor} 
              className = 'rounded-3xl'
              >
                
                <option value="">select a color</option>
                {ColorOptions.map((col,idx)=>(
                <option key={idx} value={col}>{col}</option>
                )
                )}
              </select>
              {ColorChange && (
                <div 
                style={{
                  backgroundColor:ColorChange,
                }}

                className="w-[100px] mt-20 h-[100px] rounded-full animate-bounce">

                </div>
              )}
              
              </div>
              <div className="w-300px flex flex-col justify-center items-center mb-10">
                <input type="text"value={searchQuery} onChange={handleSearchInp}  placeholder="Search"className="rounded-3xl bg-black w-[300px] h-[50px]"/>
              <ul>
                {ItemFilter.map((item, idx)=>(
                  <li key={idx}>{item}

                  </li>
                )

                )}
              </ul>
              </div>
            </div>


    </>
  );
};
