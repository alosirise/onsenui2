
            // function onSignIn(googleUser) {
            //     var profile = googleUser.getBasicProfile();
            //     console.log('ID: ' + profile.getId());
            //     console.log('Name: ' + profile.getName());
            //     console.log('Image URL: ' + profile.getImageUrl());
            //     console.log('Email: ' + profile.getEmail());
            // }
             // Your web app's Firebase configuration
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
            
            $(function () {
                // Initialization code
                $('ons-button').on('click', function (e) {
                    ons.notification.alert('Log in success !');
                })
            });

                $("#login").click(function () {
                    firebase.auth().signInWithPopup(provider).then(function (result) {
                        // This gives you a Google Access Token. You can use it to access the Google API.
                        var token = result.credential.accessToken;
                        // The signed-in user info.
                        var user = result.user;
                        // ...
                    }).catch(function (error) {
                        // Handle Errors here.
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        // The email of the user's account used.
                        var email = error.email;
                        // The firebase.auth.AuthCredential type that was used.
                        var credential = error.credential;
                        // ...
                    });
                })
          
