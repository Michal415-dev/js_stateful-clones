'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const result = [];

  let prevState = { ...state };

  for (const action of actions) {
    let next = { ...prevState };

    if (action.type === 'clear') {
      next = {};
    }

    if (action.type === 'addProperties') {
      next = { ...next, ...action.extraData };
    }

    if (action.type === 'removeProperties') {
      for (const key of action.keysToRemove) {
        delete next[key];
      }
    }

    result.push(next);
    prevState = next;
  }

  return result;
}

module.exports = transformStateWithClones;
