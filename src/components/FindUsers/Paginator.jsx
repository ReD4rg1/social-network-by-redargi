import React from "react";
import styles from './FindUsers.module.css';

let Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let currentPage = props.currentPage
    let pages = [];

    for (let i = currentPage - 2; i <= (currentPage + 2); i++) {
        if ((i > 0) && (i <= pagesCount)) {
            pages.push(i);
        }
    }

    return (
        <div className={styles.pagesCount}>
            {pages.map(
                page =>
                    <div className={styles.pageNumber}>
                        <div onClick={() => {
                            props.onPageChange(page)
                        }}
                             className={
                                 props.currentPage === page
                                     ? `${styles.pageNumberActive}`
                                     : ""
                             }>{page}</div>
                    </div>
            )}
        </div>
    )
}

export default Paginator