import React from 'react';
import './style/css/pagination.css';

const Pagination = ({page, paginationClick, lastPage}) => {
  return (
    <section className="pagination">
      {page === 1 ? 
        <section className="arrow_section">
          <section className="arrow double disabled"><i className="fas fa-2x fa-angle-double-left"></i></section>
          <section className="arrow disabled"><i className="fas fa-2x fa-angle-left"></i></section>
        </section> :
        <section className="arrow_section">
          <section className="arrow double" onClick={() => paginationClick(1)} ><i className="fas fa-2x fa-angle-double-left"></i></section>  
          <section className="arrow" onClick={() => paginationClick(page - 1)} ><i className="fas fa-2x fa-angle-left"></i></section>
        </section>
      }

      <section className="center_section">
        {page === 1 ? 
          <section className="page_number disabled">1</section> : 
          <section className="page_number" onClick={() => paginationClick(lastPage)} >1</section> 
        }
        <section className="page_number current_page">{page}</section>
        {page === lastPage ? 
          <section className="page_number disabled" >{lastPage}</section> : 
          <section className="page_number" onClick={() => paginationClick(lastPage)} >{lastPage}</section> 
        }
      </section>
      
      {page === lastPage ? 
        <section className="arrow_section">
          <section className="arrow disabled" ><i className="fas fa-2x fa-angle-right"></i></section>
          <section className="arrow double disabled" ><i className="fas fa-2x fa-angle-double-right"></i></section>
        </section> :
        <section className="arrow_section">
          <section className="arrow" onClick={() => paginationClick(page + 1)} ><i className="fas fa-2x fa-angle-right"></i></section>
          <section className="arrow double" onClick={() => paginationClick(lastPage)} ><i className="fas fa-2x fa-angle-double-right"></i></section>
        </section>
      }
    </section>
  )
}

export default Pagination;