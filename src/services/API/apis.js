import axios from 'axios';

export const getMatchList = async () => {
  try {
    const res = await axios.get(
      'https://api.mevzu.app/api/bundle/temp/?format=json',
    );
    return {
      data: res.data.meta_data,
      result: true,
    };
  } catch (error) {
    return {
      data: error,
      result: false,
    };
  }
};
