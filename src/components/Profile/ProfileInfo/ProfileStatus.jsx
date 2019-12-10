import React from 'react';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
    }
    startOrStopEditMode (bool){
        this.setState({
            editMode: bool,
        });
    }
    render() {
        return (
            <div>
                {this.state.editMode ?
                    <div>
                        <input autoFocus = {true} onBlur = {() => {this.startOrStopEditMode(false)}} type="text" value={this.props.status} />
                    </div>
                    :
                    <div onDoubleClick = {() => {this.startOrStopEditMode(true)}}>
                        <span>{this.props.status}</span>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;