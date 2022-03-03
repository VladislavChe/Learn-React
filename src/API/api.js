import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '8b76209c-028f-4970-a9a4-8c998ee11b4f',
  },
});

export const usersAPI = {
  getUsers(currentPage, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  follow(userId) {
    return instance.post(`follow/${userId}`);
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`);
  },
  setUserData() {
    return instance.get(`auth/me`);
  },
  getUserProfile(userId) {
    return instance.get(`profile/${userId}`);
  },
};
