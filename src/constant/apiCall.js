 import WEB_URL from './custom';

 export const fetchPostApi = (URL, params) => {
    return fetch(WEB_URL + URL, {
        method: 'POST',
        // 'credentials': 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    })
        .then(response => {
            if (response.status == 401) {
                //alert("ERRR")
                // this.props.history.push('/login');
            }
            else if (response.status == 403) {
                // this.props.history.push('/login');
            }
            return response.json();
        })
        .catch(err => {
            console.log("Error in " + WEB_URL + URL+ "API", err)
            return err
        })
 } 

export const fetchGetApi = (URL) => {
    return fetch(WEB_URL + URL)
    .then(response => {
        if (response.status == 401) {
            //alert("ERRR")
            // this.props.history.push('/login');
        }
        else if (response.status == 403) {
            // this.props.history.push('/login');
        }
        return response.json();
    })
}