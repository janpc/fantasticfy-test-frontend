import React from 'react';
import styles from './style.module.css';

export default function OptionSelector ({ options, selectOption, selected }) {
  if (options.values?.length < 2) {
    return ;
  }
  return (
    <div>
      <h3>{options.name}:</h3>
      {options.values.map(opt =>
        <button key={opt} onClick={() => selectOption(opt)}>
          {opt}
        </button>
        )}
    </div>
  );
};