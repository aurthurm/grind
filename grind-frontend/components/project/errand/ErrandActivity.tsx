import { message, Timeline } from 'antd';
import React, { useEffect, useState } from 'react';
import { useGetOccurrenciesLazyQuery } from '../../../generated/graphql';
import { asTimeAgo, getInitials } from '../../../lib/utils';
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
        <section className="max-h-96 overflow-y-scroll pt-4">
          <Timeline>
            {activities.map(activity => {
              return (
                <Timeline.Item key={activity._id}>
                  <div>
                    <div className="text-xs">occured {asTimeAgo(activity.createdAt)} by {getInitials(`${activity.actor?.firstName} ${activity.actor?.lastName}`)}</div>
                    <p className="text-sm italic">{activity.description}</p>
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
