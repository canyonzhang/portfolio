import React from 'react'
import Image from "next/image";

export default function Intro() {
    return (
      <section>
        <div className="flex items-center justify-center">
          <div>
            <Image
              src="/Profile-min.png"
              fill={true}
              alt="Canyon portrait"
              quality="95"
              priority={true}
            />
          </div>
        </div>
      </section>
    );
  }
  

