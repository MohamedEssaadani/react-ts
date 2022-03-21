import StatusProps from "../Props/StatusProps";

const Status = (props: StatusProps) => {
  const message =
    props.status === "loading"
      ? "Loading..."
      : props.status === "success"
      ? "Data Fetched Successfully!"
      : "Error While Fetching Data";

  return (
    <div>
      <h2>Status: {message}</h2>
    </div>
  );
};

export default Status;
