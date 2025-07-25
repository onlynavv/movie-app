export const formatSecsToMins = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  return `${minutes} mins`;
}

export const calculateTrendingValue = (current, prev) => {
    const diff = ((current - prev) / prev) * 100;
    const arrow = diff >= 0 ? 'increase' : 'decrease';
    return {
        diff: `${Math.abs(diff).toFixed(1)}%`,
        arrow
    };
}