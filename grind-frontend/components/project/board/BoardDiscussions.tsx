import { Avatar, Divider } from 'antd';
import { Typography } from 'antd';
const { Title, Text } = Typography;

const BoardDiscussion = () => {

  return (
    <> 
        <div className="flex items-center">
              <div className="flex-none ml-4">
                <div className="flex flex-col items-center">
                  <Avatar size='small' style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>AM</Avatar>
                  <Text type="warning">Today</Text>
                </div>
              </div>
              <div className="grow ml-4">
                  <Title level={5}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Title>
                  <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, inventore reiciendis. Voluptatem fuga ut a natus veritatis similique ratione velit vitae molestiae deleniti amet.</Text>
              </div>
            </div>
            <Divider className="my-4" />
            <div className="flex items-center">
              <div className="flex-none ml-4">
                <div className="flex flex-col items-center">
                  <Avatar size='small' style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>AM</Avatar>
                  <Text type="warning">Today</Text>
                </div>
              </div>
              <div className="grow ml-4">
                  <Title level={5}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Title>
                  <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, inventore reiciendis. Voluptatem fuga ut a natus veritatis similique ratione velit vitae molestiae deleniti amet.</Text>
              </div>
            </div>
            <Divider className="my-4" />
            <div className="flex items-center">
              <div className="flex-none ml-4">
                <div className="flex flex-col items-center">
                  <Avatar size='small' style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>AM</Avatar>
                  <Text type="warning">Today</Text>
                </div>
              </div>
              <div className="grow ml-4">
                  <Title level={5}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Title>
                  <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, inventore reiciendis. Voluptatem fuga ut a natus veritatis similique ratione velit vitae molestiae deleniti amet.</Text>
              </div>
            </div>
    </>
  );
}
export default BoardDiscussion;

