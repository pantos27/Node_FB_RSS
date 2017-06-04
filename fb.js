

var admin = require("firebase-admin");

var serviceAccount = require("./keys/blistering-torch.json");

var defaultApp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://blistering-torch-2314.firebaseio.com"
});

console.log(defaultApp.name);  // "[DEFAULT]"

// Retrieve services via the defaultApp variable...
var defaultAuth = defaultApp.auth();
var db = defaultApp.database();

// console.log(defaultDatabase.ref.name+'');
var ref = db.ref("Test Table");
ref.once("value", function(snapshot) {
  console.log(snapshot.val());
  var array= snapshot.val();
  snapshot.forEach(function(entry){
    console.log(entry.key+" : "+ entry.val());
  });
});
return;