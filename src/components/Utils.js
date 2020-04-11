export  const  checkValidity = (event)=> {
  if (event.target.form.checkValidity()) {
    this.setState({ errors: {} });
    for (let i in event.target.form.elements) {
      let el = event.target.form.elements[i];
      if (el.tagName == "INPUT" || el.tagName == "TEXTAREA")
        el.style.borderColor = "black";
    }
    return true;

  }
  else {
    let errors = {};
    for (let i in event.target.form.elements) {
      let el = event.target.form.elements[i];
      this.checkELValidity(el);
    }
    return false;
  }
};

export const checkELValidity= (event) =>{
  var el;
  if (!event.target)
    el = event;
  else
    el = event.target;
  var errors = JSON.parse(JSON.stringify(this.state.errors || {}));

  if (el.tagName == "INPUT" || el.tagName == "TEXTAREA") {
    let name = el.getAttribute("name");
    if (!el.checkValidity()) {
      if (el.validity.valueMissing)
        errors[name] = "Required";
      else if (name == "email")
        errors[name] = "Invalid email address";
      else
        errors[name] = "Invalid value";
      el.style.borderColor = "red";
    }
    else {
      errors[name] = void 0;
      el.style.borderColor = "black";
    }
  }
  this.setState({ errors });
};

export const onChange =(event) =>{
  const field = event.target.name;
  let classData = this.state.classData;
  classData[field] = event.target.value;
  return this.setState({ classData: classData });
};
