import React, { useState } from "react";

function useToggle(initialValue) {
  const [state, setState] = useState(initialValue);

  function handleState() {
    console.log(state);
    setState(!state);
  }

  return [state, handleState];
}

export default useToggle;
