import {
    _getUsers,
    _getCategories,
    _getSubmissions,
} from './_DATA'

export function getInitialData () {
    return Promise.all([
      _getUsers(),
      _getCategories(),
      _getSubmissions(),
    ]).then(([users, categories, submissions]) => ({
      users,
      categories,
      submissions,
    }))
  }