"use strict"

function insert(num) {
  document.form.textview.value = document.form.textview.value + num;
}

function clean() {
  document.form.textview.value = "";
}

function back() {
  let deleteValues = document.form.textview.value;
  document.form.textview.value = deleteValues.substring(0, deleteValues.length - 1);
}

function equal() {
  let values = document.form.textview.value;
  if (values) {
    values = document.form.textview.value = eval(values);
  }
}