import { InfinitySpin } from "react-loader-spinner";

import s from "./Loader.module.css";

export const Loader = (): JSX.Element => {
  return (
    <div className={s.loader}>
      <InfinitySpin
        visible ={true}
        width="200"
        color="#4fa94d"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
};
