import React from 'react';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
    }
    changeLocalState(bool){
        this.setState({
            editMode: bool,
        });
    }
    render() {
        return (
            <div>
                {this.state.editMode ?
                    <div>
                        <input autoFocus = {true} onBlur = {() => {this.changeLocalState(false)}} type="text" value={this.props.status} />
                    </div>
                    :
                    <div onDoubleClick = {() => {this.changeLocalState(true)}}>
                        <span>{this.props.status}</span>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;