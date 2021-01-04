// https://ttzztt.gitbooks.io/lc/content/heap/meeting-room.html

const isOverlapping = ([x1, x2], [y1, y2]) => y1 <= x2 && x1 <= y2;

// sort in place
const sortIntervals = (intervals) => {
  intervals.sort(([x1, x2], [y1, y2]) => {
    if (x1 < y1) {
      return -1;
    } else if (x1 === y1) {
      if (x2 < y2) return -1;
      else return 1;
    } else {
      return 1;
    }
  });
};

const minMeetingRooms = (meetings) => {
  sortIntervals(meetings);

  if (meetings.length === 0) return 0;
  if (meetings.length === 1) return 1;
  let currentComparedInterval = meetings[0];

  let meetingRooms = 1;
  let lastEndedMeeting = Infinity;
  for (let i = 1; i < meetings.length; i++) {
    if (
      isOverlapping(currentComparedInterval, meetings[i]) &&
      meetings[i][0] < lastEndedMeeting
    ) {
      meetingRooms += 1;
    }

    lastEndedMeeting = Math.min(currentComparedInterval[1], meetings[i][1]);
    currentComparedInterval =
      currentComparedInterval[1] > meetings[i][1]
        ? currentComparedInterval
        : meetings[i];
  }

  return meetingRooms;
};

module.exports = minMeetingRooms;
