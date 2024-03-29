import React, { Component } from 'react';
import { connect } from 'react-redux';
import './RemedyModal.scss';
import moment from 'moment';
import { toast } from 'react-toastify';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { CommonUtils } from '../../../utils';

class RemedyModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            imgBase64: '',
        }
    }

    async componentDidMount() {
        if (this.props.dataModal) {
            this.setState({
                email: this.props.dataModal.email
            })
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.dataModal !== this.props.dataModal) {
            this.setState({
                email: this.props.dataModal.email
            })
        }
    }

    handleOnChangeEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handleOnChangeImage = async (event) => {
        let data = event.target.files;
        let file = data[0];
        if (file) {
            let base64 = await CommonUtils.getBase64(file);
            this.setState({
                imgBase64: base64
            })
        }
    }

    heandleSendRemedy = () => {
        this.props.sendRemedy(this.state)
    }

    render() {
        let { isOpenModal, closeRemedyModal, dataModal, sendRemedy } = this.props;

        return (
            <Modal
                isOpen={isOpenModal}
                className={'booking-modal-container'}
                size="md"
                centered
            >
                <div className="modal-header">
                    <h5 className="modal-title">Gửi hóa đơn khám bệnh thành công</h5>
                    <button className="close" type="button" aria-label="close" onClick={closeRemedyModal}>
                        <span aria-hidden="true">x</span>
                    </button>
                </div>
                <ModalBody>
                    <div className="row">
                        <div className="col-6 form-group">
                            <label>Email bệnh nhân</label>
                            <input type="email" className="form-control" value={this.state.email}
                                onChange={(event) => this.handleOnChangeEmail(event)} />
                        </div>
                        <div className="col-6 form-group">
                            <label>Chọn đơn thuốc</label>
                            <input type="file" className="form-control-file"
                                onChange={(event) => this.handleOnChangeImage(event)} />
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => this.heandleSendRemedy()}>Send</Button>{' '}
                    <Button color="secondary" onClick={closeRemedyModal}>Cancel</Button>
                </ModalFooter>
            </Modal>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        user: state.user.userInfo,
    };
}

const mapDispatchToProps = dispatch => {
    return {

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RemedyModal);