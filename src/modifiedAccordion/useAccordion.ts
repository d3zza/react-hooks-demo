import { useState, useEffect, RefObject } from 'react';
import usePrevious from '../usePrevious';

type ContentStyle = {
  height?: string;
  transition?: string;
};

export default function useAccordion(
  contentRef: RefObject<HTMLElement>,
  startExpanded = false
) {
  const [expanded, setExpanded] = useState(startExpanded);
  const [contentStyle, setContentStyle] = useState<ContentStyle>(
    !startExpanded ? { height: '0px' } : {}
  );
  const prevExpanded = usePrevious(expanded);

  // expand/collapse effect
  useEffect(() => {
    const el = contentRef.current;
    if (!expanded && prevExpanded) {
      // collapse
      if (el) {
        // store content height before collapse
        const contentHeight = el.scrollHeight;
        const elemTransition = el.style.transition;

        setContentStyle({ transition: '' });

        //  @see https://css-tricks.com/using-css-transitions-auto-dimensions/
        requestAnimationFrame(() => {
          setContentStyle({
            height: contentHeight + 'px',
            transition: elemTransition,
          });

          requestAnimationFrame(() => {
            setContentStyle({ height: '0px' });
          });
        });
      }
    } else if (expanded && !prevExpanded) {
      // expand
      if (el) {
        setContentStyle({
          height: el.scrollHeight + 'px',
        });
      }
    }
  }, [expanded, prevExpanded, contentRef, setContentStyle]);

  return { expanded, setExpanded, contentStyle };
}
