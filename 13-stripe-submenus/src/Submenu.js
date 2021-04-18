import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";

const Submenu = () => {
  const { isSubmenuOpen } = useGlobalContext();

  return (
    <article className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}>
      submenu
    </article>
  );
};

export default Submenu;
