import api from "./ApiConfig";

export const getAllLiveCourses = async () => {
  try {
    const responce = await api.get(`/api/liveclass/getAllLiveClass`);

    if (responce?.status === 200) {
      return responce?.data?.classes;
    }
  } catch (error) {
    return error;
  }
  return;
};
