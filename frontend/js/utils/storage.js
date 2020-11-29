// remamber the user
const tokenkey = "token";
const userkey = "user";

export function saveToken(token) {
  saveInStorage(tokenkey, token);
}

export function getToken() {
  return fetFromStorage(tokenkey);
}

export function saveUser(user) {
  saveInStorage(userkey, user);
}

export function getUserName() {
  const user = getFromStorage(userkey)

  if(user){
      return user.username;
  }
  return null;
}

export function clearStorage() {
  localStorage.clear();
}

function saveInStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getFromStorage() {
  const storageValue = localStorage.getItem(key);

  if(!storageValue) {
    return[];
  }
  return JSON.parse(storageValue);
}
