const uploadUserPictureInput = document.querySelector('.img-upload__input');
const preview = document.querySelector('.img-upload__preview > img');
const FILE_TYPES = ['jpg', 'jpeg', 'png'];
let file;
let fileName = '';
let matches = [];

const loadOwnPicture = () => {
  file = uploadUserPictureInput.files[0];
  fileName = file.name.toLowerCase();
  matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (matches) {
    preview.src = URL.createObjectURL(file);
  }
};

export {loadOwnPicture};
