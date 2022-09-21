import { Badge, Button, Card, Dropdown, Menu, MenuProps, message, Space } from 'antd';
import React from 'react';
import { useDrop } from 'react-dnd';
import { COLUMNS, ItemTypes } from './ItemTypes';
import { Typography } from 'antd';
import { EllipsisOutlined, MoreOutlined } from '@ant-design/icons';
const { Title } = Typography;

const KhabBanColumn = ({ title, children }: any) => {
    const [{ isOver, canDrop }, drop] = useDrop(
        () => ({
          accept: [ItemTypes.ERRAND],
          drop: () => {
            return ({ name: title })
          },
          collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop()
          }),
          //  Override monitor.canDrop() function
          canDrop: (item: any) => {
            const { todo, doing, pending, done } = COLUMNS;
            const { currentColumnName } = item;
            return (
              currentColumnName === title ||
              (currentColumnName === todo && title === doing) ||
              (currentColumnName === doing &&
                (title === todo || title === pending)) ||
              (currentColumnName === pending &&
                (title === doing || title === done)) ||
              (currentColumnName === done && title === pending)
            );
          }
    }),[])

    const getBackgroundColor = () => {
      if (isOver) {
        if (canDrop) {
          return "bg-green-400";
        } else if (!canDrop) {
          return "bg-red-400";
        }
      } else {
        return "";
      }
    };

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
        ref={drop}
        className={`relative w-72 ${getBackgroundColor()}`}
        bodyStyle={{ padding: 10 }}
      > 
        <div className="flex justify-between items-center mb-1">
          <div className="flex justify-start items-center">
            <Badge status="success" />
            <h6 className="">{title}</h6>
            <Badge
              count={4}
              style={{ backgroundColor: '#fff', color: '#999', marginLeft: 2 }}
            />
          </div>
          <Dropdown overlay={cardMenu}>
            <a onClick={e => e.preventDefault()}>
              <Space>
                <MoreOutlined className="text-xl" />
              </Space>
            </a>
          </Dropdown>
        </div>
        <Button type="dashed" className="mb-2 text-left flex justify-center items-center" block>Add New</Button>
        <div>{children}</div>
        {isOver && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100%',
              width: '100%',
              zIndex: 1,
              opacity: 0.5,
              backgroundColor: '#c3c3c3',
            }}
          />
        )}
      </Card>
    )
};

export default KhabBanColumn
