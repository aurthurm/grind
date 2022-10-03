import { message, Timeline } from 'antd';
import React, { useEffect, useState } from 'react';
import { useGetOccurrenciesLazyQuery } from '../../../generated/graphql';
import { asTimeAgo } from '../../../lib/utils';
import { IOccurrence } from '../../../models/occurrence';

interface IErrandActivityProps {
  target: string, targetId: string
}

const ErrandActivity = ({ target, targetId }: IErrandActivityProps) => {
  const [getOccurrencies, {  loading, error }] = useGetOccurrenciesLazyQuery();
  const [activities, setActivities] = useState<IOccurrence[]>([]);

  useEffect(() => {
    getOccurrencies({ variables:  { target, targetId }}).then(result => {
      setActivities(result?.data?.occurrences as any)
    }).catch(err => {
      message.success(`Failed to fetch errand occurrencies`);
      console.log(err);
    })
  }, [target, targetId])

  if(loading) {
    return (<>Loading Occurrencies</>)
  }

  if(error) {
    return (<>Error Loading Occurrencies: {error}</>)
  }

  return (
    <>
        <section>
          <h2 className="mb-4 ">Activity Stream</h2>
          
          <Timeline>
            {activities.map(activity => {
              return (
                <Timeline.Item key={activity._id}>
                  <div className="mb-2">
                    <div>{asTimeAgo(activity.createdAt)}</div>
                    <p>{activity.description}</p>
                  </div>
                </Timeline.Item>
              );
            })}
          </Timeline>
        </section>
    </>
  );
}
export default ErrandActivity;
