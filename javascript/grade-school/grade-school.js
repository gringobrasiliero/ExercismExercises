class School {
  constructor() {
    this.class = {};
  }

roster() {
  return this.class
}


grade(grade){
  return this.class[grade] || [];
}
add(student, grade) {
  if( grade in this.class) {
    this.class[grade].push(student);
    this.class[grade].sort();
  }else{
    this.class[grade] = [student];
  }
}

}

export default School
