import React from 'react';
import { follow, unfollow, setUsers, setCurrentPage, toggleIsFetching, toggleFollowLoad } from '../../redux/usersReducer';
import { connect } from "react-redux";
import Users from './Users';
import {getUsers} from '../../api/api';
import Preloader from '../common/Preloader/Preloader';


class UsersContainer extends React.Component {

    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.toggleIsFetching(true);
            getUsers(this.props.currentPage, this.props.pageSize).then(response => {
                this.props.setUsers(response);
                this.props.toggleIsFetching(false);
            });
        }
    }

    onPageChanged = (page) => {
        //let pageNum = Number(page.target.innerHTML);
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(page);
        getUsers(page,this.props.pageSize).then(response => {
            this.props.setUsers(response);
            this.props.toggleIsFetching(false);
        });
    }

    render() {
        return (<>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                follow={this.props.follow}
                unfollow={this.props.unfollow}
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
    toggleFollowLoad
})(UsersContainer);