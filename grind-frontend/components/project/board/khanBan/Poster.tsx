import { useDrop } from "react-dnd";
import { Badge, Button, Dropdown, Menu, MenuProps, message, Space } from "antd";
import React, { useState } from "react";
import { MoreOutlined } from "@ant-design/icons";
import AddErrandForm from "../../../forms/AddErrandForm";
import useBoardStore from "../../../../stores/board";
import { IErrand } from "../../../../models/errand";

const Poster = ({ poster, index, children }: any) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ["item"],
    drop: () => ({ ...poster }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const isActive = canDrop && isOver;
  let backgroundColor = "#222";
  if (isActive) {
    backgroundColor = "darkgreen";
  } else if (canDrop) {
    backgroundColor = "darkkhaki";
  }

  const [openErrandForm, setOpenErrandForm] = useState(false);
  const boardStore = useBoardStore();

  const onCardMenuClick: MenuProps["onClick"] = ({ key }) => {
    message.info(`Click on item ${key}`);
  };
  const cardMenu = (
    <Menu
      onClick={onCardMenuClick}
      items={[
        {
          label: "1st menu item",
          key: "1",
        },
        {
          label: "2nd menu item",
          key: "2",
        },
        {
          label: "3rd menu item",
          key: "3",
        },
      ]}
    />
  );

  return (
    <div className="w-72 p-2 bg-gray-100">
      <div className="flex justify-between items-center mb-1">
        <div className="flex justify-start items-center">
          <Badge status="success" />
          <h6 className="">{poster?.title}</h6>
          <Badge
            count={4}
            style={{ backgroundColor: "#fff", color: "#999", marginLeft: 2 }}
          />
        </div>
        <Dropdown overlay={cardMenu}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <MoreOutlined className="text-xl" />
            </Space>
          </a>
        </Dropdown>
      </div>
      <Button
        type="dashed"
        className="mb-2 text-left flex justify-center items-center"
        onClick={() => setOpenErrandForm(true)}
        block
      >
        Add New..
      </Button>

      <div ref={drop} style={{ backgroundColor }} className="min-h-full">
        {children}
      </div>

      {/* Modals */}
      <AddErrandForm
        open={openErrandForm}
        setOpen={setOpenErrandForm}
        goTo={null}
        category="PROJECT"
        extras={{ poster: poster._id }}
        handleResponse={boardStore.addErrand}
      />
    </div>
  );
};

export default Poster;
