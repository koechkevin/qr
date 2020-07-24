import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import { Props } from './VCard.interface';
import classes from './VCard.module.scss';

const VCard: FC<Props> = ({ onChangeVal }) => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const [values, setValues] = useState<any>({});
  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.persist();
    const newVals = { ...values, [e.target.id]: e.target.value };
    setValues(newVals);
    onChangeVal(JSON.stringify(newVals));
  };
  return (
    <div className={classes.root}>
      <form className={classes.form} style={{ width: '100%' }} onSubmit={onSubmit}>
        <input onChange={onChange} id="Title" value={values.Title || ''} placeholder="Title" className={classes.input} />
        <input onChange={onChange} id="First Name" value={values['First Name'] || ''} placeholder="First Name" className={classes.input} />
        <input onChange={onChange} id="Last Name" value={values['Last Name'] || ''} placeholder="Last Name" className={classes.input} />
        <input onChange={onChange} id="Job Position" value={values['Job Position'] || ''} placeholder="Job Position" className={classes.input} />
        <input onChange={onChange} id="Phone" value={values['Phone'] || ''} placeholder="Phone" className={classes.input} />
        <input onChange={onChange} id="Mobile" value={values['Mobile'] || ''} placeholder="Mobile" className={classes.input} />
        <input onChange={onChange} id="Fax" value={values['Fax'] || ''} placeholder="Fax" className={classes.input} />
        <input onChange={onChange} id="Email" value={values['Email'] || ''} placeholder="Email" className={classes.input} />
        <input onChange={onChange} id="Website" value={values['Website'] || ''} placeholder="Website" className={classes.input} />
        <input onChange={onChange} id="Company" value={values['Company'] || ''} placeholder="Company" className={classes.input} />
        <input onChange={onChange} id="Street & Number" value={values['Street'] || ''} placeholder="Street & Number" className={classes.input} />
        <input onChange={onChange} id="City" value={values['City'] || ''} placeholder="City" className={classes.input} />
        <input onChange={onChange} id="State" value={values['State'] || ''} placeholder="State" className={classes.input} />
        <input onChange={onChange} id="ZIP" value={values['ZIP'] || ''} placeholder="Zip" className={classes.input} />
        <input onChange={onChange} id="Country" value={values['Country'] || ''} placeholder="Country" className={classes.input} />
        <textarea onChange={onChange} id="Notes" value={values['Notes'] || ''} placeholder="Notes" className={classes.textArea} />
      </form>
    </div>
  );
};

export default VCard;
