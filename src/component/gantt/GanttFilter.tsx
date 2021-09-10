/*
 * @Date: 2021-09-10 21:57:14
 * @LastEditors: zangbianxuegu
 * @LastEditTime: 2021-09-10 23:35:09
 * @FilePath: /so-react-gantt-demo/parent-child/src/component/gantt/GanttFilter.tsx
 */
import React, { useState, useLayoutEffect } from "react";

declare var gantt: GanttStatic;

const GanttFilter = () => {
  const [filter, setFilter] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleFilter = () => {
    setFilter(!filter);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useLayoutEffect(() => {
    const onBeforeTaskDisplay = gantt.attachEvent(
      "onBeforeTaskDisplay",
      function (id, task) {
        if (!inputValue) return true;
        const normalizedText = task.text.toLowerCase();
        const normalizedValue = inputValue.toLowerCase();
        return normalizedText.indexOf(normalizedValue) > -1;
      }
    );
    gantt.refreshData();

    // This should have been here
    return () => {
      gantt.detachEvent(onBeforeTaskDisplay);
    };
  }, [inputValue]);

  return (
    <>
      <input value={inputValue} onChange={handleChange}></input>
      {/* <button onClick={handleFilter}>filter</button> */}
    </>
  );
};

export default GanttFilter;
