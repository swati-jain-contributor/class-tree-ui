import delay from './delay';
import server from './server';
//import * as loginActions from '../actions/loginActions';

class AccountsApi {
  static createMaintainence(maintainData) {
    return fetch(server+"/api/accounts/createmaintainence",
      {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'auth-token':localStorage.token  
        },
        credentials: 'include',
        body: JSON.stringify({
          type: maintainData.type,
          amt: maintainData.amt,
          month: (new Date()).getMonth() + 1,
          year: (new Date()).getFullYear()
        })
      })
      .then((resp) => resp.json())
      .then(function (res) {
        console.log(res);
        return res;
      })
      .catch(function (res) {
        console.log(res);
        //return res;
        throw(res);
      })
  }
  static getAllMaintainence(maintainData) {
    return fetch(server+"/api/accounts/getallmaintainence",
      {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'auth-token':localStorage.token  
        },
        credentials: 'include',
        body: JSON.stringify(maintainData)
      })
      .then((resp) => resp.json())
      .then(function (res) {
        console.log(res);
        return res;
      })
      .catch(function (res) {
        console.log(res);
        //return res;
        throw(res);
      })
  }
  static payMaintainence(maintainData) {
    console.log(maintainData);
    return fetch(server+'/api/accounts/paymaintainence', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
          'auth-token':localStorage.token  
      },
      credentials: 'include',
      body: JSON.stringify({
        "ids": maintainData.ids,
        "isCash":maintainData.isCash,
        "memberId":maintainData.memberId
      })
    })
      .then((resp) => resp.json())
      .then(function (res) {
        console.log(res);
        return res;
      }).catch(function (res) {
        console.log(res);
        //return res;
        throw(res);
      });
  }
  static blockMaintainence(maintainData){
    console.log(maintainData);
    return fetch(server+'/api/accounts/blockmaintainence', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
          'auth-token':localStorage.token  
      },
      credentials: 'include',
      body: JSON.stringify({
        "id": maintainData.id,
        "isBlock":maintainData.isBlock,
        "memberId":maintainData.memberId
      })
    })
      .then((resp) => resp.json())
      .then(function (res) {
        console.log(res);
        return res;
      }).catch(function (res) {
        console.log(res);
        //return res;
        throw(res);
      });
  }
  static addExpense(maintainData) {
    return fetch(server+'/api/accounts/addexpense', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
          'auth-token':localStorage.token  
      },
      credentials: 'include',
      body: JSON.stringify({
        "amount": maintainData.amount,
        "remarks": maintainData.remarks
      })
    })
      .then((resp) => resp.json())
      .then(function (res) {
        console.log(res);
        return res;
      }).catch(function (res) {
        console.log(res);
        ///return res;
        throw(res);
      });
  }
  static getMemberStmt(maintainData) {
    if (maintainData == undefined)
      maintainData = {};
    if (!maintainData.startDate)
      maintainData.startDate = new Date();
    if (!maintainData.endDate)
      maintainData.endDate = new Date();
    console.log(maintainData.endDate);
    var sd = maintainData.startDate.setHours(0, 0, 0);
    var ed = maintainData.endDate;
    ed = ed.setDate(ed.getDate() + 1);
    ed = new Date(ed).setHours(0, 0, 0);
    return fetch(server+'/api/accounts/getmemberstmt', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
          'auth-token':localStorage.token  
      },
      credentials: 'include',
      body: JSON.stringify({
        "id": maintainData.id,
        "startDate": sd,
        "endDate": ed
      })
    })
      .then((resp) => resp.json())
      .then(function (res) {
        console.log(res);
        return res;
      }).catch(function (res) {
        console.log(res);
        //return res;
        throw(res);
      });
  }
  static getSocietyFunds(maintainData) {
    if (maintainData == undefined)
      maintainData = {};
    if (!maintainData.startDate)
      maintainData.startDate = new Date();
    if (!maintainData.endDate)
      maintainData.endDate = new Date();
    console.log(maintainData.endDate);
    var sd = maintainData.startDate.setHours(0, 0, 0);
    var ed = maintainData.endDate;
    ed = ed.setDate(ed.getDate() + 1);
    ed = new Date(ed).setHours(0, 0, 0);
    return fetch(server+'/api/accounts/getsocietyfunds', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
          'auth-token':localStorage.token  
      },
      credentials: 'include',
      body: JSON.stringify({
        "startDate": sd,
        "endDate": ed
      })
    })
      .then((resp) => resp.json())
      .then(function (res) {
        console.log(res);
        return res;
      }).catch(function (res) {
        console.log(res);
        //return res;
        throw(res);
      });
  }
  static getMaintainenceDetails(maintainData) {
    return fetch(server+'/api/accounts/getmaintainencedetails', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
          'auth-token':localStorage.token  
      },
      credentials: 'include',
      body: JSON.stringify({
        "id": maintainData.id
      })
    })
      .then((resp) => resp.json())
      .then(function (res) {
        console.log(res);
        return res;
      }).catch(function (res) {
        console.log(res);
        //return res;
        throw(res);
      });
  }
  static getPendingMaintainence(maintainData) {
    return fetch(server+'/api/accounts/getpendingmaintainence', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
          'auth-token':localStorage.token  
      },
      credentials: 'include',
      body: JSON.stringify({
        "id": maintainData.id
      })
    })
      .then((resp) => resp.json())
      .then(function (res) {
        console.log(res);
        return res;
      }).catch(function (res) {
        console.log(res);
        //return res;
        throw(res);
      });
  }
}

export default AccountsApi;