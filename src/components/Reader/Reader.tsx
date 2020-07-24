import React, { FC, useEffect, useState, Fragment } from 'react';
import { Props } from './Reader.interface';
import classes from './Reader.module.scss';

import { Text } from '../Text';
import VCard from '../VCard/VCard';
import QRCode from 'qrcode';
import { Others } from '../Others';
import { Wifi } from '../Others/Others';

const Reader: FC<Props> = (props) => {
  const [active, setActive] = useState<number | undefined>();
  const [img, setImg] = useState();
  const [value, setValue] = useState('');
  useEffect(() => {
    if (value) {
      QRCode.toDataURL(value, (err, image) => {
        if (err) throw err;
        setImg(image);
      });
    }
  }, [value]);
  const onChange = (e: string) => {
    setValue(e);
  };
  const options = [
    {
      label: 'URL',
      component: <Text url onChangeVal={onChange} />,
    },
    {
      label: 'vCARD',
      component: <VCard onChangeVal={onChange} />,
    },
    {
      label: 'TEXT',
      component: <Text onChangeVal={onChange} />,
    },
    {
      label: 'WIFI',
      component: (
        <div style={{ display: 'flex', justifyContent: 'center', background: '#fff', padding: 16 }}>
          <Wifi onChangeVal={onChange} />
        </div>
      ),
    },
  ];
  return (
    <Fragment>
      <div className={classes.root}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex' }}>
            {options.map((e, i) => (
              <div
                key={i}
                onClick={() => {
                  setActive(i);
                  setValue('');
                }}
                className={[classes.button, active === i ? classes.active : ''].join(' ')}
                role="button"
              >
                {e.label}
              </div>
            ))}
          </div>
          <div style={{ flex: 1, width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
            <div
              style={{ width: 'max-content' }}
              onClick={() => {
                setActive(undefined);
                setValue('');
              }}
              className={[classes.button, active === undefined ? classes.active : ''].join(' ')}
              role="button"
            >
              More Options
            </div>
          </div>
        </div>
        {active !== undefined ? options[active]?.component : <Others onChangeVal={onChange} />}
      </div>
      {value && <img style={{ background: 'transparent' }} alt="" src={img} />}
    </Fragment>
  );
};

export default Reader;
