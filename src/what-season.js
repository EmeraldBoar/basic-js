import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  const seasons = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter'];
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  try {
    if (new Date(date.toString()).getFullYear() !== date.getFullYear()) {
      throw new Error('Invalid date!');
    }
    const monthNumber = date.getMonth(date);
    return seasons[monthNumber];
  } catch (error) {
    throw new Error('Invalid date!');
  }
}
