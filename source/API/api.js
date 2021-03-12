// Instruments
import { MAIN_URL, groupId } from "./config";

export const api = {
  get token() {
    return localStorage.getItem("token");
  },
  auth: {
    signup(userInfo) {
      return fetch(`${MAIN_URL}/user/${groupId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      });
    },
    login(credentinals) {
      return fetch(`${MAIN_URL}/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentinals),
      });
    },
    authenticate() {
      return fetch(`${MAIN_URL}/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: this.token }),
      });
    },
  },
  posts: {
    fetch() {
      return fetch(`${MAIN_URL}/feed`, {
        method: "GET",
        headers: {
          "x-no-auth": groupId,
        },
      });
    },
    create(post) {
      return fetch(`${MAIN_URL}/feed`, {
        method: "POST",
        headers: {
          "x-no-auth": groupId,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      });
    },
  },
};
