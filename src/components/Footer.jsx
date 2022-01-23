import React from "react"
import FacebookIcon from "@mui/icons-material/Facebook"
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import "./Footer.scss"

function Footer() {
  return (
    <div className="footer-container">
      <div className="left">
        <span>
          Lost Loch Spirits Ltd. Unit 7, Deeside Activity Park, Dess, Aboyne
          AB34 5BD
        </span>
      </div>
      <div className="icon-container">
        <FacebookIcon color="inherit" />
        <TwitterIcon/>
        <InstagramIcon/>
      </div>
      <div className="right">
        <span>Lost Loch Spirits Ltd 2021 | Distillery, Tastings & Tours</span>
      </div>
    </div>
  )
}

export default Footer
