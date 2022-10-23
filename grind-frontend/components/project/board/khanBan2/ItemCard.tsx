import {CSS} from '@dnd-kit/utilities';
import { useSortable } from "@dnd-kit/sortable";
import { Avatar, Dropdown, Menu, MenuProps, message, Progress, Space, Tag } from 'antd';
import Card from 'antd/lib/card/Card';
import {  EllipsisOutlined } from '@ant-design/icons';
import HtmlViewer from '../../../editors/HTMLViewer';
import Link from 'next/link';
import useSchemeStore from '../../../../stores/schemes';
import { getInitials, toMomentDate } from '../../../../lib/utils';

const ItemCard = ({ errand, poster, posterIndex, index, children }: any) => {
  const scheme = useSchemeStore((state) => state.scheme);
    const {
      attributes,
      listeners,
      setNodeRef,
      transform,
      transition,
    } = useSortable({
      id: errand?._id,
      data: { from: poster, fromIndex: posterIndex, index, errand } 
    });
    
    const style = { transform: CSS.Transform.toString(transform), transition }

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
        style={style}
        className={`my-2 border border-1 border-dashed border-gray-300 mb-1`}
        bodyStyle={{ padding: 8 }}
        >
        <div 
        ref={setNodeRef} {...listeners} {...attributes}
        className="flex justify-between items-center">
          <div className="my-2">
            <Link  href={`/admin/projects/${scheme?._id}/errand/${errand?._id}`} >
              <h6 className="font-semibold cursor-pointer">{ errand?.title }</h6>
            </Link>
          </div>
          <Dropdown overlay={cardMenu}>
            <a onClick={e => e.preventDefault()}>
              <Space>
                <EllipsisOutlined className="text-xl" />
              </Space>
            </a>
          </Dropdown>
        </div>

        <div className="cursor-move">
          {!!errand.stamps?.length 
          ? <div className="flex justify-start items-center my-2">
                {errand.stamps?.map((stamp: any) => (
                    <Tag key={stamp._id} color="#2db7f5">
                      {stamp?.title}
                    </Tag>
                ))}
            </div>
          :''}

          {children}

          <Progress percent={errand?.progress} size="small" status="active" />

          <div className="flex justify-between items-center">
              <Tag className="rounded-xl bg-gray-300">{toMomentDate(errand?.endDate)?.toDate().toLocaleDateString() ?? ''}</Tag>
              <Avatar.Group maxCount={1} maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
                {!!!errand.assignee ? '': 
                  <Avatar key={errand.assignee._id} style={{ backgroundColor: '#f56a00' }}>
                    {getInitials(`${errand.assignee?.firstName} ${errand.assignee?.lastName}`)}
                  </Avatar>
                }
                {errand.members?.map((member: any) => (
                  <Avatar key={member._id} style={{ backgroundColor: '#f56a00' }}>
                    {getInitials(`${member?.firstName} ${member?.lastName}`)}
                  </Avatar>
                ))}
              </Avatar.Group>
          </div>
        </div>

      </Card>
    )
};

export default ItemCard