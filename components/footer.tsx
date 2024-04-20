import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2024 Canyon Zhang. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">Portfolio Site:</span> Built with React, Next.js, and TypeScript, styled with Tailwind CSS, animated with Framer Motion, and equipped with email integration through React Email and Resend; 
        deployed and hosted on Vercel.
      </p>
      <a href="https://github.com/canyonzhang/portfolio" target="_blank" rel="noopener noreferrer" className="text-xs underline">
        Check out the code for this website!
      </a>
    </footer>
  );
}
