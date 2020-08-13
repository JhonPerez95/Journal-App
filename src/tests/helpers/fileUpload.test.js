import '@testing-library/jest-dom';
import cloudinary from 'cloudinary';
import { fileUpload } from '../../helpers/fileUpload';

cloudinary.config({
  cloud_name: 'jhontt95',
  api_key: '536459932196424',
  api_secret: '1B41wzIVcahtKc_XJJOqaRjEVrc',
});

describe('Test the helper fileUpdload', () => {
  test('should upload archivo ', async (done) => {
    const respImg = await fetch(
      'https://miro.medium.com/max/2732/1*QLG7-ug_Vxt8lQvcv4lgnw.png'
    );
    const blob = await respImg.blob();
    const file = new File([blob], 'img.png');
    const url = await fileUpload(file);

    // Delete img
    const segment = url.split('/');
    const imgId = segment[segment.length - 1].replace('.png', '');
    console.log(imgId);
    cloudinary.v2.api.delete_resources(imgId, {}, () => {
      done();
    });

    expect(typeof url).toBe('string');
  });

  test('should fail upload  ', async () => {
    const file = new File([], 'img.png');
    const url = await fileUpload(file);

    expect(url).toBe(null);
  });
});
