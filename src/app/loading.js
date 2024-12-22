import Spinner from "@/components/Spinner";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // height: "80vh",
  },
};

function loading() {
  return (
    <div style={styles.container}>
      <Spinner />
    </div>
  );
}

export default loading;
