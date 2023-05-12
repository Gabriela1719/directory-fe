interface LayoutProp {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProp> = ({ children }) => {
    return (
        <>
            {children}
        </>
    )
} 