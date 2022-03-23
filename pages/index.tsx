import { NextPage, GetStaticProps } from "next";
import { Button } from "@nextui-org/react";
import { Layout } from "../components/layouts";

const HomePage: NextPage = (props) => {
    console.log(props);

    return (
        <Layout title="Listado de Pókemons">
            <ul>
                <li>Pokemon</li>
            </ul>
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
    console.log("hola mundo");

    return {
        props: {},
    };
};

export default HomePage;
