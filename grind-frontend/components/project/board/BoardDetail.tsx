import { Tabs } from "antd";
import BoardListing from "./BoardListing";
import GantChart from "../../../components/timeline/GanttTask";
import useBoardStore from "../../../stores/board";
import BoardDiscussion from "./BoardDiscussions";
import KhabBan from "./khanBan/Board";

const BoardDetail = () => {
  const boardStore = useBoardStore();

  if (boardStore.board === null || Object.keys(boardStore.board).length === 0) {
    return <p>No Board Selected</p>;
  }

  let tabs: any[] = [
    // { label: 'Discussions', key: 'discussions', children: <BoardDiscussion /> },
    { label: "Board View", key: "khanban", children: <KhabBan /> },
    { label: "Listing View", key: "board-listing", children: <BoardListing /> },
    { label: "TimeLine View", key: "gantt", children: <GantChart /> },
    { label: "Files", key: "files", children: "Files here ..." },
    { label: "Analytics", key: "analytics", children: "Analytics here ..." },
  ];

  return <Tabs items={tabs} />;
};
export default BoardDetail;
