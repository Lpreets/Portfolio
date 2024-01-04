import React from 'react'
import { footerlinks } from "../constants"

function Footer() {
  return (
    <div className="flex flex-col justify-center">
    <ul className="flex flex-row gap-10 pb-10 justify-center">
      {footerlinks.map((link) => (
        <li key={link.name}>
          <a href={`${link.link}`} target="_blank" rel="noopener noreferrer">
            {link.icon === "CV" ? (
              <span>{link.icon}</span>
            ) : (
              <img src={link.icon} alt={link.name} style={{ width: "35px" }} />
            )}
          </a>
        </li>
      ))}
    </ul>
    <small className="text-center mb-6 ">Copyright © 2023 Lovepreet Zelenkov Singh | All Rights Reserved </small>
    </div>
  )
}

export default Footer