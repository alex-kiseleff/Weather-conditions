/**
 * @component Layout - компонент-обёртка со статичным контентом.
 * @param {ReactNode} children - реакт страницы.
 * @returns {ReactElement}
 */
import React, { FC, ReactNode } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Layout.scss';

const Layout: FC<ReactNode> = (children) => {
    return (
        <div className={'layout'}>
            <div className={'layout__container'}>
                <Header />
                {children}
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
