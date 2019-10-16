
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
                    // firebase.auth().signInWithRedirect(provider);
                    var provider = new firebase.auth.GoogleAuthProvider();       
                    firebase.auth().signInWithPopup(provider).then(function(result) {      
                      content.load('home.html')
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
            

                var db = firebase.firestore();

                document.addEventListener('init', function (event) {
                var page = event.target;


                if (page.id === 'homePage') {
                    console.log("homePage");

                    $("#menubtn").click(function () {
                    $("#sidemenu")[0].open();
                    });

                    $("#carousel").empty();
                    db.collection("recommended").get().then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {       
                        var item = `<ons-carousel-item modifier="nodivider" id="item${doc.data().id}" class="recomended_item">
                            <div class="thumbnail" style="background-image: url('${doc.data().photoUrl}')">
                            </div>
                            <div class="recomended_item_title" id="item1_${doc.data().id}">${doc.data().name}</div>
                        </ons-carousel-item>`
                        $("#carousel").append(item);
                    });
                    });
                }

                if (page.id === 'menuPage') {
                    console.log("menuPage");

                    $("#login").click(function () {
                    $("#content")[0].load("login.html");
                    $("#sidemenu")[0].close();
                    });

                    $("#home").click(function () {
                    $("#content")[0].load("home.html");
                    $("#sidemenu")[0].close();
                    });
                }

                if (page.id === 'loginPage') {
                    console.log("loginPage");

                    $("#backhomebtn").click(function () {
                    $("#content")[0].load("home.html");
                    });
                }
                });




                