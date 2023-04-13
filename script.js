//your JS code here. If required.
const student={
	name:"Darshna"
};
Object.prototype.getKeys = function() {
  // return an array of all keys in the object
  return Object.keys(this);
};
console.log(student.getKeys());



