import { useMemo } from 'react';
import uniqueId from 'lodash/uniqueId';

/**
 * make a uniqueId (using lodash)
 * memoized to prevent changing on render
 * @param prefix string optional string to add to unique id
 * @param size number optional length of uniqueId defaults to 10
 * @returns string unique id
 */
const useUniqueId = (prefix: string = '') => {
  return useMemo(() => `${uniqueId(prefix)}`, [prefix]);
};

export default useUniqueId;
