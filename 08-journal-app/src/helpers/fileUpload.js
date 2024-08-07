export const fileUpload = async (file) => {
    //if (!file) throw new Error('No selected file')
    if (!file) null;
    const cloudURL = 'https://api.cloudinary.com/v1_1/dbrt5hkxc/upload';

    const formData = new FormData();
    console.log('file ' + file.name);
    formData.append('file', file);
    formData.append('upload_preset', 'react-journal');

    try {
        const resp = await fetch(cloudURL, {
            method: 'POST',
            body: formData
        });
        if (!resp.ok) throw new Error('Error in upload image')

        const cloudResp = await resp.json();
        return cloudResp.secure_url;
    } catch (error) {
        console.log(error);
        //throw new Error(error.message)
        return null;
    }
}