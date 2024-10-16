const fs = require('fs').promises;
const path = require('path');


class Attachements {
    constructor(page) {
      this.page = page;
    }
    async uploadFile(locator, filePath) {
        await this.page.locator(locator).setInputFiles(filePath);
    }    
    }
  
  module.exports = Attachements;













