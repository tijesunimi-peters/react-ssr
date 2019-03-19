import { parse } from 'iso8601-duration';

const timeTemplate = `%{hours}%{minutes}%{seconds}`;

export const durationParser = isoDuration => {
  if(!isoDuration) return;

  const parsed = parse(isoDuration);

  return timeTemplate
    .replace(/(%{hours})/, () => {
      return parsed.hours === 0 ? '' : parsed.hours + ' hours ';
    })
    .replace(/(%{minutes})/, () => {
      return parsed.minutes === 0 ? '' : parsed.minutes + ' minutes ';
    })
    .replace(/(%{seconds})/, () =>
      parsed.seconds === 0 ? '' : parsed.seconds + ' seconds'
    );
};
