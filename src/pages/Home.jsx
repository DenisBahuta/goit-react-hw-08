import DocumentTitle from "../components/DocumentTitle";

const styles = {
  container: {
    minHeight: "calc(100vh - 50px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: "center",
  },
};

function Home() {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>

      <div style={styles.container}>
        <h1 style={styles.title}>
          PHONE BOOK 📞📖
          <span role='img' aria-label='Greeting icon'></span>
        </h1>
      </div>
    </>
  );
}

export default Home;
