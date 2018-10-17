(() => {
    function fetchData() {
        fetch('./includes/connect.php?carModel=R58')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(function(error) {
            console.error(error);

        });
    }
     fetchData();
})();
