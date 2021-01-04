const sortJobs = (jobs) =>
  jobs.sort(([start1, end1], [start2, end2]) => {
    if (start1 < start2) return -1;
    if (start1 === start2 && end1 < end2) return -1;
    else return 1;
  });

const canMerge = ([a, b], [c, d]) => a <= d && c <= b;

const maximumCpuLoad = (jobs) => {
  if (jobs.length === 0) return 0;
  if (jobs.length === 1) return jobs[0][2];

  // sort the cpus start and end time

  sortJobs(jobs);

  // have a merge streak, keep track of the largest merge streak

  let maxLoad = jobs[0][2];
  let currentLoad = jobs[0][2];

  for (let i = 0; i < jobs.length; i++) {
    const firstJob = jobs[i];
    const secondJob = jobs[i + 1] || null;

    if (!secondJob) {
      break;
    }

    if (canMerge(firstJob, secondJob)) {
      currentLoad += secondJob[2];
    } else {
      currentLoad = secondJob[2];
    }

    if (currentLoad > maxLoad) maxLoad = currentLoad;
  }

  return maxLoad;
};

module.exports = maximumCpuLoad;
