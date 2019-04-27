export function choose(model,name,value) {
  let t = 1;
  let list = this[model][name]

  if (list.indexOf(value) >= 0) {
    list.splice(list.indexOf(value), 1)
  } else {
    list.push(value);
  }
  this.$set(this[model], name, list)
}

export function chooseSingle(model, name, value) {
  this.$set(this[model], name, new Array());
  this.$choose(model, name, value);
}

export function isChoice(model, name, value)
{
  return this[model][name].indexOf(value) >= 0;
}

