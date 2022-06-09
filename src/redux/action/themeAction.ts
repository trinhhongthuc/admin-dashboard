const createAction = (type: string, payload: any) => {
  return {
    type,
    payload,
  };
};

export { createAction };
