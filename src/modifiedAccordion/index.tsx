import React, { useRef, useEffect } from 'react';
import useAccordion from './useAccordion';
import styles from './accordionItem.module.scss';
import useUniqueId from '../useUniqueId';
import useLocalStorage from '../useLocalStorage';

type AccordionItemProps = {};

const AccordionItem: React.FC<AccordionItemProps> = () => {
  const contentRef = useRef(null);

  const [initExpanded, setInitExpanded] = useLocalStorage('accordion', false);

  const { expanded, setExpanded, contentStyle } = useAccordion(
    contentRef,
    initExpanded
  );

  const contentId = useUniqueId('content');

  useEffect(() => {
    setInitExpanded(expanded);
  }, [expanded]);

  return (
    <div>
      <button
        aria-expanded={expanded}
        aria-controls={contentId}
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        <h3>Accordion {expanded ? '-' : '+'}</h3>
      </button>
      <div
        className={styles.content}
        id={contentId}
        ref={contentRef}
        style={contentStyle}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          tellus lorem, mattis eu urna malesuada, mollis congue nisi. Mauris
          tristique magna iaculis tristique viverra. In hac habitasse platea
          dictumst. Sed in ultrices felis. Donec sagittis venenatis quam at
          vulputate. Etiam finibus mauris nec bibendum euismod. Nulla malesuada,
          sem vel viverra tempor, urna mi interdum purus, ac blandit quam ligula
          vel libero. Donec tempus ligula leo, nec venenatis est tempor nec.
          Proin at dapibus magna. Quisque sagittis dignissim risus, sed aliquet
          ipsum hendrerit in. Nulla sagittis, magna sed rutrum consequat, nibh
          lorem varius orci, at lacinia lacus risus nec nunc. Curabitur blandit
          id diam id molestie. Suspendisse pellentesque dignissim porttitor.
        </p>
      </div>
    </div>
  );
};

export default AccordionItem;
