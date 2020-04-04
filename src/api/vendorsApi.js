import delay from './delay';
import server from './server';

class VendorsApi {
  static getAllVendors() {
    return fetch(server+"/api/vendors/getallvendors",
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'auth-token':localStorage.token  
        },
        credentials: 'include',
        method: "GET"
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
  static addVendor(vendor) {
    return fetch(server+'/api/vendors/addvendor', {
      method: 'POST',
      mode: 'cors',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'auth-token':localStorage.token  
        },
      credentials:'include',
      body: JSON.stringify({
          "vendorName":vendor.vendorName,
          "category": vendor.category,
          "vendorPhone": vendor.vendorPhone
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
  static editVendor(vendor) {
    //
    return fetch(server+"/api/vendors/editvendor",
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',          
          'auth-token':localStorage.token  
        },
        credentials: 'include',
        method: "POST",
        body: JSON.stringify({
          "id":vendor._id,
          "vendorName":vendor.vendorName,
          "category": vendor.category,
          "vendorPhone": vendor.vendorPhone
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
  static deleteVendor(id){
    return fetch(server+"/api/vendors/deletevendor",
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'  ,
          'auth-token':localStorage.token            
        },
        credentials: 'include',
        method: "POST",
        body: JSON.stringify({
          "id":id
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
  static likeVendor(id){
    return fetch(server+"/api/vendors/likevendor",
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json' ,
          'auth-token':localStorage.token             
        },
        credentials: 'include',
        method: "POST",
        body: JSON.stringify({
          "id":id
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
  static dislikeVendor(id){
    return fetch(server+"/api/vendors/dislikevendor",
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json' ,
          'auth-token':localStorage.token             
        },
        credentials: 'include',
        method: "POST",
        body: JSON.stringify({
          "id":id
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
}

export default VendorsApi;