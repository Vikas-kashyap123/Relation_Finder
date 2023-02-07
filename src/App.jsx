import { useEffect, useState } from "react";

let loveColor = "text-yellow-500";

function App() {
  const [myName, setMyName] = useState("");
  const [otherName, setOtherName] = useState("");
  const [relation, setRelation] = useState("");

  useEffect(() => {
    if (
      (myName == "vikas" && otherName == "tannu") ||
      (otherName == "vikas" && myName == "tannu") ||
      (myName == "vicky" && otherName == "preeti") ||
      (otherName == "vicky" && myName == "preeti") ||
      (myName == "vikas" && otherName == "preeti") ||
      (otherName == "vikas" && myName == "preeti")
    ) {
      setRelation("Ex");
      loveColor = "text-green-500";
    } else if (
      (myName == "vicky" && otherName == "priyanshi") ||
      (myName == "vikas" && otherName == "mannu") || 
      otherName == "priyanshi" && myName == "vicky" ||
      otherName == "mannu" &&  myName == "vikas"
    ) {
      setRelation("Cousins");
    } else if(otherName.length>0) {
      setRelation("Friends Only");
      loveColor = "text-yellow-500";
    }
  }, [myName, otherName]);

  const handleMyName = (event) => {
    const action = event.target.value;
    const name = action.toLowerCase();
    setMyName(name);
  };

  const handleOtherName = (event) => {
    const action = event.target.value;
    const name = action.toLowerCase();
    setOtherName(name);
  };

  return (
    <div className="text-2xl bg-gradient-to-r
             from-cyan-200 to-blue-500 text-center w-full h-screen">
      <p className="text-gray-800">Find Relation</p>
      <div className="flex flex-col gap-2 items-center">
        <input
          placeholder="Your Name"
          className="border rounded-md border-gray-500 w-44 sm:w-full"
          value={myName}
          onChange={handleMyName}
        />
        <input
          placeholder="Someones Name"
          className="border rounded-md border-gray-500 w-44 sm:w-full"
          value={otherName}
          onChange={handleOtherName}
        />
      </div>
      <div>
        <h1 className={`${loveColor} text-2xl`}>{relation}</h1>
      </div>
    </div>
  );
}

export default App;
