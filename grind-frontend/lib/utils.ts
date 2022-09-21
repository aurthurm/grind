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