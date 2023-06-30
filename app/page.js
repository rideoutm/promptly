import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      Home{" "}
      <h1 className="head_text text-center">
        Discover & Share <br className="max-md:hidden" />
        <span className="orange_gradient">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Promptly is an open-source AI prompting tool for the modern world to discover, create, and share AI prompts
      </p>
      <Feed />
    </section>
  );
};

export default Home;
