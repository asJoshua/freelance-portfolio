import React, { ReactNode, CSSProperties } from 'react';
import { GlassBtn } from '../global/GlassBtn';
import dummyImage from '../../assets/JSLogo.svg'
import { IconContentWrapper } from '../global/IconContentWrapper';
import { TextContentWrapper } from '../global/TextContentWrapper';

interface Cardprops {
  style?: CSSProperties;
}

export const Card = ({ style }: Cardprops) => {
  return (
    <div
      style={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '21.875rem',
            height: '21.875rem',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'rgba(255, 255, 255, 0.10)',
            cursor: 'pointer',
            padding: '1.25rem',
            borderRadius: '16px',
        ...style,                
      }}
    >
      <div className='image'
        style={{
          height: '100%',
          width: '100%',
          backgroundImage: `url(${dummyImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}>
      </div>
      <div className='content'
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: "1rem",
          flexShrink: 0,
          maxHeight: "50%",
        }}>
          <div
          style={{
            display: 'flex',
            flexDirection: 'column',

          }}>
            <h4>CHIL Data Viewing WebApp</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac malesuada elit. Aenean condimentum ligula tortor.</p>
          </div>
          <IconContentWrapper>
            <GlassBtn children='React.js'></GlassBtn>
            <GlassBtn children='TypeScript'></GlassBtn>
            <GlassBtn children='Django'></GlassBtn>
          </IconContentWrapper>
      </div>
    </div>
  );
};
