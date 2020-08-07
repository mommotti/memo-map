const API_URL = window.location.hostname === 'localhost' ? 'http://localhost:5000' : 'https://memo-map-mf.herokuapp.com'

export async function listLogEntries() {
    const response = await fetch(`${API_URL}/api/logs`);
    return response.json();
}

export async function createLogEntry(entry) {
    const apiKey = entry.apiKey;
    delete entry.apiKey;
    const response = await fetch(`${API_URL}/api/logs`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-API-KEY': apiKey,
        },
        body: JSON.stringify(entry),
    });
    let json;
    if (response.headers.get('content-type').includes('text/html')) {
        const message = await response.text();
        json = {
            message,
        };
    } else {
        json = await response.json();
    }
    if (response.ok) {
        return json;
    }
    const error = new Error(json.message);
    error.response = json;
    throw error;
}

export async function deleteLogEntry(id) {
    fetch(`${API_URL}/api/logs/${id}`, {
        method: 'DELETE',
    })
        .then(res => res.text()) // or res.json()
        .then(res => console.log(res))
}

