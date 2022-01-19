import { Puff } from "react-loader-spinner";

function Loader() {
  return (
    <div className=" flex justify-center items-center h-96">
      <div>
        <Puff heigth="100" width="100" color="skyblue" arialLabel="loading" />
        <p className="text-center dark:text-gray-300">Loading</p>
      </div>
    </div>
  );
}

export default Loader;
