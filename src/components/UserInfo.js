export class UserInfo {
    constructor({ infoSelector, jobSelector }) {
      this._infosel = document.querySelector(infoSelector);
      this._jobsel = document.querySelector(jobSelector);
    }
  
  
  
    getUserInfo() {
      return {
        name: this._infosel.textContent,
        job: this._jobsel.textContent
      }
    }
  
  
    setUserInfo(data) {
      this._infosel.textContent = data.name;
      this._jobsel.textContent = data.job;
  
    }
  
  }