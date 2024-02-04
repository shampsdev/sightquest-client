import { useMapStore } from '../store/useMapStore';

export const useUserInterface = () => {
  const mapState = useMapStore((store) => store);

  return {
    questPoint: mapState.slected_quest_point,
    setQuestPoint: mapState.setSelectedQuestPoint,
    updatePopup: mapState.update_popup,
    setRotationPopup: mapState.setRotationPopup,
    rotationPopup: mapState.rotation_popup,
    setTracking: mapState.setTracking,
    tracking: mapState.tracking,
    setPerkMenu: mapState.setPerkMenu,
    perkMenu: mapState.perk_menu,
  };
};
