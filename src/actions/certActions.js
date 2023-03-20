import axios from 'axios'
export const DOWNLOAD_CERTIFICATE_REQUEST = 'DOWNLOAD_CERTIFICATE_REQUEST';
export const DOWNLOAD_CERTIFICATE_SUCCESS = 'DOWNLOAD_CERTIFICATE_SUCCESS';
export const DOWNLOAD_CERTIFICATE_FAILURE = 'DOWNLOAD_CERTIFICATE_FAILURE';

export const downloadCertificate = (eventId, token) => async (dispatch) => {
    dispatch({ type: DOWNLOAD_CERTIFICATE_REQUEST });
    try {
      const response = await axios.get(`http://localhost:8081/api/v1/events/cert-download/${eventId}`, {
        headers: { Authorization: `Bearer ${token}` },
        responseType: 'blob' // tell axios to expect a binary response
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      console.log(url);
      const link = document.createElement('a');
      console.log(link);
      link.href = url;
      link.setAttribute('download', `certificate_${eventId}.pdf`);
      document.body.appendChild(link);
      link.click();
      dispatch({ type: DOWNLOAD_CERTIFICATE_SUCCESS });
    } catch (error) {
      console.error(error);
      dispatch({ type: DOWNLOAD_CERTIFICATE_FAILURE, payload: error.message });
    }
  };
  