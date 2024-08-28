import React, { PropsWithChildren, useEffect, useRef, useState } from "react";

const TypographySizer = ({ children }: PropsWithChildren) => {
  const ref = useRef<HTMLDivElement>(null);
  const [fontInfo, setFontInfo] = useState({
    fontSize: "",
    fontWeight: "",
    letterSpacing: "",
    lineHeight: "",
  });

  useEffect(() => {
    const updateFontInfo = () => {
      if (ref.current) {
        const child = ref.current.children[0];
        const styles = window.getComputedStyle(child);
        setFontInfo({
          fontSize: styles.fontSize,
          fontWeight: styles.fontWeight,
          letterSpacing: styles.letterSpacing,
          lineHeight: styles.lineHeight,
        });
      }
    };

    const resizeObserver = new ResizeObserver(updateFontInfo);
    const currentRef = ref.current;

    if (currentRef) {
      resizeObserver.observe(currentRef);
    }

    updateFontInfo();

    return () => {
      if (currentRef) {
        resizeObserver.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div className="relative">
      <div ref={ref}>{children}</div>
      <div className="absolute right-0 top-0 rounded bg-background px-1 py-0.5 text-xs">
        fs: {fontInfo.fontSize} / fw: {fontInfo.fontWeight} / ls:{" "}
        {fontInfo.letterSpacing} / lh: {fontInfo.lineHeight}
      </div>
    </div>
  );
};

export default TypographySizer;
