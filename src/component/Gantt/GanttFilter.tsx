import React, { useState, useLayoutEffect } from "react";
import { Form, Button, Input, DatePicker, Select } from "antd";
const { Option } = Select;
import { GanttStatic } from "dhtmlx-gantt";

declare var gantt: GanttStatic;

interface AppProps {
  onSortByUsername: Function;
}

const GanttFilter: React.FC<AppProps> = (props) => {
  let [inputValue, setInputValue] = useState("");
  let [dept, setDept] = useState("");
  let [startTime, setStartTime] = useState(null);

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setInputValue(e.target.value);
  // };

  // 根据人名过滤
  useLayoutEffect(() => {
    const onBeforeTaskDisplay = gantt.attachEvent(
      "onBeforeTaskDisplay",
      (id, task) => {
        if (!inputValue) return true;
        return task.username.indexOf(inputValue) > -1;
      },
      {}
    );
    gantt.refreshData();
    return () => {
      gantt.detachEvent(onBeforeTaskDisplay);
    };
  }, [inputValue]);

  // 根据组织架构过滤
  useLayoutEffect(() => {
    const onBeforeTaskDisplay = gantt.attachEvent(
      "onBeforeTaskDisplay",
      (id, task) => {
        if (!dept) return true;
        return task.dept === dept;
      },
      {}
    );
    gantt.refreshData();
    return () => {
      gantt.detachEvent(onBeforeTaskDisplay);
    };
  }, [dept]);

  const onFinish = (values: any) => {
    setInputValue(values.person);
    gantt.render();
  };

  const handleSelectChange = (value: any) => {
    console.log(value);
    setDept(value);
  };

  return (
    <div className="filter">
      <Form name="搜索" layout="inline" onFinish={onFinish}>
        <Form.Item name="person" label="人员">
          <Input style={{ width: 150 }} value={inputValue} allowClear />
        </Form.Item>
        {/* <Form.Item name="startTime" label="开始日期">
          <DatePicker name="startTime" value={startTime} />
        </Form.Item> */}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            搜索
          </Button>
        </Form.Item>
        <Form.Item name="dept" label="按组织架构过滤">
          <Select
            allowClear
            value={dept}
            style={{ width: 150 }}
            onChange={handleSelectChange}
          >
            <Option value="产品">产品</Option>
            <Option value="UI">UI</Option>
            <Option value="前端">前端</Option>
            <Option value="erp后台">erp后台</Option>
            <Option value="商城后台">商城后台</Option>
            <Option value="java开发">java开发</Option>
            <Option value="安卓客户端">安卓客户端</Option>
            <Option value="ios客户端">ios客户端</Option>
            <Option value="大数据开发组">大数据开发组</Option>
            <Option value="测试">测试</Option>
            <Option value="技术部">技术部</Option>
          </Select>
        </Form.Item>
      </Form>
    </div>
  );
};

export default GanttFilter;
