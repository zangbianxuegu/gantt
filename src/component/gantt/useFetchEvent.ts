import { useReducer, useEffect } from "react";
import { fetchEventReducer } from "./fetch-event-reducer";
import { getData } from "../../services/gantt"
import GanttTask from "./GanttTask";
import axios from "axios";

const sleep = (ms: number) => {
	return new Promise(resolve => setTimeout(resolve, ms));
};

const useFetchEvent = () => {
	const [state, dispatch] = useReducer(fetchEventReducer, {
		data: [] as GanttTask[],
		loading: false,
		error: false,
	});

	useEffect(() => {
		let cancel = false;

		const init = async () => {
			dispatch({ type: 'FETCH_INIT' });
			try {
				// Simulate a fetch event
				// await sleep(1000);
				axios.post('/zentao/gantt').then(() => {
					console.log(111);
				})
				const res = await getData()
				console.log('res', res);
				const data = res.data;
				
				
				if (!cancel) {
					dispatch({ type: 'FETCH_SUCCESS', payload: data as GanttTask[] });
				}
			} catch (err) {
				console.log(err);
				
				if (!cancel) {
					dispatch({ type: 'FETCH_ERROR' });
				}
			}
		}

		init();

		return () => {
			cancel = true;
		};
	}, []);

	return [state];
};

export {
	useFetchEvent
}