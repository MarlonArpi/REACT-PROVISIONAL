import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(file);
    });
}

export async function fetchTrainers() {
    try {
        const response = await axios.get(`${API_BASE_URL}/trainers/`);
        return response.data;
    } catch (error) {
        console.error("Error en fetchTrainers:", error);
        return [];
    }
}

export async function createTrainer(trainerData) {
    let pictureBase64 = "";
    if (trainerData.picture instanceof File) {
        pictureBase64 = await fileToBase64(trainerData.picture);
    }

    const payload = {
        name: trainerData.name,
        experience_level: trainerData.experience_level,
        picture: pictureBase64 
    };

    const response = await axios.post(`${API_BASE_URL}/trainers/`, payload);
    return response.data;
}