import React, { Component } from 'react';
import { connect } from 'react-redux';
import './About.scss';

class About extends Component {

    render() {

        return (
            <div className="section-about">
                <div className="section-about-header">
                    Truyền thông nói gì về BookingCare
                </div>
                <div className="section-about-content">
                    <div className="content-left">
                        <iframe width="100%" height="400px"
                            src="https://www.youtube.com/embed/w5qOoL6wx2A"
                            title="ไม่ธรรมดา Ost. U-PRINCE Series - มุก วรนิษฐ์"
                            frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
                            encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                        </iframe>
                    </div>
                    <div className="content-right">
                        <p>
                            Ngày 10-4, tại Thanh Hóa, Hiệp hội Bệnh viện tư nhân Việt Nam tổ chức Hội nghị tổng kết công tác năm 2020, triển khai phương hướng, nhiệm vụ năm 2021; Ký kết thoả thuận hợp tác giữa Cục Công nghệ thông tin Bộ Y tế và Hiệp hội Bệnh viện tư nhân Việt Nam về thúc đẩy chuyển đổi số y tế trong hệ thống y tế tư nhân với sự tham gia của đại diện các ban ngành.
                        </p>
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
