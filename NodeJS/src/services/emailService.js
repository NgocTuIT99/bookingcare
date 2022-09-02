require('dotenv').config();
import nodemailer from 'nodemailer';

let sendSimpleEmail = async (dataSend) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_APP,
            pass: process.env.EMAIL_APP_PASSWORD
        },
    });

    let info = await transporter.sendMail({
        from: '"Vo Ngoc Tu" <vongoctucr99@gmail.com>',
        to: dataSend.reciverEmail,
        html: getBodyHTMLEmail(dataSend),
    });
}

let getBodyHTMLEmail = (dataSend) => {
    let result = '';
    if (dataSend.language === 'vi') {
        result = `
        <h3>Xinh chào ${dataSend.patientName}!</h3>
        <p>Bạn nhận được email này vì đã đặt lịch Online trên Bookingcare</p>
        <p>Thông tin đặt lịch khám bệnh</p>
        <div><b>Thời gian: ${dataSend.time}</b></div>
        <div><b>Bác sĩ: ${dataSend.doctorName}</b></div>

        <p>Nếu những thông tin trên là đúng sự thật, vui lòng click vào đường link bên dưới
            để xác nhận và hoàn tất các thủ tục đặt lịch khám bệnh
        </p>
        <div>
        <a href=${dataSend.redirectLink} target="_blank">Click here</a>
        </div>
        <div>
            Xin chân thành cảm ơn!
        </div>
       `
    }
    if (dataSend.language === 'en') {
        result = `
        <h3>Dear ${dataSend.patientName}!</h3>
        <p>You received this email because you booked an Online medical appointment</p>
        <p>Information to schedule an appointment:</p>
        <div><b>Time: ${dataSend.time}</b></div>
        <div><b>Doctor: ${dataSend.doctorName}</b></div>

        <p>if the above information is true, please click on the link below to confirm and complete the medical appointment booking procedures
        </p>
        <div>
        <a href=${dataSend.redirectLink} target="_blank">Click here</a>
        </div>
        <div>
            Sincerely thank!
        </div>
       `
    }
    return result;
}

module.exports = {
    sendSimpleEmail: sendSimpleEmail,
}