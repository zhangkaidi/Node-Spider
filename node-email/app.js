const nodemailer = require('nodemailer');  
let transporter = nodemailer.createTransport({  
  service: 'qq',  
  auth: {  
    user: '490151956@qq.com',  
    pass: 'eqyiohygwpwjxxxx' //授权码,通过QQ获取  
  }  
  });  
  var mailOptions = {  
    from: '490151956@qq.com', // 发送者  
    to: '10086@qq.com', // 接受者,可以同时发送多个,以逗号隔开  
    subject: '这是我发送的一个邮件', // 标题  
    text: 'Hello world', // 文本  
    //html: ``   
  };  
  
  transporter.sendMail(mailOptions, function (err, info) {  
    if (err) {  
      console.log(err);  
      return;  
    }  
    console.log('发送成功');  
  });  