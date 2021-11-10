const uploadUserPictureInput = document.querySelector('.img-upload__input');
const preview = document.querySelector('.img-upload__preview > img');
const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const loadOwnPicture = () => {
  const file = uploadUserPictureInput.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (matches) {
    preview.src = URL.createObjectURL(file);
  }
};

export {loadOwnPicture};
