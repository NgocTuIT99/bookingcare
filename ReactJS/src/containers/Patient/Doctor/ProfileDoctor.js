import React, { Component } from 'react';
import { connect } from "react-redux";
import './ProfileDoctor.scss';
import { FormattedMessage } from 'react-intl'
import { LANGUAGES } from '../../../utils';
import { getProfileDoctorById } from '../../../services/userService';
import NumberFormat from 'react-number-format';

class ProfileDoctor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataProfiles: {},
        }
    }

    async componentDidMount() {
        let data = await this.getInforDoctor(this.props.doctorId);
        this.setState({ dataProfiles: data });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    getInforDoctor = async (id) => {
        let result = {};
        if (id) {
            let res = await getProfileDoctorById(id);
            if (res && res.errCode === 0) {
                result = res.data
            }
        }
        return result;
    }

    render() {
        let { dataProfiles } = this.state;
        let { language } = this.props;

        let nameVi = '', nameEn = '';
        if (dataProfiles && dataProfiles.positionData) {
            nameVi = `${dataProfiles.positionData.valueVi}, ${dataProfiles.lastName} ${dataProfiles.firstName}`;
            nameEn = `${dataProfiles.positionData.valueEn}, ${dataProfiles.firstName} ${dataProfiles.lastName}`;
        }

        return (
            <div className="profile-doctor-container">
                <div className="intro-doctor">
                    <div
                        className="content-left"
                        style={{ backgroundImage: `url(${dataProfiles && dataProfiles.image ? dataProfiles.image : ''})` }}
                    >
                    </div>
                    <div className="content-right">
                        <div className="up">
                            {language === LANGUAGES.VI ? nameVi : nameEn}
                        </div>
                        <div className="down">
                            {dataProfiles && dataProfiles.Markdown
                                && dataProfiles.Markdown.description
                                &&
                                <span>
                                    {dataProfiles.Markdown.description}
                                </span>
                            }
                        </div>
                    </div>
                </div>
                <div className="price">
                    Gia kham:
                    {dataProfiles && dataProfiles.Doctor_Infor && language === LANGUAGES.VI &&
                        <NumberFormat
                            className="currency"
                            value={dataProfiles.Doctor_Infor.priceTypeData.valueVi}
                            displayType={'text'}
                            thousandSeparator={true}
                            suffix={'VND'}
                        />
                    }

                    {dataProfiles && dataProfiles.Doctor_Infor && language === LANGUAGES.EN &&
                        <NumberFormat
                            className="currency"
                            value={dataProfiles.Doctor_Infor.priceTypeData.valueEn}
                            displayType={'text'}
                            thousandSeparator={true}
                            suffix={'$'}
                        />
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDoctor);
