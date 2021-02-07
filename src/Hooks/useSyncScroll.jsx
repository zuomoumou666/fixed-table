import React from "react";

function syncScroll(target, others, TopLeft, WidthHeight) {
  const percentage =
    target[`scroll${TopLeft}`] /
    (target[`scroll${WidthHeight}`] - target[`offset${WidthHeight}`]);

  window.requestAnimationFrame(() => {
    others.forEach(el => {
      el.current[`scroll${TopLeft}`] = Math.round(
        percentage * (el.current[`scroll${WidthHeight}`] - el.current[`offset${WidthHeight}`])
      );
    });
  });
}

function syncHorizontalScroll(target, others) {
  syncScroll(target, others, "Top", "Height");
}

function useSyncScroll(refsRef) {

  React.useEffect(() => {
    if (refsRef.current.length < 2) return;

    function handleScroll({ target }) {

      const others = refsRef.current.filter(ref => ref !== target);

      syncHorizontalScroll(target, others);
    }

    const elements = refsRef.current || [];

    elements.forEach(el => {
      el.current.addEventListener("scroll", handleScroll)
    });

    return () => {
      elements.forEach(el => el.current.removeEventListener("scroll", handleScroll));
    };
  }, [refsRef]);

  return (ref) => refsRef.current.push(ref);
}

export default useSyncScroll;
