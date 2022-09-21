import React from "react";
import "gantt-task-react/dist/index.css";
import { ViewMode } from "gantt-task-react";
import { Radio, Switch } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
type ViewSwitcherProps = {
  isChecked: boolean;
  onViewListChange: (isChecked: boolean) => void;
  onViewModeChange: (viewMode: ViewMode) => void;
};
export const ViewSwitcher: React.FC<ViewSwitcherProps> = ({
  onViewModeChange,
  onViewListChange,
  isChecked,
}) => {
  return (
    <div className="flex items-center justify-end mb-4">
      <Radio.Group defaultValue="a" size="small">
        <Radio.Button value="a" onClick={() => onViewModeChange(ViewMode.Hour)}>Hour</Radio.Button>
        <Radio.Button value="b" onClick={() => onViewModeChange(ViewMode.QuarterDay)}>Quarter of Day</Radio.Button>
        <Radio.Button value="c" onClick={() => onViewModeChange(ViewMode.HalfDay)}>Half of Day</Radio.Button>
        <Radio.Button value="d" onClick={() => onViewModeChange(ViewMode.Day)}>Day</Radio.Button>
        <Radio.Button value="d" onClick={() => onViewModeChange(ViewMode.Week)}>Week</Radio.Button>
        <Radio.Button value="d" onClick={() => onViewModeChange(ViewMode.Month)}>Month</Radio.Button>
        <Radio.Button value="d" onClick={() => onViewModeChange(ViewMode.Year)}>Year</Radio.Button>
      </Radio.Group>


 
      <div className="ml-4 flex items-center ">
        Show Task List
        <Switch
          checkedChildren={<CheckOutlined />}
          unCheckedChildren={<CloseOutlined />}
          defaultChecked={isChecked}
          onClick={() => onViewListChange(!isChecked)}
          className="bg-blue-500 ml-2"
        />
      </div>
    </div>
  );
};