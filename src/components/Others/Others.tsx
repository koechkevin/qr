import React, { FC, useState } from 'react';
import { Props } from './Others.interface';
import classes from './Others.module.scss';
import { Text } from '../Text';

export const Wifi: FC<any> = (props) => {
  const { onChangeVal } = props;
  const [values, setValues] = useState({});
  const onChange = (e: any) => {
    e.persist();
    const vals = { ...values, [e.target.id]: e.target.value };
    onChangeVal(JSON.stringify(vals));
    setValues(vals);
  };
  return (
    <div className={classes.card}>
      <label>SSID:</label>
      <select onChange={onChange} className={classes.select}>
        <option value="" />
        <option>First</option>
      </select>
      <label>Password:</label>
      <input onChange={onChange} className={classes.input} />
      <label>Network Type:</label>
      <select onChange={onChange} className={classes.select}>
        <option value="" />
        <option value="WEP">WEP</option>
        <option value="WPA/WPA2">WPA/WPA2</option>
        <option value="No">No Encryption</option>
      </select>
    </div>
  );
};

export const Bitcoin: FC<any> = (props) => {
  const { onChangeVal } = props;

  const [values, setValues] = useState({});
  const onChange = (id: string) => (e: string) => {
    const vals = { ...values, [id]: e };
    onChangeVal(JSON.stringify(vals));
    setValues(vals);
  };
  return (
    <div className={classes.card}>
      <label>Bitcoin Address</label>
      <Text url placeholder=" " onChangeVal={onChange('Bitcoin Address')} />
      <div style={{ marginBottom: 16 }} />
      <label>Bitcoin Amount</label>
      <Text url placeholder=" " onChangeVal={onChange('Bitcoin Amount')} />
    </div>
  );
};
const Others: FC<Props> = (props) => {
  const { onChangeVal } = props;
  const [val, setVal] = useState('');
  const [active, setActive] = useState(5);
  const list = [
    {
      label: 'Phone',
      reactNode: (
        <div className={classes.card}>
          <label>Phone:</label>
          <Text placeholder=" " url onChangeVal={onChangeVal} />
        </div>
      ),
    },
    {
      label: 'Skype',
      reactNode: (
        <div>
          <label style={{ padding: '0 16px' }}>Skype:</label>
          <Text placeholder="Skype" url onChangeVal={onChangeVal} />
        </div>
      ),
    },
    {
      label: 'Twitter',
      reactNode: <Text onChangeVal={setVal} />,
    },
    {
      label: 'LinkedIn',
      reactNode: <Text onChangeVal={setVal} />,
    },
    {
      label: 'SMS',
      reactNode: <Text onChangeVal={setVal} />,
    },
    {
      label: 'Wifi',
      reactNode: <Wifi onChangeVal={onChangeVal} />,
    },
    {
      label: 'Geo',
      reactNode: <Text onChangeVal={setVal} />,
    },
    {
      label: 'Facebook',
      reactNode: <Text onChangeVal={setVal} />,
    },
    {
      label: 'Youtube',
      reactNode: (
        <div className={classes.card}>
          <label>Video URL:</label>
          <Text placeholder=" " url onChangeVal={onChangeVal} />
        </div>
      ),
    },
    {
      label: 'Instagram',
      reactNode: <Text onChangeVal={setVal} />,
    },
    {
      label: 'Paypal',
      reactNode: <Text onChangeVal={setVal} />,
    },
    {
      label: 'Email',
      reactNode: <Text onChangeVal={setVal} />,
    },
    {
      label: 'Bitcoin',
      reactNode: <Bitcoin onChangeVal={onChangeVal} />,
    },
    {
      label: 'Geo',
      reactNode: <Text onChangeVal={setVal} />,
    },
  ];
  return (
    <div className={classes.root}>
      <div style={{ width: 308, height: '100%' }}>
        {list.map((e, i) => (
          <div
            key={i}
            onClick={() => {
              setActive(i);
              setVal('');
            }}
            className={[classes.button, active === i ? classes.active : ''].join(' ')}
            role="button"
          >
            {e.label}
          </div>
        ))}
      </div>
      <div style={{ flex: 1, marginLeft: 32 }}>{list[active].reactNode}</div>
    </div>
  );
};

export default Others;
