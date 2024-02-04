import { IRoute } from "@/interfaces/IRoute";
import { create } from "zustand";

type GameSettingsState = {
  route?: IRoute;
  // eslint-disable-next-line no-unused-vars
  selectRoute: (selectedRoute: IRoute) => void;
};

const useGameSettings = create<GameSettingsState>((set) => ({
  route: undefined,
  selectRoute: (selectedRoute) => set({ route: selectedRoute }),
}));

export default useGameSettings;
