import React, { Component } from 'react';
import { connect } from "react-redux";
import './ProfileDoctor.scss';
import { FormattedMessage } from 'react-intl'
import { LANGUAGES } from '../../../utils';
import { getProfileDoctorById } from '../../../services/userService';
import NumberFormat from 'react-number-format';
import _ from 'lodash';
import moment from 'moment';
import { Link } from 'react-router-dom';

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

    renderTimeBooking = (dataTime) => {
        let { language } = this.props;
        if (dataTime && !_.isEmpty(dataTime)) {
            let time = language === LANGUAGES.VI ?
                dataTime.timeTypeData.valueVi : dataTime.timeTypeData.valueEn;
            let date = language === LANGUAGES.VI ?
                moment.unix(+dataTime.date / 1000).format('dddd - DD/MM/YYYY')
                :
                moment.unix(+dataTime.date / 1000).locale('en').format('ddd - MM/DD/YYYY');
            return (
                <>
                    <div>{time} - {date}</div>
                    <div><FormattedMessage id="patient.booking-modal.priceBooking" /></div>
                </>
            )
        }
        return <></>
    }

    render() {
        let { dataProfiles } = this.state;
        let { language, isShowDescriptionDoctor, dataTime, isShowPrice, isShowLinkDetail, doctorId } = this.props;

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
                            {isShowDescriptionDoctor === true ?
                                <>
                                    {dataProfiles && dataProfiles.Markdown
                                        && dataProfiles.Markdown.description
                                        &&
                                        <span>
                                            {dataProfiles.Markdown.description}
                                        </span>
                                    }
                                </>
                                :
                                <>
                                    {this.renderTimeBooking(dataTime)}
                                </>
                            }
                        </div>
                    </div>
                </div>
                {isShowLinkDetail === true &&
                    <div className="view-detail-doctor">
                        <Link to={`/detail-doctor/${doctorId}`} >Xem Thêm</Link>
                    </div>
                }
                {isShowPrice === true &&
                    <div className="price">
                        <FormattedMessage id="patient.booking-modal.price" />
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
                }
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
