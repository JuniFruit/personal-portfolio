import { FC, useEffect } from "react";
import Page from "../page/Page";
import { UserInfoService } from "../services/userInfo.service";

const App: FC = () => {
  useEffect(() => {
    UserInfoService.getInfo();
  }, []);

  return <Page />;
};

export default App;
