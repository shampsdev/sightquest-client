import { useMapStore } from '../store/useMapStore';

export const useUserInterface = () => {
  const mapState = useMapStore((store) => store);

  return {
    questPoint: mapState.slected_quest_point,
    setQuestPoint: mapState.setSelectedQuestPoint,
    updatePopup: mapState.update_popup,
  };
};
