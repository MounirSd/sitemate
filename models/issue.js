const { v4: uuidv4 } = require('uuid');

class Issue {
    constructor(title, description, id = null) {
      this.id = !id? uuidv4(): id;
      this.title = title;
      this.description = description;
    }
  }
  
  module.exports = Issue;