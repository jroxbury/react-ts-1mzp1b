import React, { useState } from "react";

const initialData = [
  {
    name: "Joe",
    age: 30
  },
  {
    name: "Blair",
    age: 30
  },
  {
    name: "Ted",
    age: 30
  }
];

export function List(props) {
  const [data, setData] = useState(initialData);
  return (
    <div>
      <ul>
        {data.map(item => {
          return (
            <li>
              Name: {item.name}, Age: {item.age}
            </li>
          );
        })}
      </ul>
      <button onClick={() => setData([...data, { name: "Guy", age: 30 }])}>
        Add
      </button>
    </div>
  );
}
