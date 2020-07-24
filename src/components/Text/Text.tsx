import React, { ChangeEvent, FC, useState } from 'react';
import { Props } from './Text.interface';
import classes from './Text.module.scss';

const Text: FC<Props> = (props) => {
  const { onChangeVal, url, placeholder } = props;
  const [val, setVal] = useState('');
  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.persist();
    setVal(e.target.value);
    onChangeVal(e.target.value);
  };
  return (
    <div>
      {url ? (
        <input
          placeholder={placeholder || "Enter text to generate QR code"}
          style={{ width: '100%', outline: 0, padding: 8, borderRadius: 8, border: '1px solid lightgrey' }}
          onChange={onChange}
          className={classes.input}
          value={val}
        />
      ) : (
        <textarea
          placeholder={placeholder || "Enter text to generate QR code"}
          style={{ width: '100%', outline: 0, padding: 8, borderRadius: 8, border: '1px solid lightgrey' }}
          onChange={onChange}
          className={classes.input}
          value={val}
        />
      )}
    </div>
  );
};

export default Text;
