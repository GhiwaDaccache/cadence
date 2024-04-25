import React from 'react';
import Svg, { Path } from 'react-native-svg';

const ProfileIcon = ({ size = 26, color = 'black' }) => (
  <Svg width={size} height={size} viewBox="0 0 26 26" fill="none">
    <Path
      d="M1 21.9999C1 20.4086 1.63214 18.8825 2.75736 17.7573C3.88258 16.6321 5.4087 15.9999 7 15.9999H19C20.5913 15.9999 22.1174 16.6321 23.2426 17.7573C24.3679 18.8825 25 20.4086 25 21.9999C25 22.7956 24.6839 23.5586 24.1213 24.1213C23.5587 24.6839 22.7956 24.9999 22 24.9999H4C3.20435 24.9999 2.44129 24.6839 1.87868 24.1213C1.31607 23.5586 1 22.7956 1 21.9999Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <Path
      d="M13 10C15.4853 10 17.5 7.98528 17.5 5.5C17.5 3.01472 15.4853 1 13 1C10.5147 1 8.5 3.01472 8.5 5.5C8.5 7.98528 10.5147 10 13 10Z"
      stroke={color}
      strokeWidth="1.5"
    />
  </Svg>
);

export default ProfileIcon;
