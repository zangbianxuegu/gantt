import { useReducer, useEffect } from "react";
import { fetchEventReducer } from "./fetch-event-reducer";
import { getData } from "../../services/gantt";
import GanttTask from "./GanttTask";
import axios from "axios";

const useFetchEvent = (params: Object) => {
  const [state, dispatch] = useReducer(fetchEventReducer, {
    data: [] as GanttTask[],
    loading: false,
    error: false,
  });

  useEffect(() => {
    let cancel = false;

    const init = async () => {
      dispatch({ type: "FETCH_INIT" });
      try {
        const res = await getData(params);
        let { data } = res;
        data = data
          .filter(
            (item: any) =>
              item.start_time !== "0000-00-00" && item.end_time !== "0000-00-00"
          )
          .map((item: any) => {
            return {
              ...item,
              start_date: item.start_time,
              end_date: item.end_time,
              text: item.task_name,
            };
          });
        // 树形结构
        const person = new Map();
        for (let index = 0; index < data.length; index++) {
          const item = data[index];
          if (!person.get(item.username)) {
            person.set(item.username, item.uid);
          }
          item.parent = item.uid;
        }
        for (const [key, value] of person.entries() as any) {
          data.push({
            username: key,
            text: key,
            id: value,
          })
        }

        console.log("data: ", data);

        if (!cancel) {
          dispatch({ type: "FETCH_SUCCESS", payload: data as GanttTask[] });
        }
      } catch (err) {
        console.log(err);

        if (!cancel) {
          dispatch({ type: "FETCH_ERROR" });
        }
      }
    };

    init();

    return () => {
      cancel = true;
    };
  }, []);

  return [state];
};

export { useFetchEvent };
