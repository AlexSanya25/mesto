export class UserInfo {
    constructor({ infoSelector, jobSelector, avatarSelector }) {
      this._infosel = document.querySelector(infoSelector);
      this._jobsel = document.querySelector(jobSelector);
      this._avatarSel = document.querySelector(avatarSelector);
      
    }
  
  
  
    getUserInfo() {
      return {
        name: this._infosel.textContent,
        about: this._jobsel.textContent
      }
    }
  
  
    setUserInfo(data) {
      this._infosel.textContent = data.name;
      this._jobsel.textContent = data.about;
      
     
      this.userId = data._id;

    }
  
    avatarUser(data) {
      this._avatarSel.src = data.avatar;
    }

  }