const getData = (getURL, onSuccess, getFilters, onClick, onError) => {
  fetch(getURL)
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

const sendData = (postURL, onSuccess, messageOnSuccess, messageOnFail, removeMessage, closeModalWindow, body) => {
  fetch(
    postURL,
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
