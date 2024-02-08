import { format, getDay, isToday, isTomorrow, startOfDay } from 'date-fns';
import {
  FormattedDate,
  ScreeningTimeByLocation,
  ShowTime,
} from 'src/app/services/movies/utils';

function customDateFormat(date: Date): string {
  if (isToday(date)) {
    return 'Today';
  } else if (isTomorrow(date)) {
    return 'Tomorrow';
  } else {
    return format(date, 'iiii, MMMM d');
  }
}

export const getFirstFiveDays = (date: Date, showTimes: ShowTime[]) => {
  const activeDayStart = startOfDay(date).toISOString();
  const uniqueDaysSet = new Set<string>();
  const first5UniqueDays: FormattedDate[] = [];

  for (const showTime of showTimes ?? []) {
    const day = startOfDay(showTime.date)?.toISOString();

    if (!uniqueDaysSet.has(day)) {
      uniqueDaysSet.add(day);
      first5UniqueDays.push({
        date: showTime.date,
        formatted: format(showTime.date, 'E dd'),
        isActive: activeDayStart === day,
      });

      // Break the loop when 5 unique days are found
      if (first5UniqueDays.length === 5) {
        break;
      }
    }
  }

  return first5UniqueDays;
};

export const getScreeningsForTheDay = (date: Date, showTimes: ShowTime[]) => {
  // Calculate the day index for the input date
  const inputDayIndex = getDay(startOfDay(date));
  // Filter dates array based on the input day
  const filteredDates = showTimes
    .filter((showTime) => getDay(startOfDay(showTime.date)) === inputDayIndex)
    .map((showTime) => {
      return {
        ...showTime,
        day: customDateFormat(showTime.date),
        time: format(showTime.date, 'h:mm a'),
      };
    })
    .sort((a, b) => {
      // First, compare by location
      const locationComparison = a.location.localeCompare(b.location);

      // If locations are equal, then compare by time
      if (locationComparison === 0) {
        return a.date.getTime() - b.date.getTime();
      }

      return locationComparison;
    });

  // Group by location
  return filteredDates.reduce((result, showTime) => {
    const { location } = showTime;
    const existingGroup = result.find((group) => group.location === location);

    if (existingGroup) {
      existingGroup.dates.push({
        date: showTime.date,
        time: showTime.time,
      });
    } else {
      result.push({
        location,
        day: showTime.day,
        movieFormat: showTime.movieFormat, // Assuming you have this property
        dates: [
          {
            date: showTime.date,
            time: showTime.time,
          },
        ],
        screen: showTime.screen,
        seatRows: showTime.seatRows,
      });
    }

    return result;
  }, [] as ScreeningTimeByLocation[]);
};
