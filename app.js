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
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var provider = new firebase.auth.GoogleAuthProvider();

var picTure = null;

function setClick(pic) {
    picTure = pic;
}
function getPic() {
    return picTure;
}
function setClick2(pic) {
    picTure = pic;


}
function getPic2() {
    return picTure;
}

var db = firebase.firestore();
$("#menubtn").click(function () {
    $("#sidemenu")[0].open();
});

$("#cartbtn").click(function () {
    $("#content")[0].load("payment.html");
    $("#sidemenu")[0].close();
});

document.addEventListener('init', function (event) {
    var page = event.target;


    if (page.id === 'paymentpage') {

    }

    if (page.id === 'homePage') {
        console.log("homePage");

        db.collection("recommend").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {

                var item2 = `<ons-carousel-item modifier="nodivider" id="item1" onclick="setClick('${doc.data().pic}')"class="recomended_item">
                            <div class="thumbnail" >
                            <img src="${doc.data().pic}"
                              height="100%" width="100%">
                            </div>
                        </ons-carousel-item>`
                $("#recommend").append(item2);

            });
        });


        db.collection("category").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                var item = `<div class="column">
                <div class="card" id= ${doc.data().name}><img src="${doc.data().pic}"
                        height="80" width="80">
                    <br>${doc.data().name}</div>
                  </div>`
                $("#menucategory").append(item);
            });

            $("#Fast").click(function () {
                localStorage.setItem("selectedCategory", "fastfood");
                $("#content")[0].load("Resturant_List.html");
            });
            $("#Normol").click(function () {
                localStorage.setItem("selectedCategory", "normalfood");
                $("#content")[0].load("Resturant_List.html");
            });

            $("#Healthy").click(function () {
                localStorage.setItem("selectedCategory", "healtyfood");
                $("#content")[0].load("Resturant_List.html");
            });
            $("#Dessert").click(function () {
                localStorage.setItem("selectedCategory", "dessert");
                $("#content")[0].load("Resturant_List.html");
            });
            $("#Bฺeverage").click(function () {
                localStorage.setItem("selectedCategory", "drink");
                $("#content")[0].load("Resturant_List.html");
            });
            $("#Fruits").click(function () {
                localStorage.setItem("selectedCategory", "fruit");
                $("#content")[0].load("Resturant_List.html");
            });
            $("#Pizza").click(function () {
                localStorage.setItem("selectedCategory", "pizza");
                $("#content")[0].load("Resturant_List.html");
            });
        });
    }


    if (page.id === 'resturantpage') {
        var category = localStorage.getItem("selectedCategory");
        console.log("resturantpage :" + category);
        $("#header").html(category);

        db.collection("restaurant").where("category", "==", category).get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    console.log("sdfsdfsdf");
                    var item = `<ons-card><ons-col id= ${doc.data().name} onclick="setClick2('${doc.data().pic}')"><img src="${doc.data().pic}"
                height="80" width="80">
                   <font size="5">${doc.data().name}</font>
                <br><br>&#11088; &#11088; &#11088; &#11088;
                <br><br> Delivery cost : 15$~
            </ons-col></ons-card>`

                    $("#foodlist").append(item);
                });

                $("#KFC").click(function () {
                    localStorage.setItem("selectedCategory", "KFC");
                    $("#content")[0].load("Resturant_menu.html");

                });
                $("#Burger").click(function () {
                    localStorage.setItem("selectedCategory", "Burgerking");
                    $("#content")[0].load("Resturant_menu.html");

                });
                $("#Harveys").click(function () {
                    localStorage.setItem("selectedCategory", "Harveys");
                    $("#content")[0].load("Resturant_menu.html");

                });
            });

    }



    if (page.id === 'resturantmenu') {
        var category = localStorage.getItem("selectedCategory");
        console.log("resturantmenu :" + category);
        $("#header").html(category);

        db.collection("restaurantmenu").where("category", "==", category).get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    console.log("sdfsdfsdf");
                    var item = `
                    <br><br><br>
                    <div class="column">
                       <div class="card" >
                       <ons-col width="400px"><img src="${doc.data().shop}" height="250" width="250"> </ons-col>
                    <br><br>
                    <ons-col>
                        <font size="6">${doc.data().category}</font>
                        <br><br>&#11088; &#11088; &#11088; &#11088;<br>
                        (3614 review)
                        <br><br> Delivery cost : 15$~ <br><br>
                        <hr>
                        <h2>Starters</h2>
               
                        <ons-row>
                                <ons-col width="150px"><img src="${doc.data().pic}" height="80" width="100"> </ons-col>
                                <ons-col>
                                    <font size="3">${doc.data().food}</font>
                                    <br><br>&#11088; &#11088; &#11088; <br><br> ${doc.data().cost}

                                    <ons-button class="button" onclick="window.location.href='payment.html'"style="background-color : rgb(53, 167, 0)" >+</ons-button><br>
                                </ons-col>
                                ${doc.data().detail}
                                <br><br>
                        </ons-col>
                        </ons-row><br>
                        
                        <ons-row>
                                <ons-col width="150px"><img src="${doc.data().pic2}" height="80" width="100"> </ons-col>
                                <ons-col>
                                    <font size="3">${doc.data().food2}</font>
                                    <br><br>&#11088; &#11088; &#11088; &#11088;   <br><br> ${doc.data().cost2}
                                    <ons-button class="button" onclick="window.location.href='payment.html'" style="background-color : rgb(53, 167, 0)" >+</ons-button><br>
                                </ons-col>
                    
                                ${doc.data().detail2}
                                <br><br>
                        </ons-col>
                        </ons-row>

                        <br><br><hr>
                        <br> <h2>Main menu</h2><br>
                     <ons-row>
                            <ons-col width="150px"><img src="${doc.data().pic3}" height="80" width="100"> </ons-col>
                            <ons-col>
                                <font size="3">A${doc.data().food3}</font>
                                <br><br>&#11088; &#11088; &#11088; &#11088;   <br><br> ${doc.data().cost3}
                                <ons-button class="button" onclick="window.location.href='payment.html'" style="background-color : rgb(53, 167, 0)" >+</ons-button><br>
                            </ons-col>
                            ${doc.data().detail3}
                            <br><br>
                    </ons-col>
                    </ons-row><br>

                    <ons-row>
                        <ons-col width="150px"><img src="${doc.data().pic4}" height="80" width="100"> </ons-col>
                        <ons-col>
                            <font size="3">${doc.data().food4}</font>
                            <br><br>&#11088; &#11088; &#11088;  <br><br> ${doc.data().cost4}
                            <ons-button class="button" onclick="window.location.href='payment.html'" style="background-color : rgb(53, 167, 0)" >+</ons-button><br>
                        </ons-col>
                        ${doc.data().detail4}
                        <br><br>
                        </ons-col>
                    </ons-row><br>

                    <ons-row>
                        <ons-col width="150px"><img src="${doc.data().pic5}" height="80" width="100"> </ons-col>
                        <ons-col>
                            <font size="3">${doc.data().food5}</font>
                            <br><br>&#11088; &#11088; &#11088; &#11088;  <br><br> ${doc.data().cost5}
                            <ons-button class="button" onclick="window.location.href='payment.html'" style="background-color : rgb(53, 167, 0)" >+</ons-button><br>
                        </ons-col>
                        ${doc.data().detail5}
                        <br><br>
                        </ons-col>
                    </ons-row>
                        </div>
                        </div>`

                    $("#menu").append(item);
                });



            });
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
                alert("Id or password is wrong");
            });
        });

        $("#register").click(function () {
            $("#content")[0].load("register.html");
        });

        $("#backhomebtn").click(function () {
            $("#content")[0].load("home.html");
        });
    }




    if (page.id === 'registerpage') {
        console.log("registerpage");
        $("#register").click(function () {
            var email = document.getElementById('email').value;
            var password = document.getElementById('password').value;
            var Cpassword = document.getElementById('confirmpassword').value;
            var phone = document.getElementById("phonenumber");
            var RE = /^[\d\.\-]+$/;

            firebase.auth().createUserWithEmailAndPassword(email, password).then(function (error) {
                $("#content")[0].load("login.html");

            }).catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;

                if (errorCode === 'auth/weak-password') {

                    alert('The password is too weak');
                } if (password != Cpassword) {
                    alert('The Confirm password is wrong');

                } if (!RE.test(phone.value)) {
                    alert("You have entered an invalid phone number");
                    return false;
                }
                else {
                    alert(errorMessage);
                }
                console.log(error);
            });
        });

        $("#gobacklogin").click(function () {
            $("#content")[0].load("login.html");
        });
    }

});

