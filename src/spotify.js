const authEndpoint ="https://accounts.spotify.com/authorized";
const clientID="ae865feb3fda4cb4b17aef9f48a8766e";
const redirectUri="https://localhost:3000";
const scopes=["user-library-read","playlist-read-private"];
export const loginEndpoint =`${authEndpoint}client_id=${clientID}&redirect_uri=${redirectUri}&scopes=${scopes.join(
    "%20"
)}&response_type=token&show_dialog=true`;