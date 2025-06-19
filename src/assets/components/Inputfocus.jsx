import { useEffect, useRef } from "react";

export default function AutoFocusInput() {
  const inputRef = useRef(null); // create a ref (a box)

  useEffect(() => {
    // When the component mounts, focus the input
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h2>👀 Focused Input</h2>
      <input ref={inputRef} placeholder="Type here..." />
    </div>
  );
}
