import { IList, IUser } from '../utils/interfaces';
import { axiosInstance } from '../services/http-client';

class ApiService {
  public async getUser(): Promise<IUser> {
    const response = await axiosInstance.get('/user.json', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  }

  public async getPlans(): Promise<IList> {
    const response = await axiosInstance.get('/plans.json', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  }
}

export default ApiService;
