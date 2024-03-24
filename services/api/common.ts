export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export type ApiResponse<T> = {
  total: number;
  skip: number;
  limit: number;
} & T;

export const tryAction = async <T>(action: () => Promise<T>) => {
  try {
    return await action();
  } catch (error) {
    // parse/handle error
    console.error(error);
    throw error;
  }
};
