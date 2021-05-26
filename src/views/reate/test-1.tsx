import React, { useState } from 'react';

let node: Node;
let offset = 0;

const Test: React.FC = () => {
  const [value, setValue] = useState('');
  const handleClick = () => {
    const span = document.createElement('span');
    span.innerText = 'button like';
    span.contentEditable = 'false';
    if (node.nodeName === '#text') {
      const p = node.parentElement;
      p.removeChild(node);
      if (node.nodeValue.slice(0, offset).length > 0) {
        const n1 = document.createElement('span');
        n1.innerText = node.nodeValue.slice(0, offset);
        p.appendChild(n1);
      }
      p.appendChild(span);
      if (node.nodeValue.slice(offset).length > 0) {
        const n2 = document.createElement('span');
        n2.innerText = node.nodeValue.slice(offset);
        p.appendChild(n2);
      }
    } else {
      node.parentElement.appendChild(span);
    }
  };
  return (
    <>
      <div
        contentEditable
        onClick={() => {
          const sel = getSelection();
          node = sel.anchorNode;
          offset = sel.anchorOffset;
        }}
        onInput={(e) => {
          const sel = getSelection();
          node = sel.anchorNode;
          offset = sel.anchorOffset;
          setValue(e.currentTarget.innerHTML);
        }}
      ></div>
      <button onClick={handleClick}>add</button>
    </>
  );
};

export default Test;
