function fetchDataAndUpdate() {
        const pageCode = './store/pageContent.json?v=' + Date.now()
        fetch(pageCode, { cache: 'no-store' })
            .then(response => response.json())
            .then(data => {
                const bodyContent = data.page;
                const bodyElement = document.getElementById('body');
                bodyElement.innerHTML = bodyContent;
            })
            .catch(error => console.error('Error fetching data:', error));
    }
    
    fetchDataAndUpdate();
    
    function showAlert(){
        alert('This is a fully automated app, no programmer is working behind this application.');
    }