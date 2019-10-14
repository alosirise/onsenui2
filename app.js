
             var firebaseConfig = {
                apiKey: "AIzaSyBe-ShFjOxDNKd6q7aZVDiH7nNOCi5-T0k",
                authDomain: "food-66c56.firebaseapp.com",
                databaseURL: "https://food-66c56.firebaseio.com",
                projectId: "food-66c56",
                storageBucket: "food-66c56.appspot.com",
                messagingSenderId: "993618026845",
                appId: "1:993618026845:web:661c7c768e2cbe20cfc8b4",
                measurementId: "G-Z20297TKBR"
            };
            // Initialize Firebase
            firebase.initializeApp(firebaseConfig);
            firebase.analytics();
    
            var provider = new firebase.auth.GoogleAuthProvider();

            // $(function () {
            //     // Initialization code
            //     $('ons-button').on('click', function (e) {
            //         ons.notification.alert('Log in success !');
            //     })
            // });

                $("#login").click(function () {
                    // firebase.auth().signInWithRedirect(provider);
                    var provider = new firebase.auth.GoogleAuthProvider();       
                    firebase.auth().signInWithPopup(provider).then(function(result) {      
                      content.load('Food%20Category.html')
                              .then(menu.close.bind(menu));
                   
                    }).catch(function(error) {
                        console.log(error);
                    });       
                    // firebase.auth().signInWithPopup(provider).then(function (result) {
                    //     var token = result.credential.accessToken;         
                    //     var user = result.user;                
                    // }).catch(function (error) {                  
                    //     var errorCode = error.code;
                    //     var errorMessage = error.message;                    
                    //     var email = error.email;                     
                    //     var credential = error.credential;   
                    // }); 
                })
            