import { Container } from "react-bootstrap";
import { ToastContainer } from 'react-toastify';

interface PageProps {
    title?: string;
    content: React.ReactNode;
}

export const Page: React.FC<PageProps> = ({ title, content }) => (
    <>
        <Container>
            <div>
                <div>{title}</div>
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
)