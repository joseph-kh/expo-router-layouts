import Head from "expo-router/head";
import "./style.css";

const Page = () => {
  console.log("I am web");

  return (
    <>
      <Head>
        <title>Expo Page</title>
        <meta name="description" content="description" />
      </Head>

      <h2>Drawer 1 web</h2>
      <div className="container">
        <span style={{ color: "#fff" }}>I am a container</span>
      </div>
    </>
  );
};

export default Page;
