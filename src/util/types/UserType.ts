export interface User {
  id: number;
  nickname: string;
  score: number;
  job: '아이돌' | '배우' | '개그맨';
  time: string;
}

export interface CreateUser {
  nickname: string;
  job: '아이돌' | '배우' | '개그맨';
  score: number;
  time: string;
}

export interface UpdateUser {
  job: '아이돌' | '배우' | '개그맨';
  score: number;
  time: string;
}