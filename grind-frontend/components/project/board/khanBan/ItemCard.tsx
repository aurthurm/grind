import { useDrag, useDrop } from "react-dnd";
import {
  Avatar,
  Dropdown,
  Menu,
  MenuProps,
  message,
  Progress,
  Space,
  Tag,
} from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import Link from "next/link";
import useSchemeStore from "../../../../stores/schemes";
import { getInitials, toMomentDate } from "../../../../lib/utils";
import { IErrand } from "../../../../models/errand";
import useBoardStore from "../../../../stores/board";
import { useRef } from "react";
import { useEditErrandMutation } from "../../../../generated/graphql";

const ItemCard = ({ errand, poster, posterIndex, index }: any) => {
  const scheme = useSchemeStore((state) => state.scheme);
  const boardStore = useBoardStore();
  const [updateErrandMutation, { loading, data, error }] =
    useEditErrandMutation();

  const switchErrandPoster = (
    errandItem: IErrand,
    fromPoster: string,
    toPoster: string
  ) => {
    updateErrandMutation({
      variables: { payload: { id: errandItem?._id, poster: toPoster } },
    })
      .then((result) => {
        message.success(`Update success`);
        if (result.data) {
          boardStore.switchErrandPoster(errandItem?._id, fromPoster, toPoster, {
            ...errandItem,
            poster: result.data.updateErrand?.poster,
          });
        }
      })
      .catch((err) => {
        message.success(`update failed ${err.message}`);
      });
  };

  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: "item",
    hover(item: IErrand & { index: number }, monitor) {
      if (!ref.current) {
        return;
      }
      // disable sorting
      // return;
      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      } // Determine rectangle on screen
      const hoverBoundingRect = (ref.current as any)?.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset() as any;
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action
      console.log(posterIndex, dragIndex, hoverIndex);
      boardStore.switchErrandPosition(posterIndex, dragIndex, hoverIndex);
    },
  });
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "item",
    item: { id: errand._id, ...errand, type: "item" },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult() as IErrand;
      if (item && dropResult) {
        if (item.poster._id === dropResult._id) {
          // drag and grop in same container
          // sorted ?
          return;
        }
        switchErrandPoster(item, poster._id, dropResult._id);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));
  const opacity = isDragging ? 0.4 : 1;

  drag(drop(ref));

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
    <div
      ref={ref}
      style={{ opacity }}
      className={`my-2 p-2 border border-1 border-dashed border-gray-300 mb-1 bg-white`}
    >
      <div className="flex justify-between items-center">
        <div className="my-2">
          <Link href={`/admin/projects/${scheme?._id}/errand/${errand?._id}`}>
            <h6 className="font-semibold cursor-pointer">{errand?.title}</h6>
          </Link>
        </div>
        <Dropdown overlay={cardMenu}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <EllipsisOutlined className="text-xl" />
            </Space>
          </a>
        </Dropdown>
      </div>

      <div className="cursor-move">
        {!!errand?.stamps?.length ? (
          <div className="flex justify-start items-center my-2">
            {errand?.stamps?.map((stamp: any) => (
              <Tag key={stamp._id} color="#2db7f5">
                {stamp?.title}
              </Tag>
            ))}
          </div>
        ) : (
          ""
        )}

        <Progress percent={errand?.progress} size="small" status="active" />

        <div className="flex justify-between items-center">
          <Tag className="rounded-xl bg-gray-300">
            {toMomentDate(errand?.endDate)?.toDate().toLocaleDateString() ?? ""}
          </Tag>
          <Avatar.Group
            maxCount={1}
            maxStyle={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
          >
            {!!!errand?.assignee ? (
              ""
            ) : (
              <Avatar
                key={errand?.assignee._id}
                style={{ backgroundColor: "#f56a00" }}
              >
                {getInitials(
                  `${errand?.assignee?.firstName} ${errand?.assignee?.lastName}`
                )}
              </Avatar>
            )}
            {errand.members?.map((member: any) => (
              <Avatar key={member._id} style={{ backgroundColor: "#f56a00" }}>
                {getInitials(`${member?.firstName} ${member?.lastName}`)}
              </Avatar>
            ))}
          </Avatar.Group>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
