import React, { useRef } from 'react';
import { Avatar, Divider, Dropdown, Menu, MenuProps, message, Progress, Space, Tag, Tooltip, Typography } from 'antd';
import { useDrag, useDrop } from 'react-dnd';
import { COLUMNS, ItemTypes } from './ItemTypes';
import Card from 'antd/lib/card/Card';
import { AntDesignOutlined, EllipsisOutlined, UserOutlined } from '@ant-design/icons';
const { Title, Text } = Typography;

const ErrandCard = ({ data, id, name, index, currentColumnName, moveCardHandler, setItems, children }: any) => {
    
    const changeItemColumn = (currentItem: any, columnName: string) => {
        setItems((prevState: any) => {
          return prevState.map((e: any) => {
            return {
              ...e,
              column: e.name === currentItem.name ? columnName : e.column
            };
          });
        });
    };

    const [{ isOver, canDrop }, dropRef] = useDrop({
        accept: ItemTypes.ERRAND,
        hover(item:any, monitor) {
          if (!ref.current) {
            return;
          }
          const dragIndex = item.index;
          const hoverIndex = index;
          // Don't replace items with themselves
          if (dragIndex === hoverIndex) {
            return;
          }
          // Determine rectangle on screen
          const hoverBoundingRect = (ref.current as any)?.getBoundingClientRect();
          // Get vertical middle
          const hoverMiddleY =
            (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
          // Determine mouse position
          const clientOffset = monitor.getClientOffset();
          // Get pixels to the top
          const hoverClientY = clientOffset!.y - hoverBoundingRect.top;
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
          moveCardHandler(dragIndex, hoverIndex);
          // Note: we're mutating the monitor item here!
          // Generally it's better to avoid mutations,
          // but it's good here for the sake of performance
          // to avoid expensive index searches.
          item.index = hoverIndex;
        },
        collect: (monitor) => ({
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop()
        }),
    });

    const [{ isDragging }, dragRef] = useDrag({
        item: { id, index, name, currentColumnName, type: ItemTypes.ERRAND },
        type: ItemTypes.ERRAND,
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult() as any;
            if (dropResult) {
              const { name } = dropResult;
              const { todo, doing, pending, done } = COLUMNS;
              switch (name) {
                case doing:
                  changeItemColumn(item, doing);
                  break;
                case pending:
                  changeItemColumn(item, pending);
                  break;
                case done:
                  changeItemColumn(item, done);
                  break;
                case todo:
                  changeItemColumn(item, todo);
                  break;
                default:
                  break;
              }
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    })

    const getBackgroundColor = () => {
        if (isOver) {
          if (canDrop) {
            return "bg-blue-400";
          } else if (!canDrop) {
            return "bg-yellow-400";
          }
        } else {
          return "";
        }
      };

    const ref = useRef(null);
    dragRef(dropRef(ref));

    const onCardMenuClick: MenuProps['onClick'] = ({ key }) => {
        message.info(`Click on item ${key}`);
      };
      const cardMenu = (
        <Menu
          onClick={onCardMenuClick}
          items={[
            {
              label: '1st menu item',
              key: '1',
            },
            {
              label: '2nd menu item',
              key: '2',
            },
            {
              label: '3rd menu item',
              key: '3',
            },
          ]}
        />
      );
    

    return (
        <Card 
        ref={ref}
        className={`my-2 border border-1 border-dashed border-gray-300 mb-1 cursor-move ${getBackgroundColor()} ${isDragging ? 'opacity-50' : 'opacity-100'}`}
        bodyStyle={{ padding: 8 }}
        >
        <div className="flex justify-between items-center">
          <div className="flex justify-start items-center">
            <Tag color="#2db7f5">good</Tag>
            <Tag color="#87d068">stuck</Tag>
          </div>
          <Dropdown overlay={cardMenu}>
            <a onClick={e => e.preventDefault()}>
              <Space>
                <EllipsisOutlined className="text-xl" />
              </Space>
            </a>
          </Dropdown>
        </div>

        <div className="my-2">
             <h6 className="font-semibold">{ data.name }</h6>
            <Text type="secondary" italic>We are the Team!</Text>
        </div>
        {children}

        <Progress percent={50} size="small" status="active" />

        <div className="flex justify-between items-center">
            <Tag className="rounded-xl bg-gray-300">23-10-2022</Tag>
            <Avatar.Group maxCount={1} maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
            <Avatar src="https://joeschmoe.io/api/v1/random" />
            <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
            <Avatar style={{ backgroundColor: '#f56a00' }}>AM</Avatar>
            <Avatar style={{ backgroundColor: '#f56a00' }}>PU</Avatar>
            <Tooltip title="Ant User" placement="top">
                <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
            </Tooltip>
            <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
            </Avatar.Group>
        </div>
      </Card>
    );
};


export default ErrandCard