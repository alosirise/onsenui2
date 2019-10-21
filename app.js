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

var getcost = [];
var getfood = [];
var price = parseInt(0);


function gettotal(food, cost) {
    console.log(food);
    console.log(cost);

    price += parseInt(cost);
    getfood.push(food);
    getcost.push(cost);
    console.log("total = " + price);

    window.alert("Add to cart success!");

    document.getElementById('totalbtn').innerText = "Total = " + price + " $";
    $("#totalbtn").click(function () {

        $("#content")[0].load("payment.html");
    });
}


function getX() {
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
    $("#Pizza").click(function () {
        localStorage.setItem("selectedCategory", "Pizzahut");
        $("#content")[0].load("Resturant_menu.html");
    });
    $("#Smart").click(function () {
        localStorage.setItem("selectedCategory", "Smart");
        $("#content")[0].load("Resturant_menu.html");
    });
    $("#Central").click(function () {
        localStorage.setItem("selectedCategory", "Central");
        $("#content")[0].load("Resturant_menu.html");
    });
    $("#Whole").click(function () {
        localStorage.setItem("selectedCategory", "Whole");
        $("#content")[0].load("Resturant_menu.html");
    });

    $("#littledessert").click(function () {
        localStorage.setItem("selectedCategory", "littledessert");
        $("#content")[0].load("Resturant_menu.html");
    });

    $("#swensen").click(function () {
        localStorage.setItem("selectedCategory", "swensen");
        $("#content")[0].load("Resturant_menu.html");
    });
    $("#mac").click(function () {
        localStorage.setItem("selectedCategory", "mac");
        $("#content")[0].load("Resturant_menu.html");
    });

    $("#sweetshop").click(function () {
        localStorage.setItem("selectedCategory", "sweetshop");
        $("#content")[0].load("Resturant_menu.html");
    });

    $("#Drinkdo").click(function () {
        localStorage.setItem("selectedCategory", "Drinkdo");
        $("#content")[0].load("Resturant_menu.html");
    });

    $("#nampung").click(function () {
        localStorage.setItem("selectedCategory", "nampung");
        $("#content")[0].load("Resturant_menu.html");
    });

    $("#oldfruit").click(function () {
        localStorage.setItem("selectedCategory", "oldfruits");
        $("#content")[0].load("Resturant_menu.html");
    });

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
        console.log("Payment");
        document.getElementById("toolbar").innerHTML = "Payment";
    }

    if (page.id === 'homePage') {
        console.log("Category[Home]");
        document.getElementById("toolbar").innerHTML = "Home";
        db.collection("recommend").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {

                var item2 = `<ons-carousel-item modifier="nodivider" id=${doc.data().name} class="recomended_item">
                            <div class="thumbnail" >
                            <img src="${doc.data().pic}"
                              height="100%" width="100%">
                            </div>
                            <br>
                            &emsp; &emsp; ${doc.data().name}
                       </ons-carousel-item>`
                $("#recommend").append(item2);

            });

            $("#KFC").click(function () {
                localStorage.setItem("selectedCategory", "KFC");
                $("#content")[0].load("Resturant_menu.html");

            });
            $("#Burger").click(function () {
                localStorage.setItem("selectedCategory", "Burgerking");
                $("#content")[0].load("Resturant_menu.html");

            });
            $("#Pizzahut").click(function () {
                localStorage.setItem("selectedCategory", "Pizzahut");
                $("#content")[0].load("Resturant_menu.html");
            });
            $("#swensen").click(function () {
                localStorage.setItem("selectedCategory", "swensen");
                $("#content")[0].load("Resturant_menu.html");
            });

            $("#allresturant").click(function () {
                $("#content")[0].load("Allresturant.html");
                $("#sidemenu")[0].close();
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
                localStorage.setItem("selectedCategory", "fruits");
                $("#content")[0].load("Resturant_List.html");
            });
            $("#Pizza").click(function () {
                localStorage.setItem("selectedCategory", "pizza");
                $("#content")[0].load("Resturant_List.html");
            });
        });
    }


    if (page.id === 'resturantpage') {
        document.getElementById("toolbar").innerHTML = "Resturants";
        var category = localStorage.getItem("selectedCategory");
        console.log("resturantpage :" + category);
        $("#header").html(category);

        db.collection("restaurant").where("category", "==", category).get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {

                    var item = `<ons-card>
                    <div><ons-col id= ${doc.data().name} ><img src="${doc.data().pic}"
                                    height="120" width="120"> </div>
                                    <div>  <font size="5">${doc.data().name}</font> </div>
                               ${doc.data().star}
                                <br><br> Delivery cost : 2$~
                            
                                </ons-col>
                            </ons-card>`
                    $("#foodlist").append(item);
                });

                getX();
            });
    }



    if (page.id === 'allresturantpage') {
        document.getElementById("toolbar").innerHTML = "AllResturants";
        var category = localStorage.getItem("selectedCategory");
        console.log("allresturantpage :" + category);
        $("#header").html(category);

        db.collection("restaurant").get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {

                    var item = ` 
                    <div style="text-align: center; margin-top: 27px;">
                    
                     <ul class="list" >
                         <li class="list-item">
                         <div class="list-item__left">
                             <img src="${doc.data().pic}"  height="90" width="90">
                         </div>
         
                         <div class="list-item__center">
                             <div class="list-item__title"><font size="5"><br>&nbsp; &nbsp; ${doc.data().name}</font><br><br></div>
                             <div class="list-item__subtitle">&nbsp; &nbsp; &nbsp; ${doc.data().star}<br><br></div><br><br>
                         </div>
         
                         <div class="list-item__right">
                             <ons-button modifier="light" id= ${doc.data().name}>Menu</ons-button>
                         </div>
                         </li>
                     </ul>
                   
                 </div>`

                    $("#foodlist").append(item);
                });
                getX();
            });
    }




    if (page.id === 'resturantmenu') {
        document.getElementById("toolbar").innerHTML = "Returant Menu";
        var category = localStorage.getItem("selectedCategory");
        console.log("resturantmenu :" + category);
        $("#header").html(category);

        db.collection("restaurantmenu").where("category", "==", category).get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    var item = `
                    <br><br><br>
                   
                       <ons-col width="400px"><img src="${doc.data().shop}" height="250" width="250"> </ons-col>
                    <br><br>
                    <ons-col>
                        <font size="6">${doc.data().category}</font>
                        <br><br>${doc.data().star}<br>
                        (3614 review)
                        <br><br> Delivery cost : 2$~ <br><br>
                        <hr>
                
               
                        <br>`
                    $("#menu").append(item);

                    var menu = doc.data().menu;
                    for (let index = 0; index < menu.length; index++) {
                        var menus = menu[index];
                        var item = `
                        <ons-row>
                                <ons-col width="150px"><img src="${menus.pic}" height="155" width="155"> </ons-col>
                                <ons-col>
                                &#11088; &#11088; &#11088; <br><br>
                                <font size="3">${menus.food}</font>
                                  <br><br> ${menus.cost}    
                                    <br><br>
                                    <ons-button class="button" onclick="gettotal('${menus.food}','${menus.cost}')"
                                    style="background-color : rgb(53, 167, 0)" >Add to cart </ons-button><br>
                                </ons-col>     
                                <br><br>
                        </ons-col>
                        </ons-row><br>
                        
                        <br><hr><hr>
                        <br>`
                        $("#menu2").append(item);

                    }

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
        document.getElementById("toolbar").innerHTML = "Login";
        $("#googlelogin").click(function () {
            console.log("google");

            firebase.auth().signInWithRedirect(provider);
            // firebase.auth().signInWithPopup(provider).then(function (result) {

            //     var token = result.credential.accessToken;
            //     var user = result.user;
            //     $("#content")[0].load("home.html");
            // }).catch(function (error) {
            //     var errorCode = error.code;
            //     var errorMessage = error.message;
            //     var email = error.email;
            //     var credential = error.credential;
            // });
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
        document.getElementById("toolbar").innerHTML = "Register";
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

