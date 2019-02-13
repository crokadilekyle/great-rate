import {
    _getUsers,
    _getCategories,
    _getSubmissions,
    _saveCategory,
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

  export function saveCategory (category) {
    return _saveCategory(category)
      .then((category) => category)
  }