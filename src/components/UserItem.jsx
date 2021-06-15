import React, { Component } from "react";

class UserItem extends Component {
    onDeleteUser = () => {
        this.props.onDeleteUser(this.props.user.id);
    };
    onEditUser = () => {
        this.props.onEditUser(this.props.user.id);
    };
    render() {
        let { user, index } = this.props;
        console.log(user);
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{user.fullName}</td>
                <td>{user.email}</td>
                <td className="text-center">
                    <button
                        type="button"
                        className="btn btn-warning"
                        onClick={this.onEditUser}
                    >
                        Edit
                    </button>
                    &nbsp;
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={this.onDeleteUser}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        );
    }
}
export default UserItem;
