const filters = {
    searchText: '',
    hideCompleted: false
}

const getFilters = () => filters

const setFliters = ({ searchText, hideCompleted }) => {
    if (typeof searchText === 'string') {
        filters.searchText = searchText
    }

    if (typeof hideCompleted === 'boolean') {
        filters.hideCompleted = hideCompleted
    }
}

export { getFilters, setFliters }