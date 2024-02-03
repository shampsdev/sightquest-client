import { IQuestCompleted } from '@/interfaces/IEvent';
import { IQuestPoint } from '@/interfaces/IQuestPoint';
import { create } from 'zustand';

interface IMapState {
  slected_quest_point: IQuestPoint | null;
  update_popup: IQuestCompleted | null;
  rotation_popup: boolean;
}

interface IMapStateActions {
  setSelectedQuestPoint: (point: IQuestPoint | null) => void;
  setUpdatePopup: (point: IQuestCompleted | null) => void;
  setRotationPopup: (to: boolean) => void;
}

export const useMapStore = create<IMapState & IMapStateActions>((set) => ({
  slected_quest_point: null,
  update_popup: null,
  rotation_popup: false,
  setSelectedQuestPoint: (point) =>
    set({
      slected_quest_point: point,
    }),
  setUpdatePopup: (event) =>
    set({
      update_popup: event,
    }),
  setRotationPopup: (to) =>
    set({
      rotation_popup: to,
    }),
}));
