import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import ModalStyle from './styles';

export type IModalChildren = { 'data-safe-zone': boolean };

type IModalProps = {
  isOpen: boolean,
  children: (safeClickZone: IModalChildren) => ReactNode
}

const Modal: React.FC<IModalProps> = ({ isOpen, children }) => (
  <ModalStyle.Container
    isOpen={isOpen}
  >
    <motion.div
      variants={{
        open: {
          x: 0,
          scale: 1,
        },
        closed: {
          scale: 1,
        },
      }}
      animate={isOpen ? 'open' : 'closed'}
      transition={{
        duration: 0.5,
      }}
      style={{
        display: 'flex',
        flex: 1,
      }}
    >
      {children({
        'data-safe-zone': true,
      })}
    </motion.div>
  </ModalStyle.Container>
);

export default Modal;
