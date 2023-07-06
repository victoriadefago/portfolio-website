import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/containerBlock";
import FavouriteProjects from "../components/favouriteProjects";
import LatestCode from "../components/latestCode";
import Hero from "../components/hero";
import getLatestRepos from "@lib/getLatestRepos";
import userData from "@constants/data";

export default function Home({ repositories }) {
  return (
    <ContainerBlock
      title="Victoria Defagot"
      description="Developer portfolio."
    >
      <Hero />
      <FavouriteProjects />
      <LatestCode repositories={repositories} />
    </ContainerBlock>
  );
}

export const getServerSideProps = async () => {
  console.log(process.env.GITHUB_AUTH_TOKEN);
  let token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = await getLatestRepos(userData, token);
  // console.log("REPOSITORIES", repositories);

  return {
    props: {
      repositories,
    },
  };
};
