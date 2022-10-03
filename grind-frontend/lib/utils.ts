import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import moment from 'moment';

dayjs.extend(relativeTime)

export function parseDate(s: string) {
    s = s?.toString()
    let [C,Y,M,D] = s.match(/\d\d/g)!;
    return (new Date(+C+(+Y), +M-1, +D).toISOString()).slice(0,10);
}

export const debounce = (func: Function, timeout = 300) => {
    let timer: any;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  }


export const asTimeAgo = (s: string) => dayjs(s).fromNow();

export const toMomentDate = (s: string) => {
  if(!s) return undefined;
  return moment(s);
};