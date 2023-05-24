import React from 'react';
import { Container } from 'react-bootstrap';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import style from './Page.module.scss';

interface PageProps {
    title?: string;
    content: React.ReactNode;
}

export const Page: React.FC<PageProps> = ({ title, content }) => (
    <>
        <Container className={style.page}>
            <div>
                <div className={style.title}>{title}</div>
                <ToastContainer
                    position='top-center'
                    hideProgressBar
                    autoClose={3000}
                    theme='colored'
                    draggable={false}
                />
            </div>
            {content}
        </Container>
    </>
);