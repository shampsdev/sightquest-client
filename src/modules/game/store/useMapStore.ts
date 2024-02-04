import { IQuestCompleted } from '@/interfaces/IEvent';
import { IQuestPoint } from '@/interfaces/IQuestPoint';
import { create } from 'zustand';

interface IMapState {
  slected_quest_point: IQuestPoint | null;
  update_popup: IQuestCompleted | null;
  rotation_popup: boolean;
  tracking: boolean;
  perk_menu: boolean;
}

interface IMapStateActions {
  setSelectedQuestPoint: (point: IQuestPoint | null) => void;
  setUpdatePopup: (point: IQuestCompleted | null) => void;
  setRotationPopup: (to: boolean) => void;
  setTracking: (to: boolean) => void;
  setPerkMenu: (to: boolean) => void;
}

export const useMapStore = create<IMapState & IMapStateActions>((set) => ({
  slected_quest_point: null,
  update_popup: null,
  rotation_popup: false,
  tracking: false,
  perk_menu: false,
  setSelectedQuestPoint: (point) =>
    set({
      slected_quest_point: point,
    }),
  setUpdatePopup: (event) =>
    set({
      update_popup: event,
    }),
  setTracking: (event) =>
    set({
      tracking: event,
    }),
  setRotationPopup: (to) =>
    set({
      rotation_popup: to,
    }),
  setPerkMenu: (to) =>
    set({
      rotation_popup: to,
    }),
}));
