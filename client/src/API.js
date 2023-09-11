// const API_URL = 'http://localhost:5000'
const API_URL = 'https://jjwyqm-5000.csb.app'

export async function listLogEntries() {
    const response = await fetch(`${API_URL}/api/logs`)
    console.log(response.json())
    return response.json()
}
export async function createLogEntry(entry) {
    const apiKey = entry.apiKey
    delete entry.apiKey
    const response = await fetch(`${API_URL}/api/logs`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-API-KEY': apiKey,
        },
        body: JSON.stringify(entry),
    })
    const json = await response.json()
    if (response.ok) {
        return json
    }
    const error = new Error(json.message)
    error.response = json
    throw error
}