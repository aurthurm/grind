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


export const getInitials = (s: string) => {
  return s.match(/\b(\w)/g)?.join('')
};

export const formatBytes = (bytes: string, decimals: number = 2) => {
  if(+bytes == 0) return '0 Bytes';
  var k = 1024,
      sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
      i = Math.floor(Math.log(+bytes) / Math.log(k));
  return parseFloat((+bytes / Math.pow(k, i)).toFixed(decimals)) + ' ' + sizes[i];
}