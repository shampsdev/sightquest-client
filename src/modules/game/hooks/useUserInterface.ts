import { useMapStore } from '../store/useMapStore';

export const useUserInterface = () => {
  const mapState = useMapStore((store) => store);

  return {
    questPoint: mapState.slected_quest_point,
    setQuestPoint: mapState.setSelectedQuestPoint,
    updatePopup: mapState.update_popup,
    setUpdatePopup: mapState.setUpdatePopup,
    rotationPopup: mapState.rotation_popup,
    setRotationPopup: mapState.setRotationPopup,
    tracking: mapState.tracking,
    setTracking: mapState.setTracking,
    perkMenu: mapState.perk_menu,
    setPerkMenu: mapState.setPerkMenu,
  };
};
