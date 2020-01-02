import React from 'react';
import { follow, unfollow, setUsers, setCurrentPage, toggleIsFetching, toggleFollowLoad, getUsers, followThunk, unfollowThunk } from '../../redux/usersReducer';
import { connect } from "react-redux";
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import {getUsersSuperSelector, getUsersSelector, getPageSizeSelector, getTotalUsersCountSelector, getCurrentPage, getUsersIsFetching, getUsersFollowLoad} from '../../redux/usersSelector';


class UsersContainer extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.getUsers(this.props.currentPage, this.props.pageSize);   
        }
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        this.props.getUsers(page, this.props.pageSize);
        //let pageNum = Number(page.target.innerHTML);
        /*
        this.props.toggleIsFetching(true);
        getUsers(page,this.props.pageSize).then(response => {
            this.props.setUsers(response);
            this.props.toggleIsFetching(false);
        });
        */
    }

    render() {
        return (<>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                follow={this.props.follow}
                followThunk = {this.props.followThunk}
                unfollow={this.props.unfollow}
                unfollowThunk = {this.props.unfollowThunk}
                users={this.props.users}
                totalUserCount={this.props.totalUserCount}
                pageSize={this.props.pageSize}
                onPageChanged={this.onPageChanged}
                currentPage={this.props.currentPage} 
                toggleFollowLoad = {this.props.toggleFollowLoad}
                followLoad = {this.props.followLoad}
                />
                
        </>
        )
    }
}
/*
let mapStateToProps = (state) => {
    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalUserCount: state.users.totalUserCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
        followLoad: state.users.followLoad,
    }
}
*/

let mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSizeSelector(state),
        totalUserCount: getTotalUsersCountSelector(state),
        currentPage: getCurrentPage(state),
        isFetching: getUsersIsFetching(state),
        followLoad: getUsersFollowLoad(state),
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            let action = follow(userId);
            dispatch(action);
        },
        unfollow: (userId) => {
            let action = unfollow(userId);
            dispatch(action);
        },
        setUsers: (users) => {
            let action = setUsers(users);
            dispatch(action);
        },
        setCurrentPage: (page) => {
            let action = setCurrentPage(page);
            dispatch(action);
        },
        toggleIsFetching: (isFetching) => {
            let action = toggleIsFetching(isFetching);
            dispatch(action);
        }
    }
}


export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    toggleIsFetching,
    toggleFollowLoad,
    getUsers,
    followThunk,
    unfollowThunk,
})(UsersContainer);