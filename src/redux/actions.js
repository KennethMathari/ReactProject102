/*
 * action types
 */

export const ADD_USER = 'ADD_USER'
export const EDIT_USER = 'EDIT_USER'
export const SEARCH_USER = 'SEARCH_USER'

/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_USER: 'SHOW_USER',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action creators
 */

export function addUser(text) {
  return { type: ADD_USER, text }
}

export function editUser(text) {
  return { type: EDIT_USER, text }
}

export function searchUser(filter) {
  return { type: SEARCH_USER, filter }
}