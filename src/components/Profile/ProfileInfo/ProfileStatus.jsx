import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
    }
    startOrStopEditMode (bool){
        this.setState({
            editMode: bool,
        });
        if(!bool) {
            this.props.updateProfileStatus(this.state.status);
        }
    }

    onStatusChange =(e)=> {
        let value = e.currentTarget.value;
        this.setState({
            status: value,
        });
    }
    render() {
        return (
            <div>
                {this.state.editMode ?
                    <div>
                        <input onChange = {this.onStatusChange} autoFocus = {true} onBlur = {() => {this.startOrStopEditMode(false)}} type="text" value={this.state.status} />
                    </div>
                    :
                    <div onDoubleClick = {()=>{this.startOrStopEditMode(true)}}>
                        <span>{this.state.status.length === 0? this.props.status: this.state.status}</span>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;