(() => {
    //grab the car button
    //const cars = document.querySelectorAll('.data-ref');

    const vm = new Vue({
        el : "#app",
        data : {
            carModel : "",
            carDescription : "",
            carPricing : ""
            
        },

        mounted : function(){
            //listen to  when vue is done buikding itself
            console.log('mounted');

            this.addPreloader(document.querySelector('.modelInfo'));

            //get the data for the first car
            document.querySelector("#F55").click();

        
        },

        updated: function() {
            //listen for when Vue  completes its updte / render cycle
            console.log('updated');

            //remove the preloader after the page updates
            let preloader = document.querySelector('.preloader-wrapper');

            setTimeout(function() {
                preloader.classList.add('hidden');
                document.body.appendChild('.preloader');
            }, 1000);
        },
 
        methods: {
            addPreloader(parentEl){
                parentEl.appendChild(document.querySelector('.preloader-wrapper'));

                // set up the preloader animation
                bodymovin.loadAnimation({
                    wrapper : document.querySelector('.preloader'),
                    animType: 'svg',
                    loop: true,
                    path: './data/search.json'
                });
            },

            getData(e) {
                //debugger;
                let targetURL = `./includes/connect.php?carModel=${e.currentTarget.id}`;
                
        fetch(targetURL)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            //run a function to parse our data
           this.showCarData(data[0]);//run a fucntion to put the data on the page
        })
        .catch(function(error) {
            console.error(error);

        });
        },

        showCarData(data) {
            //change VM content here and make it show up on the page
           this.carModel = data.modelName
           this.carDescription = data.modelDetails
           this.carPricing = data.pricing
         }
        }
    });


    function parseCarData(car) {
        //destructure thed database info and grab just what we need
        const {modelName, pricing, modelDetails } = car
        //take the database data and put it on the page
        document.querySelector(".modelName").textContent = modelName;
        document.querySelector(".priceInfo").textContent = pricing;
        document.querySelector(".modelDetails").textContent = modelDetails;
    };

    //cars.forEach(car => car.addEventListener("click", fetchData))

     //fetchData();
})();
