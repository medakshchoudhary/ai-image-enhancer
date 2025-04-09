import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://techhk.aoscdn.com';


export const enhancedImageAPI = async (file) => {
    try{
        const taskId = await uploadImage(file);

        const enhancedImageData = await pollingForEnhancedImage(taskId);

        console.log(enhancedImageData);
        return enhancedImageData;
    }
    catch (error) {
        throw new Error("Error uploading image:" + error.message);
    }
}

const uploadImage = async (file) => {
    // /api/tasks/visual

    const formData = new FormData();
    formData.append("image_file",file);

    const { data } = await axios.post(`${BASE_URL}/api/tasks/visual/scale`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            "X-API-KEY" : API_KEY,
            },
        }
    )

    if(!data?.data?.task_id) {
        throw new Error('Failed to upload image, Task ID not found');
    }
    
    return data.data.task_id;   
}

const fetchEnhancedImage = async (taskId) => {
    // /api/tasks/visual/${taskId}
    const { data } = await axios.get(`${BASE_URL}/api/tasks/visual/scale/${taskId}`, {
        headers: {
            "X-API-KEY" : API_KEY,
            },
        }
    )

    if(!data?.data) {
        throw new Error('Failed to enhance image');
    }

    return data.data;;  
}


const pollingForEnhancedImage = async (taskId,retries=0) => {
    const result = await fetchEnhancedImage(taskId);

    if(result.state === 4){
        console.log("Processing");

        if(retries>=20){
            throw new Error('Max retries reached, image enhancement failed');
        }

        await new Promise(resolve => setTimeout(resolve, 2000)); 

        return await pollingForEnhancedImage(taskId, retries + 1);
    }

    return result;
}
