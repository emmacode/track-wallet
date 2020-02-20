const isRequestActive = (reqArray, req) => {
    return reqArray.findIndex(el => el === req) !== -1;
};

export { isRequestActive };