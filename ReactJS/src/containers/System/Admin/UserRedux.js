import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getAllCodeService } from '../../../services/userService';

class UserRedux extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    async componentDidMount() {
        try {
            await getAllCodeService();
        } catch (e) {
            console.log(e);
        }
    }


    render() {
        return (
            <div className="user-redux-container">
                <div className="title">User Redux</div>
                <div className="user-redux-body" >
                    <div className="container">
                        <div class="row">
                            <div class="col-3">
                                <label><FormattedMessage id="manage-user.email" /></label>
                                <input type="email" class="form-control" />
                            </div>
                            <div class="col-3">
                                <label><FormattedMessage id="manage-user.password" /></label>
                                <input type="password" class="form-control" />
                            </div>
                            <div class="col-3">
                                <label><FormattedMessage id="manage-user.first-name" /></label>
                                <input type="text" class="form-control" />
                            </div>
                            <div class="col-3">
                                <label><FormattedMessage id="manage-user.last-name" /></label>
                                <input type="text" class="form-control" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <label><FormattedMessage id="manage-user.phone-number" /></label>
                                <input type="text" class="form-control" />
                            </div>
                            <div class="col-9">
                                <label><FormattedMessage id="manage-user.address" /></label>
                                <input type="text" class="form-control" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-3">
                                <label><FormattedMessage id="manage-user.gender" /></label>
                                <select class="form-control">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div class="col-3">
                                <label><FormattedMessage id="manage-user.position" /></label>
                                <select class="form-control">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div class="col-3">
                                <label><FormattedMessage id="manage-user.role" /></label>
                                <select class="form-control">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div class="col-3">
                                <label for="inputState"><FormattedMessage id="manage-user.image" /></label>
                                <input type="text" class="form-control" />
                            </div>
                        </div>
                        <div class="col-12 mt-3">
                            <button type="submit" class="btn btn-primary"><FormattedMessage id="manage-user.save" /></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
