import React, { useState } from "react";

function Main({ movies, children }) {
  return <main className="main">{children}</main>;
}

export default Main;
