import axios from 'axios';
import { User, CreateUser, UpdateUser } from '../types/UserType';

const API_URL = (import.meta.env.VITE_API_URL || 'http://localhost:3000') + '/api/v1';

export async function getUsers(): Promise<User[]> {
  try {
    const response = await axios.get(`${API_URL}/users`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
}

export async function createUser(user: CreateUser): Promise<User> {
  try {
    const response = await axios.post(`${API_URL}/users`, user);
    return response.data.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
}

export async function updateUser(nickname: string, user: UpdateUser): Promise<User> {
  try {
    const response = await axios.put(`${API_URL}/users/${nickname}`, user);
    return response.data.data;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
}

export async function deleteUser(nickname: string): Promise<void> {
  try {
    await axios.delete(`${API_URL}/users/${nickname}`);
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
}

export async function getUserRank(sort: string): Promise<User[]> {
  try {
    const response = await axios.get(`${API_URL}/users/rank?sort=${sort}`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching rank:', error);
    throw error;
  }
}

export async function getUserByNickname(nickname: string): Promise<User | null> {
  try {
    const response = await axios.get(`${API_URL}/users/${nickname}`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    return null;
  }
}