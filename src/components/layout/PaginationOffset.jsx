import React from 'react';
import './style/css/pagination.css';

const PaginationOffset = ({page, offset, paginationClick, lastPage, lastOffset}) => {
  return (
    <section className="pagination">
      {page === 1 ? 
        <section className="arrow_section">
          <section className="arrow double disabled"><i className="fas fa-2x fa-angle-double-left"></i></section>
          <section className="arrow disabled"><i className="fas fa-2x fa-angle-left"></i></section>
        </section> :
        <section className="arrow_section">
          <section className="arrow" onClick={() => paginationClick(offset - 50)} ><i className="fas fa-2x fa-angle-left"></i></section>
          <section className="arrow double" onClick={() => paginationClick(0)} ><i className="fas fa-2x fa-angle-double-left"></i></section>  
        </section>
      }

      <section className="center_section">
        {page === 1 ? 
          <section className="page_number disabled">1</section> : 
          <section className="page_number" onClick={() => paginationClick(0)} >1</section> 
        }
        <section className="page_number current_page">{page}</section>
        {page === lastPage ? 
          <section className="page_number disabled" >{lastPage}</section> : 
          <section className="page_number" onClick={() => paginationClick(lastOffset)} >{lastPage}</section> 
        }
      </section>
      
      {page === lastPage ? 
        <section className="arrow_section">
          <section className="arrow disabled" ><i className="fas fa-2x fa-angle-right"></i></section>
          <section className="arrow double disabled" ><i className="fas fa-2x fa-angle-double-right"></i></section>
        </section> :
        <section className="arrow_section">
          <section className="arrow" onClick={() => paginationClick(offset + 50)} ><i className="fas fa-2x fa-angle-right"></i></section>
          <section className="arrow double" onClick={() => paginationClick(lastOffset)} ><i className="fas fa-2x fa-angle-double-right"></i></section>
        </section>
      }
    </section>
  )
}

export default PaginationOffset;