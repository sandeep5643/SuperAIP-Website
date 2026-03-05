import { useEffect, useRef } from "react";
import { initLaserFlow } from "../components/LaserFlowSimple";

function LaserBackground() {
  const ref = useRef(null);

  useEffect(() => {
    initLaserFlow(ref.current);
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
export default LaserBackground