export const fetchAPI = async (date) => {
    try {
        const response = await fetch('https://run.mocky.io/v3/348f12dc-baf6-4343-98ff-bd12f5cd08ae');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.availableTimes; // Return the available times array
    } catch (error) {
        console.error('Error fetching available times:', error);
        return []; // Return an empty array in case of error
    }
};

export const submitAPI = async (formData) => {
    try {
        const response = await fetch('https://run.mocky.io/v3/1f69c43d-da97-4b4b-b27d-d588958c2889', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const result = await response.json();
        return result.success; // Return success or failure
    } catch (error) {
        console.error('Error submitting form:', error);
        return false; // Return false in case of error
    }
};