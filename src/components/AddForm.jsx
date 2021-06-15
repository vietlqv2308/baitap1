import React, { Component } from "react";
class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id : "",
            fullName: "",
            email: "",
            status : false,
        };
    }
    onChange = (event) => {
        this.setState({
           [event.target.name] : event.target.value,
        })
    }
    onSubmit = (event) => {
        event.preventDefault();
        let newState = this.state;
        if(newState.fullName !== "" && newState.email !== ""){
            this.props.onSubmit(newState);
            this.setState = {
                id : "",
                fullName: "",
                email: "",
            }
        }else{
            this.setState({
                status : true
            })
        }
        
        
    }
    onCloseForm = () => {
        this.props.onCloseForm();
    }
    componentDidMount() {
        if (this.props.editing) {
            console.log(this.props.editing.id);
            this.setState({
                id : this.props.editing.id,
                fullName: this.props.editing.fullName,
                email : this.props.editing.email
            })
            console.log(this.state);
        }
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        if (nextProps && nextProps.editing) {
            console.log('editing');
            this.setState({
                id: nextProps.editing.id,
                fullName: nextProps.editing.fullName,
                email: nextProps.editing.email,
            });
        }
    }
    render() {
        let user = this.state;
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">Add User</h3>
                </div>
                <div className="panel-body">
                    <form>
                        <div className="form-group">
                            <label>Full Name :</label>
                            <input
                                type="text"
                                className="form-control"
                                name="fullName"
                                onChange={this.onChange}
                                value={user.fullName}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Email :</label>
                            <input
                                type="text"
                                className="form-control"
                                name="email"
                                onChange={this.onChange}
                                value={user.email}
                                required
                            />
                        </div>
                        <p className="text-danger text-center">
                            {user.status === true ? "Vui Lòng Nhập Tên Và Email" : ""}
                        </p>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="btn btn-warning"
                                onClick={this.onSubmit}
                            >
                                Add
                            </button>
                            &nbsp;
                            <button type="submit" className="btn btn-danger" onClick={this.onCloseForm}>
                                Exit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
export default AddForm;
