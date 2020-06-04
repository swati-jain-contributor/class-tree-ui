import delay from './delay';
import server from './server';

class ClassApi {
  static addClass(collData) {
    collData.timezone = new Date().getTimezoneOffset();
    return fetch(server + "/api/classes/addClass",
      {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'

        },
        // credentials: 'include',
        body: JSON.stringify(collData)
      })
      .then((resp) => resp.json())
      .then(function (res) {
        console.log(res);
        return res;
      })
      .catch(function (res) {
        console.log(res);
        //return res;
        throw (res);
      });
  }

  static getClassDetails(id) {
    return fetch(server + "/api/classes/getClassDetails",
      {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'

        },
        // credentials: 'include',
        body: JSON.stringify(id)
      })
      .then((resp) => resp.json())
      .then(function (res) {
        console.log(res);
        return res;
      })
      .catch(function (res) {
        console.log(res);
        //return res;
        throw (res);
      });
  }

  static bookClass(collData) {
    return fetch(server + "/api/classes/bookClass",
      {
        method: 'POST',
        // mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        // credentials: 'include',
        body: JSON.stringify({
          classId: collData.classId,
          email: collData.email,
          phoneNo: collData.phoneNo,
          rating: collData.rating,
          name: collData.name,
          timezone: new Date().getTimezoneOffset()
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
        throw (res);
      });
  }
  static getClasses(data) {
    data.token = localStorage.getItem("token");
    return fetch(server + "/api/classes/getClasses",
      {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        // credentials: 'include',
        body: JSON.stringify(data)
      })
      .then((resp) => resp.json())
      .then(function (res) {
        console.log(res);
        return res;
      })
      .catch(function (res) {
        console.log(res);
        throw (res);
      });
  }

}

export default ClassApi;
