import React, { useEffect } from 'react';
import 'dhtmlx-gantt';
import './Gantt.css';
// import 'dhtmlx-gantt/codebase/ext/dhtmlxgantt_marker';
import 'dhtmlx-gantt/codebase/skins/dhtmlxgantt_meadow.css';
// import data from './data/data';
import { GanttStatic } from 'dhtmlx-gantt';

declare var gantt: GanttStatic;

interface AppProps {
  zoom: string;
  data: object;
}

const GanttChart: React.FC<AppProps> = (props) => {
	console.log('props', props);

	const initZoom = () => {
    gantt.ext.zoom.init({
      levels: [
        {
          name: 'Hours',
          scale_height: 60,
          min_column_width: 30,
          scales: [
            { unit: 'day', step: 1, format: '%d %M' },
            { unit: 'hour', step: 1, format: '%H' }
          ]
        },
        {
          name: 'Days',
          scale_height: 60,
          min_column_width: 70,
          scales: [
            { unit: 'week', step: 1, format: 'Week #%W' },
            { unit: 'day', step: 1, format: '%d %M' }
          ]
        },
        {
          name: 'Months',
          scale_height: 60,
          min_column_width: 70,
          scales: [
            { unit: "month", step: 1, format: '%F' },
            { unit: 'week', step: 1, format: '#%W' }
          ]
        },
        {
          name: 'Years',
          scale_height: 60,
          min_column_width: 70,
          scales: [
            { unit: "year", step: 1, format: '%Y' },
            { unit: 'month', step: 1, format: '#%F' }
          ]
        }
      ]
    });
  }

  initZoom();

  const setZoom = (value :string) => {
    gantt.ext.zoom.setLevel(value);
  }

	setZoom(props.zoom);

	useEffect(() => {
		gantt.config.xml_date = '%Y-%m-%d %H:%i';
		gantt.config.server_utc = true;
		// gantt.config.smart_rendering = false;
		gantt.config.readonly = true;
		gantt.config.columns = [
      {
        name: 'task_name',
        label: '任务名称',
        min_width: 300,
      },
      {
        name: 'start_date',
        label: '开始日期',
      },
      {
        name: 'end_date',
        label: '截止日期',
      },
      {
        name: 'duration',
        label: '持续时间',
      },
      {
        name: 'progress',
        label: '进度',
      }
    ]
		gantt.i18n.setLocale('cn');
		gantt.init('gantt');
	}, []);

	useEffect(() => {
		gantt.parse({
			data: props.data,
		});
		gantt.render();
	});

	return (
		<>
			<div className="gantt-box">
				<div id="gantt" />
			</div >
		</>
	);
}

export default GanttChart;