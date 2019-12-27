export const getUsersSelector = (state) => {
    return state.users.users;
}

export const getPageSizeSelector = (state) => {
    return state.users.pageSize;
}

export const getTotalUsersCountSelector = (state) => {
    return state.users.totalUserCount;
}

export const getCurrentPage = (state) => {
    return state.users.currentPage;
}

export const getUsersIsFetching = (state) => {
    return state.users.isFetching;
}

export const getUsersFollowLoad = (state) => {
    return state.users.followLoad;
}