import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeFooter.scss';

class HomeFooter extends Component {

    render() {

        return (
            <div className="section-homefooter">
                <p>&copy; 2022 with Vo Ngoc Tu React Web
                    <a target="_blank" href="https://github.com/NgocTuIT99/bookingcare">
                        &#8594; Click here view code &#8592;
                    </a>
                </p>
            </div>
        );
    }

}

// lay state cua redux
const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
