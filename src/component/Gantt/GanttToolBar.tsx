import React, { useState, useLayoutEffect } from "react";
import { Radio, RadioChangeEvent } from "antd";
import { GanttStatic } from "dhtmlx-gantt";

declare var gantt: GanttStatic;

interface AppProps {
  zoom: string;
  onZoomChange: Function;
}

const GanttToolBar: React.FC<AppProps> = (props) => {
  const handleZoomChange = (e: RadioChangeEvent) => {
    props.onZoomChange(e.target.value);
  };

  return (
    <div className="toolbar">
      <Radio.Group
        defaultValue={props.zoom}
        buttonStyle="solid"
        onChange={handleZoomChange}
      >
        <Radio.Button value="Days">天</Radio.Button>
        <Radio.Button value="Months">月</Radio.Button>
        <Radio.Button value="Years">年</Radio.Button>
      </Radio.Group>
    </div>
  );
};

export default GanttToolBar;
