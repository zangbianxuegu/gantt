import React, { useState, useEffect, useLayoutEffect } from 'react';
import GanttChart from './GanttChart';
import { useFetchEvent } from './useFetchEvent';
import GanttFilter from './GanttFilter';
import GanttToolBar from './GanttToolBar';
// import Toolbar from '../ToolBar';
import { GanttStatic } from 'dhtmlx-gantt';

declare var gantt: GanttStatic;

const Gantt: React.FC = () => {

  const [currentZoom, setCurrentZoom] = useState('Days');

  // First run with this setting where filter code are in this parent component
  // The result is that all are displayed correctly
  // Next comment out codes from // Commout out from here to // to here
  // and enable <GanttFilter /> component
  // Run it again, and this time, the UI will have the UI issue

  const [state] = useFetchEvent();

  // Commout out from here
  // const [filter, setFilter] = useState(false);

  // const handleFilter = () => {
  //     setFilter(!filter)
  // };

  // Using useLayoutEffect in child component will have the blank row issue after filter
  // But using in parent component will not
  // useLayoutEffect(() => {
  //     const onBeforeTaskDisplay = gantt.attachEvent("onBeforeTaskDisplay", function (id, task) {
  //         console.log("filters", task.text, filter)
  //         if (filter && task.duration > 4) {
  //             return false;
  //         }
  //         return true;
  //     });
  //     gantt.refreshData();

  //     // This should have been here
  //     return () => {
  //         gantt.detachEvent(onBeforeTaskDisplay);
  //     }
  // }, [filter])
  // to here

  console.log('state: ', state);

  const handleZoomChange = (zoom: string) => {
    setCurrentZoom(zoom)
  }
  

  return (
    <>
      {state.loading ?
        (<div>Loading ...</div>) :
        (
          <>
            <div className="gantt-header">
              <GanttFilter />
              <GanttToolBar zoom={currentZoom} onZoomChange={handleZoomChange} />
            </div>
            {/* <div className="zoom-bar">
              <Toolbar
                zoom={currentZoom}
              />
            </div> */}
            <GanttChart zoom={currentZoom} data={state.data} />
          </>
        )
      }
    </>
  )
};

export default Gantt;