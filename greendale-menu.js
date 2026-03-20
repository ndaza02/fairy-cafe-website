// Greendale Branch — Independent Menu Data
// Food & Beverage + Bar Menu
// Source: Fairy Cafe Restaurant Bar & Grill, 181 Arcturus Road, Greendale, Harare
const greendaleMenu = [
    // ═══════════════════════════════════════
    //  FOOD & BEVERAGE
    // ═══════════════════════════════════════
    {
        "category": "Greendale Breakfast",
        "items": [
            { "name": "All Day Breakfast", "price": "$10.00", "desc": "2 eggs, baked beans, toast, tomato, macon/bacon, two sausages, chips" },
            { "name": "Fairy Breakfast", "price": "$5.00", "desc": "Egg, sausages, toast, tomato, macon/bacon, chips" },
            { "name": "Breakfast Burrito", "price": "$5.00", "desc": "Macon/bacon, scrambled egg, ½ sausage, tomato, onion" },
            { "name": "Hungry Man's Breakfast", "price": "$12.00", "desc": "Fillet (150g), 2 eggs, baked beans, toast, cherry tomato or mushroom, bacon, two cocktail sausages, chips" },
            { "name": "Egg on Toast", "price": "$4.00", "desc": "2 toast and 2 eggs" },
            { "name": "Tomato & Mushroom Omelette", "price": "$5.00", "desc": "Cheddar cheese, macon/bacon, ham & veggies" },
            { "name": "Carnivore Breakfast", "price": "$5.00", "desc": "Hearty meat lover's breakfast" },
            { "name": "Stacked Waffle", "price": "$4.00", "desc": "Freshly made stacked waffle" }
        ]
    },
    {
        "category": "Greendale Sandwiches",
        "items": [
            { "name": "Club Sandwich", "price": "$8.00", "desc": "Cheddar cheese, chicken mayo & bacon. Served with chips and salad" },
            { "name": "Chicken Mayo Sandwich", "price": "$5.00", "desc": "Chicken breast, mayo" },
            { "name": "Ham & Cheese Sandwich", "price": "$3.00", "desc": "Sliced ham, sliced cheese" }
        ]
    },
    {
        "category": "Greendale Steaks",
        "items": [
            { "name": "T-Bone", "price": "$12.00", "desc": "300g T-bone steak" },
            { "name": "Rump Steak", "price": "$14.00", "desc": "300g rump with small chips and small salad" },
            { "name": "Pork Chop", "price": "$9.00", "desc": "300g pork chop" },
            { "name": "Fillet Steak", "price": "$12.00", "desc": "200g fillet steak" },
            { "name": "Beef Schnitzel", "price": "$14.00", "desc": "200g crumbed beef schnitzel" },
            { "name": "Pork Rib", "price": "$14.00", "desc": "400g pork rib" },
            { "name": "Beef Cordon Bleu", "price": "$15.00", "desc": "Stuffed beef cordon bleu" }
        ]
    },
    {
        "category": "Greendale Platters",
        "items": [
            { "name": "Fairy Lite Platter", "price": "$6.00", "desc": "Light platter to share" },
            { "name": "Platter for 2", "price": "$25.00", "desc": "4 wings/drumsticks, pork chop, sausage, rump steak, chips" },
            { "name": "Veggie Platter", "price": "$25.00", "desc": "Vegetarian platter" },
            { "name": "Platter for 3", "price": "$30.00", "desc": "4 wings/drumsticks, 2 pork chops, 2 sausages, 2 rump steaks, chips, salad" },
            { "name": "All Day Platter", "price": "$35.00", "desc": "2 pork chops, 2 rump steaks, 2 sausages, 6 wings/drumsticks, large chips, 2 sliders" },
            { "name": "Family Platter", "price": "$50.00", "desc": "2 pork chops, 2 rump steaks, 2 sausages, 6 wings/drumsticks, large chips, chicken wrap, 4 samoosas" }
        ]
    },
    {
        "category": "Greendale Chicken & Combos",
        "items": [
            { "name": "Cheddar Melt Schnitzel", "price": "$15.00", "desc": "Available in beef or chicken" },
            { "name": "Wings/Drums (4 pieces)", "price": "$6.00", "desc": "Served with chips" },
            { "name": "Quarter Chicken", "price": "$6.00", "desc": "Served with chips and salad" },
            { "name": "Half Chicken", "price": "$10.00", "desc": "Served with chips and salad" },
            { "name": "Full Chicken", "price": "$15.00", "desc": "Served with chips and salad" },
            { "name": "Drums & Vegs", "price": "$6.00", "desc": "Chicken drums with seasonal vegetables" },
            { "name": "Ribs & Wings Combo", "price": "$12.00", "desc": "Best of both worlds" }
        ]
    },
    {
        "category": "Greendale Burgers & Wraps",
        "items": [
            { "name": "Classic Burger", "price": "$3.00", "desc": "Beef pattie, tomato, lettuce, onion, fairy sauce" },
            { "name": "Double Beef Burger", "price": "$6.00", "desc": "2 beef patties, tomato, lettuce, onion, fairy sauce. Served with chips" },
            { "name": "Big Fairy Burger", "price": "$12.00", "desc": "2 beef patties, 2 cheese slices, 4 bacon rashers, avocado, 1 egg, lettuce, tomato, onion, fairy sauce. Served with chips and salad" },
            { "name": "Club Chicken Wrap", "price": "$6.00", "desc": "Bacon, chicken strips, fairy sauce, lettuce" },
            { "name": "Mexican/Beef Wrap", "price": "$5.00", "desc": "Beef strips, peppers, onion, tomato, chili sauces, lettuce" },
            { "name": "Chicken Wrap", "price": "$3.00", "desc": "Chicken strips, peppers, lettuce" },
            { "name": "Vegan Wrap", "price": "$5.00", "desc": "Plant-based wrap" }
        ]
    },
    {
        "category": "Greendale Seafood",
        "items": [
            { "name": "Fish (Hake/Bream)", "price": "$15.00", "desc": "Fresh hake or bream" },
            { "name": "8 Prawns", "price": "$16.00", "desc": "Succulent prawns" }
        ]
    },
    {
        "category": "Greendale Pasta & Stir Fry",
        "items": [
            { "name": "Beef Napolitano", "price": "$12.00", "desc": "Macaroni, garlic, beef strips, mixed vegs" },
            { "name": "Chicken Alfredo", "price": "$12.00", "desc": "Macaroni, mushrooms, bacon, chicken strips, creamy sauce" },
            { "name": "Chicken Creamy Pasta", "price": "$8.00", "desc": "Macaroni, chicken strips, pepper, creamy sauce" },
            { "name": "Veg Stir Fry", "price": "$5.50", "desc": "Mixed vegetables stir fry" },
            { "name": "Beef Stroganoff", "price": "$15.00", "desc": "Classic beef stroganoff" }
        ]
    },
    {
        "category": "Greendale Salads",
        "items": [
            { "name": "Bacon, Chicken Caesar", "price": "$8.00", "desc": "Classic caesar with bacon and chicken" },
            { "name": "Greek Salad", "price": "$5.00", "desc": "Traditional greek salad" },
            { "name": "Montecristo Salad", "price": "$8.00", "desc": "Premium house salad" },
            { "name": "Chicken Salad", "price": "$8.00", "desc": "Fresh chicken salad" },
            { "name": "Egg & Avo", "price": "$5.00", "desc": "Egg and avocado salad" }
        ]
    },
    {
        "category": "Greendale Traditional",
        "items": [
            { "name": "Brisket", "price": "$6.00", "desc": "Served with rice, sadza, or finger millet. Includes vegs of the day" },
            { "name": "Short Rib", "price": "$5.00", "desc": "Served with rice, sadza, or finger millet. Includes vegs of the day" },
            { "name": "Meaty Bones", "price": "$4.00", "desc": "Served with rice, sadza, or finger millet. Includes vegs of the day" },
            { "name": "Trotters", "price": "$4.00", "desc": "Served with rice, sadza, or finger millet. Includes vegs of the day" },
            { "name": "Goat Meat", "price": "$6.00", "desc": "Served with rice, sadza, or finger millet. Includes vegs of the day" },
            { "name": "Highfiridzi", "price": "$4.00", "desc": "Served with rice, sadza, or finger millet. Includes vegs of the day" },
            { "name": "Mazondo", "price": "$4.00", "desc": "Served with rice, sadza, or finger millet. Includes vegs of the day" },
            { "name": "Oxtail", "price": "$7.00", "desc": "Served with rice, sadza, or finger millet. Includes vegs of the day" },
            { "name": "Road Runner", "price": "$6.00", "desc": "Served with rice, sadza, or finger millet. Includes vegs of the day" },
            { "name": "Gango", "price": "$8.00", "desc": "Served with rice, sadza, or finger millet. Includes vegs of the day" },
            { "name": "Tripe Stew", "price": "$5.00", "desc": "Served with rice, sadza, or finger millet. Includes vegs of the day" },
            { "name": "Zvinyenze", "price": "$5.00", "desc": "Served with rice, sadza, or finger millet. Includes vegs of the day" },
            { "name": "Tsuro", "price": "$7.00", "desc": "Served with rice, sadza, or finger millet. Includes vegs of the day" },
            { "name": "Pork Bones", "price": "$6.00", "desc": "Served with rice, sadza, or finger millet. Includes vegs of the day" }
        ]
    },
    {
        "category": "Greendale Hot Beverages",
        "items": [
            { "name": "Cappuccino", "price": "$2.50", "desc": "Rich and creamy" },
            { "name": "Caffè Latte", "price": "$2.50", "desc": "Smooth milky coffee" },
            { "name": "Espresso", "price": "$1.00", "desc": "Single shot" },
            { "name": "Double Espresso", "price": "$2.00", "desc": "Double shot" },
            { "name": "Filter Coffee", "price": "$2.00", "desc": "Classic drip coffee" },
            { "name": "Americano", "price": "$2.00", "desc": "Classic black coffee" },
            { "name": "Macchiato", "price": "$5.00", "desc": "Espresso with a dash of milk" },
            { "name": "Mochaccino", "price": "$5.00", "desc": "Coffee chocolate fusion" },
            { "name": "Hot Cocoa", "price": "$2.50", "desc": "Warm chocolate drink" },
            { "name": "Iced Latte", "price": "$2.00", "desc": "Chilled latte" },
            { "name": "Teas", "price": "$1.00", "desc": "Assorted teas" },
            { "name": "Chai Latte", "price": "$3.00", "desc": "Spiced chai latte" }
        ]
    },
    {
        "category": "Greendale Soft Drinks & Treats",
        "items": [
            { "name": "Juice Glass", "price": "$2.00", "desc": "Fresh juice" },
            { "name": "Krush Juice", "price": "$2.00", "desc": "Krush brand juice" },
            { "name": "Minute Maid", "price": "$2.00", "desc": "Minute Maid juice" },
            { "name": "Flavoured Minute Maid", "price": "$1.00", "desc": "Flavoured variety" },
            { "name": "Coke PET", "price": "$1.00", "desc": "Bottled Coke" },
            { "name": "Bottled Water", "price": "$0.50", "desc": "Still water" },
            { "name": "UB/Can", "price": "$2.00", "desc": "Canned drink" },
            { "name": "Slush (Medium)", "price": "$2.50", "desc": "Icy slush drink" },
            { "name": "Slush (Large)", "price": "$3.00", "desc": "Large icy slush drink" },
            { "name": "Milkshake (Medium)", "price": "$3.00", "desc": "Creamy milkshake" },
            { "name": "Milkshake (Large)", "price": "$4.00", "desc": "Large creamy milkshake" },
            { "name": "Soda Float", "price": "$3.00", "desc": "Soda with ice cream" },
            { "name": "Smoothie", "price": "$4.00", "desc": "Blended fruit smoothie" }
        ]
    },

    // ═══════════════════════════════════════
    //  BAR MENU (Greendale exclusive)
    // ═══════════════════════════════════════
    {
        "category": "Greendale Classic Cocktails",
        "items": [
            { "name": "Long Island Iced Tea", "price": "$7.00", "desc": "Sour mix, Coca Cola, tequila, gin, white rum, triple sec" },
            { "name": "Tequila Sunrise", "price": "$5.00", "desc": "Grenadine, orange juice, tequila" },
            { "name": "Sex on the Beach", "price": "$5.00", "desc": "Vodka, peach schnapps, orange juice, cranberry juice, cranberry syrup" },
            { "name": "Margarita", "price": "$5.00", "desc": "Tequila, lime juice, simple syrup, triple sec" },
            { "name": "Strawberry Daiquiri", "price": "$7.00", "desc": "White rum, simple syrup, fresh strawberries, strawberry syrup" },
            { "name": "Whiskey Sour", "price": "$6.00", "desc": "Not all your whiskey is drank neat on the rocks" },
            { "name": "Miami Vice", "price": "$6.00", "desc": "With refreshing pina daiquiri flavour" },
            { "name": "Pina Colada", "price": "$6.00", "desc": "White rum blended with pineapple juice, cream of coconut and coconut milk" },
            { "name": "Mojito", "price": "$6.00", "desc": "White rum, simple syrup, mint leaves, soda water. Garnish: lime wedge" },
            { "name": "Gin & Tonic", "price": "$4.00", "desc": "London dry gin, tonic water. Garnish: lime wheel" },
            { "name": "Manhattan Perfect", "price": "$6.00", "desc": "Bourbon, dashed sweet vermouth, angostura bitters" },
            { "name": "Strawberry Margarita", "price": "$6.00", "desc": "Tequila, fresh strawberries, lime juice, simple syrup" },
            { "name": "Negroni", "price": "$5.00", "desc": "London dry gin, campari, dash of sweet vermouth" },
            { "name": "Cosmopolitan", "price": "$5.00", "desc": "Vodka, cointreau, cranberry" },
            { "name": "Corona Lita", "price": "$7.00", "desc": "Icy margarita with Corona beer fusion" }
        ]
    },
    {
        "category": "Greendale Mocktails",
        "items": [
            { "name": "Strawberry Daiquiri", "price": "$5.00", "desc": "Trust me it doesn't have alcohol!" },
            { "name": "Virgin Marry", "price": "$7.00", "desc": "The perfect drink for a hangover" },
            { "name": "Little Fairy", "price": "$6.00", "desc": "Fresh berries, blueberry cordial, lime juice, simple syrup, passion fruit juice" },
            { "name": "Bob Marley", "price": "$5.00", "desc": "Grenadine, pineapple juice, blueberry syrup, club soda" },
            { "name": "Malawi Shandy", "price": "$5.00", "desc": "Mazoe orange, ginger beer, lemonade, dashed with bitters" },
            { "name": "Dragon Fairy", "price": "$6.00", "desc": "Dragon fruit, curala, blueberry cordial, lime juice, lemonade" },
            { "name": "Kays Glitter", "price": "$6.00", "desc": "Sparkling dragon fruit, sprite, edible glitters" }
        ]
    },
    {
        "category": "Greendale Dessert Cocktails",
        "items": [
            { "name": "Pink Fairy", "price": "$6.00", "desc": "Strawberry lips, ice cream, strawberry syrup, strawberry chunks" },
            { "name": "Bubble Berry", "price": "$5.00", "desc": "Blueberries, blueberry syrup curacao, white rum, tequila" },
            { "name": "Blowjob Shake", "price": "$7.00", "desc": "Jager, amarula, kahlua, chocolate syrup, extra cream" }
        ]
    },
    {
        "category": "Greendale Signature Cocktails",
        "items": [
            { "name": "Fairy Fix", "price": "$5.00", "desc": "Gin, vodka, grapefruit juice, roasted pineapple, lime juice, litchi" },
            { "name": "Daisy", "price": "$6.00", "desc": "Tequila, orange liqueur, blue curacao, lime juice, orange juice" },
            { "name": "Sangria", "price": "$7.00", "desc": "Red wine, white wine, brandy, cointreau, sweet syrup, orange juice, cranberry juice" },
            { "name": "King's Order", "price": "$6.00", "desc": "London dry gin, lime juice, elderflower" },
            { "name": "Kays Gin Tonic", "price": "$5.00", "desc": "Lavender elderflower, gin tonic" },
            { "name": "Fairy Berry", "price": "$6.00", "desc": "Gin infused cocktail" },
            { "name": "Henry Martini", "price": "$7.00", "desc": "Hennessy, lime juice, sweet syrup, grenadine" },
            { "name": "Pornstar Martini", "price": "$6.00", "desc": "Vanilla vodka, passion fruit liquor, vanilla syrup, passion fruit juice" }
        ]
    },
    {
        "category": "Greendale Shooters",
        "items": [
            { "name": "White Russian", "price": "$5.00", "desc": "Creamy, dreamy, and oh so decadent" },
            { "name": "Liquid Cocaine", "price": "$5.00", "desc": "Southern comfort, dark rum, amaretto, pineapple juice" },
            { "name": "Love Potion", "price": "$4.00", "desc": "Citrus vodka, chambord, cranberry" },
            { "name": "Bob Marley", "price": "$5.00", "desc": "Blue curacao, pineapple juice, vodka, peppermint liquor" },
            { "name": "Smackadellic Shooter", "price": "$2.00", "desc": "Tequila, blue curacao, lime juice" },
            { "name": "Flaming Lamborghini", "price": "$6.00", "desc": "You might cook your insides, proceed with CAUTION!!" },
            { "name": "Jager Bomb", "price": "$5.00", "desc": "Jägermeister + energy drink" },
            { "name": "Brain Damage", "price": "$4.00", "desc": "Jager, gin, vodka — DO NOT DRINK THIS BEFORE YOUR EXAMS" },
            { "name": "Blowjob", "price": "$5.00", "desc": "Amarula, kahlua, cream" },
            { "name": "Kamikaze", "price": "$2.00", "desc": "Vodka, triple sec, fresh lime juice" }
        ]
    },
    {
        "category": "Greendale Ciders",
        "items": [
            { "name": "Bernini Blush", "price": "$3.00", "desc": "" },
            { "name": "Belgravia Dry Lemon", "price": "$3.00", "desc": "" },
            { "name": "Brutal Fruit", "price": "$3.00", "desc": "" },
            { "name": "Hunters", "price": "$3.00", "desc": "" },
            { "name": "Ice Tropez", "price": "$8.00", "desc": "" },
            { "name": "Savanna Dry", "price": "$3.00", "desc": "" },
            { "name": "Smirnoff Guarana", "price": "$3.00", "desc": "" },
            { "name": "Flying Fish", "price": "$3.00", "desc": "" }
        ]
    },
    {
        "category": "Greendale Bottles",
        "items": [
            { "name": "Jägermeister", "price": "$35.00", "desc": "" },
            { "name": "Jack Daniels", "price": "$40.00", "desc": "" },
            { "name": "Tequila Silver", "price": "$40.00", "desc": "" },
            { "name": "Gold Reserve", "price": "$65.00", "desc": "" },
            { "name": "Inverroche", "price": "$45.00", "desc": "" },
            { "name": "Johnnie Walker (BL)", "price": "$55.00", "desc": "" },
            { "name": "Jameson Gold Reserve", "price": "$65.00", "desc": "" },
            { "name": "Jameson Irish", "price": "$45.00", "desc": "" },
            { "name": "Glenfiddich 12", "price": "$60.00", "desc": "" },
            { "name": "Johnnie Walker (DBL)", "price": "$65.00", "desc": "" },
            { "name": "Hennessy VS", "price": "$65.00", "desc": "" },
            { "name": "Glenfiddich 15", "price": "$90.00", "desc": "" },
            { "name": "Hennessy VSOP", "price": "$100.00", "desc": "" },
            { "name": "Amarula", "price": "$25.00", "desc": "" },
            { "name": "Ciroc", "price": "$60.00", "desc": "" },
            { "name": "Billiato", "price": "$45.00", "desc": "" },
            { "name": "Bell's", "price": "$35.00", "desc": "" },
            { "name": "Viceroy", "price": "$30.00", "desc": "" },
            { "name": "Robertson Winery", "price": "$15.00", "desc": "" },
            { "name": "Janbraai Wine", "price": "$12.00", "desc": "" },
            { "name": "Johnnie Walker Red Label", "price": "$35.00", "desc": "" },
            { "name": "Johnnie Walker Gold Label", "price": "$120.00", "desc": "" },
            { "name": "Grants", "price": "$30.00", "desc": "" },
            { "name": "4th Street", "price": "$12.00", "desc": "" },
            { "name": "Sambuca", "price": "$30.00", "desc": "" },
            { "name": "Tanqueray", "price": "$35.00", "desc": "" },
            { "name": "Rupert", "price": "$35.00", "desc": "" },
            { "name": "Alvi's Drift", "price": "$12.00", "desc": "" },
            { "name": "Captain Morgan", "price": "$35.00", "desc": "" },
            { "name": "Ballantines Scotch", "price": "$40.00", "desc": "" },
            { "name": "Southern Comfort", "price": "$30.00", "desc": "" },
            { "name": "Smirnoff 1818", "price": "$20.00", "desc": "" },
            { "name": "Zappa Sambuca Green", "price": "$30.00", "desc": "" },
            { "name": "Gordon's", "price": "$30.00", "desc": "" },
            { "name": "Kahlua", "price": "$30.00", "desc": "" },
            { "name": "Ponchos", "price": "$40.00", "desc": "" }
        ]
    },
    {
        "category": "Greendale Beers",
        "items": [
            { "name": "All Local Beers", "price": "$2.00", "desc": "" },
            { "name": "Amstel Lager", "price": "$3.00", "desc": "" },
            { "name": "Budweiser", "price": "$3.00", "desc": "" },
            { "name": "Corona", "price": "$3.00", "desc": "" },
            { "name": "Windhoek", "price": "$3.00", "desc": "" },
            { "name": "Miller", "price": "$3.00", "desc": "" },
            { "name": "Heineken", "price": "$3.00", "desc": "" },
            { "name": "Heineken Silver", "price": "$3.00", "desc": "" },
            { "name": "Stella Artois", "price": "$3.00", "desc": "" },
            { "name": "Castle Lite", "price": "$3.00", "desc": "" }
        ]
    },
    {
        "category": "Greendale Extras",
        "items": [
            { "name": "Shisha", "price": "$10.00", "desc": "From $10 – $30" }
        ]
    }
];
