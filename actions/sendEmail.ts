"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);




export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");

    // Server side validation for email
    if (!validateString(senderEmail, 500)) {
        return {
            error: "Invalid sender email",
        };
    }
    if (!message || typeof message !== "string") {
      return {
        error: "Invalid message",
      };
    }
    try{
        await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: "canyonzh@usc.edu",
            subject: "Message from contact form",
            text: message,
            reply_to: senderEmail as string,
        });

    }
    catch(error){
        return {error: getErrorMessage(error)}
    }
    
  };



// import ContactFormEmail from "@/email/contact-form-email";



// export const sendEmail = async (formData: FormData) => {
//   const senderEmail = formData.get("senderEmail");
//   const message = formData.get("message");

//   // simple server-side validation
//   if (!validateString(senderEmail, 500)) {
//     return {
//       error: "Invalid sender email",
//     };
//   }
//   if (!validateString(message, 5000)) {
//     return {
//       error: "Invalid message",
//     };
//   }

//   let data;
//   try {
//     data = await resend.emails.send({
//       from: "Contact Form <onboarding@resend.dev>",
//       to: "bytegrad@gmail.com",
//       subject: "Message from contact form",
//       reply_to: senderEmail,
//       react: React.createElement(ContactFormEmail, {
//         message: message,
//         senderEmail: senderEmail,
//       }),
//     });
//   } catch (error: unknown) {
//     return {
//       error: getErrorMessage(error),
//     };
//   }

//   return {
//     data,
//   };
// };