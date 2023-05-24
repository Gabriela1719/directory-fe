import { useState, useEffect } from 'react';
import { Header, flexRender } from '@tanstack/react-table';
import { Form, InputGroup } from 'react-bootstrap';
import { Search, ChevronUp, ChevronDown, ChevronExpand, X } from 'react-bootstrap-icons';

import style from './ColumnTextFilter.module.scss';

export const ColumnTextFilter = ({
    header,
    isInCoverageTable,
}: {
    header: Header<any, any>;
    isInCoverageTable?: boolean;
}) => {
    const [filterOpen, setFilterOpen] = useState(false);

    useEffect(() => {
        if (
            header.column.getFilterValue() !== '' &&
            header.column.getFilterValue() !== undefined
        )
            setFilterOpen(true);
    }, [header.column]);

    return (
        <>
            {filterOpen ? (
                <span
                    className={`${style.tableHeader} ${style.withFilterOpen} ${isInCoverageTable && style.isInCoverageTable
                        }`}>
                    <InputGroup>
                        <Form.Control
                            placeholder="Search"
                            value={header.column.getFilterValue() as string} // Explicitly specify the type as 'string'
                            onChange={(e) => header.column.setFilterValue(e.target.value)}
                            className={style.columnFilter}
                        />
                        <X
                            onClick={() => {
                                header.column.setFilterValue('');
                                setFilterOpen(false);
                            }}
                            className={style.closeColumnFilter}
                        />
                    </InputGroup>
                </span>
            ) : (
                <span
                    className={`${style.tableHeader} ${isInCoverageTable && style.isInCoverageTable
                        }`}>
                    <span
                        className={`${style.tableHeader} ${isInCoverageTable && style.isInCoverageTable
                            }`}
                        {...{
                            onClick: header.column.getToggleSortingHandler(),
                        }}>
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        <span>
                            {{
                                false: <ChevronExpand className={style.tableIcon} />,
                                asc: <ChevronUp className={style.tableIcon} />,
                                desc: <ChevronDown className={style.tableIcon} />,
                            }[header.column.getIsSorted() as string] ?? null}
                        </span>
                    </span>
                    <span>
                        {header.column.getCanFilter() && (
                            <Search onClick={() => setFilterOpen(true)} className={style.tableIcon} />
                        )}
                    </span>
                </span>
            )}
        </>
    );
};
