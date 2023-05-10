import Link from 'next/link';
import React from 'react';
import style from './paginator.module.css'

export default function Paginator ({ currentPage, totalPages }) {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className={style.paginator}>
      <li className={currentPage == 1 ? style.notActive : ''}>
        <Link href={`/products/page/${parseInt(currentPage) - 1}`}>
          {'<'}
        </Link>
      </li>
      {pageNumbers.map((pageNumber) => (
        <li
          key={pageNumber}
          className={pageNumber == currentPage ? style.active : ''}
        >
          <Link href={`/products/page/${pageNumber}`}>
            {pageNumber}
          </Link>
        </li>
      ))}
      <li className={currentPage == totalPages ? style.notActive : ''}>
        <Link href={`/products/page/${parseInt(currentPage) + 1}`}>
          {'>'}
        </Link>
      </li>
    </ul>
  );
};