import { useMemo, useState } from "react";
import { ContactTypeTableRow } from "./ContactTableRow";
import {
    ColumnDef,
    useReactTable,
    getCoreRowModel,
    flexRender,
    getFilteredRowModel,
    getSortedRowModel,
    getPaginationRowModel,
    ExpandedState,
    SortingState,
    PaginationState
} from "@tanstack/react-table";
import contacts from '../../app/dummyData/contacts.json';
import { Badge, OverlayTrigger, Table, Tooltip } from "react-bootstrap";
import styles from './Adresar.module.scss';
import { Page } from "../../components/navigation/Page.type";
import { ColumnTextFilter, Pagination } from "../../components/table";
import { Button } from "../../components";
import { useNavigate } from "react-router-dom";
import { HeartFill, Pencil, Trash } from "react-bootstrap-icons";

const paginationState = {
    pageIndex: 0,
    pageSize: 15,
};

export const Adresar: Page = () => {

    const [expanded, setExpanded] = useState<ExpandedState>({});
    const [sorting, setSorting] = useState<SortingState>([]);
    const [pagination, setPagination] = useState<PaginationState>(paginationState);

    const columns = useMemo(
        (): ColumnDef<ContactTypeTableRow>[] => [
            {
                id: 'name',
                accessorFn: (row) => row.name,
                cell: (info) => info.getValue(),
                header: () => <span>First name</span>,
            },
            {
                id: 'lastName',
                accessorFn: (row) => row.lastName,
                cell: (info) => info.getValue(),
                header: () => <span>Last name</span>,
            },
            {
                id: 'dateTime',
                accessorFn: (row) => row.dateTime,
                cell: (info) => info.getValue(),
                header: () => <span>Date/Time</span>,
            },
            {
                id: 'contactType',
                accessorFn: (row) => row.contactType,
                cell: (info) => info.getValue(),
                header: () => <span>Type</span>,
            },
            {
                id: 'value',
                accessorFn: (row) => row.value,
                cell: (info) => info.getValue(),
                header: () => <span>Value</span>,
            },
            {
                id: 'favorit',
                accessorFn: (row) => row.value,
                cell: (info) => info.getValue(),
            },
            {
                id: 'actions',
                accessorFn: (row) => row.value,
                cell: (info) => (
                    <div className='d-flex align-items-center'>
                        <HeartFill className="text-danger" />
                        <Pencil />
                        <Trash />
                    </div>
                ),
            },
        ],
        []
    );


    const data = useMemo(
        () => contacts,
        []
    );
    console.log(data)
    const table = useReactTable<ContactTypeTableRow>({
        columns,
        data,
        state: { expanded, sorting, pagination },
        onExpandedChange: setExpanded,
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onPaginationChange: setPagination,
        sortDescFirst: false,
        filterFromLeafRows: true,
    })

    const navigate = useNavigate();
    return (
        <div className={styles.background}>
            <div
                className='d-flex flex-wrap align-items-center justify-content-between my-4'
                style={{ gap: '2rem' }}>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <Button
                        variant="email"
                        className={styles.addNew}
                        label=" +  Add New Contact"
                        onClick={() => {
                            navigate(
                                '/add'
                            );
                        }}
                    />
                </div>
                <Pagination data={data} table={table} />
            </div>

            <Table striped hover className={styles.contactTable}>
                <thead className={styles.tableHeader}>
                    {(() => {
                        const { headers } = table.getHeaderGroups()[0];
                        console.log(headers[0]);
                        return (
                            <tr>
                                <th>
                                    <div>
                                        <ColumnTextFilter header={headers[0]} isInCoverageTable />
                                    </div>
                                </th>
                                <th>
                                    <div>
                                        <ColumnTextFilter header={headers[1]} isInCoverageTable />
                                    </div>
                                </th>
                                <th>
                                    <div>
                                        <ColumnTextFilter header={headers[2]} isInCoverageTable />
                                    </div>
                                </th>
                                <th>
                                    <div>
                                        <ColumnTextFilter header={headers[3]} isInCoverageTable />
                                    </div>
                                </th>
                                <th>
                                    <div>
                                        <ColumnTextFilter header={headers[4]} isInCoverageTable />
                                    </div>
                                </th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        );
                    })()}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row) => {
                        const cells = row.getVisibleCells();

                        return (
                            <tr key={row.id}>
                                <td>
                                    <div className='d-flex align-items-center' style={{ color: 'ActiveBorder', textDecoration: 'underline' }}>
                                        {flexRender(cells[0].column.columnDef.cell, cells[0].getContext())}
                                    </div>
                                </td>
                                <td>
                                    <div className='d-flex align-items-center' style={{ color: 'ActiveBorder', textDecoration: 'underline' }}>
                                        {flexRender(cells[1].column.columnDef.cell, cells[1].getContext())}
                                    </div>
                                </td>
                                <td>
                                    <div className='d-flex align-items-center'>
                                        {flexRender(cells[2].column.columnDef.cell, cells[2].getContext())}
                                    </div>
                                </td>
                                <td>
                                    <Badge
                                        bg={(cells[3].getValue() as string).includes('Email')
                                            ? 'email'
                                            : (cells[3].getValue() as string).includes('Phone')
                                                ? 'phone'
                                                : (cells[3].getValue() as string).includes('Fixni telefon')
                                                    ? 'fixni'
                                                    : ''}>
                                        {flexRender(cells[3].column.columnDef.cell, cells[3].getContext())}
                                    </Badge>
                                </td>
                                <td>
                                    <div className='d-flex align-items-center'>
                                        {flexRender(cells[4].column.columnDef.cell, cells[4].getContext())}
                                    </div>
                                </td>
                                <td>
                                    <div className='d-flex align-items-center'>
                                        <OverlayTrigger
                                            placement='top'
                                            overlay={(props) => (
                                                <Tooltip id='button-tooltip' {...props}>
                                                    Add favorite
                                                </Tooltip>
                                            )}>
                                            <HeartFill className="text-danger" />
                                        </OverlayTrigger>
                                    </div>
                                </td>
                                <td>
                                    <div className='d-flex align-items-center'>
                                        <OverlayTrigger
                                            placement='top'
                                            overlay={(props) => (
                                                <Tooltip id='button-tooltip' {...props}>
                                                    Edit
                                                </Tooltip>
                                            )}>
                                            <Pencil />
                                        </OverlayTrigger>
                                    </div>
                                </td>
                                <td>
                                    <div className='d-flex align-items-center'>
                                        <OverlayTrigger
                                            placement='top'
                                            overlay={(props) => (
                                                <Tooltip id='button-tooltip' {...props}>
                                                    Delete
                                                </Tooltip>
                                            )}>
                                            <Trash />
                                        </OverlayTrigger>
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    )
}

Adresar.title = 'My Directory List';

