// Исправь ошибки которые будут в консоли, чтобы скрипт заработал.
const inventory = {
    items : ['Knife', 'Gas mask'],
    propertyName : ['Cut','CleaAir'],
    add(itemName , property) {
      console.log(`Adding ${itemName} to inventory , with property ${property}`);
      this.items.push(itemName);
      this.propertyName.push(property);
    },
    remove(itemName , property) {
      console.log(`Removing ${itemName} with propety ${property} from inventory`);
      this.items = this.items.filter(item => item !== itemName);
      this.propertyName = this.propertyName.filter(prop => prop !== property);
    },
  };
  const invokeInventoryAction = function(itemName, action , property , ) {
    console.log(`Invoking action on ${itemName} with ${property}`);
    action.bind(inventory)(itemName , property);
  };
  invokeInventoryAction('Medkit', inventory.add , 'helthUp' , inventory.add);
  // Invoking action on Medkit
  // Adding Medkit to inventory
  console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']
  invokeInventoryAction('Gas mask', inventory.remove , 'CleaAir' , inventory.remove);
  // Invoking action on Gas mask
  // Removing Gas mask from inventory
  console.log(inventory.items); // ['Knife', 'Medkit']
  inventory.add("KAR-98" , "1 shot 1 hit")
  console.log(inventory.items , inventory.propertyName)
  inventory.remove("Knife" , "Cut")
  console.log(inventory.items , inventory.propertyName)
  inventory.add("Spiritus" , "drink to relax")
  console.log(inventory.items , inventory.propertyName)
  
  