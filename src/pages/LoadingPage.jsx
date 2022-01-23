import React from "react"
import Grow from "@mui/material/Grow"
import "./LoadingPage.scss"
import logo from "../assets/logo.png"

function LoadingPage() {
  return (
    <div className="loading-page">
      <Grow in timeout={3000}>
        <img src={logo} alt="logo-img" />
      </Grow>
    </div>
  )
}

export default LoadingPage
