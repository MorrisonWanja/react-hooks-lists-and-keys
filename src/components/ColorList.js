import React from "react";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];

   const colorElements=colors.map((color)=> {
    return <li key={color} style={{color:color}}>{color}</li>
   })
   const users = [
    { id: 1, firstName: "Duane", lastName: "Watson" },
    { id: 2, firstName: "Duane", lastName: "Johnson" },
  ];
  
  const userHeadings = users.map((user) => {
    return <p key={user.id}>{user.firstName}</p>;
  });

  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
        {colorElements}
      </ol>
      <h2>
        {userHeadings}
      </h2>
    </div>
    
  );
}

export default ColorList;
