import { useEffect, useRef } from "react";

export default function AutoFocusInput() {
  const inputRef = useRef(null); // create a ref (a box)


  return (
    <div>
      <h2>👀 Focused Input</h2>
      <input ref={inputRef} placeholder="Type here..." />
    </div>
  );
}
