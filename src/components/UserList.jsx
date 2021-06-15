import React, { Component } from "react";
import UserItem from "./UserItem";

class UserList extends Component {
    render() {
        let users = this.props.users;
        let elementUser = users.map((user, index) => {
            return (
                <UserItem
                    user={user}
                    index={index}
                    key={index}
                    onEditUser={this.props.onEditUser}
                    onDeleteUser={this.props.onDeleteUser}
                />
            );
        });
        return (
            <div className="row mt-15">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th className="text-center"></th>
                                <th className="text-center">Full Name</th>
                                <th className="text-center">Email</th>
                                <th className="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>{elementUser}</tbody>
                    </table>
                </div>
            </div>
        );
    }
}
export default UserList;
