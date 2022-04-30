export const autoRows = (minRowHeight = '20px') => `minmax(${minRowHeight}, auto)`;

export const frGetter = (value) => {
  if (!value) return;
  return typeof value === 'number' ? `repeat(${value}, 1fr)` : value;
};

export const formatAreas = (areas) => areas && areas.map((area) => `"${area}"`).join(' ');
