import { CSSProperties } from 'react';
import { GlassBtn } from '../global/GlassBtn';
import dummyImage from '../../assets/DummyImage.png';
import { IconContentWrapper } from '../global/IconContentWrapper';
import { TextContentWrapper } from '../global/TextContentWrapper';
import { motion } from 'framer-motion';

interface Cardprops {
  style?: CSSProperties;
}

export const Card = ({ style }: Cardprops) => {
  return (
    <motion.div
      className="card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '16px',
        maxWidth: '350px',
        background: 'rgba(255, 255, 255, 0.10)',
        cursor: 'pointer',
        ...style,
      }}
      whileHover={{
        scale: 1.05,
        border: '2px solid #e6e0f2',
        boxShadow: '0 8px 20px rgba(0,0,0,0.25)',
      }}
      transition={{
        type: 'spring',
        stiffness: 220,
        damping: 15,
      }}
    >
      <img
        src={dummyImage}
        alt="Dummy"
        style={{
          borderTopLeftRadius: '16px',
          borderTopRightRadius: '16px',
          objectFit: 'cover',
        }}
      />

      <div
        className="content-wrapper"
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '8px',
          gap: '8px',
        }}
      >
        <TextContentWrapper alignItems="flex-start">
          <h4>CHIL Data Viewing WebApp</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </TextContentWrapper>

        <IconContentWrapper>
          <GlassBtn style={{fontSize: '10px', padding: '4px'}}>React.js</GlassBtn>
          <GlassBtn style={{fontSize: '10px', padding: '4px'}}>TypeScript</GlassBtn>
          <GlassBtn style={{fontSize: '10px',padding: '4px'}}>Django</GlassBtn>
        </IconContentWrapper>
      </div>
    </motion.div>
  );
};
