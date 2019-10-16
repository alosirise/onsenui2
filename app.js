
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
//         ons.notification.alert('Success !');
//     })
// });




var db = firebase.firestore();

document.addEventListener('init', function (event) {
    var page = event.target;


    if (page.id === 'homePage') {
        console.log("homePage");
        $("#menubtn").click(function () {
            $("#sidemenu")[0].open();
        });

        db.collection("category").get().then((querySnapshot) => {
           
            querySnapshot.forEach((doc) => {
                var item = `<div class="column">
                <div class="card" onclick="window.location.href='Resturant_List.html'"><img src="${doc.data().pic}"
                        alt="Smiley face" height="65" width="65">
                    <br>${doc.data().name}</div>
                  </div>`
                    
                $("#menucategory").append(item);
                console.log("db category append");
            });
        });



        db.collection("recommend").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {

                var item2=`
                
                
                
                <ons-carousel-item modifier="nodivider" id="item1" class="recomended_item">
                <div class="thumbnail">
                <img src="${doc.data().pic}"
                alt="Smiley face" height="45" width="45">
                </div>
            </ons-carousel-item>     
                
                
                
                
                
                
                
                
                
                
                
                `
                  $("#recommend").append(item2);
                console.log("db recommend append");
            });
        });
        
        // <div class="recomended_item_title" id="item1_${doc.data().pic}">${doc.data().name}</div>    
    }

    if (page.id === 'menuPage') {
        console.log("menuPage");



        $("#gologin").click(function () {
            $("#content")[0].load("login.html");
            $("#sidemenu")[0].close();
        });

        $("#gohome").click(function () {
            $("#content")[0].load("home.html");
            $("#sidemenu")[0].close();
        });

        $("#gopayment").click(function () {
            $("#content")[0].load("payment.html");
            $("#sidemenu")[0].close();
        });

        
        $("#gologout").click(function () {
            console.log("logout");
            firebase.auth().signOut().then(function () {
                $("#content")[0].load("home.html");
                $("#sidemenu")[0].close();
            }).catch(function (error) {
                console.log(error.message);
            });
        });
    }



    if (page.id === 'loginPage') {
        console.log("loginPage");
        $("#menubtn").click(function () {
            $("#sidemenu")[0].open();
        });


        $("#googlelogin").click(function () {
            // firebase.auth().signInWithRedirect(provider);    
            firebase.auth().signInWithPopup(provider).then(function (result) {
                var token = result.credential.accessToken;
                var user = result.user;
                $("#content")[0].load("home.html");
            }).catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });
        })


        $("#signinbtn").click(function () {
            var username = $("#username").val();
            var password = $("#password").val();
            firebase.auth().signInWithEmailAndPassword(username, password).then(function () {
                $("#content")[0].load("home.html");
                $("#sidemenu")[0].close();
            }).catch(function (error) {
                console.log(error.message);
            });
        });

        $("#backhomebtn").click(function () {
            $("#content")[0].load("home.html");
        });
    }


    if (page.id === 'paymentpage') {
        $("#menubtn").click(function () {
            $("#sidemenu")[0].open();
        });

        console.log("paymentpage");
    }
});

