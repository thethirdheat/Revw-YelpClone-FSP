export const UI_MODAL_TURN_ON = "UI_MODAL_TURN_ON"
export const UI_MODAL_TURN_OFF = "UI_MODAL_TURN_OFF"




export const receiveModalOn = (component,opacity=1) => ({
  type: UI_MODAL_TURN_ON,
  component,
  opacity
});
export const receiveModalOff = () => ({
  type: UI_MODAL_TURN_OFF,
});