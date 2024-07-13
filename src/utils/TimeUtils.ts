import dayjs from 'dayjs';

export const isCurrentTime = (time: string) => {
  console.log(dayjs(time).hour());
  return dayjs(time).hour() === dayjs().hour();
};
