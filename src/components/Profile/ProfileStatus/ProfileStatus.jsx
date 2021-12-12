import React from "react";
import styles from './ProfileStatus.module.css'

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status,
        statusChanged: false,
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }

    toggleEditMode = () => {
        this.setState({
            editMode: !this.state.editMode,
        });
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value,
            statusChanged: true,
        });
    }

    onClickApply = () => {
        this.props.updateStatus(this.state.status);
        this.setState({
            statusChanged: false,
        });
    }

    onClickCancel = () => {
        this.setState({
            status: this.props.status,
            statusChanged: false,
        });
    }

    render() {
        return (
            <div className={styles.container}>
                Status:
                {!this.state.editMode
                    ?
                    <div className={styles.statusContainer}>
                        <span onClick={this.toggleEditMode}>
                            {this.state.status ? this.state.status : 'No status'}
                        </span>
                        {this.state.statusChanged
                            ? <div>
                                <button onClick={this.onClickApply}>Apply</button>
                                <button onClick={this.onClickCancel}>Cancel</button>
                            </div>
                            : <div/>
                        }
                    </div>
                    :
                    <div className={styles.statusEditor}>
                        <input autoFocus={true}
                               onChange={this.onStatusChange}
                               onBlur={this.toggleEditMode}
                               value={this.state.status}
                        />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus