if(!self.define){let i,e={};const a=(a,c)=>(a=new URL(a+".js",c).href,e[a]||new Promise((e=>{if("document"in self){const i=document.createElement("script");i.src=a,i.onload=e,document.head.appendChild(i)}else i=a,importScripts(a),e()})).then((()=>{let i=e[a];if(!i)throw new Error(`Module ${a} didn’t register its module`);return i})));self.define=(c,d)=>{const n=i||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let r={};const s=i=>a(i,n),l={module:{uri:n},exports:r,require:s};e[n]=Promise.all(c.map((i=>l[i]||s(i)))).then((i=>(d(...i),r)))}}define(["./workbox-6567b62a"],(function(i){"use strict";i.setCacheNameDetails({prefix:"menglish"}),self.addEventListener("message",(i=>{i.data&&"SKIP_WAITING"===i.data.type&&self.skipWaiting()})),i.precacheAndRoute([{url:"/404.html",revision:"5e79737380ac1b0704fb70db59cae3c3"},{url:"/css/app.8fbb336f.css",revision:null},{url:"/img/activitytype/alphabet.png",revision:"462bcfcdf768b5779891dee078bc9cb1"},{url:"/img/activitytype/cards.png",revision:"019cc54c26d0b5745992151f5145a142"},{url:"/img/activitytype/cloud.png",revision:"6e2f9e2a2548ea9d45c89ea58e6471ec"},{url:"/img/activitytype/conversation.png",revision:"d1c428562a0f471ce7307b7163a29c59"},{url:"/img/activitytype/flashcard.png",revision:"b51c1fc055e9aee06272ce8cd47684ea"},{url:"/img/activitytype/quiz.png",revision:"179c004d90452eaac2f20cb8f28c97a7"},{url:"/img/activitytype/scenario.png",revision:"bb97dce00ae68a166f396a586a57221e"},{url:"/img/activitytype/typing.png",revision:"5ca6ce8d357e2a3b5ae41165c4c41b36"},{url:"/img/activitytype/wheel.png",revision:"318dd075e557ad4069659943f6648985"},{url:"/img/choose.f2d78316.jpg",revision:null},{url:"/img/common/information.png",revision:"73fbf1da5e887cf12e31cdfac825923b"},{url:"/img/common/settings.png",revision:"7400bac3aedcf5f2c85769f49f5b9044"},{url:"/img/common/user.png",revision:"9df79e5525992e5c08f0bc26572c8db1"},{url:"/img/dict/animals/Flamingo.jpeg",revision:"4d0d2c3f34864da6942ad09aae2a34db"},{url:"/img/dict/animals/Gorilla.jpeg",revision:"6b11241aec27244fca6105668eee08a8"},{url:"/img/dict/animals/Jungle-animal--bat-flashcard.jpeg",revision:"cc0d23f11ca69687edc634d8480e40e1"},{url:"/img/dict/animals/Jungle-animal--iguana-flashcard.jpeg",revision:"0e01f7ed16c6fef1bcb3873158c754c2"},{url:"/img/dict/animals/Jungle-animal-Lizard-flashcard.jpeg",revision:"d31d8d6fc2181bde48fa6d99d6772f03"},{url:"/img/dict/animals/Jungle-animal-monkey-flashcard.jpeg",revision:"05353e6d818363513610c45d3ee45c2d"},{url:"/img/dict/animals/Jungle-animal-panda-flashcard.jpeg",revision:"65e002eb1e4ff07001249623a755ac65"},{url:"/img/dict/animals/Jungle-animal-parrot-flashcard.jpeg",revision:"2e3666acad2e7e9b8624cb20f8fbec59"},{url:"/img/dict/animals/Jungle-animal-peacock-flashcard.jpeg",revision:"27576e29707f53c6314ce9383a41f3ba"},{url:"/img/dict/animals/Jungle-animal-sloth-flashcard.jpeg",revision:"1cc8c15824d27d639a6ae397a0747cbf"},{url:"/img/dict/animals/Jungle-animal-snake-flashcard.jpeg",revision:"860b22f712fa8bc18985baf1bd922cc9"},{url:"/img/dict/animals/Jungle-animal-tiger-flashcard.jpeg",revision:"8c5242c969129225c8d230f64a40f8df"},{url:"/img/dict/animals/Premium Vector _ Zoo entrance outdoor view with different cartoon animals.jpeg",revision:"fc76c5c50b6b2e24ac327f3f8c60e36c"},{url:"/img/dict/animals/Why Kenya Is the Best Place for a Safari, According to a Seasoned Local Guide.jpeg",revision:"64fadc40a85761ec89ca6e04e83800ab"},{url:"/img/dict/animals/adoption.png",revision:"200f2bb92b4e79b202a6792758bbddd4"},{url:"/img/dict/animals/alligator.png",revision:"21a619c115cc3cd1464441bdd2e9cb9a"},{url:"/img/dict/animals/anteater.jpeg",revision:"6b5908188da2c691b4030eb5a7788856"},{url:"/img/dict/animals/antelope.png",revision:"5e69a0245e9608289364ce2de0befeee"},{url:"/img/dict/animals/aquarium.png",revision:"23afa0c6a43bca4f32f2daeab23d1d89"},{url:"/img/dict/animals/bat.png",revision:"7da23b52887771860c8058b0fafee038"},{url:"/img/dict/animals/bear.png",revision:"56b62ef5fcaa57f6623648516db1e7b3"},{url:"/img/dict/animals/bison.png",revision:"25211546625b140120503ad4eea97c81"},{url:"/img/dict/animals/bone.png",revision:"e79fda10d54023902fac46dd52328b68"},{url:"/img/dict/animals/budgie.png",revision:"b030a782485f932de96b46671930b43f"},{url:"/img/dict/animals/cage.png",revision:"1d0f276f34207f35ea1d0e15d9bcc6a4"},{url:"/img/dict/animals/calf.png",revision:"2ad78107ae097564242ca54e88b097cc"},{url:"/img/dict/animals/camel.png",revision:"eff54bc5e0d200363b3726743a545eb8"},{url:"/img/dict/animals/cat.png",revision:"552b7afc1bedb39de7841b002e8776cd"},{url:"/img/dict/animals/cheetah.png",revision:"c87f7eb39a24c60d0df68a3dcd523d48"},{url:"/img/dict/animals/chicken.png",revision:"c07acce7d79bd8242ff6af1e8a5904da"},{url:"/img/dict/animals/chimpanzee.png",revision:"3db2c046388eb807b63d1d24e01a70fc"},{url:"/img/dict/animals/chipmunk.png",revision:"1f640010bd95893c156448696f36ca0d"},{url:"/img/dict/animals/clam.png",revision:"4462750dc7d6de6cb7a856c25431eb5c"},{url:"/img/dict/animals/collar.png",revision:"c57f4931026a42e64a9ff0dedcd02498"},{url:"/img/dict/animals/cow.png",revision:"0a7f88d55190fd143a6295f74e49d728"},{url:"/img/dict/animals/crab.png",revision:"65afef9528183e1b9d107571f6a427fa"},{url:"/img/dict/animals/deer.png",revision:"eb6a203bd511f15df9fc92211a27f39d"},{url:"/img/dict/animals/dog.png",revision:"10f4a21bb5b2e80c83106353bcd1774e"},{url:"/img/dict/animals/doghouse.png",revision:"97c0c7cce5a4d65abeb4bdd842edbb4f"},{url:"/img/dict/animals/dolphin.png",revision:"200b49c04c278e3560006626e8d64a5a"},{url:"/img/dict/animals/donkey.png",revision:"14d0f15f7ebe16f789541cb57689dd09"},{url:"/img/dict/animals/duck.png",revision:"a94e367e0f7b1d68216ee1f394778c63"},{url:"/img/dict/animals/duckling.png",revision:"22f3cc896e4ee7ed2821c0b22a8c9118"},{url:"/img/dict/animals/eagle.png",revision:"3b22c8f50c6ca948656e4c23ae082ece"},{url:"/img/dict/animals/eel.png",revision:"a096180246fc2253c9b3382fde189e87"},{url:"/img/dict/animals/elephant.png",revision:"4c77ca62baf6055db33a1d3c4bc53253"},{url:"/img/dict/animals/elk.png",revision:"6cf75379bc17b7a6c50743bf0679a7c3"},{url:"/img/dict/animals/fish.png",revision:"d4472da920e130dfecac1454b58187d7"},{url:"/img/dict/animals/fishbowl.png",revision:"9734bf3dbf59ef08ba32c4c07e4a4636"},{url:"/img/dict/animals/flamingo.png",revision:"331d3f6bf92efec854d10558b00905b9"},{url:"/img/dict/animals/fox.png",revision:"e118c880ac4b0e6e539f475cd846a788"},{url:"/img/dict/animals/frog.png",revision:"05329f246308331e653b4014064daf2c"},{url:"/img/dict/animals/gerbil.png",revision:"4072344e0ddd64318a280b03c86f2dc9"},{url:"/img/dict/animals/giraffe.png",revision:"b6e30b4361ca31dec01a0c6bf27c7468"},{url:"/img/dict/animals/goat.png",revision:"08c883732338e708f819a0c304331aab"},{url:"/img/dict/animals/goldfish.png",revision:"320311e0066b650b2b252ee10335fe45"},{url:"/img/dict/animals/goose.png",revision:"478c3a75c0c0549e5f251de545b68db4"},{url:"/img/dict/animals/gorilla.png",revision:"80aedf2a53b6ed36d3d0d5446f8a1b41"},{url:"/img/dict/animals/guineapig.png",revision:"dcf8db92cf7b987c8ef0070463a1b0a9"},{url:"/img/dict/animals/hamster.png",revision:"3a44b42646d88bf01fe3c38a1f5703a5"},{url:"/img/dict/animals/hare.png",revision:"c264b3c3f486e89a8b33639b86a6733c"},{url:"/img/dict/animals/hedgehog.png",revision:"795c978b71b44c533b95741ab72e5789"},{url:"/img/dict/animals/hen.png",revision:"f92c5ca71c934de4838b340c08b5550e"},{url:"/img/dict/animals/hippo.png",revision:"aa465382963aac45afe2b6daf0ec1b2a"},{url:"/img/dict/animals/horse.png",revision:"d027365097b1bd0935cd61bf3dbebcb4"},{url:"/img/dict/animals/jellyfish.png",revision:"663734edf12f2f397d3e062d8c73fc3f"},{url:"/img/dict/animals/kangaroo.png",revision:"d250cc1942844acad2351c3d339be876"},{url:"/img/dict/animals/kitten.png",revision:"f673d6fb12ce7c6409e0130c463b373f"},{url:"/img/dict/animals/koala.png",revision:"bd9cf589401c15dc91063125251e4282"},{url:"/img/dict/animals/lamb.png",revision:"f3743f59605bd54bdb1d94c84471bec0"},{url:"/img/dict/animals/leash.png",revision:"4f24bab61251726aae566d0d2d7c66db"},{url:"/img/dict/animals/lemur.png",revision:"33805e19e60b9b86c8e9ec53986bf744"},{url:"/img/dict/animals/leopard.png",revision:"c4dd1962f2b3314e920c1f14c656148d"},{url:"/img/dict/animals/lion.png",revision:"52c6d05e4ea155a5f455092fca2a3951"},{url:"/img/dict/animals/lizard.png",revision:"5ee8c018026840f7d11dcd6ade570cd6"},{url:"/img/dict/animals/lobster.png",revision:"409796fd3a5f487fca79fa759c56a748"},{url:"/img/dict/animals/manatee.png",revision:"25700974b137c0f30d4c8c04c670cdac"},{url:"/img/dict/animals/meerkat.png",revision:"6689736ea94117fb6fb9bab007d7fc77"},{url:"/img/dict/animals/monkey.png",revision:"36eab193dace12092b84b2f6f0e9804a"},{url:"/img/dict/animals/mouse.png",revision:"e062c7a4cc1660d8baf4b2a03660dd08"},{url:"/img/dict/animals/octopus.png",revision:"2973dd6b27c0e885da1bf230ed0a9561"},{url:"/img/dict/animals/orangutan.png",revision:"a2be3b1a311cfaee6911d49f45195728"},{url:"/img/dict/animals/ostrich.png",revision:"8103f1e777fd93ac8cb157667116b105"},{url:"/img/dict/animals/otter.png",revision:"be7ee0efd81d60fa0d4cdd0ded912f43"},{url:"/img/dict/animals/owl.png",revision:"fb89092ea3348138395fdf1a2d06c162"},{url:"/img/dict/animals/ox.png",revision:"b0a36305baf39e465973dbfc49042f55"},{url:"/img/dict/animals/oyster.png",revision:"f74d240b4ab5f42aff6e83bb24e57737"},{url:"/img/dict/animals/panda.png",revision:"6ac1304dadcbcd437092d0369e63fe8f"},{url:"/img/dict/animals/parrot.png",revision:"2534c363ec26a85e3fcea0e2359719f7"},{url:"/img/dict/animals/penguin.png",revision:"3a269af413b0fffed041009b8a20441b"},{url:"/img/dict/animals/petstore.png",revision:"92afd991d255c016ef942062f55dbd9e"},{url:"/img/dict/animals/pig.png",revision:"ee5a2d4161576d7586d623b735c6c705"},{url:"/img/dict/animals/piglet.png",revision:"8b3ca3c7271533282e3b2be14ad9152d"},{url:"/img/dict/animals/polarbear.png",revision:"b37e3b010e7e3bc7da24dba6db4b9e88"},{url:"/img/dict/animals/puppy.png",revision:"fc4fe2e5da6fd912f9f27e41d0b49a03"},{url:"/img/dict/animals/rabbit.png",revision:"2abef0be5fac078f0f9d852cdb030388"},{url:"/img/dict/animals/raccoon.png",revision:"08688977aaac1e9ee38b77fbd186a731"},{url:"/img/dict/animals/rhino.png",revision:"3d5bda9f289d85084465c593960cefc7"},{url:"/img/dict/animals/rooster.png",revision:"76d7a6fed3101e4de3360508161ba7fd"},{url:"/img/dict/animals/scorpion.png",revision:"e5abd15ee8a818ad1c17c225a3a6aef2"},{url:"/img/dict/animals/seahorse.png",revision:"b604f0c96adfcbcee730645060ab9aba"},{url:"/img/dict/animals/seal.png",revision:"e6c8352914a588cac313ac5e4e630dfe"},{url:"/img/dict/animals/seaotter.png",revision:"fa1491d76b32e85d6fb5faa9c64bc5eb"},{url:"/img/dict/animals/shark.png",revision:"f89297f76affab8d4d1d3ad1c069eea0"},{url:"/img/dict/animals/sheep.png",revision:"5966978b0fb772d5c2482ed87d9ab244"},{url:"/img/dict/animals/shelter.png",revision:"1de1b5383d6d9dee6cc9e0cabaea3b71"},{url:"/img/dict/animals/snail.png",revision:"9c5a5e686e28f2a6ca6bfee736448ab7"},{url:"/img/dict/animals/snake.png",revision:"3be8ff2671e66938c2f6c5ced8cc73d4"},{url:"/img/dict/animals/squid.png",revision:"f9932a26013e7749476cd23fadc73422"},{url:"/img/dict/animals/squirrel.png",revision:"bf0e2039384dabd5591a235206a5e811"},{url:"/img/dict/animals/starfish.png",revision:"88511edff2b11e6233dbca744d1b9ac8"},{url:"/img/dict/animals/stingray.png",revision:"6514b03f3647c0b018f11f0d031cba75"},{url:"/img/dict/animals/tiger.png",revision:"5a07fbb0a79885898894e6d69231cfe7"},{url:"/img/dict/animals/toucan.jpeg",revision:"dba59c25de4f9cb09d5f49c45ce8f194"},{url:"/img/dict/animals/turkey.png",revision:"f82419635042fe5c33986ffeb1612f95"},{url:"/img/dict/animals/turtle.png",revision:"4a3ea30d4d695516fade29f92294b580"},{url:"/img/dict/animals/vulture.png",revision:"5330f3bae9f9cc142cbce9bb4c3d6ff9"},{url:"/img/dict/animals/walrus.png",revision:"c1fcd50c9187839e2ea1b35dab1f17f0"},{url:"/img/dict/animals/whale.png",revision:"84a8c8d5a5f312856a3a184b549c9e0f"},{url:"/img/dict/animals/wolf.png",revision:"0e17ad5b7871f1ed6a4fde1c27dd750c"},{url:"/img/dict/animals/yak.png",revision:"774bbbff6c758f1327fac038a4d0c7f9"},{url:"/img/dict/animals/zebra.png",revision:"fb0a8a8b349d945a02a593359750ee76"},{url:"/img/dict/body/ankle.png",revision:"39c7ea7f3659b44b26836cea68b756cd"},{url:"/img/dict/body/arm.png",revision:"95a6809c723f682e1d52e74f5505a246"},{url:"/img/dict/body/back.png",revision:"66c72ca9f75d3856d283a7755a4d9dfc"},{url:"/img/dict/body/body.png",revision:"d25331b39008ca0fd0c4f57caea13e87"},{url:"/img/dict/body/finger.png",revision:"099e7a0c43391d4b1bc7b4efc84c0389"},{url:"/img/dict/body/foot.png",revision:"a582da2a143ff64e1ca144655215f4cb"},{url:"/img/dict/body/hand.png",revision:"6edb201583e746e12c6b9af52d464179"},{url:"/img/dict/body/head.png",revision:"8ec57456a52357566aa39ee120d6021c"},{url:"/img/dict/body/knee.png",revision:"71334453e1a01804ed5433b8ddab5948"},{url:"/img/dict/body/leg.png",revision:"f5a2ed41b42c73dbf3336e7221706463"},{url:"/img/dict/body/toes.png",revision:"59305856d69772b8f34421fa379cf684"},{url:"/img/dict/classroom/bag.png",revision:"6904bb3812985f6f65df9c296121f9de"},{url:"/img/dict/classroom/book.png",revision:"48d629590e0195942fcf0e3c87470a79"},{url:"/img/dict/classroom/chair.png",revision:"7c91cfc0805890a3c8e0407e802bc63d"},{url:"/img/dict/classroom/classroom.png",revision:"207af25a5b3ff94899fe69591148ca82"},{url:"/img/dict/classroom/desk.png",revision:"dadce5aae8e6c439ef8a26d224295d08"},{url:"/img/dict/classroom/pen.png",revision:"c9e9393f4212673d4b7e78ce0f56484f"},{url:"/img/dict/classroom/pencil.png",revision:"089ce88cddc3c036d633f86d782c0c58"},{url:"/img/dict/classroom/pencilcase.jpg",revision:"460b9bcbf71633634345927c763e1b77"},{url:"/img/dict/classroom/rubber.png",revision:"55729fa2d131e19db751dc50452b966b"},{url:"/img/dict/family/aunt.png",revision:"ee4b731320c30af7ecd1e6b996ed3955"},{url:"/img/dict/family/baby.png",revision:"c55923b13815c6112123b26918188aaf"},{url:"/img/dict/family/brother.png",revision:"3188b11fb595534b31dd4609a87c30dc"},{url:"/img/dict/family/family.png",revision:"79bfcfcda11bd81a8a9ccdf9334e91cd"},{url:"/img/dict/family/father.png",revision:"c4510492179d205292f7f37118bf373a"},{url:"/img/dict/family/grandfather.png",revision:"55fe1035f9febddf8f54c4f0119578e3"},{url:"/img/dict/family/grandmother.png",revision:"0b007ebbd9799c8cea847e467d20365b"},{url:"/img/dict/family/mother.png",revision:"2eae99b36893607e80c70895a0957b5c"},{url:"/img/dict/family/parents.png",revision:"37880ddb525a083cf7f092e43295cbe1"},{url:"/img/dict/family/sister.png",revision:"91f48aec851e3ec3d2fcc7ef76818132"},{url:"/img/dict/family/uncle.png",revision:"cd35adcd11a96d80c8006eec8cae0b7c"},{url:"/img/dict/head/cheek.png",revision:"b8c3ac2db1ca610be1dc7ed888ba8226"},{url:"/img/dict/head/chin.png",revision:"0fa608af47165394b41704807ca4a1b1"},{url:"/img/dict/head/ear.png",revision:"a38a047c4dc4a410676d75f33a8c9b86"},{url:"/img/dict/head/eye.png",revision:"b3fa129f0b2f745b79f3814584d641e6"},{url:"/img/dict/head/face.png",revision:"22b660353e774491f95af33380ab2e08"},{url:"/img/dict/head/hair.png",revision:"559a53c1c45ee736684d7fb5d859d65e"},{url:"/img/dict/head/head.png",revision:"aade3096b1f9eb56fc76e352530b36e3"},{url:"/img/dict/head/lip.png",revision:"700c10e80564ffb9726df8180d3287bb"},{url:"/img/dict/head/mouth.png",revision:"7e3b7297cb45dde6ba47f679dedaa560"},{url:"/img/dict/head/neck.png",revision:"9e83311562dc9548197d1b524c36e5b3"},{url:"/img/dict/head/nouse.png",revision:"5f9845ca78be0b969766af16e66e78c9"},{url:"/img/dict/head/teeth.png",revision:"981c430ec251cdb8030fd6c2eb116e05"},{url:"/img/dict/head/throat.png",revision:"ba19e69a9ced2f8c7c6c27afbf43c9ab"},{url:"/img/dict/head/tongue.png",revision:"b31b23bc78a407c2168a9e96dad1bc7b"},{url:"/img/dict/numbers/0.png",revision:"817c96db0cc269e5567bf53c3457627d"},{url:"/img/dict/numbers/1.png",revision:"0405e4083267121291a80d4fa64b45d5"},{url:"/img/dict/numbers/10.png",revision:"892f9fd141b95e2eb11d080b8bd03cde"},{url:"/img/dict/numbers/1p1.png",revision:"596504ec54287c53430b78b33706802d"},{url:"/img/dict/numbers/2.png",revision:"f6882dca0a2ca9e866bec40f48cd6e40"},{url:"/img/dict/numbers/2m1.png",revision:"638efc02662e55c4d80da8b0c0677eca"},{url:"/img/dict/numbers/3.png",revision:"9476408df4a1c0a0bdac6368bd19e884"},{url:"/img/dict/numbers/4.png",revision:"fb1330359b379c6f3aadfbd5095890ae"},{url:"/img/dict/numbers/5.png",revision:"2e39aa730de1179ab7ba6b0db93fc0dd"},{url:"/img/dict/numbers/6.png",revision:"8e76a4325351b9a5d50db96c8a85bb1a"},{url:"/img/dict/numbers/7.png",revision:"4a82024608b97909d23c748c9777feea"},{url:"/img/dict/numbers/8.png",revision:"dc10e519576c87e2485142022e834abe"},{url:"/img/dict/numbers/9.png",revision:"db054b604112d130bdd85a994a7f5d02"},{url:"/img/dict/shapes/circle.png",revision:"b1b63b4300ac991d64159bba78562ceb"},{url:"/img/dict/shapes/cloud.png",revision:"c26a16e13d8f9f94a95bd0042f180a07"},{url:"/img/dict/shapes/diamond.png",revision:"b3e7d04960c8000e0dfc4cc91f2f5310"},{url:"/img/dict/shapes/heart.png",revision:"d1399b91a07b14a47f8c9595bc53a52c"},{url:"/img/dict/shapes/oval.png",revision:"7d7e4ed13c9f404a737f5eb7636879c3"},{url:"/img/dict/shapes/rectangle.png",revision:"0898d03180660546e933177a11b63525"},{url:"/img/dict/shapes/square.png",revision:"1cbf87eda101338554186a4f2e39f322"},{url:"/img/dict/shapes/star.png",revision:"6acb9365b1024172cb9619d3b355bbaa"},{url:"/img/dict/shapes/triangle.png",revision:"44ae6557c07f57664f52a59ceb8dfbb6"},{url:"/img/dict/toys/ball.png",revision:"472592774e6b574c88e6d69326520dee"},{url:"/img/dict/toys/blocks.png",revision:"f24560b98559f2d0f5b86585153e43a4"},{url:"/img/dict/toys/car.png",revision:"cbd7596bc8feb145d0cf3b5745d026da"},{url:"/img/dict/toys/dinosaur.png",revision:"87b964d3f7104e19e23f33cdc20de53f"},{url:"/img/dict/toys/doll.png",revision:"974a6b025cb7a1867aeed8ffece5c0ec"},{url:"/img/dict/toys/drum.png",revision:"781a422058abbc526aa0c52b7952a21a"},{url:"/img/dict/toys/jumprope.png",revision:"45c1d3c2ec3aca5e4e2090595c1d269e"},{url:"/img/dict/toys/kite.png",revision:"603b60be3af5ce8c5efce42087f1e3df"},{url:"/img/dict/toys/plane.png",revision:"fd0360ad3cb49522cffa0311cd4e12b9"},{url:"/img/dict/toys/puzzle.png",revision:"ceff9c4de739e7706d44ccd20db59a64"},{url:"/img/dict/toys/robot.png",revision:"7b08fcf43f5cf4868f373d1a4d45d42a"},{url:"/img/dict/toys/scooter.png",revision:"86b8237722fa5c8d60b9eb7dfc0505b7"},{url:"/img/dict/toys/teddybear.png",revision:"9be882753ae9bf9ca8f9439e1625cd3f"},{url:"/img/dict/toys/toys.png",revision:"56700c1bcd1b228dc9b3de8675380837"},{url:"/img/dict/toys/train.png",revision:"03504ed2c947236df239ccef42f65da2"},{url:"/img/level/hello.png",revision:"181037f2b14e50814db443cb8542d572"},{url:"/img/level/hello2.jpg",revision:"ca07c8bbc914bfcf913443def6684234"},{url:"/img/level/hello3.jpg",revision:"17787006ad4a11daa0ba19b47804dcb0"},{url:"/img/level/hello4.jpg",revision:"a39247c1ff764bdb03371a22b63db259"},{url:"/img/logo/me_big.png",revision:"f32710959b50e2d0842e633d7eaf43e7"},{url:"/img/smile/happy.jpeg",revision:"78bca63ca1b5426ad1e5c0fe3de62255"},{url:"/img/story/avatar/cat.png",revision:"bb84d4f49cd083b1d22dd6947a99e3c8"},{url:"/img/story/avatar/monkey.jpg",revision:"70ae91a459de29c6dd093067747306d8"},{url:"/img/story/hi.jpg",revision:"357bd6d8b845dbfb12a1e22f6e11cef8"},{url:"/index.html",revision:"6e63b07d35ceb5e03c0e719d1f962a6a"},{url:"/js/112.5306bcc6.js",revision:null},{url:"/js/183.20a948e2.js",revision:null},{url:"/js/201.ee1ec3fa.js",revision:null},{url:"/js/22.a4706d85.js",revision:null},{url:"/js/248.a5adaa88.js",revision:null},{url:"/js/292.e4f448c0.js",revision:null},{url:"/js/346.35e0fd35.js",revision:null},{url:"/js/389.e70c3df0.js",revision:null},{url:"/js/421.a9bc3bf8.js",revision:null},{url:"/js/452.4fb46e45.js",revision:null},{url:"/js/46.6a36237a.js",revision:null},{url:"/js/5.507cb721.js",revision:null},{url:"/js/524.742f6f37.js",revision:null},{url:"/js/56.6be6c8ef.js",revision:null},{url:"/js/588.1930d48f.js",revision:null},{url:"/js/634.5275537d.js",revision:null},{url:"/js/728.562973d9.js",revision:null},{url:"/js/797.673635ce.js",revision:null},{url:"/js/933.aa323d8b.js",revision:null},{url:"/js/946.79cd003f.js",revision:null},{url:"/js/959.d334d30c.js",revision:null},{url:"/js/980.2acdf10f.js",revision:null},{url:"/js/about.350b6151.js",revision:null},{url:"/js/app.685282f7.js",revision:null},{url:"/js/chunk-vendors.32d8c433.js",revision:null},{url:"/manifest.json",revision:"9b5caacf9d6f65354bbcbd3c92ef0cd9"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"},{url:"/sound/common/click1.wav",revision:"89d7d084cbabf3a64285b29b2c840ddc"},{url:"/sound/common/click2.wav",revision:"7607a05f5747c0b0cb4fb6ab19918a4c"},{url:"/sound/common/success.wav",revision:"6066932449f660bbd2ba3315702bb4c5"},{url:"/sound/common/success1.wav",revision:"a0cb025a52fb6ee68f11628627867e76"},{url:"/sound/common/success2.wav",revision:"bd996cc0042fa576df8804855d01c0e8"},{url:"/sound/common/success3.wav",revision:"cc006a1936ce0dc912fe8d1c814b3490"},{url:"/sound/common/success4.wav",revision:"a04518aeb4ce735ac63852831c0f5409"},{url:"/sound/common/wrong1.wav",revision:"8a1b4019034dff1cb614a8b01e33a034"},{url:"/sound/common/wrong2.wav",revision:"96fa54dc6d615a90f0f75d80e70d10ab"},{url:"/sound/common/wrong3.wav",revision:"234fd1e4988fc36f204abca174aaf496"},{url:"/sound/dict/kite.mp3",revision:"66af25426ae9ac76935ac2d7bd52e14d"}],{})}));
//# sourceMappingURL=service-worker.js.map
