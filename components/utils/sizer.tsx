import React, { PropsWithChildren, useEffect, useRef, useState } from "react";

const Sizer = ({ children }: PropsWithChildren) => {
  const ref = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (ref.current) {
        setDimensions({
          width: ref.current.offsetWidth,
          height: ref.current.offsetHeight,
        });
      }
    };

    const resizeObserver = new ResizeObserver(updateDimensions);
    const currentRef = ref.current;

    if (currentRef) {
      resizeObserver.observe(currentRef);
    }

    updateDimensions();

    return () => {
      if (currentRef) {
        resizeObserver.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div className="relative">
      <div ref={ref} className="max-h-max max-w-max">
        {children}
      </div>
      <div className="absolute right-0 top-0 rounded bg-background px-1 py-0.5 text-xs">
        {dimensions.width}x{dimensions.height}
      </div>
    </div>
  );
};

export default Sizer;
