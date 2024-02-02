import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <ReactLoading type="balls" color="#212529" height={"100px"} width={"100px"} />
    </div>
  );
};

export default Loading;
