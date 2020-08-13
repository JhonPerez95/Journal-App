export const fileUpload = async (file) => {
  const urlApi = 'https://api.cloudinary.com/v1_1/jhontt95/upload';
  const formData = new FormData();
  formData.append('upload_preset', 'react-journal');
  formData.append('file', file);

  try {
    const resp = await fetch(urlApi, {
      method: 'POST',
      body: formData,
    });

    if (resp.ok) {
      const respCloud = await resp.json();
      return respCloud.secure_url;
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
  }
};
