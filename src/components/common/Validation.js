import 'jquery';
let instance = null;
class ValidationService {

    constructor(validationForm) {
        if (!instance) {
            instance = this;
        }
        if (instance.errors == undefined)
            instance.errors = {};
        instance.addForm = this.addForm;
        instance.getValidationStatus = this.getValidationStatus;
        instance.validateForm = this.validateForm;
        instance.validateElement = this.validateElement;
        // return this.addForm(validationForm);
        return instance;
    }
    addForm(validationForm) {
        instance.errors[validationForm] = {};
        $("#" + validationForm + " input").each(function (ele) {
            instance.errors[validationForm][this.id] = "";
            $(this).blur(function () {
                if (this.checkValidity())
                    instance.errors[$(this).closest("form").attr("id")][this.id] = "";
                else
                    instance.errors[$(this).closest("form").attr("id")][this.id] = this.validationMessage;

            });
        });
        return instance.errors[validationForm];
    }
    getValidationStatus(form) {
        return instance.errors[form];
    }
    validateForm(form) {
        instance.errors[form].isValid = true;
        $("#" + form + " input").each(function (ele) {
            if (this.checkValidity())
                instance.errors[form][this.id] = "";
            else {
                if(this.validity.rangeUnderflow || this.validity.rangeOverflow)
                    instance.errors[form][this.id]="Invalid value";        
                else
                    instance.errors[form][this.id] = this.validationMessage;
                instance.errors[form].isValid = false;
            }
        });
        return instance.errors[form];
    }
    addElement(ele) {
        instance.errors[$(ele).closest("form").attr("id")][ele.id] = "";
        $(ele).blur(function () {
            if (ele.checkValidity())
                instance.errors[$(ele).closest("form").attr("id")][ele.id] = "";
            else
                instance.errors[$(ele).closest("form").attr("id")][ele.id] = ele.validationMessage;
        });
    }
    validateElement(ele) {
        if (ele.checkValidity())
            instance.errors[$(ele).closest("form").attr("id")][ele.id] = "";
        else
            instance.errors[$(ele).closest("form").attr("id")][ele.id] = ele.validationMessage;
    }

};
export default ValidationService;