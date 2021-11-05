import React, { useState, useEffect } from "react";
import GanttChart from "./GanttChart";
import { useFetchEvent } from "./useFetchEvent";
import GanttFilter from "./GanttFilter";
import GanttToolBar from "./GanttToolBar";
// import Toolbar from '../ToolBar';
import { GanttStatic } from "dhtmlx-gantt";

declare var gantt: GanttStatic;

const Gantt: React.FC = () => {
  const [currentZoom, setCurrentZoom] = useState("Days");
  const [data, setData] = useState({});

  const [state] = useFetchEvent({});

  console.log("state: ", state);

  useEffect(() => {
    setData(state.data);
  }, [state]);

  const handleZoomChange = (zoom: string) => {
    setCurrentZoom(zoom);
  };

  const handleSortByUsername = () => {
    console.log(2);
  };

  return (
    <>
      {state.loading ? (
        <div>Loading ...</div>
      ) : (
        <>
          <div className="gantt-header">
            <GanttFilter onSortByUsername={handleSortByUsername} />
            <GanttToolBar zoom={currentZoom} onZoomChange={handleZoomChange} />
          </div>
          {/* <div className="zoom-bar">
              <Toolbar
                zoom={currentZoom}
              />
            </div> */}
          <GanttChart zoom={currentZoom} data={data} />
        </>
      )}
    </>
  );
};

export default Gantt;
