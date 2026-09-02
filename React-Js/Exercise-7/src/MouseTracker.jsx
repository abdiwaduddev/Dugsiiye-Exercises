import React from "react";
import { useEffect } from "react";
import { use } from "react";
import { useState } from "react";

const MouseTracker = () => {
  const [track, setTrack] = useState({ X: 0, Y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setTrack({ X: e.clientX, Y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div>
      <h3>Mouse X : {track.X}px</h3>
      <h3>Mouse Y : {track.Y}px</h3>
    </div>
  );
};

export default MouseTracker;
