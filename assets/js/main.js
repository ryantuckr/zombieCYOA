$(document).ready(function () {

    alert("It is the ZOMBIE apocalypse. You are looting a store and suddenly a zombie bursts through the door!");


    var weapon = prompt(
        "You search around for a weapon. What did you choose? A Bow and Arrow, and Axe, or a Can of beans?");

    var randomNumber1 = Math.round(Math.random());

    var randomNumber2 = Math.round(Math.random());
    console.log(randomNumber1);
    console.log(randomNumber2);
    alert("You attack the zombie with your " + weapon)

    if (randomNumber1 === 0) {
        alert("The zombie has dodged your " + weapon + " attack. You have been bitten! You can't go on much longer...");

        alert("You are bleeding bad. You must make it out and get to the hospital...");


    } else if (randomNumber1 === 1) {
        alert("You have killed the zombie with your " + weapon + ". He is totatlly dead.");
    }

    alert("You made it out of the store. You run across the parking lot, but one leaps out at you! it has your LEG!");
    alert("Oh NOO! you've dropped your " + weapon);
    alert("You might be able to take him... He is making a lot of noise, it wont be long before other zombies hear us...");

    var choice = confirm("You can stay and fight, or run.. its up to you...");

    if (choice === true && randomNumber2 === 0) {
        alert("You are going to take your chances and fight");
        alert("You were able to shake off the zombie and run to safety. YOU WIN!");
    } else if (choice === true && randomNumber2 === 1) {
        alert("You are going to take your chances and fight");
        alert("This zombie is different... He is stronger... you should have ran.");
        alert("You try your best, but the zombie sinks its teeth into your arm.. Its over.")
    } else if (choice === false && randomNumber2 === 0) {
        alert("You've decided its best to RUN");
        alert("You are fast! You zig and zig and outrun the zombie horde! You got away with your life. YOU WIN!");
    } else if (choice === false && randomNumber2 === 1) {
        alert("You've decided its best to RUN");
        alert("As you run, this zombie lets out the loudest sound you've ever heard...");
        alert("its a shreiker zombie boss");
        alert('within seconds hundreds of zombies pour out from every direction, and close off every exit.')
        alert("game over");
    }
    4
})