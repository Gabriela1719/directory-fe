import { Table } from '@tanstack/react-table';
import { Pagination as RBPagination } from 'react-bootstrap';
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons';

import style from './Pagination.module.scss';

interface PaginationProps {
    data: any[];
    table: Table<any>;
}

export const Pagination: React.FC<PaginationProps> = ({ data, table }) => {
    let isOutOfRange: boolean | undefined;
    const pageNumbers = [...new Array(table.getPageCount())].map((_, index) => {
        const pageNumber = index + 1;
        const currentPage = table.getState().pagination.pageIndex + 1;
        const isFirst = pageNumber === 1;
        const isLast = pageNumber === table.getPageCount();
        const isWithinTwoNumbers = Math.abs(pageNumber - currentPage) <= 2;

        //in case of only one page, reset pagination to first page after data is collapsed
        if (currentPage > table.getPageCount()) table.resetPageIndex()

        if (isFirst || isLast || isWithinTwoNumbers) {
            isOutOfRange = false;

            return (
                <RBPagination.Item
                    key={pageNumber}
                    active={pageNumber === currentPage}
                    onClick={() => table.setPageIndex(pageNumber - 1)}
                    className={pageNumber === currentPage ? style.currentPage : ''}
                >
                    {pageNumber}
                </RBPagination.Item>
            );
        }

        if (!isOutOfRange) {
            isOutOfRange = true;
            return <RBPagination.Ellipsis key={pageNumber} className='muted' />;
        }

        return null;
    });

    return (
        <div className={style.paginationContainer}>
            <div className={style.totalItems}>Total {data.length} items</div>
            <RBPagination className={style.customPagination}>
                <RBPagination.Prev
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    <ChevronLeft style={{ height: '12px', width: '12px', color: '#354C3C' }} />
                </RBPagination.Prev>
                {pageNumbers}
                <RBPagination.Next
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    <ChevronRight style={{ height: '12px', width: '12px', color: '#354C3C' }} />
                </RBPagination.Next>
            </RBPagination>
        </div>
    );
};