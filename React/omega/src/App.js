import React from 'react'

export default function App() {
  const persons = [
    ["Name","Subject","Rating"],
    ["Adfar","Coding","10"],
    ["Debayan","React","9"],
    ["Vaishali","HTML","8"]
  ]
  return (
    <div>
      <table>
        <thead>
          <tr>
           {persons[0].map((x,i)=>{
            return <th key={i}>{x}</th>
           })}
          </tr>
        </thead>
        <tbody>
          {persons.slice(1,persons.length).map((y,i)=>{
            return (
              <tr key={i}>
                <td>{y[0]}</td>
                <td>{y[1]}</td>
                <td>{y[2]}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

