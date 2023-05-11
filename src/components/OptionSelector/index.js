import React from 'react';
import styles from './style.module.css';

export default function OptionSelector ({ options, selectOption, selected }) {
  if (options.values?.length < 2) {
    return ;
  }
  return (
    <div className={styles.options}>
      <h3 className={styles.options__title} >{options.name}:</h3>
      <div className={styles.options__buttons}>
        {options.values.map(opt =>
          <button
            key={opt}
            onClick={() => selectOption(opt)}
            className={`${styles.options__button} ${opt === selected && styles.active}`}
          >
            {opt}
          </button>
        )}
      </div>
    </div>
  );
};