import React, { FC } from 'react';
import { Props } from './Header.interface';
import classes from './Header.module.scss';

const Header: FC<Props> = () => {
  return (
    <div className={classes.header}>
      <div
        style={{ maxWidth: 768, display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}
      >
        <div style={{ fontWeight: 700, fontSize: 32, flex: 1 }}>Home</div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', flex: 3}}>
          <div>Solutions</div>
          <div>Pricing</div>
          <div className={classes.button} role="button">Sign in</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
