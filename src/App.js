import "./App.css";
import React, { Component } from "react";
import AddForm from "./components/AddForm";
import UserList from "./components/UserList";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            isDisPlayForm: false,
        };
    }
    onToggleForm = () => {
        this.setState({
            isDisPlayForm: !this.state.isDisPlayForm,
        });
    };
    componentDidMount() {
        console.log(localStorage.getItem("users"));
        if (localStorage && localStorage.getItem("users")) {
            let users = JSON.parse(localStorage.getItem("users"));
            this.setState({
                users: users,
            });
        }
    }
    onSubmit = (data) => {
        let users = this.state.users;
        if (data.id === "") {
            data.id = users.length + 1;
            users.push(data);
            this.setState({
                users: users,
            });
            localStorage.setItem("users", JSON.stringify(users));
        }
        else{
            let index = this.findIndex(data.id);
            users[index] = data;
            this.setState({
                users : users,
                editing : false,
            })
            localStorage.setItem("users", JSON.stringify(users));
        }
        this.onCloseForm();
    };
    onCloseForm = () => {
        this.setState({
            isDisPlayForm: false,
        });
    }
    onShowForm = () => {
        this.setState({
            isDisPlayForm: true,
        });
    };
    findIndex = (id) => {
        let users = this.state.users;
        var result = -1;
        users.forEach((user, index) => {
            if (user.id === id) {
                result = index;
            }
        });
        return result;
    };
    onDeleteUser = (id) => {
        let users = this.state.users;
        let index = this.findIndex(id);
        if (index !== -1) {
            users.splice(index, 1);
            this.setState({
                users: users,
            });
            localStorage.setItem("users", JSON.stringify(users));
        }
    };
    onEditUser = (id) => {
        this.onShowForm();
        let users = this.state.users;
        let index = this.findIndex(id);
        let editing = users[index];
        this.setState({
            editing: editing,
        });
    };
    render() {
        let editing = this.state.editing;
        let isDisPlayForm = this.state.isDisPlayForm;
        let users = this.state.users;
        let formAddUser =
            isDisPlayForm === true ? (
                <AddForm onSubmit={this.onSubmit} editing={editing} onCloseForm={this.onCloseForm}/>
            ) : (
                ""
            );
        return (
            <div className="container">
                <div className="text-center">
                    <h1>List</h1>
                    <hr />
                </div>
                <div className="row">
                    <div
                        className={
                            isDisPlayForm === true
                                ? "col-xs-4 col-sm-4 col-md-4 col-lg-4"
                                : ""
                        }
                    >
                        {formAddUser}
                    </div>
                    <div
                        className={
                            isDisPlayForm === true
                                ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
                                : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
                        }
                    >
                        <button
                            type="button"
                            className="btn btn-primary mb-15"
                            onClick={this.onToggleForm}
                        >
                            {isDisPlayForm === true
                                ? "Exit Form"
                                : " Add User "}
                        </button>
                        <UserList
                            users={users}
                            onEditUser={this.onEditUser}
                            onDeleteUser={this.onDeleteUser}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
