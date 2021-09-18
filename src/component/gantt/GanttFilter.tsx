import React, { useState, useLayoutEffect } from "react";
import { Form, Button, Input } from 'antd';
import { GanttStatic } from 'dhtmlx-gantt';

declare var gantt: GanttStatic;

const GanttFilter = () => {
  let [inputValue, setInputValue] = useState("");

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setInputValue(e.target.value);
  // };

  useLayoutEffect(() => {
    const onBeforeTaskDisplay = gantt.attachEvent("onBeforeTaskDisplay", (id, task) => {
        if (!inputValue) return true;
        const normalizedText = task.text.toLowerCase();
        const normalizedValue = inputValue.toLowerCase();
        return normalizedText.indexOf(normalizedValue) > -1;
      },
      {}
    );
    gantt.refreshData();
    return () => {
      gantt.detachEvent(onBeforeTaskDisplay);
    };
  }, [inputValue]);

  const onFinish = (values: any) => {
    console.log('values: ', values);
    if (values.person) {
      setInputValue(values.person)
    } else {
      gantt.render();
    }
  };

  return (
    <div className="filter">
      <Form
        name="搜索"
        layout="inline"
        onFinish={onFinish}
      >
        <Form.Item
          name="person"
          label="人员"
        >
          <Input
            style={{ width: 100 }}
            value={inputValue}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            搜索
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default GanttFilter;
