import React from "react";

const LogicFunc = ({myName, otherName}) => {
 return (myName == "vikas" && otherName == "tannu") ||
    (otherName == "vikas" && myName == "tannu") ||
    (myName == "vicky" && otherName == "preeti") ||
    (otherName == "vicky" && myName == "preeti") ||
    (myName == "vikas" && otherName == "preeti") ||
    (otherName == "vikas" && myName == "preeti");
    
};

export default LogicFunc;
