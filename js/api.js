const getData = (dataURL, onSuccess, getFilters, onClick, onError) => {
  fetch(dataURL)
    .then((response) => {
      if (response.ok) {
        return response;
      }

      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((response) => response.json())
    .then((pictures) => {
      onSuccess(pictures);
      onClick(pictures);
      return pictures;
    })
    .then((pictures) => {
      getFilters(pictures);
    })
    .catch((err) => {
      onError(err);
    });
};

const sendData = (serverURL, onSuccess, messageOnSuccess, messageOnFail, removeMessage, closeModalWindow, body) => {
  fetch(
    serverURL,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
        messageOnSuccess();
      } else {
        closeModalWindow();
        messageOnFail();
      }
    })
    .catch(() => {
      closeModalWindow();
      messageOnFail();
    })
    .finally(() => removeMessage());
};

export {getData, sendData};
