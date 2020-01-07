import React, { useState, useEffect } from 'react';

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateProfileStatus(status);
    }
    let [status, setStatus] = useState(props.status);
    const onStatusChange = (e) => {
        let value = e.currentTarget.value;
        setStatus(value);
    }
    useEffect(()=>{
        setStatus(props.status);
    },[props.status]);
    return (
        <div>
            {editMode ?
                <div>
                    <input onChange = {onStatusChange} autoFocus={true} type="text" value={status} onBlur={deactivateEditMode} />
                </div>
                :
                <div >
                    <span onDoubleClick={activateEditMode}>{!props.status ? '---' : props.status}</span>
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;