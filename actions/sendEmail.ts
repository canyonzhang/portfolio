"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

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
    let data; 
    try{
        data = await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: "canyonzh@usc.edu",
            subject: "Message from contact form",
            text: message,
            reply_to: senderEmail as string,
            react: React.createElement(ContactFormEmail, {
                message: message,
                senderEmail: senderEmail,
              }),
        });
    }
    catch(error){
        return {error: getErrorMessage(error)}
    }
    return {data};
  };