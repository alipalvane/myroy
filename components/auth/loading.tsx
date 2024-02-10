import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <ReactLoading type="balls" color="#6356E5" height={"80px"} width={"80px"} />
    </div>
  );
};

export default Loading;
