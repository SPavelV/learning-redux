// Instruments
import { MAIN_URL, groupId } from "./config";

export const api = {
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
    login(userInfo) {
      return fetch(`${MAIN_URL}/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
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
