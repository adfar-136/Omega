import React from "react";

export default function Next7Days(props) {
  var date = new Date();
  const filteredList = props.list.filter((task) => {
    var difftime = task.date - date;
    var diffday = Math.ceil(difftime / (1000 * 60 * 60 * 24));
    if (diffday < 7 && diffday > 0) {
      return true;
    }
    return false;
  });
  return (
    <div>
      <div>
        <h1>Tasks of Next 7 days date</h1>
        {filteredList.map((list) => {
          return (
            <div key={list.number}>
              <div>
                {list.title} ({list.date.toLocaleDateString()})
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
