function bob(monster) {

  var saying = ", idgits!"

  switch(monster){
    case "werewolf":
    case "shapeshifter":
      return "Silver knife or bullet to the heart" + saying;
      break;
    case "vampire":
      return "Behead it with a machete" + saying;
      break;
    case "wendigo":
      return "Burn it to death" + saying;
      break;
    case "angel":
      return "Use the angelic blade" + saying;
      break;
    case "demon":
      return "Use Ruby's knife, or some Jesus-juice" + saying;
      break;
    case "ghost":
      return "Salt and iron, and don't forget to burn the corpse" + saying;
      break;
    case "dragon":
      return "You have to find the excalibur for that" + saying;
      break;
    case "djinn":
      return "Stab it with silver knife dipped in a lamb's blood" + saying;
      break;
    case "pagan god":
      return "It depends on which one it is" + saying;
      break;
    case "leviathan":
      return "Use some Borax, then kill Dick" + saying;
      break;
    case "ghoul":
      return "Behead it" + saying;
      break;
    case "jefferson starship":
      return "Behead it with a silver blade" + saying;
      break;
    case "reaper":
      return "If it's nasty, you should gank who controls it" + saying;
      break;
    case "rugaru":
      return "Burn it alive" + saying;
      break;
    case "skinwalker":
      return "A silver bullet will do it" + saying;
      break;
    case "phoenix":
      return "Use the colt" + saying;
      break;
    case "witch":
      return "They are humans" + saying;
      break;
    default:
      return "I have friggin no idea yet"
  }
  return;
};

console.log(bob("rugaru"));
console.log(bob("poop"));
console.log(bob("angel"));
