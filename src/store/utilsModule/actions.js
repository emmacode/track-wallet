export const ASYNC_LOADING = "ASYNC_LOADING";
export const REQUEST_FEEDBACK = "REQUEST_FEEDBACK";

export const setLoading = ({ request = "", loading = false }) => ({
    type: ASYNC_LOADING,
    payload: { request, loading }
})

export const showRequestFeedBack = feedbackProps => ({
    type: REQUEST_FEEDBACK,
    payload: feedbackProps
})