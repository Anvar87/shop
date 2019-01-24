const $ = require('jquery');
let funcName = () => {
  $("[name=langrus]").bind("change keyup input click", function () {
    if (this.value.match(/[^а-яА-Я\s]/g)) {
      this.value = this.value.replace(/[^а-яА-Я\s]/g, "");
    }
  });

  $("[name=number]").bind("change keyup input click", function () {
    if (this.value.match(/[^0-9]/g)) {
      this.value = this.value.replace(/[^0-9]/g, "");
    }
  });

};
funcName();

module.exports = funcName;