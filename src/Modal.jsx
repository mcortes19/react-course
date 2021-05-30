import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal');

export default function Modal({ children }) {
  const elRef = useRef(null);

  if (!elRef.current) {
    elRef.current = document.createElement('div');
  }

  useEffect(() => {
    modalRoot.appendChild(elRef.current);

    return function cleanup() {
      modalRoot.removeChild(elRef.current);
    };
  }, []);

  return createPortal(<div className="wrapper">{children}</div>, elRef.current);
}
