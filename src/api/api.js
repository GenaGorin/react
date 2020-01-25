import * as axios from 'axios';

const samuraiApi = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '6fc10eda-6101-457f-9b3f-78fb0d422a3d',
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
});


export const authAPI = {
    authMe() {
        return samuraiApi.get(`auth/me`);
    },
    login(loginData) {
        return samuraiApi.post('/auth/login', loginData);
    },
    logout() {
        return samuraiApi.delete('/auth/login');
    }
}

export const userAPI = {
    getUsers (page = 1, size = 20) {
        return samuraiApi.get(`users?page=${page}&count=${size}`).then(response => response.data);
    },
    follow  (userId)  {
        return  samuraiApi.post(`follow/${userId}`);
    },
    unfollow (userId) {
        return samuraiApi.delete(`follow/${userId}`);
    }
}

export const profileAPI = {
    getProfile(id) {
        return samuraiApi.get('profile/'+id);
    },
    getStatus(id) {
        return samuraiApi.get('/profile/status/'+id);
    },
    updateStatus(status) {
        return samuraiApi.put('/profile/status', {
            status: status,
        });
    },
    saveProfile(formData) {
        return samuraiApi.put('/profile', formData);
    },
    savePhoto(file) {
        let formData = new FormData();
        formData.append('image', file);
        return samuraiApi.put('/profile/photo', formData, {
            headers: {'Content-Type': 'multipart/form-data' }
        });
    }
}