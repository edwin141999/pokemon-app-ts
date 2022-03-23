import Head from "next/head";
import { FC } from "react";

interface Props {
    title?: string;
}

export const Layout: FC<Props> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title || "Pokemon App"}</title>
                <meta name="author" content="Edwin Dávila" />
                <meta
                    name="description"
                    content={`Informacion sobre el pokemon ${title}`}
                />
                <meta name="keywords" content={`${title}, pokemon, pokedex`} />
            </Head>
            {/* Navbar */}
            <main>{children}</main>
        </>
    );
};
