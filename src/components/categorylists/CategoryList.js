import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import CategoryListItem from './CategoryListItem'

class CategoryList extends React.Component {
    state = {
        showAll: true,
        showVoted: 'All',
    }

    toggleOwnedView = () => {
        this.setState((prev) => ({
            showAll: !prev.showAll
        }))
    }

    toggleVoteView = (value) => {
        this.setState(() => ({
            showVoted: value
        }))
    }

    render() {
        const { allcategoryIDs, ownedCategories, voted, catsWithSubs } = this.props
        const { showAll, showVoted } = this.state

        let list = showAll === true
            ? allcategoryIDs
            : ownedCategories

        if (showVoted === 'All') {
            list = list
        } else if (showVoted === 'voted') {
            list = list.map((item) => item)
                .filter((item) => {
                    if (voted.includes(item)) {
                        return item
                    }
                })
        } else if (showVoted === 'notVoted') {
            list = list.map((item) => item)
                .filter((item) => {
                    if (!voted.includes(item)) {
                        return item
                    }
                })
        } else {
            alert('Something went wrong. Please try again.')
        }

        return (
            <div className='category-list-container'>
                <h2>Category List</h2>
                <div className='category-list-btn-group'>
                    <button
                        onClick={this.toggleOwnedView}>
                        {showAll === true ? 'Show Owned' : 'Show All'}
                    </button>
                    <span> | </span>
                    <button
                        style={{ textDecoration: showVoted === 'All' ? 'underline' : null }}
                        onClick={() => this.toggleVoteView('All')}>
                        Show All
                    </button>
                    <button
                        style={{ textDecoration: showVoted === 'voted' ? 'underline' : null }}
                        onClick={() => this.toggleVoteView('voted')}>
                        Show Voted
                    </button>
                    <button
                        style={{ textDecoration: showVoted === 'notVoted' ? 'underline' : null }}
                        onClick={() => this.toggleVoteView('notVoted')}>
                        Show Not Voted
                    </button>
                </div>
                <ul className='category-list' style={{ listStyle: 'none' }}>
                    {list.map((id) => {
                        const url = catsWithSubs.includes(id)
                            ? `/categories/${id}`
                            : { pathname: '/addsubmission', state: { categoryID: id } }
                        return (
                            <Link key={id} to={url}>
                                <li>
                                    <CategoryListItem id={id} />
                                </li>
                            </Link>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({ authedUser, categories, submissions }) {
    const allcategoryIDs = Object.keys(categories)
    const catsWithSubs = allcategoryIDs.filter((catID) => {
        return categories[catID].submissions.length > 0
    })
    const ownedCategories = allcategoryIDs.filter((catIDs) => categories[catIDs].owner === authedUser)

    const voted = Object.keys(submissions)
        .map((subs) => subs)
        .filter((subs) => {
            if (submissions[subs].upvotes.includes(authedUser) || submissions[subs].downvotes.includes(authedUser)) {
                return submissions[subs]
            }
        }).map((subs) => submissions[subs].category)

    
    return {
        allcategoryIDs,
        catsWithSubs,
        ownedCategories,
        voted,
    }
}

export default connect(mapStateToProps)(CategoryList)