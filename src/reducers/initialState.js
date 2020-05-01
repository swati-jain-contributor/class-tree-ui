const defaultState= {
  classes:{
    TeacherClasses:[],
    userEmail:null,
    userPhone:null,
    userName:null
  
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
    "loginOTPSuccess":false,
    "open":false,
    "errorMsg":"",
    "apartmentRegistrationSuccess":false,
    "registerOTPSuccess":false
  },
  requests:[],
  ajaxCallsInProgress: 0
};
let initialState=defaultState;
// try{
//   const serializedState=localStorage.getItem("state");  
//   if(serializedState != null)
//     initialState= JSON.parse(serializedState);
//   initialState.ajaxCallsInProgress=0;
// }
// catch(err){
// }
export default initialState;
