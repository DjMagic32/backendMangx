// =============================================================================
// PACKAGES
// =============================================================================

const fs = require("fs");
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "",
    pass: "",
  },
});
const token = "";
const Slack = require("slack");
const bot = new Slack({ token });
const validate = require("node-deep-email-validator");

/**
 *
 * @param {*} action
 * @param {*} data
 * @param {*} res
 * @param {*} show_notify
 * @param {*} error_action
 * @param {*} many_data
 * @param {*} language
 */
const resultResponse = function (action, data, res, status) {
  let result = {};
  result.error = null;
  result.status = status;
  result.action = action;
  result.data = data;
  if (action != "error") {
    result.error = false;
  } else {
    result.error = true;
  }
  res.json(result);
};
const emailNotification = async function emailNotification(
  to,
  subject,
  message
) {
  return new Promise(async function (resolve, reject) {
    try {
      let date = new Date();
      let year = date.getFullYear();
      let email = {
        to: to,
        subject: subject,
        html: `
                        <!DOCTYPE html>
                        <html> 
                            <head> 
                            <meta charset='utf-8'>
                            <title></title> 
                            </head> 
                            <body> 
                              
                            </body>
                        </html>
                      `,
      };
      transporter.sendMail(email, function (error, info) {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          console.log(info);
          resolve(info);
        }
      });
    } catch (err) {
      console.log("Errete: ", err);
      reject(err);
    }
  });
};
const slackNotification = function slackNotification(id, msg) {
  bot.chat.postMessage({ channel: id, text: msg }).then({ return: true });
};
const uploadImage = function uploadImage(file, dest, type) {
  return new Promise(function (resolve, reject) {
    var extension = file.mimetype.split("/");
    fs.createReadStream("./uploads/" + file.filename).pipe(
      fs
        .createWriteStream(
          "./public/files/images_profile/" + dest + file.filename + type
        )
        .on("finish", function (err) {
          fs.unlink("./uploads/" + file.filename, (err) => {
            reject(err);
          });
          if (err) {
            reject(err);
          } else {
            var path_img = {};
            path_img[file.fieldname] =
              "files/images_profile/" + dest + file.filename + type;
            resolve(path_img);
          }
        })
    );
  });
};
const validateEmail = async function validateEmail(email) {
  return new Promise(async function (resolve, reject) {
    try {
      let verify_email = await validate(email);

      if (verify_email.result === true) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (error) {
      console.log("Errete validateEmail: ", error);
      reject(error);
    }
  });
};
module.exports = {
  resultResponse,
  emailNotification,
  slackNotification,
  uploadImage,
  validateEmail,
};
