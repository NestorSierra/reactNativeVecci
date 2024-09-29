import navigationTheme from "../navigation/navigationTheme";
import { navigationRef } from "../navigation/rootNavigation";
import client from "./client";

const register = (pushToken) =>
  client.post("/expoPushTokens", { token: pushToken });

export default { register };
