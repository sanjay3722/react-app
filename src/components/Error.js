import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>
        {error.status} : {error.statusText}
      </h1>
      <h2>Oops something went wrong!</h2>
    </div>
  );
};

export default Error;
