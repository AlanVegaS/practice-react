import { fileUpload } from "../../src/helpers/fileUpload";
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: 'dbrt5hkxc',
    api_key: '465118755155724',
    api_secret: 'AkCnLPiwzksNUn4gSDMGUJeY8fs',
    secure: true
});

describe('testing in fileUpload', () => {
    test('should upLoad file correctly to cloudnary', async () => {
        const imageUrl = 'https://static.scientificamerican.com/sciam/cache/file/2AE14CDD-1265-470C-9B15F49024186C10_source.jpg?w=600';
        const resp = await fetch(imageUrl);
        const blob = await resp.blob();
        const file = new File([blob], 'photo.jpg');

        const url = await fileUpload(file);
        expect(typeof url).toBe('string');

        console.log(url);
        const segments = url.split('/');
        const imageId = segments[segments.length - 1].replace('.jpg', '')
        console.log('imageId ' + imageId);
        const cloudResp = await cloudinary.api.delete_resources([imageId])
        console.log('cloudResp: '+JSON.stringify(cloudResp));
    })

    test('Should return null', async () => {
        const file = new File([], 'photo.jpg');
        const url = await fileUpload(file);
        expect(url).toBe(null)
    })
}) 