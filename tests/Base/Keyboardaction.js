const fs = require('fs').promises;
const path = require('path');


class Basekeyboard {
  constructor(page) {
    this.keyboard = page.keyboard   
    }
    async presskey(key) {
    await this.keyboard.press(key);
  }
   async releasekey(key){
    await this.keyboard.release(key);
   }
   async typetext(text){
    await this.keyboard.type(text);
   }
}
module.exports = Basekeyboard;