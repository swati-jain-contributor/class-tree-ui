const defaultState = {
  classes: {
    offeredClasses: [],
    registeredClasses: [],
    allClasses: [],
    userEmail: null,
    userPhone: null,
    userName: null
  },
  session:
  {
    "_id": null,
    "memberid": null,
    "status": null,
    "role": null,
    "userId": null,
    "authCode": null,
    "__v": 0,
    "aptId": null,
    "authenticationStatus": false,
    "name": null,
    "updatedAt": null,
    "createdAt": null,
    "loginOTPSuccess": false,
    "open": false,
    "errorMsg": "",
    "apartmentRegistrationSuccess": false,
    "registerOTPSuccess": false
  },
  requests: [],
  ajaxCallsInProgress: 0
};
let initialState = defaultState;
let app = document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1;
if (app) {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState != null)
      initialState = JSON.parse(serializedState);
    initialState.ajaxCallsInProgress = 0;
    if(!initialState.userName)
      initialState.userEmail = void 0;
  }
  catch (err) {
    console(err);
  } 
}

export default initialState;
