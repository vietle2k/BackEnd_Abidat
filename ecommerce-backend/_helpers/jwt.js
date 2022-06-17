/**
 * Created by trungquandev.com's author on 16/10/2019.
 * src/controllers/auth.js
 */
 const jwt = require("jsonwebtoken");

 /**
  * private function generateToken
  * @param user 
  * @param secretSignature 
  * @param tokenLife 
  */
 let generateToken = (dataSign, secretSignature, tokenLife) => {
   return new Promise((resolve, reject) => {
     // Thực hiện ký và tạo token
     jwt.sign(
       {data: dataSign},
       secretSignature,
       {
         algorithm: "HS256",
         expiresIn: tokenLife,
       },
       (error, token) => {
         if (error) {
           return reject(error);
         }
         resolve(token);
     });
   });
 }
 
 /**
  * This module used for verify jwt token
  * @param {*} token 
  * @param {*} secretKey 
  */
 let verifyToken = (token, secretKey) => {
   return new Promise((resolve, reject) => {
     jwt.verify(token, secretKey, (error, decoded) => {
       if (error) {
         return reject(error);
       }
       resolve(decoded);
     });
   });
 }
 
 module.exports = {
   generateToken: generateToken,
   verifyToken: verifyToken,
 };