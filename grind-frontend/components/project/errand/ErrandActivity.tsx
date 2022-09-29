import { Timeline } from 'antd';
import React from 'react';

const ErrandActivity = () => {
  return (
    <>
        <section>
          <h2 className="mb-4 ">Activity Stream</h2>
          
          <Timeline>
            <Timeline.Item>
              <div className="mb-2">
                <div>10-OCT-2021 - 05:14</div>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </Timeline.Item>
            <Timeline.Item>
              <div className="mb-2">
                <div>10-OCT-2021 - 05:14</div>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </Timeline.Item>
            <Timeline.Item>
              <div className="mb-2">
                <div>10-OCT-2021 - 05:14</div>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </Timeline.Item>
            <Timeline.Item>
              <div className="mb-2">
                <div>10-OCT-2021 - 05:14</div>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </Timeline.Item>
          </Timeline>
        </section>
    </>
  );
}
export default ErrandActivity;
