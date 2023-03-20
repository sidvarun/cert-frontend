import axios from "axios";

export const UPLOAD_ATTENDEES_REQUEST = "UPLOAD_ATTENDEES_REQUEST";
export const UPLOAD_ATTENDEES_SUCCESS = "UPLOAD_ATTENDEES_SUCCESS";
export const UPLOAD_ATTENDEES_FAIL = "UPLOAD_ATTENDEES_FAIL";

export const uploadAttendees = (eventId, attendeesCsvFile) => async (
  dispatch
) => {
  try {
    dispatch({ type: UPLOAD_ATTENDEES_REQUEST });

    const formData = new FormData();
    formData.append("attendeesCsvFile", attendeesCsvFile);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const { data } = await axios.post(
      `http://localhost:8081/api/v1/users/admins/upload-csv/${eventId}`,
      formData,
      config
    );

    dispatch({ type: UPLOAD_ATTENDEES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: UPLOAD_ATTENDEES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
