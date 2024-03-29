const GameCardContainer = document.getElementById("game-container");
const GameGridTemplate = document.getElementById("game-template");
const gameLibrary = JSON.stringify(
    [
        {
          "Name": "Fortune-499",
          "Sources": "Humble"
        },
        {
          "Name": "Limbus Company",
          "Sources": "Steam"
        },
        {
          "Name": "Barony (Beta)",
          "Sources": "Epic"
        },
        {
          "Name": "Jotun: Valhalla Edition",
          "Sources": "Steam"
        },
        {
          "Name": "3 Count Bout",
          "Sources": "Amazon"
        },
        {
          "Name": "Dark Train",
          "Sources": "itch.io"
        },
        {
          "Name": "Alba - A Wildlife Adventure",
          "Sources": "Epic"
        },
        {
          "Name": "Shadowrun: Dragonfall - Director’s Cut",
          "Sources": "Epic"
        },
        {
          "Name": "Glory of war",
          "Sources": "Steam"
        },
        {
          "Name": "Sniper Elite 3",
          "Sources": "Steam"
        },
        {
          "Name": "Swag and Sorcery",
          "Sources": "Steam"
        },
        {
          "Name": "Batman: The Telltale Series",
          "Sources": "Amazon"
        },
        {
          "Name": "Rogue Mansion",
          "Sources": "Humble"
        },
        {
          "Name": "The Princess of the Tower Wants a Hero",
          "Sources": "Steam"
        },
        {
          "Name": "KEO",
          "Sources": "Steam"
        },
        {
          "Name": "Jurassic World Evolution",
          "Sources": "Steam"
        },
        {
          "Name": "Roombo: First Blood",
          "Sources": "Humble"
        },
        {
          "Name": "Games of Glory",
          "Sources": "Steam"
        },
        {
          "Name": "LEGO The Hobbit",
          "Sources": "Steam"
        },
        {
          "Name": "Ape Out",
          "Sources": "Epic"
        },
        {
          "Name": "Offworld Trading Company",
          "Sources": "Epic"
        },
        {
          "Name": "DIRT 5",
          "Sources": "Steam"
        },
        {
          "Name": "Hero's Land",
          "Sources": "Steam"
        },
        {
          "Name": "One Way Heroics",
          "Sources": "Steam"
        },
        {
          "Name": "BioShock 2 Remastered",
          "Sources": "Steam"
        },
        {
          "Name": "Adios",
          "Sources": "Amazon"
        },
        {
          "Name": "Isyium",
          "Sources": "Steam"
        },
        {
          "Name": "Red Orchestra 2: Heroes of Stalingrad - Single Player",
          "Sources": "Steam"
        },
        {
          "Name": "The Almost Gone",
          "Sources": "Amazon"
        },
        {
          "Name": "Warhammer: Chaos & Conquest",
          "Sources": "Steam"
        },
        {
          "Name": "Hitman: Blood Money",
          "Sources": "Steam"
        },
        {
          "Name": "Witchcraft Candy Hunt",
          "Sources": "Steam"
        },
        {
          "Name": "Jawns",
          "Sources": "Humble"
        },
        {
          "Name": "Joker Show - Horror Escape",
          "Sources": "Steam"
        },
        {
          "Name": "Dungeonland",
          "Sources": "Steam"
        },
        {
          "Name": "Mad Tracks",
          "Sources": "Amazon"
        },
        {
          "Name": "Assassin's Creed Unity",
          "Sources": "Ubisoft Connect"
        },
        {
          "Name": "Halo Infinite",
          "Sources": "Steam"
        },
        {
          "Name": "Train Station Renovation",
          "Sources": "Steam"
        },
        {
          "Name": "The Adventure Pals",
          "Sources": "Steam"
        },
        {
          "Name": "Woodle Tree Adventures",
          "Sources": "Steam"
        },
        {
          "Name": "EMERGENCY",
          "Sources": "Steam"
        },
        {
          "Name": "Pixel Art Coloring Book",
          "Sources": "Steam"
        },
        {
          "Name": "Post-Apo Builder: Prologue",
          "Sources": "Steam"
        },
        {
          "Name": "Lyric Sonata",
          "Sources": "Humble"
        },
        {
          "Name": "The King of Fighters 2000",
          "Sources": "Amazon"
        },
        {
          "Name": "In Other Waters",
          "Sources": "Amazon"
        },
        {
          "Name": "Ghost of a Tale",
          "Sources": "GOG"
        },
        {
          "Name": "Warhammer: End Times - Vermintide",
          "Sources": "Steam"
        },
        {
          "Name": "双生幻想",
          "Sources": "Steam"
        },
        {
          "Name": "Idle Champions of the Forgotten Realms",
          "Sources": "Steam"
        },
        {
          "Name": "DiRT Showdown",
          "Sources": "Steam"
        },
        {
          "Name": "Sigma Theory: Global Cold War",
          "Sources": "Amazon"
        },
        {
          "Name": "LOVE",
          "Sources": "Steam"
        },
        {
          "Name": "Woten",
          "Sources": "Humble"
        },
        {
          "Name": "Secret Files: Tunguska",
          "Sources": "Amazon"
        },
        {
          "Name": "Divinity: Dragon Commander",
          "Sources": "Steam"
        },
        {
          "Name": "Cloud Jumpers",
          "Sources": "itch.io"
        },
        {
          "Name": "Gore Prologue",
          "Sources": "Steam"
        },
        {
          "Name": "Sigma Theory: Global Cold War",
          "Sources": "GOG"
        },
        {
          "Name": "Quiplash",
          "Sources": "Steam"
        },
        {
          "Name": "SeaOrama: World of Shipping",
          "Sources": "Amazon"
        },
        {
          "Name": "Interstellaria",
          "Sources": "Indiegala"
        },
        {
          "Name": "The Wanderer: Frankenstein's Creature",
          "Sources": "Amazon"
        },
        {
          "Name": "Alien Breed 2: Assault",
          "Sources": "GOG"
        },
        {
          "Name": "Easy Cat Timer",
          "Sources": "Steam"
        },
        {
          "Name": "Booth",
          "Sources": "Humble"
        },
        {
          "Name": "The Adventure Pals",
          "Sources": "Amazon"
        },
        {
          "Name": "SteamWorld Dig",
          "Sources": "EA app"
        },
        {
          "Name": "Project Hastur",
          "Sources": "Steam"
        },
        {
          "Name": "Frozen Cortex",
          "Sources": "Amazon"
        },
        {
          "Name": "Drifter's Tales",
          "Sources": "Steam"
        },
        {
          "Name": "System Shock 2",
          "Sources": "Amazon"
        },
        {
          "Name": "Through The Darkest of Times",
          "Sources": "Steam"
        },
        {
          "Name": "Porcelain Tales",
          "Sources": "Steam"
        },
        {
          "Name": "Scrap Garden",
          "Sources": "Steam"
        },
        {
          "Name": "Into The Breach",
          "Sources": "Epic"
        },
        {
          "Name": "R.I.C.A",
          "Sources": "Steam"
        },
        {
          "Name": "SUPER BOT",
          "Sources": "itch.io"
        },
        {
          "Name": "Darkwood",
          "Sources": "Epic"
        },
        {
          "Name": "Kind Words",
          "Sources": "Humble"
        },
        {
          "Name": "Hacknet",
          "Sources": "Steam"
        },
        {
          "Name": "Stranger Things 3: The Game",
          "Sources": "Epic"
        },
        {
          "Name": "Assassin's Creed Revelations",
          "Sources": "Steam"
        },
        {
          "Name": "Company of Heroes: Opposing Fronts",
          "Sources": "Steam"
        },
        {
          "Name": "Loren The Amazon Princess",
          "Sources": "Steam"
        },
        {
          "Name": "Gunspell 2",
          "Sources": "Steam"
        },
        {
          "Name": "Doors: Paradox",
          "Sources": "Amazon"
        },
        {
          "Name": "DON'T GIVE UP",
          "Sources": "Humble"
        },
        {
          "Name": "Prince of Persia: The Sands of Time",
          "Sources": "Ubisoft Connect"
        },
        {
          "Name": "Calico",
          "Sources": "Amazon"
        },
        {
          "Name": "Apex Legends",
          "Sources": "EA app"
        },
        {
          "Name": "Banana Shooter",
          "Sources": "Steam"
        },
        {
          "Name": "Super Steampunk Pinball 2D",
          "Sources": "Steam"
        },
        {
          "Name": "Bezier",
          "Sources": "Steam"
        },
        {
          "Name": "Ozymandias",
          "Sources": "Steam"
        },
        {
          "Name": "Zup! 8",
          "Sources": "Steam"
        },
        {
          "Name": "Jerma's Big Adventure",
          "Sources": "Steam"
        },
        {
          "Name": "Packs - Ultimate Pack - Amazon Drop 5",
          "Sources": "GOG"
        },
        {
          "Name": "Game of Thrones Winter is Coming",
          "Sources": "Steam"
        },
        {
          "Name": "Star Wars: The Force Unleashed II",
          "Sources": "Amazon"
        },
        {
          "Name": "Throne of Lies: Medieval Politics",
          "Sources": "Steam"
        },
        {
          "Name": "GoBangTetris",
          "Sources": "Steam"
        },
        {
          "Name": "Friends vs Friends",
          "Sources": "Steam"
        },
        {
          "Name": "Midnight Protocol",
          "Sources": "Steam"
        },
        {
          "Name": "West of Dead",
          "Sources": "Steam"
        },
        {
          "Name": "DARK SOULS III",
          "Sources": "Steam"
        },
        {
          "Name": "BIOMUTANT",
          "Sources": "Steam"
        },
        {
          "Name": "Oh Darling! I Hate To Tell You This...",
          "Sources": "Steam"
        },
        {
          "Name": "Nox",
          "Sources": "EA app"
        },
        {
          "Name": "Avernum 3: Ruined World",
          "Sources": "Steam"
        },
        {
          "Name": "Joggernauts",
          "Sources": "Amazon"
        },
        {
          "Name": "Holidays in Khrushchevsk",
          "Sources": "itch.io"
        },
        {
          "Name": "after HOURS",
          "Sources": "Humble"
        },
        {
          "Name": "Where Jellyfish 水母在哪里",
          "Sources": "Steam"
        },
        {
          "Name": "Macdows 95",
          "Sources": "Humble"
        },
        {
          "Name": "Caster",
          "Sources": "Steam"
        },
        {
          "Name": "Defend The Highlands",
          "Sources": "Steam"
        },
        {
          "Name": "Darksburg",
          "Sources": "Steam"
        },
        {
          "Name": "Wildfire",
          "Sources": "Steam"
        },
        {
          "Name": "1979 Revolution:Black Friday",
          "Sources": "Amazon"
        },
        {
          "Name": "Half-Life 2: Episode Two",
          "Sources": "Steam"
        },
        {
          "Name": "Suzerain",
          "Sources": "Amazon"
        },
        {
          "Name": "Idle Baker Boss",
          "Sources": "Steam"
        },
        {
          "Name": "Morphblade",
          "Sources": "Steam"
        },
        {
          "Name": "Grotto",
          "Sources": "Humble"
        },
        {
          "Name": "Batman Arkham City - Game of the Year Edition",
          "Sources": "Epic"
        },
        {
          "Name": "Who Pressed Mute on Uncle Marcus?",
          "Sources": "Steam"
        },
        {
          "Name": "Rise for the Fight",
          "Sources": "Steam"
        },
        {
          "Name": "12 is Better Than 6",
          "Sources": "Steam"
        },
        {
          "Name": "Antbassador",
          "Sources": "Steam"
        },
        {
          "Name": "Motorcycle Mechanic Simulator 2021: Prologue",
          "Sources": "Steam"
        },
        {
          "Name": "Over Top",
          "Sources": "Amazon"
        },
        {
          "Name": "Need for Speed Heat",
          "Sources": "EA app"
        },
        {
          "Name": "Evan's Remains",
          "Sources": "Steam"
        },
        {
          "Name": "F.E.A.R.: Extraction Point",
          "Sources": "Steam"
        },
        {
          "Name": "I Am Fish",
          "Sources": "Steam"
        },
        {
          "Name": "Blade Assault",
          "Sources": "Amazon"
        },
        {
          "Name": "趣拼拼：肖像画 Pleasure Puzzle:Portrait",
          "Sources": "Steam"
        },
        {
          "Name": "Tiamat",
          "Sources": "itch.io"
        },
        {
          "Name": "MASKA",
          "Sources": "Steam"
        },
        {
          "Name": "SpaceDRG",
          "Sources": "Steam"
        },
        {
          "Name": "仙侠世界2",
          "Sources": "Steam"
        },
        {
          "Name": "20 Minute Metropolis",
          "Sources": "Humble"
        },
        {
          "Name": "Wasteland 3",
          "Sources": "Steam"
        },
        {
          "Name": "Desert Child",
          "Sources": "Amazon"
        },
        {
          "Name": "CRACKHEAD",
          "Sources": "Steam"
        },
        {
          "Name": "Born to Rise",
          "Sources": "Steam"
        },
        {
          "Name": "Pid",
          "Sources": "Steam"
        },
        {
          "Name": "Team Racing League",
          "Sources": "Steam"
        },
        {
          "Name": "Slime Rancher",
          "Sources": "Steam"
        },
        {
          "Name": "Aaero",
          "Sources": "Steam"
        },
        {
          "Name": "Nebuchadnezzar",
          "Sources": "Steam"
        },
        {
          "Name": "McSpace Colosseum",
          "Sources": "Steam"
        },
        {
          "Name": "Ctrl CV",
          "Sources": "Steam"
        },
        {
          "Name": "Last Day of June",
          "Sources": "Steam"
        },
        {
          "Name": "DmC Devil May Cry",
          "Sources": "Steam"
        },
        {
          "Name": "SCP: Containment Breach Remastered",
          "Sources": "Steam"
        },
        {
          "Name": "Planets Under Attack",
          "Sources": "Steam"
        },
        {
          "Name": "SEARCH ALL - UFO",
          "Sources": "Steam"
        },
        {
          "Name": "迷之战果",
          "Sources": "Steam"
        },
        {
          "Name": "Vanguard Princess",
          "Sources": "Steam"
        },
        {
          "Name": "Street Fighter V",
          "Sources": "Steam"
        },
        {
          "Name": "Automachef",
          "Sources": "Steam"
        },
        {
          "Name": "Tavern Crawl",
          "Sources": "Steam"
        },
        {
          "Name": "My Faithful and Loyal Wife Would Never Cheat on Me",
          "Sources": "Steam"
        },
        {
          "Name": "Graveyard Keeper",
          "Sources": "Steam"
        },
        {
          "Name": "SURSHO",
          "Sources": "itch.io"
        },
        {
          "Name": "Go For a Walk",
          "Sources": "Steam"
        },
        {
          "Name": "Gurgamoth",
          "Sources": "Steam"
        },
        {
          "Name": "Heli Heroes",
          "Sources": "Steam"
        },
        {
          "Name": "WRATH: Aeon of Ruin",
          "Sources": "Steam"
        },
        {
          "Name": "Subterrain",
          "Sources": "Steam"
        },
        {
          "Name": "The Life and Suffering of Sir Brante - Chapter 1 & 2",
          "Sources": "GOG"
        },
        {
          "Name": "Recompile",
          "Sources": "Amazon"
        },
        {
          "Name": "Bounty City",
          "Sources": "Steam"
        },
        {
          "Name": "Towers Together",
          "Sources": "Steam"
        },
        {
          "Name": "Commandos 3: Destination Berlin",
          "Sources": "Steam"
        },
        {
          "Name": "ABZU",
          "Sources": "Epic"
        },
        {
          "Name": "Pikuniku",
          "Sources": "Amazon"
        },
        {
          "Name": "Tacoma",
          "Sources": "Steam"
        },
        {
          "Name": "Oak Hill",
          "Sources": "itch.io"
        },
        {
          "Name": "Grey Instinct",
          "Sources": "Steam"
        },
        {
          "Name": "Calico",
          "Sources": "Steam"
        },
        {
          "Name": "SYNTHETIK",
          "Sources": "Steam"
        },
        {
          "Name": "A Game Of Thrones: The Board Game Digital Edition",
          "Sources": "Epic"
        },
        {
          "Name": "Dishonored",
          "Sources": "Steam"
        },
        {
          "Name": "Guild of Dungeoneering",
          "Sources": "Amazon"
        },
        {
          "Name": "SUPERHOT: MIND CONTROL DELETE",
          "Sources": "Steam"
        },
        {
          "Name": "Quiet is the Eyes",
          "Sources": "Steam"
        },
        {
          "Name": "Creo God Simulator",
          "Sources": "Steam"
        },
        {
          "Name": "Hotel Remorse",
          "Sources": "Steam"
        },
        {
          "Name": ">observer_",
          "Sources": "Epic"
        },
        {
          "Name": "Siphonopolis",
          "Sources": "itch.io"
        },
        {
          "Name": "Alcarys Complex",
          "Sources": "itch.io"
        },
        {
          "Name": "Dino D-Day",
          "Sources": "Steam"
        },
        {
          "Name": "Arkheim - Realms at War",
          "Sources": "Steam"
        },
        {
          "Name": "Zup! S",
          "Sources": "Steam"
        },
        {
          "Name": "Legion TD 2",
          "Sources": "Steam"
        },
        {
          "Name": "ELDERBORN",
          "Sources": "Steam"
        },
        {
          "Name": "Caveblazers",
          "Sources": "GOG"
        },
        {
          "Name": "Escape from Monkey Island",
          "Sources": "Amazon"
        },
        {
          "Name": "Way of the Passive Fist (Sneak Peek)",
          "Sources": "Humble"
        },
        {
          "Name": "Fortnite",
          "Sources": "Epic"
        },
        {
          "Name": "Moonlighter",
          "Sources": "Steam"
        },
        {
          "Name": "Half-Life 2: Deathmatch",
          "Sources": "Steam"
        },
        {
          "Name": "Contagion",
          "Sources": "Steam"
        },
        {
          "Name": "Shotgun Witch",
          "Sources": "Steam"
        },
        {
          "Name": "Layers of Fear",
          "Sources": "Amazon"
        },
        {
          "Name": "Overcast - Walden and the Werewolf",
          "Sources": "Steam"
        },
        {
          "Name": "Space Routine",
          "Sources": "Humble"
        },
        {
          "Name": "F1 2015",
          "Sources": "Steam"
        },
        {
          "Name": "Red Solstice 2: Survivors",
          "Sources": "Steam"
        },
        {
          "Name": "The Coma 2: Vicious Sisters",
          "Sources": "Steam"
        },
        {
          "Name": "Rise of Industry",
          "Sources": "Steam"
        },
        {
          "Name": "Warhammer 40,000: Mechanicus - Standard Edition",
          "Sources": "Epic"
        },
        {
          "Name": "Dead Island Definitive Edition",
          "Sources": "Steam"
        },
        {
          "Name": "Dying Light Enhanced Edition",
          "Sources": "Epic"
        },
        {
          "Name": "Divinoids",
          "Sources": "Humble"
        },
        {
          "Name": "SteamWorld Dig 2",
          "Sources": "GOG"
        },
        {
          "Name": "Gothic Playable Teaser",
          "Sources": "Steam"
        },
        {
          "Name": "Paranoia Party",
          "Sources": "Steam"
        },
        {
          "Name": "Metro 2033",
          "Sources": "Steam"
        },
        {
          "Name": "BIT.TRIP RUNNER",
          "Sources": "Steam"
        },
        {
          "Name": "Turok 2",
          "Sources": "Amazon"
        },
        {
          "Name": "SimRail - The Railway Simulator: Prologue",
          "Sources": "Steam"
        },
        {
          "Name": "Few Nights More: Genesis",
          "Sources": "Steam"
        },
        {
          "Name": "Kingdom: New Lands",
          "Sources": "Amazon"
        },
        {
          "Name": "Serious Sam Classics: Revolution",
          "Sources": "Steam"
        },
        {
          "Name": "GUILTY GEAR Xrd -SIGN-",
          "Sources": "Steam"
        },
        {
          "Name": "Car Mechanic Simulator 2018",
          "Sources": "Epic"
        },
        {
          "Name": "Forgotten Hill The Third Axis",
          "Sources": "Steam"
        },
        {
          "Name": "The Walking Dead",
          "Sources": "Amazon"
        },
        {
          "Name": "Warhammer 40,000: Dawn of War III",
          "Sources": "Steam"
        },
        {
          "Name": "Bakso Simulator",
          "Sources": "Steam"
        },
        {
          "Name": "The Long Dark",
          "Sources": "Steam"
        },
        {
          "Name": "Conquest of Empires 2",
          "Sources": "Steam"
        },
        {
          "Name": "FortressCraft Evolved",
          "Sources": "Steam"
        },
        {
          "Name": "GRIP: Combat Racing",
          "Sources": "Steam"
        },
        {
          "Name": "Through Abandoned: The Forest",
          "Sources": "Steam"
        },
        {
          "Name": "Showtime!",
          "Sources": "Steam"
        },
        {
          "Name": "Prey",
          "Sources": "GOG"
        },
        {
          "Name": "PLAY'A VR Video Player",
          "Sources": "Steam"
        },
        {
          "Name": "Planet Coaster",
          "Sources": "Steam"
        },
        {
          "Name": "XYX Games Trilogy Pack",
          "Sources": "itch.io"
        },
        {
          "Name": "Kabounce",
          "Sources": "Amazon"
        },
        {
          "Name": "Vertical Drop Heroes HD",
          "Sources": "Steam"
        },
        {
          "Name": "Citywars Tower Defense",
          "Sources": "Steam"
        },
        {
          "Name": "A Story About My Uncle",
          "Sources": "Steam"
        },
        {
          "Name": "VPet-Simulator",
          "Sources": "Steam"
        },
        {
          "Name": "Heaven Forest NIGHTS",
          "Sources": "Steam"
        },
        {
          "Name": "Overload",
          "Sources": "Steam"
        },
        {
          "Name": "Rebound Dodgeball Evolved",
          "Sources": "Steam"
        },
        {
          "Name": "Caramba",
          "Sources": "Steam"
        },
        {
          "Name": "Darksiders Genesis",
          "Sources": "Steam"
        },
        {
          "Name": "Pathless Woods: Prologue",
          "Sources": "Steam"
        },
        {
          "Name": "PC Building Simulator",
          "Sources": "Epic"
        },
        {
          "Name": "Shadow Tactics Blades of the Shogun",
          "Sources": "Epic"
        },
        {
          "Name": "Borderlands 2",
          "Sources": "Steam"
        },
        {
          "Name": "NEOVERSE",
          "Sources": "Steam"
        },
        {
          "Name": "Come Home",
          "Sources": "Steam"
        },
        {
          "Name": "theHunter: Call of the Wild",
          "Sources": "Epic"
        },
        {
          "Name": "Heroes of the Storm",
          "Sources": "Battle.net"
        },
        {
          "Name": "GRIME",
          "Sources": "Epic"
        },
        {
          "Name": "The Mildew Children: Chapter 1",
          "Sources": "Steam"
        },
        {
          "Name": "Anna's Quest",
          "Sources": "Amazon"
        },
        {
          "Name": "Garou",
          "Sources": "Amazon"
        },
        {
          "Name": "Stygian: Reign of the Old Ones",
          "Sources": "Steam"
        },
        {
          "Name": "Ziggurat",
          "Sources": "GOG"
        },
        {
          "Name": "Barotrauma",
          "Sources": "Steam"
        },
        {
          "Name": "Invisible, Inc.",
          "Sources": "Steam"
        },
        {
          "Name": "Endzone - A World Apart",
          "Sources": "Steam"
        },
        {
          "Name": "Buried Shards",
          "Sources": "Steam"
        },
        {
          "Name": "Outlast: Whistleblower",
          "Sources": "Humble"
        },
        {
          "Name": "TSIOQUE",
          "Sources": "Steam"
        },
        {
          "Name": "Red Tie Runner",
          "Sources": "Steam"
        },
        {
          "Name": "King of the Monsters 2",
          "Sources": "Amazon"
        },
        {
          "Name": "The King of Fighters '97 Global Match",
          "Sources": "Amazon"
        },
        {
          "Name": "The Lab",
          "Sources": "Steam"
        },
        {
          "Name": "Darksiders Warmastered Edition",
          "Sources": "Epic"
        },
        {
          "Name": "Tomb Raider I",
          "Sources": "Steam"
        },
        {
          "Name": "BioShock",
          "Sources": "Steam"
        },
        {
          "Name": "Academy Carols",
          "Sources": "Steam"
        },
        {
          "Name": "Mindball Play",
          "Sources": "Steam"
        },
        {
          "Name": "Half-Life: Absolute Zero",
          "Sources": "Steam"
        },
        {
          "Name": "FRAMED Collection",
          "Sources": "Amazon"
        },
        {
          "Name": "Stealth Inc 2: A Game of Clones",
          "Sources": "Amazon"
        },
        {
          "Name": "The Sims 4",
          "Sources": "Steam"
        },
        {
          "Name": "Resonance of the Ocean",
          "Sources": "Steam"
        },
        {
          "Name": "BattleBlock Theater",
          "Sources": "Steam"
        },
        {
          "Name": "Borderlands 3",
          "Sources": "Steam"
        },
        {
          "Name": "Metal Slug 3",
          "Sources": "Amazon"
        },
        {
          "Name": "Godmode Epochs",
          "Sources": "Steam"
        },
        {
          "Name": "Konung 3: Ties of the Dynasty",
          "Sources": "Steam"
        },
        {
          "Name": "ヘブンバーンズレッド",
          "Sources": "Steam"
        },
        {
          "Name": "Eschalon: Book I",
          "Sources": "GOG"
        },
        {
          "Name": "Dandara: Trials of Fear Edition",
          "Sources": "Steam"
        },
        {
          "Name": "SHENZHEN I/O",
          "Sources": "Steam"
        },
        {
          "Name": "Survive 10 Minutes Please",
          "Sources": "Steam"
        },
        {
          "Name": "Heavenly Peaks Cultivation",
          "Sources": "Steam"
        },
        {
          "Name": "Guns of Icarus Online",
          "Sources": "Steam"
        },
        {
          "Name": "SCP: Bloodwater",
          "Sources": "Steam"
        },
        {
          "Name": "The Ship",
          "Sources": "Steam"
        },
        {
          "Name": "THE CORRIDOR",
          "Sources": "Humble"
        },
        {
          "Name": "Metal: Hellsinger",
          "Sources": "Steam"
        },
        {
          "Name": "EVE Online",
          "Sources": "Epic"
        },
        {
          "Name": "Beat Cop",
          "Sources": "GOG"
        },
        {
          "Name": "Twinkle Star Sprites",
          "Sources": "Amazon"
        },
        {
          "Name": "HIVESWAP: ACT 1",
          "Sources": "Steam"
        },
        {
          "Name": "Rogue Mansion",
          "Sources": "Humble"
        },
        {
          "Name": "Cook, Serve, Delicious! 3?!",
          "Sources": "Steam"
        },
        {
          "Name": "Recipe for Disaster",
          "Sources": "Epic"
        },
        {
          "Name": "Andalia",
          "Sources": "Steam"
        },
        {
          "Name": "Miners Settlement",
          "Sources": "Steam"
        },
        {
          "Name": ">observer_",
          "Sources": "Amazon"
        },
        {
          "Name": "Divine Knockout (DKO)",
          "Sources": "Steam"
        },
        {
          "Name": "Adios",
          "Sources": "Epic"
        },
        {
          "Name": "Eliza",
          "Sources": "Steam"
        },
        {
          "Name": "Astrologaster",
          "Sources": "Amazon"
        },
        {
          "Name": "Tap Ninja",
          "Sources": "Steam"
        },
        {
          "Name": "Fallout Tactics: Brotherhood of Steel",
          "Sources": "Epic"
        },
        {
          "Name": "Predecessor",
          "Sources": "Epic"
        },
        {
          "Name": "Alan Wake's American Nightmare",
          "Sources": "Steam"
        },
        {
          "Name": "Fantasy Royal VR",
          "Sources": "Steam"
        },
        {
          "Name": "Three Skies",
          "Sources": "Steam"
        },
        {
          "Name": "Ninja Commando",
          "Sources": "Amazon"
        },
        {
          "Name": "Atomicrops",
          "Sources": "Steam"
        },
        {
          "Name": "Strike Squadron: Caracará",
          "Sources": "Steam"
        },
        {
          "Name": "Cat Fred Evil Pet",
          "Sources": "Steam"
        },
        {
          "Name": "Staxel",
          "Sources": "Steam"
        },
        {
          "Name": "Planescape Torment: Enhanced Edition",
          "Sources": "Amazon"
        },
        {
          "Name": "There's Poop In My Soup",
          "Sources": "Steam"
        },
        {
          "Name": "The Super Spy",
          "Sources": "Amazon"
        },
        {
          "Name": "Dink Smallwood HD",
          "Sources": "GOG"
        },
        {
          "Name": "Velvet Assassin",
          "Sources": "Steam"
        },
        {
          "Name": "100% Orange Juice",
          "Sources": "Steam"
        },
        {
          "Name": "METAL GEAR SOLID V: THE PHANTOM PAIN",
          "Sources": "Steam"
        },
        {
          "Name": "Call of Duty: Black Ops 4",
          "Sources": "Battle.net"
        },
        {
          "Name": "Pyroworks",
          "Sources": "Steam"
        },
        {
          "Name": "Tukoni",
          "Sources": "Steam"
        },
        {
          "Name": "Advent Rising",
          "Sources": "Steam"
        },
        {
          "Name": "Europa Universalis: Rome Gold",
          "Sources": "GOG"
        },
        {
          "Name": "Shadow Tactics: Blades of the Shogun",
          "Sources": "Epic"
        },
        {
          "Name": "Atlantica Global",
          "Sources": "Steam"
        },
        {
          "Name": "Control Craft 3",
          "Sources": "Indiegala"
        },
        {
          "Name": "Tales of Monkey Island: Chapter 1 - Launch of the Screaming Narwhal",
          "Sources": "Steam"
        },
        {
          "Name": "FreeStyle 2: Street Basketball",
          "Sources": "Steam"
        },
        {
          "Name": "Choplifter HD",
          "Sources": "Steam"
        },
        {
          "Name": "Syzygy",
          "Sources": "Humble"
        },
        {
          "Name": "Maneater",
          "Sources": "Steam"
        },
        {
          "Name": "Overcooked!",
          "Sources": "Amazon"
        },
        {
          "Name": "Unrailed",
          "Sources": "Epic"
        },
        {
          "Name": "Мафия Онлайн",
          "Sources": "Steam"
        },
        {
          "Name": "Candle",
          "Sources": "Amazon"
        },
        {
          "Name": "Call of Duty: WWII - Multiplayer",
          "Sources": "Steam"
        },
        {
          "Name": "A Game with a Kitty 1 & 2",
          "Sources": "Steam"
        },
        {
          "Name": "King of Seas",
          "Sources": "GOG"
        },
        {
          "Name": "Multiwinia",
          "Sources": "Steam"
        },
        {
          "Name": "SteamWorld Dig 2",
          "Sources": "Steam"
        },
        {
          "Name": "Mini Ninjas",
          "Sources": "Steam"
        },
        {
          "Name": "Entropy : Zero 2",
          "Sources": "Steam"
        },
        {
          "Name": "Alien Breed: Impact",
          "Sources": "GOG"
        },
        {
          "Name": "Operation Flashpoint: Red River",
          "Sources": "Steam"
        },
        {
          "Name": "KILL CRAB",
          "Sources": "Steam"
        },
        {
          "Name": "Granado Espada",
          "Sources": "Steam"
        },
        {
          "Name": "Ninja Senki DX",
          "Sources": "Steam"
        },
        {
          "Name": "Little Shrimp：Legend Reborn",
          "Sources": "Steam"
        },
        {
          "Name": "Inops",
          "Sources": "Steam"
        },
        {
          "Name": "Go Kart Run!",
          "Sources": "Steam"
        },
        {
          "Name": "Zup! 6",
          "Sources": "Steam"
        },
        {
          "Name": "The House",
          "Sources": "Steam"
        },
        {
          "Name": "Age of Wonders: Planetfall",
          "Sources": "Steam"
        },
        {
          "Name": "The Seeker",
          "Sources": "Indiegala"
        },
        {
          "Name": "Grime",
          "Sources": "Amazon"
        },
        {
          "Name": "Dwerve: Prologue",
          "Sources": "Steam"
        },
        {
          "Name": "Spellcaster University",
          "Sources": "Steam"
        },
        {
          "Name": "Divine Divinity",
          "Sources": "Steam"
        },
        {
          "Name": "Splotches",
          "Sources": "Steam"
        },
        {
          "Name": "Popup Dungeon Sneak Peek",
          "Sources": "Humble"
        },
        {
          "Name": "Luna Online: Reborn",
          "Sources": "Steam"
        },
        {
          "Name": "Ruin Raiders - Unknown Menace",
          "Sources": "Humble"
        },
        {
          "Name": "Portal Knights",
          "Sources": "Steam"
        },
        {
          "Name": "Bear With Me",
          "Sources": "Steam"
        },
        {
          "Name": "Metal Slug 4",
          "Sources": "Amazon"
        },
        {
          "Name": "The Elder Scrolls Online",
          "Sources": "Steam"
        },
        {
          "Name": "Star Wars: The Force Unleashed",
          "Sources": "Amazon"
        },
        {
          "Name": "Dungeons 3",
          "Sources": "Steam"
        },
        {
          "Name": "Forsaken Remastered",
          "Sources": "Amazon"
        },
        {
          "Name": "Guilt Free",
          "Sources": "Steam"
        },
        {
          "Name": "Swallow the Sea",
          "Sources": "Steam"
        },
        {
          "Name": "Akka Arrh",
          "Sources": "Amazon"
        },
        {
          "Name": "火焰征程",
          "Sources": "Steam"
        },
        {
          "Name": "Grand Theft Auto V",
          "Sources": "Epic"
        },
        {
          "Name": "Death penalty: Beginning",
          "Sources": "Steam"
        },
        {
          "Name": "Tales From Off-Peak City Vol. 1",
          "Sources": "Humble"
        },
        {
          "Name": "Bullet Runner: The First Slaughter",
          "Sources": "GOG"
        },
        {
          "Name": "Stubbs the Zombie in Rebel Without a Pulse",
          "Sources": "Epic"
        },
        {
          "Name": "Unreal Strike",
          "Sources": "Steam"
        },
        {
          "Name": "Infinite Borders",
          "Sources": "Steam"
        },
        {
          "Name": "Whispers of a Machine",
          "Sources": "Steam"
        },
        {
          "Name": "Nomad",
          "Sources": "Steam"
        },
        {
          "Name": "Streamline",
          "Sources": "Amazon"
        },
        {
          "Name": "星辰变online",
          "Sources": "Steam"
        },
        {
          "Name": "NARUTO TO BORUTO: SHINOBI STRIKER",
          "Sources": "Steam"
        },
        {
          "Name": "Tropico 5",
          "Sources": "Epic"
        },
        {
          "Name": "The Surge",
          "Sources": "Steam"
        },
        {
          "Name": "Loom",
          "Sources": "Amazon"
        },
        {
          "Name": "Portal 2",
          "Sources": "Steam"
        },
        {
          "Name": "Zup!",
          "Sources": "Steam"
        },
        {
          "Name": "Mirage",
          "Sources": "Steam"
        },
        {
          "Name": "Blair Witch",
          "Sources": "Epic"
        },
        {
          "Name": "HAWKED",
          "Sources": "Steam"
        },
        {
          "Name": "Iron Sky Invasion",
          "Sources": "Steam"
        },
        {
          "Name": "Alien Swarm: Reactive Drop",
          "Sources": "Steam"
        },
        {
          "Name": "Freshman Year",
          "Sources": "Steam"
        },
        {
          "Name": "Might & Magic - Chess Royale",
          "Sources": "Ubisoft Connect"
        },
        {
          "Name": "Heeey! Park-Boy",
          "Sources": "Humble"
        },
        {
          "Name": "Pool Panic",
          "Sources": "Steam"
        },
        {
          "Name": "SkyScrappers",
          "Sources": "Steam"
        },
        {
          "Name": "Fistful of Nothing",
          "Sources": "Humble"
        },
        {
          "Name": "Gyossait Deluxe Edition",
          "Sources": "itch.io"
        },
        {
          "Name": "Hard Place",
          "Sources": "Indiegala"
        },
        {
          "Name": "Slipstream",
          "Sources": "Steam"
        },
        {
          "Name": "Sanctum",
          "Sources": "Steam"
        },
        {
          "Name": "Chivalry: Medieval Warfare",
          "Sources": "Steam"
        },
        {
          "Name": "Fahrenheit: Indigo Prophecy Remastered",
          "Sources": "Amazon"
        },
        {
          "Name": "Viking's drakkars",
          "Sources": "Steam"
        },
        {
          "Name": "Escape from Deathmark Dungeon",
          "Sources": "Steam"
        },
        {
          "Name": "War Rock",
          "Sources": "Steam"
        },
        {
          "Name": "Prodeus",
          "Sources": "Steam"
        },
        {
          "Name": "Intelligent Design: An Evolutionary Sandbox",
          "Sources": "Steam"
        },
        {
          "Name": "Killer is Dead",
          "Sources": "Steam"
        },
        {
          "Name": "Battle Teams 2 Playtest",
          "Sources": "Steam"
        },
        {
          "Name": "Batman: Arkham Origins Blackgate - Deluxe Edition",
          "Sources": "Steam"
        },
        {
          "Name": "Majesty 2 Collection",
          "Sources": "Steam"
        },
        {
          "Name": "OnCall",
          "Sources": "Steam"
        },
        {
          "Name": "Europa Universalis IV",
          "Sources": "Steam"
        },
        {
          "Name": "The Momo Game",
          "Sources": "Steam"
        },
        {
          "Name": "ToeJam & Earl: Back in the Groove!",
          "Sources": "Amazon"
        },
        {
          "Name": "Half-Life 2: Episode One",
          "Sources": "Steam"
        },
        {
          "Name": "The Corridor",
          "Sources": "Humble"
        },
        {
          "Name": "Void Memory",
          "Sources": "Steam"
        },
        {
          "Name": "Dungeons 2",
          "Sources": "GOG"
        },
        {
          "Name": "Hell Division",
          "Sources": "GOG"
        },
        {
          "Name": "League of Angels: Pact",
          "Sources": "Steam"
        },
        {
          "Name": "Costume Quest 2",
          "Sources": "Epic"
        },
        {
          "Name": "Borderlands 3",
          "Sources": "Epic"
        },
        {
          "Name": "POLYGON",
          "Sources": "Steam"
        },
        {
          "Name": "Lurk in the Dark : Prologue",
          "Sources": "Steam"
        },
        {
          "Name": "Perfect Heist",
          "Sources": "Steam"
        },
        {
          "Name": "International Snooker",
          "Sources": "Steam"
        },
        {
          "Name": "Star Trek Online",
          "Sources": "Epic"
        },
        {
          "Name": "DreamFly",
          "Sources": "Steam"
        },
        {
          "Name": "FOG",
          "Sources": "Steam"
        },
        {
          "Name": "Fluffy Creatures VS The World",
          "Sources": "Steam"
        },
        {
          "Name": "死寂（DeathlyStillness）",
          "Sources": "Steam"
        },
        {
          "Name": "Kona",
          "Sources": "Steam"
        },
        {
          "Name": "Symphonia (Student Project, 2020)",
          "Sources": "GOG"
        },
        {
          "Name": "Pixel Gladiator",
          "Sources": "Steam"
        },
        {
          "Name": "Jet Gunner",
          "Sources": "Steam"
        },
        {
          "Name": "Between the Stars",
          "Sources": "Steam"
        },
        {
          "Name": "Cook, Serve, Delicious! 3?!",
          "Sources": "Amazon"
        },
        {
          "Name": "A Plague Tale: Innocence",
          "Sources": "Steam"
        },
        {
          "Name": "Beer Strip",
          "Sources": "Steam"
        },
        {
          "Name": "Castle Clicker",
          "Sources": "Steam"
        },
        {
          "Name": "Sonic Mania",
          "Sources": "Steam"
        },
        {
          "Name": "Forager",
          "Sources": "Steam"
        },
        {
          "Name": "Chicken Assassin",
          "Sources": "Amazon"
        },
        {
          "Name": "Divinoids",
          "Sources": "Humble"
        },
        {
          "Name": "Maid of Sker",
          "Sources": "Steam"
        },
        {
          "Name": "Poi",
          "Sources": "Amazon"
        },
        {
          "Name": "Influent",
          "Sources": "Steam"
        },
        {
          "Name": "Stubbs the Zombie in Rebel Without a Pulse",
          "Sources": "Steam"
        },
        {
          "Name": "Contract With The Devil",
          "Sources": "Indiegala"
        },
        {
          "Name": "Godfall",
          "Sources": "Epic"
        },
        {
          "Name": "F1 2020",
          "Sources": "Steam"
        },
        {
          "Name": "Aimlabs",
          "Sources": "Steam"
        },
        {
          "Name": "Bionic Dues",
          "Sources": "Steam"
        },
        {
          "Name": "Slime Rancher",
          "Sources": "Epic"
        },
        {
          "Name": "Heart Lake心湖",
          "Sources": "Steam"
        },
        {
          "Name": "Tiny Robots Recharged",
          "Sources": "Amazon"
        },
        {
          "Name": "Serious Sam HD: The First Encounter",
          "Sources": "Steam"
        },
        {
          "Name": "Heave Ho",
          "Sources": "Steam"
        },
        {
          "Name": "Wreck the Fed",
          "Sources": "Steam"
        },
        {
          "Name": "Disco Elysium",
          "Sources": "Steam"
        },
        {
          "Name": "Project Mercury",
          "Sources": "Steam"
        },
        {
          "Name": "Lost Man",
          "Sources": "itch.io"
        },
        {
          "Name": "Ancient Enemy",
          "Sources": "Epic"
        },
        {
          "Name": "Rising Storm 2: Vietnam",
          "Sources": "Steam"
        },
        {
          "Name": "Snakebird Complete",
          "Sources": "Epic"
        },
        {
          "Name": "Game Dev Tycoon",
          "Sources": "Steam"
        },
        {
          "Name": "Zula Global",
          "Sources": "Steam"
        },
        {
          "Name": "Aphotic Descent",
          "Sources": "Steam"
        },
        {
          "Name": "Summertime Madness",
          "Sources": "Humble"
        },
        {
          "Name": "Prison Architect",
          "Sources": "Epic"
        },
        {
          "Name": "Pankapu",
          "Sources": "Amazon"
        },
        {
          "Name": "Kingdom Come: Deliverance",
          "Sources": "Steam"
        },
        {
          "Name": "ONE PIECE PIRATE WARRIORS 3",
          "Sources": "Steam"
        },
        {
          "Name": "Gravewood High",
          "Sources": "Steam"
        },
        {
          "Name": "HunieCam Studio",
          "Sources": "Steam"
        },
        {
          "Name": "Roxy Raccoon's Pinball Panic",
          "Sources": "Steam"
        },
        {
          "Name": "SkyDrift",
          "Sources": "Amazon"
        },
        {
          "Name": "Stick Bros",
          "Sources": "Steam"
        },
        {
          "Name": "Summertime Madness",
          "Sources": "Humble"
        },
        {
          "Name": "Batman: Arkham Asylum GOTY Edition",
          "Sources": "Steam"
        },
        {
          "Name": "Grey Phobia",
          "Sources": "Steam"
        },
        {
          "Name": "Lone King",
          "Sources": "Steam"
        },
        {
          "Name": "Splasher",
          "Sources": "Amazon"
        },
        {
          "Name": "Chroma Squad",
          "Sources": "Amazon"
        },
        {
          "Name": "Back to the Future: Ep 4 - Double Visions",
          "Sources": "Steam"
        },
        {
          "Name": "SimCity 2000 Special Edition",
          "Sources": "EA app"
        },
        {
          "Name": "Painters Guild",
          "Sources": "Steam"
        },
        {
          "Name": "Shotgun King: The Final Checkmate",
          "Sources": "Steam"
        },
        {
          "Name": "A.O.O.F.A.D: All Of Our Friends Are Dead",
          "Sources": "itch.io"
        },
        {
          "Name": "CatNab",
          "Sources": "Steam"
        },
        {
          "Name": "Fantasia Sango Mysteria",
          "Sources": "Steam"
        },
        {
          "Name": "Animation Throwdown: The Quest for Cards",
          "Sources": "Epic"
        },
        {
          "Name": "POSTAL",
          "Sources": "Steam"
        },
        {
          "Name": "Silver Chains",
          "Sources": "Amazon"
        },
        {
          "Name": "IN TRUCK DRIVING",
          "Sources": "Steam"
        },
        {
          "Name": "POSTAL: Classic and Uncut",
          "Sources": "GOG"
        },
        {
          "Name": "Offensive Combat: Redux!",
          "Sources": "Steam"
        },
        {
          "Name": "Filament",
          "Sources": "Epic"
        },
        {
          "Name": "Rise of the Tomb Raider: 20 Year Celebration",
          "Sources": "Epic"
        },
        {
          "Name": "Art of Fighting 2",
          "Sources": "Amazon"
        },
        {
          "Name": "Lara Croft and the Guardian of Light",
          "Sources": "Steam"
        },
        {
          "Name": "Rise of Legions",
          "Sources": "Steam"
        },
        {
          "Name": "Kathy Rain",
          "Sources": "Amazon"
        },
        {
          "Name": "The Wolf Among Us",
          "Sources": "Steam"
        },
        {
          "Name": "Dino Run DX",
          "Sources": "Steam"
        },
        {
          "Name": "RUNNING WITH RIFLES",
          "Sources": "Steam"
        },
        {
          "Name": "Sword Legacy Omen",
          "Sources": "Amazon"
        },
        {
          "Name": "Graveyard Smash",
          "Sources": "Steam"
        },
        {
          "Name": "Metro 2033 Redux",
          "Sources": "Epic"
        },
        {
          "Name": "Okami HD",
          "Sources": "Steam"
        },
        {
          "Name": "Space Rescue",
          "Sources": "Steam"
        },
        {
          "Name": "Frozen Synapse",
          "Sources": "Amazon"
        },
        {
          "Name": "DiRT 3 Complete Edition",
          "Sources": "Steam"
        },
        {
          "Name": "Twilight Story - A Quiet House",
          "Sources": "Steam"
        },
        {
          "Name": "Overlewd",
          "Sources": "Steam"
        },
        {
          "Name": "Aces of the Luftwaffe – Squadron",
          "Sources": "Amazon"
        },
        {
          "Name": "Hello Neighbor: Hide and Seek",
          "Sources": "Steam"
        },
        {
          "Name": "Night Escape",
          "Sources": "Steam"
        },
        {
          "Name": "Love is Dead",
          "Sources": "Steam"
        },
        {
          "Name": "Son of Aral",
          "Sources": "Steam"
        },
        {
          "Name": "after HOURS",
          "Sources": "Humble"
        },
        {
          "Name": "Darksiders II Deathinitive Edition",
          "Sources": "Amazon"
        },
        {
          "Name": "AmazeVR Concerts",
          "Sources": "Steam"
        },
        {
          "Name": "Spec Ops: The Line",
          "Sources": "Steam"
        },
        {
          "Name": "Interplanetary",
          "Sources": "Steam"
        },
        {
          "Name": "Kao the Kangaroo",
          "Sources": "Epic"
        },
        {
          "Name": "Shady Knight",
          "Sources": "Humble"
        },
        {
          "Name": "Steel Rats",
          "Sources": "Steam"
        },
        {
          "Name": "Aces and Adventures",
          "Sources": "Steam"
        },
        {
          "Name": "Drawful 2",
          "Sources": "Amazon"
        },
        {
          "Name": "Shadow of the Tomb Raider",
          "Sources": "Steam"
        },
        {
          "Name": "Serious Sam: The Random Encounter",
          "Sources": "Steam"
        },
        {
          "Name": "Not Tonight",
          "Sources": "Steam"
        },
        {
          "Name": "The Darkside Detective",
          "Sources": "Steam"
        },
        {
          "Name": "Bloons TD 6",
          "Sources": "Epic"
        },
        {
          "Name": "Combat Wings: Battle of Britain",
          "Sources": "Steam"
        },
        {
          "Name": "Worms Forts: Under Siege",
          "Sources": "GOG"
        },
        {
          "Name": "Shogun Showdown: Prologue",
          "Sources": "Steam"
        },
        {
          "Name": "Sam & Max 303: They Stole Max's Brain!",
          "Sources": "Steam"
        },
        {
          "Name": "Among Us",
          "Sources": "Epic"
        },
        {
          "Name": "Amnesia:  The Dark Descent",
          "Sources": "Epic"
        },
        {
          "Name": "Only Fortress",
          "Sources": "Steam"
        },
        {
          "Name": "Space Engineers",
          "Sources": "Steam"
        },
        {
          "Name": "Windwalker",
          "Sources": "Steam"
        },
        {
          "Name": "Z1 Battle Royale",
          "Sources": "Steam"
        },
        {
          "Name": "NERTS! Online",
          "Sources": "Steam"
        },
        {
          "Name": "Force of Nature 2: Prologue",
          "Sources": "Steam"
        },
        {
          "Name": "Regions Of Ruin",
          "Sources": "Steam"
        },
        {
          "Name": "screamdown",
          "Sources": "Steam"
        },
        {
          "Name": "Tokyo 42",
          "Sources": "Amazon"
        },
        {
          "Name": "Move 'n' Bloom",
          "Sources": "Steam"
        },
        {
          "Name": "The Silent Age",
          "Sources": "Epic"
        },
        {
          "Name": "The Original Strife: Veteran Edition",
          "Sources": "Amazon"
        },
        {
          "Name": "Bendy and the Dark Revival",
          "Sources": "Steam"
        },
        {
          "Name": "POLE",
          "Sources": "Steam"
        },
        {
          "Name": "Star Chef 2: Cooking Game",
          "Sources": "Steam"
        },
        {
          "Name": "Crash Time 2",
          "Sources": "Steam"
        },
        {
          "Name": "Gods Of Isekai",
          "Sources": "Steam"
        },
        {
          "Name": "Dragon Age: Origins",
          "Sources": "EA app"
        },
        {
          "Name": "Contract With The Devil",
          "Sources": "Steam"
        },
        {
          "Name": "One Hand Clapping",
          "Sources": "Amazon"
        },
        {
          "Name": "Dead Island",
          "Sources": "Steam"
        },
        {
          "Name": "Black Book",
          "Sources": "Epic"
        },
        {
          "Name": "Observer",
          "Sources": "Steam"
        },
        {
          "Name": "Killsquad",
          "Sources": "Steam"
        },
        {
          "Name": "Dominion",
          "Sources": "Steam"
        },
        {
          "Name": "Jump Puzzle",
          "Sources": "Steam"
        },
        {
          "Name": "AcShooting",
          "Sources": "Steam"
        },
        {
          "Name": "Interplanetary: Enhanced Edition",
          "Sources": "Steam"
        },
        {
          "Name": "Spyro Reignited Trilogy",
          "Sources": "Steam"
        },
        {
          "Name": "DEATHLOOP",
          "Sources": "Steam"
        },
        {
          "Name": "Aerial_Knight's Never Yield",
          "Sources": "Amazon"
        },
        {
          "Name": "Darksiders Warmastered Edition",
          "Sources": "Amazon"
        },
        {
          "Name": "The Escapists",
          "Sources": "Epic"
        },
        {
          "Name": "Sphere 3",
          "Sources": "Steam"
        },
        {
          "Name": "Deep Sky Derelicts",
          "Sources": "GOG"
        },
        {
          "Name": "Mutant Year Zero: Road to Eden",
          "Sources": "Steam"
        },
        {
          "Name": "Syberia 3",
          "Sources": "Steam"
        },
        {
          "Name": "The Crew Calling All Units - Alpha",
          "Sources": "Ubisoft Connect"
        },
        {
          "Name": "Operator",
          "Sources": "Humble"
        },
        {
          "Name": "One-armed robber",
          "Sources": "Steam"
        },
        {
          "Name": "Rise of the Triad",
          "Sources": "Steam"
        },
        {
          "Name": "Costume Quest",
          "Sources": "Epic"
        },
        {
          "Name": "Striker Zone: Gun Games Online",
          "Sources": "Steam"
        },
        {
          "Name": "Overlord",
          "Sources": "Steam"
        },
        {
          "Name": "BDSM: Big Drunk Satanic Massacre Demo",
          "Sources": "Steam"
        },
        {
          "Name": "Bloodhound: First day in hell",
          "Sources": "Steam"
        },
        {
          "Name": "Merry Snowballs",
          "Sources": "Steam"
        },
        {
          "Name": "Not For Broadcast",
          "Sources": "Steam"
        },
        {
          "Name": "HyperDot",
          "Sources": "Amazon"
        },
        {
          "Name": "Deponia The Complete Journey",
          "Sources": "Epic"
        },
        {
          "Name": "Pillars of Eternity",
          "Sources": "Amazon"
        },
        {
          "Name": "Monster Prom 2: Monster Camp",
          "Sources": "Steam"
        },
        {
          "Name": "Kizuna Encounter: Super Tag Battle",
          "Sources": "Amazon"
        },
        {
          "Name": "Monster Showdown Prologue",
          "Sources": "Steam"
        },
        {
          "Name": "MuseSwipr",
          "Sources": "Steam"
        },
        {
          "Name": "Robo Army",
          "Sources": "Amazon"
        },
        {
          "Name": "Spinch",
          "Sources": "Amazon"
        },
        {
          "Name": "Quaver",
          "Sources": "Steam"
        },
        {
          "Name": "Dying Light The Bozak",
          "Sources": "Epic"
        },
        {
          "Name": "Automachef",
          "Sources": "Amazon"
        },
        {
          "Name": "Border Force",
          "Sources": "Steam"
        },
        {
          "Name": "Mable and the Wood",
          "Sources": "Amazon"
        },
        {
          "Name": "Evolvedustry",
          "Sources": "itch.io"
        },
        {
          "Name": "mtion studio",
          "Sources": "Steam"
        },
        {
          "Name": "Dark Deity",
          "Sources": "Epic"
        },
        {
          "Name": "Ken Follett's The Pillars of the Earth",
          "Sources": "Amazon"
        },
        {
          "Name": "Yakuza Kiwami",
          "Sources": "Steam"
        },
        {
          "Name": "Trackmania",
          "Sources": "Steam"
        },
        {
          "Name": "Old School Musical",
          "Sources": "Amazon"
        },
        {
          "Name": "The King of Fighters 2002",
          "Sources": "Amazon"
        },
        {
          "Name": "Dangerous Fellows: Otome Game",
          "Sources": "Steam"
        },
        {
          "Name": "Death Stranding",
          "Sources": "Epic"
        },
        {
          "Name": "Wardwell House VR",
          "Sources": "Steam"
        },
        {
          "Name": "SuperLuminauts",
          "Sources": "Steam"
        },
        {
          "Name": "Risen 2 - Dark Waters",
          "Sources": "Steam"
        },
        {
          "Name": "Dimension Jump",
          "Sources": "Steam"
        },
        {
          "Name": "Schwarzerblitz",
          "Sources": "Steam"
        },
        {
          "Name": "Palace of Cards",
          "Sources": "Steam"
        },
        {
          "Name": "Ghostwire Tokyo",
          "Sources": "Epic"
        },
        {
          "Name": "Sniper: Ghost Warrior",
          "Sources": "Steam"
        },
        {
          "Name": "Football Manager 2023",
          "Sources": "Epic"
        },
        {
          "Name": "20,000 Miles Under the Sea",
          "Sources": "Steam"
        },
        {
          "Name": "Duskers",
          "Sources": "Steam"
        },
        {
          "Name": "Super Rude Bear Resurrection",
          "Sources": "Steam"
        },
        {
          "Name": "Portal",
          "Sources": "Steam"
        },
        {
          "Name": "Wilmot's Warehouse",
          "Sources": "Humble"
        },
        {
          "Name": "Football Manager 2023 Pre-Game Editor",
          "Sources": "Epic"
        },
        {
          "Name": "TeraBlaster",
          "Sources": "Steam"
        },
        {
          "Name": "Assassin's Creed Origins",
          "Sources": "Ubisoft Connect"
        },
        {
          "Name": "MELLOWOLLEM",
          "Sources": "Steam"
        },
        {
          "Name": "Five Nights at Freddy's",
          "Sources": "Steam"
        },
        {
          "Name": "CandyZoo 2 Electric Boogaloo",
          "Sources": "itch.io"
        },
        {
          "Name": "ABZÛ",
          "Sources": "Steam"
        },
        {
          "Name": "Whispering Willows",
          "Sources": "Steam"
        },
        {
          "Name": "SpaceChem",
          "Sources": "Steam"
        },
        {
          "Name": "Subspace Discovery",
          "Sources": "Steam"
        },
        {
          "Name": "Loria",
          "Sources": "GOG"
        },
        {
          "Name": "Death Gunfire - Kill the Zombie",
          "Sources": "Steam"
        },
        {
          "Name": "A Juggler's Tale",
          "Sources": "Steam"
        },
        {
          "Name": "Star Of The Show",
          "Sources": "Steam"
        },
        {
          "Name": "Total Tank Simulator",
          "Sources": "Steam"
        },
        {
          "Name": "The King of Fighters '98 Ultimate Match",
          "Sources": "Amazon"
        },
        {
          "Name": "Carto Sneak Peek",
          "Sources": "Humble"
        },
        {
          "Name": "Pixel Puzzles Illustrations & Anime",
          "Sources": "Steam"
        },
        {
          "Name": "Super Star",
          "Sources": "Steam"
        },
        {
          "Name": "Grill on Wheels",
          "Sources": "Steam"
        },
        {
          "Name": "Nuclear Contingency",
          "Sources": "Steam"
        },
        {
          "Name": "Rage Night",
          "Sources": "Steam"
        },
        {
          "Name": "American Fugitive",
          "Sources": "Steam"
        },
        {
          "Name": "Banter",
          "Sources": "Steam"
        },
        {
          "Name": "Assassin's Creed Brotherhood",
          "Sources": "Steam"
        },
        {
          "Name": "Divine Divinity",
          "Sources": "GOG"
        },
        {
          "Name": "Songs of Skydale",
          "Sources": "Steam"
        },
        {
          "Name": "Breath of Death VII",
          "Sources": "Steam"
        },
        {
          "Name": "Tricky Doors",
          "Sources": "Steam"
        },
        {
          "Name": "Sam & Max 101: Culture Shock",
          "Sources": "Steam"
        },
        {
          "Name": "Heroes of Xanfurth",
          "Sources": "Steam"
        },
        {
          "Name": "Caveman World: Mountains of Unga Boonga",
          "Sources": "Steam"
        },
        {
          "Name": "Unmemory",
          "Sources": "Amazon"
        },
        {
          "Name": "DOOM 64",
          "Sources": "Epic"
        },
        {
          "Name": "Hyperhell",
          "Sources": "Steam"
        },
        {
          "Name": "Kardboard Kings: Card Shop Simulator",
          "Sources": "Amazon"
        },
        {
          "Name": "Bleed 2 (DRM-Free)",
          "Sources": "Humble"
        },
        {
          "Name": "Cursed to Golf",
          "Sources": "Epic"
        },
        {
          "Name": "Rogue Lords",
          "Sources": "Steam"
        },
        {
          "Name": "Heaven's Vault",
          "Sources": "Steam"
        },
        {
          "Name": "Mutation Nation",
          "Sources": "Amazon"
        },
        {
          "Name": "Tiny & Big in Grandpa's Leftovers",
          "Sources": "Humble"
        },
        {
          "Name": "Aviary Attorney",
          "Sources": "Steam"
        },
        {
          "Name": "Spider Slingers",
          "Sources": "Steam"
        },
        {
          "Name": "Lies of Astaroth",
          "Sources": "Steam"
        },
        {
          "Name": "Dear, Esther",
          "Sources": "Amazon"
        },
        {
          "Name": "Paradigm",
          "Sources": "Steam"
        },
        {
          "Name": "Cheap Golf",
          "Sources": "Indiegala"
        },
        {
          "Name": "The Blind Prophet",
          "Sources": "Amazon"
        },
        {
          "Name": "The Lost Valley",
          "Sources": "Steam"
        },
        {
          "Name": "Hardspace: Shipbreaker",
          "Sources": "Steam"
        },
        {
          "Name": "Middle-earth: Shadow of War",
          "Sources": "GOG"
        },
        {
          "Name": "HITMAN",
          "Sources": "Steam"
        },
        {
          "Name": "Deep Dungeons of Doom",
          "Sources": "Steam"
        },
        {
          "Name": "Space Beret",
          "Sources": "Steam"
        },
        {
          "Name": "Q.U.B.E.",
          "Sources": "Steam"
        },
        {
          "Name": "Eterium",
          "Sources": "Steam"
        },
        {
          "Name": "Fall of Porcupine: Prologue",
          "Sources": "GOG"
        },
        {
          "Name": "NeuroVoider",
          "Sources": "Amazon"
        },
        {
          "Name": "Dead Bits",
          "Sources": "Steam"
        },
        {
          "Name": "Copoka",
          "Sources": "Humble"
        },
        {
          "Name": "Card City Nights Print and Play",
          "Sources": "Humble"
        },
        {
          "Name": "Goose Simulator",
          "Sources": "itch.io"
        },
        {
          "Name": "Zodiac XX",
          "Sources": "Humble"
        },
        {
          "Name": "Steep",
          "Sources": "Epic"
        },
        {
          "Name": "Surviving Mars",
          "Sources": "Steam"
        },
        {
          "Name": "Crash Bandicoot N. Sane Trilogy",
          "Sources": "Steam"
        },
        {
          "Name": "IOSoccer",
          "Sources": "Steam"
        },
        {
          "Name": "Duelyst",
          "Sources": "Steam"
        },
        {
          "Name": "Bone: Out from Boneville",
          "Sources": "Steam"
        },
        {
          "Name": "Golf With Your Friends",
          "Sources": "Steam"
        },
        {
          "Name": "This War of Mine",
          "Sources": "Steam"
        },
        {
          "Name": "Defend the Rook Demo",
          "Sources": "GOG"
        },
        {
          "Name": "Warhammer Skulls 2023 - Free Game + Digitial Goodie Pack",
          "Sources": "GOG"
        },
        {
          "Name": "Blackwake",
          "Sources": "Steam"
        },
        {
          "Name": "Shores Unknown: Arrival",
          "Sources": "GOG"
        },
        {
          "Name": "A2Be - A Science Fiction Narrative",
          "Sources": "Humble"
        },
        {
          "Name": "SNK 40th Anniversary Collection",
          "Sources": "Amazon"
        },
        {
          "Name": "HOT WHEELS UNLEASHED",
          "Sources": "Steam"
        },
        {
          "Name": "Hellpoint",
          "Sources": "Steam"
        },
        {
          "Name": "The Curse of Monkey Island",
          "Sources": "Amazon"
        },
        {
          "Name": "Train Sim World 2",
          "Sources": "Epic"
        },
        {
          "Name": "Retention",
          "Sources": "Steam"
        },
        {
          "Name": "Fanatic Zeal",
          "Sources": "Steam"
        },
        {
          "Name": "Worlds Adrift Island Creator",
          "Sources": "Steam"
        },
        {
          "Name": "Weeping Falls Massacre",
          "Sources": "Steam"
        },
        {
          "Name": "Insurgency",
          "Sources": "Steam"
        },
        {
          "Name": "Candleman: The Complete Journey",
          "Sources": "Amazon"
        },
        {
          "Name": "Soak & Splash",
          "Sources": "Steam"
        },
        {
          "Name": "Megacity Builder",
          "Sources": "Steam"
        },
        {
          "Name": "Snake Pass",
          "Sources": "Amazon"
        },
        {
          "Name": "Fayburrow",
          "Sources": "Steam"
        },
        {
          "Name": "Lakeview Cabin Collection",
          "Sources": "Steam"
        },
        {
          "Name": "The Occupation",
          "Sources": "Steam"
        },
        {
          "Name": "Varenje",
          "Sources": "Steam"
        },
        {
          "Name": "Remnant: From the Ashes",
          "Sources": "Steam"
        },
        {
          "Name": "Sid Meier's Civilization VI",
          "Sources": "Steam"
        },
        {
          "Name": "The Cat Lady",
          "Sources": "Steam"
        },
        {
          "Name": "Gene Shift Auto",
          "Sources": "Steam"
        },
        {
          "Name": "Millennium - A New Hope",
          "Sources": "Steam"
        },
        {
          "Name": "AER Memories of Old",
          "Sources": "Epic"
        },
        {
          "Name": "Next Up Hero",
          "Sources": "Epic"
        },
        {
          "Name": "Planet Zoo",
          "Sources": "Steam"
        },
        {
          "Name": "Dead Hungry Diner",
          "Sources": "Indiegala"
        },
        {
          "Name": "Oxenfree",
          "Sources": "Amazon"
        },
        {
          "Name": "Freddy Fazbear's Pizzeria Simulator",
          "Sources": "Steam"
        },
        {
          "Name": "Huntsman - The Orphanage Halloween Edition",
          "Sources": "Steam"
        },
        {
          "Name": "Youropa",
          "Sources": "Steam"
        },
        {
          "Name": "Death Coming",
          "Sources": "Epic"
        },
        {
          "Name": "World War Z",
          "Sources": "Epic"
        },
        {
          "Name": "Little Nightmares",
          "Sources": "Steam"
        },
        {
          "Name": "Sundered: Eldritch Edition",
          "Sources": "Steam"
        },
        {
          "Name": "Lords and Villeins",
          "Sources": "Steam"
        },
        {
          "Name": "KRAMPEN",
          "Sources": "Steam"
        },
        {
          "Name": "Goat Simulator",
          "Sources": "Steam"
        },
        {
          "Name": "Unpacking",
          "Sources": "Steam"
        },
        {
          "Name": "The Jackbox Party Pack",
          "Sources": "Epic"
        },
        {
          "Name": "GreedFall",
          "Sources": "Steam"
        },
        {
          "Name": "Temtem",
          "Sources": "Steam"
        },
        {
          "Name": "Frog Climbers",
          "Sources": "Amazon"
        },
        {
          "Name": "Sigma Theory",
          "Sources": "Steam"
        },
        {
          "Name": "ScourgeBringer DEMO",
          "Sources": "Humble"
        },
        {
          "Name": "ETHEREAL",
          "Sources": "Humble"
        },
        {
          "Name": "The Invisible Hand",
          "Sources": "Steam"
        },
        {
          "Name": "Cubzh",
          "Sources": "Steam"
        },
        {
          "Name": "Barony",
          "Sources": "Epic"
        },
        {
          "Name": "BRAiN VOMiTS GARDEN",
          "Sources": "Steam"
        },
        {
          "Name": "Little Big Workshop",
          "Sources": "Amazon"
        },
        {
          "Name": "召唤之王 (Supreme Summoner)",
          "Sources": "Steam"
        },
        {
          "Name": "Ultima VIII Gold Edition",
          "Sources": "EA app"
        },
        {
          "Name": "Rise of the Argonauts",
          "Sources": "Steam"
        },
        {
          "Name": "BATTLECREW Space Pirates",
          "Sources": "Steam"
        },
        {
          "Name": "Per Aspera",
          "Sources": "Steam"
        },
        {
          "Name": "Qwilight",
          "Sources": "Steam"
        },
        {
          "Name": "Ikenfell Sneak Peek",
          "Sources": "Humble"
        },
        {
          "Name": "Boundless",
          "Sources": "Steam"
        },
        {
          "Name": "SpongeBob SquarePants: Battle for Bikini Bottom - Rehydrated",
          "Sources": "Steam"
        },
        {
          "Name": "Half-Life: VR Mod",
          "Sources": "Steam"
        },
        {
          "Name": "Assassin's Creed II",
          "Sources": "Steam"
        },
        {
          "Name": "TVGHF Goodie Pack 2022",
          "Sources": "GOG"
        },
        {
          "Name": "Opus Magnum",
          "Sources": "Steam"
        },
        {
          "Name": "Planetary Annihilation",
          "Sources": "Steam"
        },
        {
          "Name": "Plant Gallery: A Short Botanic Experience",
          "Sources": "Steam"
        },
        {
          "Name": "Die Young: Prologue",
          "Sources": "Indiegala"
        },
        {
          "Name": "Balancelot",
          "Sources": "Steam"
        },
        {
          "Name": "MDK",
          "Sources": "GOG"
        },
        {
          "Name": "Gloomhaven",
          "Sources": "Epic"
        },
        {
          "Name": "Rise of Humanity Prologue",
          "Sources": "Steam"
        },
        {
          "Name": "homebound",
          "Sources": "Steam"
        },
        {
          "Name": "The Dark Pictures Anthology: Little Hope",
          "Sources": "Steam"
        },
        {
          "Name": "Train Valley",
          "Sources": "Steam"
        },
        {
          "Name": "Tails Noir",
          "Sources": "Steam"
        },
        {
          "Name": "Creature Clicker - Capture, Train, Ascend!",
          "Sources": "Steam"
        },
        {
          "Name": "Fallout 76",
          "Sources": "Steam"
        },
        {
          "Name": "Dragon And Home",
          "Sources": "Steam"
        },
        {
          "Name": "Garry's Mod",
          "Sources": "Steam"
        },
        {
          "Name": "Melissa K. and the Heart of Gold Collector's Edition",
          "Sources": "Steam"
        },
        {
          "Name": "Strafe",
          "Sources": "Amazon"
        },
        {
          "Name": "Trackmania",
          "Sources": "Ubisoft Connect"
        },
        {
          "Name": "Darksiders Warmastered Edition",
          "Sources": "Steam"
        },
        {
          "Name": "DEATH STRANDING DIRECTOR'S CUT",
          "Sources": "Steam"
        },
        {
          "Name": "Roller Champions",
          "Sources": "Ubisoft Connect"
        },
        {
          "Name": "Hammerting",
          "Sources": "Steam"
        },
        {
          "Name": "Going Under",
          "Sources": "Steam"
        },
        {
          "Name": "EARTH DEFENSE FORCE 4.1  The Shadow of New Despair",
          "Sources": "Steam"
        },
        {
          "Name": "Gone Home",
          "Sources": "Steam"
        },
        {
          "Name": "Haven Park",
          "Sources": "GOG"
        },
        {
          "Name": "MetaMorph",
          "Sources": "Steam"
        },
        {
          "Name": "Aces High III",
          "Sources": "Steam"
        },
        {
          "Name": "Sherlock Holmes: The Devil's Daughter",
          "Sources": "Steam"
        },
        {
          "Name": "Dead Rising 4",
          "Sources": "Steam"
        },
        {
          "Name": "Aven Colony",
          "Sources": "Steam"
        },
        {
          "Name": "Roguevive: Prelude",
          "Sources": "Steam"
        },
        {
          "Name": "Dragonsphere",
          "Sources": "GOG"
        },
        {
          "Name": "Tomb Raider",
          "Sources": "Steam"
        },
        {
          "Name": "The Flying Feathers",
          "Sources": "Steam"
        },
        {
          "Name": "The Dark Pictures Anthology: Little Hope - Friend's Pass",
          "Sources": "Steam"
        },
        {
          "Name": "Next Up Hero",
          "Sources": "Amazon"
        },
        {
          "Name": "Sniper Elite V2",
          "Sources": "Steam"
        },
        {
          "Name": "Iris and the Giant",
          "Sources": "Amazon"
        },
        {
          "Name": "Waking Up: Way Back Home",
          "Sources": "Steam"
        },
        {
          "Name": "Match Point",
          "Sources": "Steam"
        },
        {
          "Name": "Tales of the Neon Sea",
          "Sources": "Steam"
        },
        {
          "Name": "Maniac Mansion",
          "Sources": "Amazon"
        },
        {
          "Name": "Silence",
          "Sources": "Amazon"
        },
        {
          "Name": "Tom Clancy's The Division PTS",
          "Sources": "Ubisoft Connect"
        },
        {
          "Name": "Ghost Pilots",
          "Sources": "Amazon"
        },
        {
          "Name": "M doll",
          "Sources": "Steam"
        },
        {
          "Name": "Victoria: Revolutions",
          "Sources": "Steam"
        },
        {
          "Name": "The Witcher: Enhanced Edition",
          "Sources": "Steam"
        },
        {
          "Name": "Train Valley 2 - DRM-free build",
          "Sources": "Humble"
        },
        {
          "Name": "The Inner World",
          "Sources": "Amazon"
        },
        {
          "Name": "Remember Me",
          "Sources": "Steam"
        },
        {
          "Name": "Convoy",
          "Sources": "Steam"
        },
        {
          "Name": "Before I Forget",
          "Sources": "Humble"
        },
        {
          "Name": "Dodo Peak",
          "Sources": "Epic"
        },
        {
          "Name": "BPM: BULLETS PER MINUTE",
          "Sources": "Steam"
        },
        {
          "Name": "Heaven Island - VR MMO",
          "Sources": "Steam"
        },
        {
          "Name": "I, Toaster",
          "Sources": "Steam"
        },
        {
          "Name": "SOS: Classic",
          "Sources": "Steam"
        },
        {
          "Name": "Rappelz",
          "Sources": "Steam"
        },
        {
          "Name": "Crazy space pirate",
          "Sources": "Indiegala"
        },
        {
          "Name": "ClusterPuck 99",
          "Sources": "Steam"
        },
        {
          "Name": "Wolfenstein: The New Order",
          "Sources": "Epic"
        },
        {
          "Name": "Planet Alpha",
          "Sources": "Amazon"
        },
        {
          "Name": "Resident Evil 4 (2005)",
          "Sources": "Steam"
        },
        {
          "Name": "CAT Interstellar",
          "Sources": "Steam"
        },
        {
          "Name": "Middle-earth: Shadow of Mordor Game of the Year Edition",
          "Sources": "GOG"
        },
        {
          "Name": "Dead Island: Epidemic",
          "Sources": "Steam"
        },
        {
          "Name": "Paradise Lost",
          "Sources": "Steam"
        },
        {
          "Name": "Echo of the Wilds",
          "Sources": "Indiegala"
        },
        {
          "Name": "Killing Floor 2",
          "Sources": "Epic"
        },
        {
          "Name": "Desperados III",
          "Sources": "Steam"
        },
        {
          "Name": "Daggerfall Unity - GOG Cut",
          "Sources": "GOG"
        },
        {
          "Name": "Avencast",
          "Sources": "Steam"
        },
        {
          "Name": "First Class Trouble",
          "Sources": "Epic"
        },
        {
          "Name": "White Night",
          "Sources": "Amazon"
        },
        {
          "Name": "Shell Runner - Prelude",
          "Sources": "Steam"
        },
        {
          "Name": "Xemo : Robot Sim",
          "Sources": "Steam"
        },
        {
          "Name": "Due Process",
          "Sources": "Steam"
        },
        {
          "Name": "hack_me 2",
          "Sources": "Steam"
        },
        {
          "Name": "The Chronicles Of Myrtana: Archolos",
          "Sources": "Steam"
        },
        {
          "Name": "Final Slam 2",
          "Sources": "Steam"
        },
        {
          "Name": "Crossing Souls",
          "Sources": "Amazon"
        },
        {
          "Name": "STRAFE: Gold Edition",
          "Sources": "Steam"
        },
        {
          "Name": "Poker Club",
          "Sources": "Epic"
        },
        {
          "Name": "Pestilence",
          "Sources": "Steam"
        },
        {
          "Name": "Trine 4: The Nightmare Prince",
          "Sources": "Steam"
        },
        {
          "Name": "Gamedec - Definitive Edition",
          "Sources": "Epic"
        },
        {
          "Name": "Möbius Front '83",
          "Sources": "Steam"
        },
        {
          "Name": "Frostpunk",
          "Sources": "Steam"
        },
        {
          "Name": "Kid,napper: Gosh, I'm Kidnapped by a Pupil",
          "Sources": "Steam"
        },
        {
          "Name": "Euro Truck Simulator 2",
          "Sources": "Steam"
        },
        {
          "Name": "The Ambassador: Fractured Timelines",
          "Sources": "Steam"
        },
        {
          "Name": "The Witcher: Enhanced Edition",
          "Sources": "GOG"
        },
        {
          "Name": "Guild of Dungeoneering",
          "Sources": "Epic"
        },
        {
          "Name": "Warspace",
          "Sources": "Steam"
        },
        {
          "Name": "Animal Super Squad",
          "Sources": "Steam"
        },
        {
          "Name": "Monster Prom",
          "Sources": "Steam"
        },
        {
          "Name": "The King's Bird",
          "Sources": "Steam"
        },
        {
          "Name": "Felix The Toy",
          "Sources": "itch.io"
        },
        {
          "Name": "Sang-Froid: Tales of Werewolves",
          "Sources": "GOG"
        },
        {
          "Name": "Cats Hidden in Jingle Jam",
          "Sources": "Steam"
        },
        {
          "Name": "Inside",
          "Sources": "Epic"
        },
        {
          "Name": "The Paper Trials",
          "Sources": "Steam"
        },
        {
          "Name": "Skullgirls + All Characters and Color Palette Bundle",
          "Sources": "Humble"
        },
        {
          "Name": "Warhammer 40,000: Chaos Gate - Daemonhunters",
          "Sources": "Steam"
        },
        {
          "Name": "Sine Mora Ex",
          "Sources": "Amazon"
        },
        {
          "Name": "Skoory Rush",
          "Sources": "Steam"
        },
        {
          "Name": "Timelie",
          "Sources": "Steam"
        },
        {
          "Name": "Orwell: Ignorance is Strength",
          "Sources": "Steam"
        },
        {
          "Name": "Sorcery! Part 3",
          "Sources": "Steam"
        },
        {
          "Name": "DISTRAINT: Deluxe Edition",
          "Sources": "GOG"
        },
        {
          "Name": "Chronology",
          "Sources": "Steam"
        },
        {
          "Name": "Planet S",
          "Sources": "Steam"
        },
        {
          "Name": "For Honor - Public Test",
          "Sources": "Steam"
        },
        {
          "Name": "Terroir",
          "Sources": "GOG"
        },
        {
          "Name": "Last Minute Shopping",
          "Sources": "Steam"
        },
        {
          "Name": "RAD",
          "Sources": "Amazon"
        },
        {
          "Name": "TOEM",
          "Sources": "Steam"
        },
        {
          "Name": "Welcome, Get Out!",
          "Sources": "Steam"
        },
        {
          "Name": "Disciples: Liberation",
          "Sources": "Steam"
        },
        {
          "Name": "Tyranny - Gold Edition Pack",
          "Sources": "Epic"
        },
        {
          "Name": "Shomia Teaf: The Unfinished Fairy",
          "Sources": "itch.io"
        },
        {
          "Name": "Deponia Doomsday",
          "Sources": "Amazon"
        },
        {
          "Name": "In memory of TITAN",
          "Sources": "Steam"
        },
        {
          "Name": "Yes, Your Grace",
          "Sources": "Steam"
        },
        {
          "Name": "Five Nights at Freddy's 4",
          "Sources": "Steam"
        },
        {
          "Name": "Pool Nation FX",
          "Sources": "Steam"
        },
        {
          "Name": "Shotgun King: The Final Checkmate",
          "Sources": "Amazon"
        },
        {
          "Name": "Unreal Gold",
          "Sources": "GOG"
        },
        {
          "Name": "Capcom Arcade 2nd Stadium",
          "Sources": "Steam"
        },
        {
          "Name": "Hard Reset Redux",
          "Sources": "Steam"
        },
        {
          "Name": "Dead Age",
          "Sources": "Amazon"
        },
        {
          "Name": "Underhero",
          "Sources": "Steam"
        },
        {
          "Name": "Tomb of The Lost Sentry",
          "Sources": "Steam"
        },
        {
          "Name": "Tower 57 Exclusive Beta Demo",
          "Sources": "Humble"
        },
        {
          "Name": "Afterfall InSanity Extended Edition",
          "Sources": "Steam"
        },
        {
          "Name": "Worms Revolution Gold Edition",
          "Sources": "GOG"
        },
        {
          "Name": "The Life and Suffering of Sir Brante",
          "Sources": "Steam"
        },
        {
          "Name": "Path of Giants",
          "Sources": "Steam"
        },
        {
          "Name": "PGA TOUR 2K21",
          "Sources": "Steam"
        },
        {
          "Name": "Marvel's Guardians of the Galaxy",
          "Sources": "Epic"
        },
        {
          "Name": "Evil Possession",
          "Sources": "Steam"
        },
        {
          "Name": "Bear With Me - Collector's Edition",
          "Sources": "Steam"
        },
        {
          "Name": "Block, Love, and Ancient Greece",
          "Sources": "Steam"
        },
        {
          "Name": "Now you can't see me",
          "Sources": "Steam"
        },
        {
          "Name": "Void Bastards",
          "Sources": "Amazon"
        },
        {
          "Name": "Back to the Future: Ep 2 - Get Tannen!",
          "Sources": "Steam"
        },
        {
          "Name": "Assassin’s Creed Chronicles Russia",
          "Sources": "Ubisoft Connect"
        },
        {
          "Name": "Warstone TD",
          "Sources": "Steam"
        },
        {
          "Name": "You Have 10 Seconds (2023)",
          "Sources": "Steam"
        },
        {
          "Name": "Ionball 2 : Ionstorm",
          "Sources": "Steam"
        },
        {
          "Name": "Odysseus Kosmos and his Robot Quest - Episode 1",
          "Sources": "Steam"
        },
        {
          "Name": "PAYDAY 2",
          "Sources": "Epic"
        },
        {
          "Name": "Sid Meier's Civilization III: Complete",
          "Sources": "Steam"
        },
        {
          "Name": "Trove",
          "Sources": "Steam"
        },
        {
          "Name": "Blue Fire",
          "Sources": "Steam"
        },
        {
          "Name": "Desert Child",
          "Sources": "Steam"
        },
        {
          "Name": "DDraceNetwork",
          "Sources": "Steam"
        },
        {
          "Name": "The Greater Good",
          "Sources": "Steam"
        },
        {
          "Name": "For Honor",
          "Sources": "Steam"
        },
        {
          "Name": "Control Craft 3",
          "Sources": "Steam"
        },
        {
          "Name": "三国：我是主公",
          "Sources": "Steam"
        },
        {
          "Name": "Do Not Feed the Monkeys",
          "Sources": "Amazon"
        },
        {
          "Name": "Guacamelee! Super Turbo Championship Edition",
          "Sources": "Steam"
        },
        {
          "Name": "Wizard And Minion Idle",
          "Sources": "Steam"
        },
        {
          "Name": "Unit 4",
          "Sources": "Steam"
        },
        {
          "Name": "The King's Bird DRM-Free",
          "Sources": "Humble"
        },
        {
          "Name": "Ultima  Worlds of Adventure 2: Martian Dreams",
          "Sources": "GOG"
        },
        {
          "Name": "Bouncy Ball",
          "Sources": "itch.io"
        },
        {
          "Name": "ToyOdyssey",
          "Sources": "Steam"
        },
        {
          "Name": "Dead Space 2",
          "Sources": "Steam"
        },
        {
          "Name": "Celeste",
          "Sources": "Epic"
        },
        {
          "Name": "Shining Jump Jump",
          "Sources": "Steam"
        },
        {
          "Name": "Metal Planet",
          "Sources": "Steam"
        },
        {
          "Name": "F.E.A.R. 2: Project Origin",
          "Sources": "Steam"
        },
        {
          "Name": "Slay the Spire",
          "Sources": "Steam"
        },
        {
          "Name": "Superliminal",
          "Sources": "Steam"
        },
        {
          "Name": "RIVE",
          "Sources": "Steam"
        },
        {
          "Name": "SMITE - Public Test",
          "Sources": "Steam"
        },
        {
          "Name": "SteamWorld Heist",
          "Sources": "Steam"
        },
        {
          "Name": "10 Second Ninja X GameMaker Edition",
          "Sources": "Humble"
        },
        {
          "Name": "Battlestar Galactica Deadlock",
          "Sources": "Steam"
        },
        {
          "Name": "Jitsu Squad",
          "Sources": "Epic"
        },
        {
          "Name": "Last Year",
          "Sources": "Steam"
        },
        {
          "Name": "Super Chicken Catchers",
          "Sources": "Steam"
        },
        {
          "Name": "Rover Mechanic Simulator",
          "Sources": "Steam"
        },
        {
          "Name": "Idol Showdown",
          "Sources": "Steam"
        },
        {
          "Name": "Lightmatter",
          "Sources": "Amazon"
        },
        {
          "Name": "The Flame In The Flood",
          "Sources": "Amazon"
        },
        {
          "Name": "Ring of Pain Exclusive Sneak Peek",
          "Sources": "Humble"
        },
        {
          "Name": "Bronzebeard's Tavern",
          "Sources": "Steam"
        },
        {
          "Name": "100 Asian Cats",
          "Sources": "Steam"
        },
        {
          "Name": "Huawei VR2 driver",
          "Sources": "Steam"
        },
        {
          "Name": "GRID 2",
          "Sources": "Steam"
        },
        {
          "Name": "Wonder Boy: The Dragon's Trap",
          "Sources": "Amazon"
        },
        {
          "Name": "Hitman: Contracts",
          "Sources": "Steam"
        },
        {
          "Name": "Zold:out",
          "Sources": "Steam"
        },
        {
          "Name": "Tell Me Why",
          "Sources": "Steam"
        },
        {
          "Name": "OBS Studio",
          "Sources": "Steam"
        },
        {
          "Name": "Particula",
          "Sources": "Steam"
        },
        {
          "Name": "Spheroid",
          "Sources": "Steam"
        },
        {
          "Name": "Vickinachi",
          "Sources": "Steam"
        },
        {
          "Name": "Knight's Path: The Tournament",
          "Sources": "Steam"
        },
        {
          "Name": "Nuclear Throne",
          "Sources": "Epic"
        },
        {
          "Name": "Fate of Kai",
          "Sources": "Humble"
        },
        {
          "Name": "Capsized",
          "Sources": "Steam"
        },
        {
          "Name": "Your Chronicle",
          "Sources": "Steam"
        },
        {
          "Name": "GWENT: The Witcher Card Game",
          "Sources": "GOG"
        },
        {
          "Name": "Battle Of Zodiacs",
          "Sources": "Steam"
        },
        {
          "Name": "Shank 2",
          "Sources": "Steam"
        },
        {
          "Name": "Vigorus",
          "Sources": "Steam"
        },
        {
          "Name": "Cube Destroyer",
          "Sources": "Steam"
        },
        {
          "Name": "The Elder Scrolls V: Skyrim",
          "Sources": "Steam"
        },
        {
          "Name": "Minion Masters",
          "Sources": "Steam"
        },
        {
          "Name": "Drunk Or Dead 2: Prologue",
          "Sources": "Steam"
        },
        {
          "Name": "Remnants of Naezith",
          "Sources": "Steam"
        },
        {
          "Name": "Goblin Rush",
          "Sources": "Steam"
        },
        {
          "Name": "STAR WARS: Squadrons",
          "Sources": "EA app"
        },
        {
          "Name": "Secret Ponchos",
          "Sources": "Steam"
        },
        {
          "Name": "Handshakes",
          "Sources": "Steam"
        },
        {
          "Name": "Cursed Castilla (Maldita Castilla Ex)",
          "Sources": "Amazon"
        },
        {
          "Name": "Regular Human Basketball",
          "Sources": "Steam"
        },
        {
          "Name": "Back to Bed",
          "Sources": "Steam"
        },
        {
          "Name": "STALCRAFT",
          "Sources": "Steam"
        },
        {
          "Name": "Nyctophobia",
          "Sources": "Steam"
        },
        {
          "Name": "Beyond Blue",
          "Sources": "Epic"
        },
        {
          "Name": "Shotgun Shenanigans",
          "Sources": "Steam"
        },
        {
          "Name": "The Elder Scrolls III: Morrowind GOTY Edition",
          "Sources": "GOG"
        },
        {
          "Name": "Fallout: New Vegas",
          "Sources": "Steam"
        },
        {
          "Name": "Fallout Shelter",
          "Sources": "Steam"
        },
        {
          "Name": "LOVE",
          "Sources": "Epic"
        },
        {
          "Name": "The Secret of Monkey Island: Special Edition",
          "Sources": "Amazon"
        },
        {
          "Name": "The Outer Worlds: Spacer's Choice Edition",
          "Sources": "Epic"
        },
        {
          "Name": "Eight Winds",
          "Sources": "Steam"
        },
        {
          "Name": "Grand Theft Auto: Vice City",
          "Sources": "Steam"
        },
        {
          "Name": "XOXO Blood Droplets",
          "Sources": "Steam"
        },
        {
          "Name": "Subserial Network",
          "Sources": "Humble"
        },
        {
          "Name": "As Far As The Eye",
          "Sources": "Steam"
        },
        {
          "Name": "Tatari: The Arrival",
          "Sources": "Steam"
        },
        {
          "Name": "Beholder",
          "Sources": "Steam"
        },
        {
          "Name": "The Escapists 2",
          "Sources": "Epic"
        },
        {
          "Name": "Jay and Silent Bob: Mall Brawl",
          "Sources": "Amazon"
        },
        {
          "Name": "Build Master: MarsVille",
          "Sources": "Steam"
        },
        {
          "Name": "PixiEditor",
          "Sources": "Steam"
        },
        {
          "Name": "KONA",
          "Sources": "Amazon"
        },
        {
          "Name": "DOOM 3: BFG Edition",
          "Sources": "GOG"
        },
        {
          "Name": "On Rusty Trails",
          "Sources": "Steam"
        },
        {
          "Name": "Onsen Master",
          "Sources": "Amazon"
        },
        {
          "Name": "Hell Let Loose",
          "Sources": "Steam"
        },
        {
          "Name": "Build Wars",
          "Sources": "Steam"
        },
        {
          "Name": "Lost Horizon 2",
          "Sources": "Amazon"
        },
        {
          "Name": "The Bridge",
          "Sources": "Epic"
        },
        {
          "Name": "Fantasy Fighters",
          "Sources": "Steam"
        },
        {
          "Name": "Flux8 Bonus Content",
          "Sources": "Humble"
        },
        {
          "Name": "Aground",
          "Sources": "Amazon"
        },
        {
          "Name": "Baldur's Gate: Enhanced Edition",
          "Sources": "Amazon"
        },
        {
          "Name": "Kombinera",
          "Sources": "Epic"
        },
        {
          "Name": "Bastion",
          "Sources": "Steam"
        },
        {
          "Name": "Hades' Star",
          "Sources": "Steam"
        },
        {
          "Name": "Orb Flight",
          "Sources": "Steam"
        },
        {
          "Name": "Pineapple on pizza",
          "Sources": "Steam"
        },
        {
          "Name": "SmallZ",
          "Sources": "Steam"
        },
        {
          "Name": "Doki Doki Literature Club",
          "Sources": "Steam"
        },
        {
          "Name": "Lion Quest",
          "Sources": "Steam"
        },
        {
          "Name": "Magic: The Gathering Arena",
          "Sources": "Steam"
        },
        {
          "Name": "Mr.Mine",
          "Sources": "Steam"
        },
        {
          "Name": "Knockout City",
          "Sources": "Epic"
        },
        {
          "Name": "Cultist Simulator",
          "Sources": "Steam"
        },
        {
          "Name": "Moving Out",
          "Sources": "Steam"
        },
        {
          "Name": "Angry Video Game Nerd Adventures",
          "Sources": "Steam"
        },
        {
          "Name": "Head Shot",
          "Sources": "Steam"
        },
        {
          "Name": "Dear Esther: Landmark Edition",
          "Sources": "Steam"
        },
        {
          "Name": "BFF or Die",
          "Sources": "Amazon"
        },
        {
          "Name": "Rising Storm/Red Orchestra 2 Multiplayer",
          "Sources": "Steam"
        },
        {
          "Name": "The Sims 2 Ultimate Collection",
          "Sources": "EA app"
        },
        {
          "Name": "FADE^2",
          "Sources": "Steam"
        },
        {
          "Name": "Jill of the Jungle: The Complete Trilogy",
          "Sources": "GOG"
        },
        {
          "Name": "Forged Battalion",
          "Sources": "Steam"
        },
        {
          "Name": "Let's Play Jigsaw Puzzles",
          "Sources": "Steam"
        },
        {
          "Name": "El Ninja (Beta)",
          "Sources": "Steam"
        },
        {
          "Name": "System Shock: Enhanced Edition",
          "Sources": "Amazon"
        },
        {
          "Name": "Holy Potatoes! We’re in Space?!",
          "Sources": "Steam"
        },
        {
          "Name": "Fight for Eden: HEAT",
          "Sources": "Steam"
        },
        {
          "Name": "Grand Theft Auto: Vice City",
          "Sources": "Steam"
        },
        {
          "Name": "Souldiers",
          "Sources": "Steam"
        },
        {
          "Name": "Mirage: Arcane Warfare",
          "Sources": "Steam"
        },
        {
          "Name": "Monster Prom",
          "Sources": "Amazon"
        },
        {
          "Name": "HITMAN",
          "Sources": "Epic"
        },
        {
          "Name": "Lake",
          "Sources": "Amazon"
        },
        {
          "Name": "DCS World Steam Edition",
          "Sources": "Steam"
        },
        {
          "Name": "Shovel Knight Showdown",
          "Sources": "Amazon"
        },
        {
          "Name": "Paradise Killer",
          "Sources": "Steam"
        },
        {
          "Name": "Indiana Jones and the Last Crusade",
          "Sources": "Amazon"
        },
        {
          "Name": "Transistor",
          "Sources": "Steam"
        },
        {
          "Name": "Tap Heroes",
          "Sources": "Steam"
        },
        {
          "Name": "Space Warlord Organ Trading Simulator",
          "Sources": "Amazon"
        },
        {
          "Name": "Blackguards",
          "Sources": "Steam"
        },
        {
          "Name": "The Supper",
          "Sources": "GOG"
        },
        {
          "Name": "The Admin",
          "Sources": "Steam"
        },
        {
          "Name": "Adventure Boy Cheapskate DX",
          "Sources": "Steam"
        },
        {
          "Name": "CUBEMATRIX",
          "Sources": "Steam"
        },
        {
          "Name": "The Stillness of the Wind",
          "Sources": "Amazon"
        },
        {
          "Name": "Nemo Dungeon",
          "Sources": "Steam"
        },
        {
          "Name": "SpeedRunners",
          "Sources": "Steam"
        },
        {
          "Name": "If Found",
          "Sources": "Steam"
        },
        {
          "Name": "Mothergunship",
          "Sources": "Epic"
        },
        {
          "Name": "AER Memories of Old",
          "Sources": "Amazon"
        },
        {
          "Name": "Super Meat Boy",
          "Sources": "Steam"
        },
        {
          "Name": "Outcast 1.1",
          "Sources": "GOG"
        },
        {
          "Name": "Metro Last Light Redux",
          "Sources": "Epic"
        },
        {
          "Name": "Rebel Galaxy",
          "Sources": "Steam"
        },
        {
          "Name": "Mean Beans",
          "Sources": "Steam"
        },
        {
          "Name": "Spirits of Baciu - Prologue",
          "Sources": "Steam"
        },
        {
          "Name": "Shenmue I & II",
          "Sources": "Steam"
        },
        {
          "Name": "Vostok",
          "Sources": "Amazon"
        },
        {
          "Name": "Headsnatchers",
          "Sources": "Steam"
        },
        {
          "Name": "Tricking 0",
          "Sources": "Steam"
        },
        {
          "Name": "Agent Awesome",
          "Sources": "Steam"
        },
        {
          "Name": "Stellaris",
          "Sources": "Steam"
        },
        {
          "Name": "vApe Escape",
          "Sources": "Humble"
        },
        {
          "Name": "Heave Ho",
          "Sources": "Amazon"
        },
        {
          "Name": "Yono and the Celestial Elephants",
          "Sources": "Amazon"
        },
        {
          "Name": "The Sexy Brutale",
          "Sources": "Steam"
        },
        {
          "Name": "Sid Meier's Civilization VI",
          "Sources": "Epic"
        },
        {
          "Name": "告死天使之言 Death angel",
          "Sources": "Steam"
        },
        {
          "Name": "Food Fighter Clicker Games",
          "Sources": "Steam"
        },
        {
          "Name": "Rain World",
          "Sources": "Amazon"
        },
        {
          "Name": "Capcom Arcade Stadium",
          "Sources": "Steam"
        },
        {
          "Name": "Adolescent Santa Claus",
          "Sources": "Steam"
        },
        {
          "Name": "DON'T GIVE UP",
          "Sources": "Humble"
        },
        {
          "Name": "DISTRAINT: Deluxe Edition",
          "Sources": "Steam"
        },
        {
          "Name": "Fortune-499",
          "Sources": "Humble"
        },
        {
          "Name": "Must Dash Amigos",
          "Sources": "Steam"
        },
        {
          "Name": "Meeple Station",
          "Sources": "Steam"
        },
        {
          "Name": "Assassin's Creed Chronicles China",
          "Sources": "Ubisoft Connect"
        },
        {
          "Name": "My Loving Wife",
          "Sources": "Steam"
        },
        {
          "Name": "Titan Quest",
          "Sources": "Steam"
        },
        {
          "Name": "King of the Monsters",
          "Sources": "Amazon"
        },
        {
          "Name": "Totally Accurate Battlegrounds",
          "Sources": "Steam"
        },
        {
          "Name": "Negative Atmosphere: Emergency Room",
          "Sources": "Steam"
        },
        {
          "Name": "Redout: Enhanced Edition",
          "Sources": "Epic"
        },
        {
          "Name": "Surviving the Aftermath",
          "Sources": "Steam"
        },
        {
          "Name": "Gravulse",
          "Sources": "Steam"
        },
        {
          "Name": "Mr. Shifty",
          "Sources": "Amazon"
        },
        {
          "Name": "Hector: Ep 3",
          "Sources": "Steam"
        },
        {
          "Name": "orz",
          "Sources": "Steam"
        },
        {
          "Name": "STAR WARS Republic Commando",
          "Sources": "Amazon"
        },
        {
          "Name": "Tharsis",
          "Sources": "Epic"
        },
        {
          "Name": "CasinoRPG",
          "Sources": "Steam"
        },
        {
          "Name": "Dust and Aliens",
          "Sources": "Steam"
        },
        {
          "Name": "MY HERO ULTRA RUMBLE",
          "Sources": "Steam"
        },
        {
          "Name": "Orwell",
          "Sources": "Steam"
        },
        {
          "Name": "Q.U.B.E: Director's Cut",
          "Sources": "Amazon"
        },
        {
          "Name": "Counter-Strike Nexon: Studio",
          "Sources": "Steam"
        },
        {
          "Name": "Helltaker",
          "Sources": "Steam"
        },
        {
          "Name": "VIRTUE",
          "Sources": "Steam"
        },
        {
          "Name": "Ruzh Delta Z",
          "Sources": "Steam"
        },
        {
          "Name": "GARAGE: Bad Trip",
          "Sources": "Steam"
        },
        {
          "Name": "The Escapists",
          "Sources": "Steam"
        },
        {
          "Name": "Everything",
          "Sources": "Epic"
        },
        {
          "Name": "Fallout: New Vegas Ultimate Edition",
          "Sources": "GOG"
        },
        {
          "Name": "In Sound Mind",
          "Sources": "Steam"
        },
        {
          "Name": "Batman: Arkham City GOTY",
          "Sources": "Steam"
        },
        {
          "Name": "Guacamelee! 2",
          "Sources": "Epic"
        },
        {
          "Name": "Gamedec - Definitive Edition",
          "Sources": "Steam"
        },
        {
          "Name": "Deponia",
          "Sources": "Steam"
        },
        {
          "Name": "Frog Detective 2: The Case of the Invisible Wizard",
          "Sources": "Steam"
        },
        {
          "Name": "Project F",
          "Sources": "Steam"
        },
        {
          "Name": "Urbek City Builder Prologue",
          "Sources": "GOG"
        },
        {
          "Name": "Bleed 2",
          "Sources": "Steam"
        },
        {
          "Name": "Star Vikings Forever",
          "Sources": "Amazon"
        },
        {
          "Name": "Juno: New Origins",
          "Sources": "Steam"
        },
        {
          "Name": "Uurnog Uurnlimited",
          "Sources": "Amazon"
        },
        {
          "Name": "Last Oasis",
          "Sources": "Steam"
        },
        {
          "Name": "American Truck Simulator",
          "Sources": "Steam"
        },
        {
          "Name": "Call of Cthulhu",
          "Sources": "Steam"
        },
        {
          "Name": "Galaxy City",
          "Sources": "Steam"
        },
        {
          "Name": "AdVenture Capitalist",
          "Sources": "Steam"
        },
        {
          "Name": "Broforce",
          "Sources": "Amazon"
        },
        {
          "Name": "Janosik - Highlander Precision Platformer",
          "Sources": "GOG"
        },
        {
          "Name": "Syberia",
          "Sources": "Steam"
        },
        {
          "Name": "Dream Of Mirror Online",
          "Sources": "Steam"
        },
        {
          "Name": "Zero-K",
          "Sources": "Steam"
        },
        {
          "Name": "Steel Ocean: Wolves of Deep Sea",
          "Sources": "Steam"
        },
        {
          "Name": "Absolver",
          "Sources": "Steam"
        },
        {
          "Name": "Blood Orange",
          "Sources": "Steam"
        },
        {
          "Name": "Christmas Mansion",
          "Sources": "Steam"
        },
        {
          "Name": "Race The Sun",
          "Sources": "Steam"
        },
        {
          "Name": "Terra Lander Remastered",
          "Sources": "Steam"
        },
        {
          "Name": "Business Tour - Online Multiplayer Board Game",
          "Sources": "Steam"
        },
        {
          "Name": "Mark of the Ninja: Remastered",
          "Sources": "Steam"
        },
        {
          "Name": "RUINER",
          "Sources": "Steam"
        },
        {
          "Name": "Dear Esther",
          "Sources": "Steam"
        },
        {
          "Name": "Sengoku 3",
          "Sources": "Amazon"
        },
        {
          "Name": "Valkyria Chronicles 4 Complete Edition",
          "Sources": "Steam"
        },
        {
          "Name": "Encased",
          "Sources": "Steam"
        },
        {
          "Name": "Baseball Stars 2",
          "Sources": "Amazon"
        },
        {
          "Name": "Bloodstained: Ritual of the Night",
          "Sources": "Steam"
        },
        {
          "Name": "Samorost 1",
          "Sources": "GOG"
        },
        {
          "Name": "The Backrooms: Unbounded",
          "Sources": "Steam"
        },
        {
          "Name": "Rainy Season",
          "Sources": "Humble"
        },
        {
          "Name": "Ultima  Underworld II",
          "Sources": "GOG"
        },
        {
          "Name": "Under The Moon",
          "Sources": "GOG"
        },
        {
          "Name": "BioShock Remastered",
          "Sources": "Steam"
        },
        {
          "Name": "Hot Brass",
          "Sources": "Steam"
        },
        {
          "Name": "PEAK.53",
          "Sources": "Steam"
        },
        {
          "Name": "Durka Simulator",
          "Sources": "Steam"
        },
        {
          "Name": "Tomb Raider (VI): The Angel of Darkness",
          "Sources": "Steam"
        },
        {
          "Name": "Grimm & Tonic",
          "Sources": "Steam"
        },
        {
          "Name": "Batman Arkham Asylum Game of the Year Edition",
          "Sources": "Epic"
        },
        {
          "Name": "Cosmic Express",
          "Sources": "Amazon"
        },
        {
          "Name": "Golden Light",
          "Sources": "Epic"
        },
        {
          "Name": "The LEGO NINJAGO Movie Video Game",
          "Sources": "Steam"
        },
        {
          "Name": "Project Delta",
          "Sources": "itch.io"
        },
        {
          "Name": "NAIRI: Tower of Shirin",
          "Sources": "Amazon"
        },
        {
          "Name": "The Quarry",
          "Sources": "Steam"
        },
        {
          "Name": "The Textorcist",
          "Sources": "Epic"
        },
        {
          "Name": "いるかにうろこがないわけ",
          "Sources": "Steam"
        },
        {
          "Name": "Autonauts",
          "Sources": "Amazon"
        },
        {
          "Name": "Yakuza Kiwami 2",
          "Sources": "Steam"
        },
        {
          "Name": "Build-a-lot",
          "Sources": "Big Fish Games"
        },
        {
          "Name": "Gunmetal Arcadia Zero",
          "Sources": "Humble"
        },
        {
          "Name": "Rogue Legacy",
          "Sources": "Epic"
        },
        {
          "Name": "OWLMAN",
          "Sources": "Steam"
        },
        {
          "Name": "Fobia - St. Dinfna Hotel",
          "Sources": "Steam"
        },
        {
          "Name": "Board Battlefield",
          "Sources": "Steam"
        },
        {
          "Name": "DemonsAreCrazy",
          "Sources": "Steam"
        },
        {
          "Name": "THOR.N",
          "Sources": "Humble"
        },
        {
          "Name": "Sniper Ghost Warrior 3",
          "Sources": "Steam"
        },
        {
          "Name": "Punchline!!",
          "Sources": "Steam"
        },
        {
          "Name": "Car Manufacture: Prologue",
          "Sources": "Steam"
        },
        {
          "Name": "Fez",
          "Sources": "Epic"
        },
        {
          "Name": "Treachery in Beatdown City: U.N. Trouble",
          "Sources": "Steam"
        },
        {
          "Name": "Z-World",
          "Sources": "itch.io"
        },
        {
          "Name": "The Surge 2",
          "Sources": "Steam"
        },
        {
          "Name": "A Glider's Journey",
          "Sources": "Steam"
        },
        {
          "Name": "ADOM (Ancient Domains Of Mystery)",
          "Sources": "Steam"
        },
        {
          "Name": "Intrusion 2",
          "Sources": "Steam"
        },
        {
          "Name": "I, Hope",
          "Sources": "Amazon"
        },
        {
          "Name": "WORLD END ECONOMiCA episode.02",
          "Sources": "Steam"
        },
        {
          "Name": "DARK SOULS II: Scholar of the First Sin",
          "Sources": "Steam"
        },
        {
          "Name": "The Spectrum Retreat",
          "Sources": "Amazon"
        },
        {
          "Name": "Earthlock",
          "Sources": "Amazon"
        },
        {
          "Name": "Overcooked! 2",
          "Sources": "Steam"
        },
        {
          "Name": "Battlerite",
          "Sources": "Steam"
        },
        {
          "Name": "剑雨风云",
          "Sources": "Steam"
        },
        {
          "Name": "SWINE HD Remaster",
          "Sources": "Steam"
        },
        {
          "Name": "Assassin's Creed III",
          "Sources": "Ubisoft Connect"
        },
        {
          "Name": "Dark Swords",
          "Sources": "Steam"
        },
        {
          "Name": "Autonauts vs Piratebots",
          "Sources": "Steam"
        },
        {
          "Name": "Void Guard",
          "Sources": "Steam"
        },
        {
          "Name": "Rogue Heroes: Ruins of Tasos",
          "Sources": "Amazon"
        },
        {
          "Name": "Half-Life Deathmatch: Source",
          "Sources": "Steam"
        },
        {
          "Name": "Squad - Public Testing",
          "Sources": "Steam"
        },
        {
          "Name": "Secret Files: Sam Peters",
          "Sources": "Amazon"
        },
        {
          "Name": "Metro: Last Light Redux",
          "Sources": "Steam"
        },
        {
          "Name": "The Crow's Eye",
          "Sources": "Amazon"
        },
        {
          "Name": "Melbits",
          "Sources": "Amazon"
        },
        {
          "Name": "Kingdom Come Deliverance",
          "Sources": "Epic"
        },
        {
          "Name": "Renzo Racer",
          "Sources": "Indiegala"
        },
        {
          "Name": "Card City Nights",
          "Sources": "Humble"
        },
        {
          "Name": "Night Call",
          "Sources": "Steam"
        },
        {
          "Name": "Pathfinder: Kingmaker",
          "Sources": "Steam"
        },
        {
          "Name": "Sin Slayers: The First Sin",
          "Sources": "GOG"
        },
        {
          "Name": "Wanderlust",
          "Sources": "Steam"
        },
        {
          "Name": "NightMaresToBe",
          "Sources": "Steam"
        },
        {
          "Name": "Destiny 2",
          "Sources": "Epic"
        },
        {
          "Name": "Stealth Bastard Deluxe",
          "Sources": "Amazon"
        },
        {
          "Name": "Wolfenstein: The New Order",
          "Sources": "GOG"
        },
        {
          "Name": "Blasphemous",
          "Sources": "Steam"
        },
        {
          "Name": "The Bard's Tale Trilogy",
          "Sources": "Steam"
        },
        {
          "Name": "John Wick Hex",
          "Sources": "Steam"
        },
        {
          "Name": "Table Manners",
          "Sources": "Amazon"
        },
        {
          "Name": "Battle vs Chess",
          "Sources": "Steam"
        },
        {
          "Name": "Foretales",
          "Sources": "Amazon"
        },
        {
          "Name": "Men Bang",
          "Sources": "Steam"
        },
        {
          "Name": "SAMURAI SHODOWN NEOGEO COLLECTION",
          "Sources": "Epic"
        },
        {
          "Name": "Tetrageddon Games",
          "Sources": "Steam"
        },
        {
          "Name": "Western Press",
          "Sources": "Steam"
        },
        {
          "Name": "Forgive Me Father",
          "Sources": "Steam"
        },
        {
          "Name": "Septerra Core",
          "Sources": "Steam"
        },
        {
          "Name": "Batman Arkham Knight",
          "Sources": "Epic"
        },
        {
          "Name": "THE TEAR",
          "Sources": "Steam"
        },
        {
          "Name": "Owlboy",
          "Sources": "Steam"
        },
        {
          "Name": "TOHU",
          "Sources": "Steam"
        },
        {
          "Name": "BioShock Infinite",
          "Sources": "Steam"
        },
        {
          "Name": "Ironclad",
          "Sources": "Amazon"
        },
        {
          "Name": "Flaws in the People We Love",
          "Sources": "Steam"
        },
        {
          "Name": "Quake II RTX",
          "Sources": "Steam"
        },
        {
          "Name": "The Drone Racing League Simulator",
          "Sources": "Epic"
        },
        {
          "Name": "Shadow Tactics: Blades of the Shogun",
          "Sources": "Steam"
        },
        {
          "Name": "Slain: Back From Hell",
          "Sources": "Epic"
        },
        {
          "Name": "Control Craft 2",
          "Sources": "Steam"
        },
        {
          "Name": "Yojimbrawl",
          "Sources": "Humble"
        },
        {
          "Name": "Little Inferno",
          "Sources": "Steam"
        },
        {
          "Name": "Saints Row 2",
          "Sources": "Steam"
        },
        {
          "Name": "Once Upon a Jester",
          "Sources": "Amazon"
        },
        {
          "Name": "HackyZack",
          "Sources": "Steam"
        },
        {
          "Name": "Song of Farca: Prologue",
          "Sources": "Steam"
        },
        {
          "Name": "Victoria II",
          "Sources": "Steam"
        },
        {
          "Name": "Hellpoint: The Thespian Feast",
          "Sources": "GOG"
        },
        {
          "Name": "Descenders",
          "Sources": "Steam"
        },
        {
          "Name": "F.E.X (Forced Evolution Experiment)",
          "Sources": "Steam"
        },
        {
          "Name": "Aeve:Zero Gravity",
          "Sources": "Steam"
        },
        {
          "Name": "Escape Academy",
          "Sources": "Epic"
        },
        {
          "Name": "Scanner Sombre",
          "Sources": "Steam"
        },
        {
          "Name": "Roman Sands",
          "Sources": "Humble"
        },
        {
          "Name": "Demise of Nations",
          "Sources": "Steam"
        },
        {
          "Name": "The End is Nigh",
          "Sources": "Epic"
        },
        {
          "Name": "Battle Chef Brigade",
          "Sources": "Steam"
        },
        {
          "Name": "Europa Universalis: Rome - Vae Victis",
          "Sources": "Steam"
        },
        {
          "Name": "Neverwinter Nights Diamond",
          "Sources": "GOG"
        },
        {
          "Name": "Shady Knight",
          "Sources": "Humble"
        },
        {
          "Name": "Cats on Duty: Prologue",
          "Sources": "Steam"
        },
        {
          "Name": "Tannenberg",
          "Sources": "Epic"
        },
        {
          "Name": "Rocket League",
          "Sources": "Epic"
        },
        {
          "Name": "The Running Man",
          "Sources": "Steam"
        },
        {
          "Name": "Oddworld: Abe's Oddysee",
          "Sources": "GOG"
        },
        {
          "Name": "Offworld Trading Company",
          "Sources": "Steam"
        },
        {
          "Name": "Football Manager 2022 Resource Archiver",
          "Sources": "Epic"
        },
        {
          "Name": "Chicken Police",
          "Sources": "Steam"
        },
        {
          "Name": "Life Makeover",
          "Sources": "Steam"
        },
        {
          "Name": "Gone Viral",
          "Sources": "Amazon"
        },
        {
          "Name": "ORBITAL",
          "Sources": "Steam"
        },
        {
          "Name": "Sam & Max 205: What's New Beelzebub?",
          "Sources": "Steam"
        },
        {
          "Name": "Spirit Of The Island",
          "Sources": "Steam"
        },
        {
          "Name": "WARSAW RISING: City of Heroes",
          "Sources": "Steam"
        },
        {
          "Name": "Nephise Begins",
          "Sources": "Steam"
        },
        {
          "Name": "Emily is Away <3",
          "Sources": "Steam"
        },
        {
          "Name": "Zwei: The Ilvard Insurrection",
          "Sources": "Steam"
        },
        {
          "Name": "qop 2",
          "Sources": "Steam"
        },
        {
          "Name": "It came from space and ate our brains",
          "Sources": "Steam"
        },
        {
          "Name": "ANIMALITY",
          "Sources": "Steam"
        },
        {
          "Name": "汉末霸业免费版",
          "Sources": "Steam"
        },
        {
          "Name": "The King of Fighters 2003",
          "Sources": "Amazon"
        },
        {
          "Name": "XCOM 2",
          "Sources": "Steam"
        },
        {
          "Name": "Fortified",
          "Sources": "Steam"
        },
        {
          "Name": "Fling to the Finish",
          "Sources": "Steam"
        },
        {
          "Name": "Deadlight: Director's Cut",
          "Sources": "Amazon"
        },
        {
          "Name": "Lorelai",
          "Sources": "GOG"
        },
        {
          "Name": "The Elder Scrolls Online",
          "Sources": "Epic"
        },
        {
          "Name": "Keyboard Sports",
          "Sources": "Humble"
        },
        {
          "Name": "Shadowrun Returns",
          "Sources": "Steam"
        },
        {
          "Name": "Crazy Machines 3",
          "Sources": "Steam"
        },
        {
          "Name": "Big Fat Battle",
          "Sources": "Steam"
        },
        {
          "Name": "PBATOUR 23",
          "Sources": "Steam"
        },
        {
          "Name": "Goblin Dungeoneer",
          "Sources": "Steam"
        },
        {
          "Name": "kings call",
          "Sources": "Steam"
        },
        {
          "Name": "Cyber Hunter",
          "Sources": "Steam"
        },
        {
          "Name": "Project Winter",
          "Sources": "Steam"
        },
        {
          "Name": "Fell Seal: Arbiter's Mark",
          "Sources": "Amazon"
        },
        {
          "Name": "Dexter Stardust: Adventures in Outer Space",
          "Sources": "Amazon"
        },
        {
          "Name": "Yuppie Psycho",
          "Sources": "Steam"
        },
        {
          "Name": "Zuria",
          "Sources": "Steam"
        },
        {
          "Name": "HordeFighter2D",
          "Sources": "Steam"
        },
        {
          "Name": "Outlast",
          "Sources": "Humble"
        },
        {
          "Name": "I’m not a Monster",
          "Sources": "Steam"
        },
        {
          "Name": "Torchlight II",
          "Sources": "Epic"
        },
        {
          "Name": "Idle Spiral",
          "Sources": "Steam"
        },
        {
          "Name": "Lost Planet 3",
          "Sources": "Steam"
        },
        {
          "Name": "Leaf Blower Man",
          "Sources": "Steam"
        },
        {
          "Name": "Orbital Gear",
          "Sources": "Steam"
        },
        {
          "Name": "Subnautica",
          "Sources": "Epic"
        },
        {
          "Name": "Mitsurugi Kamui Hikae",
          "Sources": "Steam"
        },
        {
          "Name": "Beyond The Wire",
          "Sources": "Steam"
        },
        {
          "Name": "Fort Triumph",
          "Sources": "Epic"
        },
        {
          "Name": "Chess Ultra",
          "Sources": "Epic"
        },
        {
          "Name": "Sluggish Morss Pattern Circus",
          "Sources": "Humble"
        },
        {
          "Name": "Rec Room",
          "Sources": "Steam"
        },
        {
          "Name": "Edgar - Bokbok in Boulzac",
          "Sources": "Amazon"
        },
        {
          "Name": "METAL GEAR SOLID V: GROUND ZEROES",
          "Sources": "Steam"
        },
        {
          "Name": "Partial Control",
          "Sources": "Steam"
        },
        {
          "Name": "Almericus - Scarred Islands",
          "Sources": "itch.io"
        },
        {
          "Name": "Mortal Shell",
          "Sources": "Epic"
        },
        {
          "Name": "Five Nights at Freddy's 3",
          "Sources": "Steam"
        },
        {
          "Name": "Crusader Kings III",
          "Sources": "Steam"
        },
        {
          "Name": "Yury",
          "Sources": "Steam"
        },
        {
          "Name": "Hollow Knight (Sneak Peek)",
          "Sources": "Humble"
        },
        {
          "Name": "Galactic Civilizations III",
          "Sources": "Steam"
        },
        {
          "Name": "Ape Out",
          "Sources": "Amazon"
        },
        {
          "Name": "捕鱼娱乐城-真人千炮3D捕鱼",
          "Sources": "Steam"
        },
        {
          "Name": "Fear in Hospital",
          "Sources": "Steam"
        },
        {
          "Name": "The Dead Await: Prologue",
          "Sources": "Steam"
        },
        {
          "Name": "Doomdark's Revenge",
          "Sources": "GOG"
        },
        {
          "Name": "Card Game Simulator",
          "Sources": "Steam"
        },
        {
          "Name": "Crusader Kings Complete",
          "Sources": "Steam"
        },
        {
          "Name": "Cities in Motion",
          "Sources": "Steam"
        },
        {
          "Name": "Majesty 2 Collection",
          "Sources": "Amazon"
        },
        {
          "Name": "Bionic Commando Rearmed",
          "Sources": "Steam"
        },
        {
          "Name": "Aegis Defenders",
          "Sources": "Steam"
        },
        {
          "Name": "Knockout City",
          "Sources": "EA app"
        },
        {
          "Name": "Unturned",
          "Sources": "Steam"
        },
        {
          "Name": "Lovecraft's Untold Stories",
          "Sources": "GOG"
        },
        {
          "Name": "Pillars of Eternity - Definitive Edition",
          "Sources": "Epic"
        },
        {
          "Name": "Budget Backrooms",
          "Sources": "Steam"
        },
        {
          "Name": "Panzer Paladin",
          "Sources": "Steam"
        },
        {
          "Name": "High Hell",
          "Sources": "Amazon"
        },
        {
          "Name": "Guacamelee! 2",
          "Sources": "Steam"
        },
        {
          "Name": "Strider",
          "Sources": "Steam"
        },
        {
          "Name": "The Confines Of The Crown",
          "Sources": "Steam"
        },
        {
          "Name": "Wallace & Gromit: Fright of the Bumblebees",
          "Sources": "Amazon"
        },
        {
          "Name": "Party Hard 2 Alpha",
          "Sources": "Humble"
        },
        {
          "Name": "Satellite Reign",
          "Sources": "Steam"
        },
        {
          "Name": "Anarcute",
          "Sources": "Amazon"
        },
        {
          "Name": "Steredenn",
          "Sources": "Amazon"
        },
        {
          "Name": "Jalopy",
          "Sources": "Steam"
        },
        {
          "Name": "Strife",
          "Sources": "Steam"
        },
        {
          "Name": "Clatter",
          "Sources": "Steam"
        },
        {
          "Name": "Fox! Hen! Bag!",
          "Sources": "Steam"
        },
        {
          "Name": "Know Your Limits",
          "Sources": "Steam"
        },
        {
          "Name": "Pathway",
          "Sources": "Epic"
        },
        {
          "Name": "Sleeping Dogs: Definitive Edition",
          "Sources": "Steam"
        },
        {
          "Name": "fistful of nothing",
          "Sources": "Humble"
        },
        {
          "Name": "Scribblenauts Unlimited",
          "Sources": "Steam"
        },
        {
          "Name": "Naev",
          "Sources": "Steam"
        },
        {
          "Name": "SteamWorld Heist",
          "Sources": "Amazon"
        },
        {
          "Name": "Ultra Street Fighter IV",
          "Sources": "Steam"
        },
        {
          "Name": "Starbound - Unstable",
          "Sources": "Steam"
        },
        {
          "Name": "Pirates of Black Cove Gold",
          "Sources": "Steam"
        },
        {
          "Name": "Walk with the Living",
          "Sources": "Steam"
        },
        {
          "Name": "Samurai Shodown II",
          "Sources": "Amazon"
        },
        {
          "Name": "Shining Resonance Refrain",
          "Sources": "Steam"
        },
        {
          "Name": "Mega Coin Squad",
          "Sources": "Steam"
        },
        {
          "Name": "ASURA",
          "Sources": "Steam"
        },
        {
          "Name": "Realms of the Haunting",
          "Sources": "Steam"
        },
        {
          "Name": "Book of Demons",
          "Sources": "Steam"
        },
        {
          "Name": "Blockstorm",
          "Sources": "Steam"
        },
        {
          "Name": "Baldur's Gate II: Enhanced Edition",
          "Sources": "Amazon"
        },
        {
          "Name": "Astebreed: Definitive Edition",
          "Sources": "Steam"
        },
        {
          "Name": "Cyberpunk 2077 Goodies Collection",
          "Sources": "GOG"
        },
        {
          "Name": "Dungeon Renovation Simulator Prologue",
          "Sources": "Steam"
        },
        {
          "Name": "Tiny Survivors",
          "Sources": "Steam"
        },
        {
          "Name": "Honey, I Joined a Cult",
          "Sources": "Steam"
        },
        {
          "Name": "Roadwarden",
          "Sources": "Steam"
        },
        {
          "Name": "Fiendish Freddy's Big Top o' Fun",
          "Sources": "GOG"
        },
        {
          "Name": "Pumpkin Jack",
          "Sources": "Steam"
        },
        {
          "Name": "Adventures With a Girl",
          "Sources": "itch.io"
        },
        {
          "Name": "The Textorcist: The Story of Ray Bibbia",
          "Sources": "Steam"
        },
        {
          "Name": "Iratus",
          "Sources": "Epic"
        },
        {
          "Name": "Basement",
          "Sources": "Steam"
        },
        {
          "Name": "The Serpent Rogue",
          "Sources": "Steam"
        },
        {
          "Name": "FPS Chess",
          "Sources": "Steam"
        },
        {
          "Name": "GoBlaster",
          "Sources": "Steam"
        },
        {
          "Name": "PlanetSide 2",
          "Sources": "Steam"
        },
        {
          "Name": "Hokko Life",
          "Sources": "Steam"
        },
        {
          "Name": "PLANET ALPHA",
          "Sources": "Steam"
        },
        {
          "Name": "Skyrim Script Extender (SKSE)",
          "Sources": "Steam"
        },
        {
          "Name": "Vampire: The Masquerade - Bloodhunt",
          "Sources": "Steam"
        },
        {
          "Name": "Ageless",
          "Sources": "Steam"
        },
        {
          "Name": "Absolute Tactics: Daughters of Mercy",
          "Sources": "Amazon"
        },
        {
          "Name": "Craterbound",
          "Sources": "Steam"
        },
        {
          "Name": "Metrico+",
          "Sources": "Steam"
        },
        {
          "Name": "Cthulhu Saves the World",
          "Sources": "Steam"
        },
        {
          "Name": "Street Racing Syndicate",
          "Sources": "Steam"
        },
        {
          "Name": "Jazzpunk: Director's Cut",
          "Sources": "Steam"
        },
        {
          "Name": "Armored Fighter",
          "Sources": "Steam"
        },
        {
          "Name": "Prince of Suburbia - Part 1",
          "Sources": "Steam"
        },
        {
          "Name": "Double Cross",
          "Sources": "Amazon"
        },
        {
          "Name": "Volantia: Kingdom in the Sky",
          "Sources": "Humble"
        },
        {
          "Name": "The Last Blade",
          "Sources": "Amazon"
        },
        {
          "Name": "Brothers: A Tale of Two Sons",
          "Sources": "Amazon"
        },
        {
          "Name": "Tiltagon",
          "Sources": "Steam"
        },
        {
          "Name": "真修世界（Fairy Land）",
          "Sources": "Steam"
        },
        {
          "Name": "Super Meat Boy",
          "Sources": "Epic"
        },
        {
          "Name": "Retired Men's Nude Beach Volleyball",
          "Sources": "Humble"
        },
        {
          "Name": "Fran Bow",
          "Sources": "Steam"
        },
        {
          "Name": "PlanetSide 2 - Test",
          "Sources": "Steam"
        },
        {
          "Name": "F1 2018",
          "Sources": "Steam"
        },
        {
          "Name": "Hacknet",
          "Sources": "Humble"
        },
        {
          "Name": "Lead and Gold - Gangs of the Wild West",
          "Sources": "Steam"
        },
        {
          "Name": "Floating Point",
          "Sources": "Steam"
        },
        {
          "Name": "Poly Bridge",
          "Sources": "Steam"
        },
        {
          "Name": "Buriedbornes - Dungeon RPG",
          "Sources": "Steam"
        },
        {
          "Name": "Silence",
          "Sources": "Steam"
        },
        {
          "Name": "Book of Yog Idle RPG",
          "Sources": "Steam"
        },
        {
          "Name": "Rise of Eros",
          "Sources": "Steam"
        },
        {
          "Name": "ARK: Survival Of The Fittest",
          "Sources": "Steam"
        },
        {
          "Name": "Puzzle Monarch: Nile River",
          "Sources": "Steam"
        },
        {
          "Name": "RuneScape",
          "Sources": "Steam"
        },
        {
          "Name": "Deep Rock Galactic",
          "Sources": "Steam"
        },
        {
          "Name": "Auto Age: Standoff",
          "Sources": "Steam"
        },
        {
          "Name": "Nice Jumper",
          "Sources": "Steam"
        },
        {
          "Name": "Passing Pineview Forest",
          "Sources": "Steam"
        },
        {
          "Name": "Dishonored - Definitive Edition",
          "Sources": "Epic"
        },
        {
          "Name": "The Elder Scrolls V: Skyrim Special Edition",
          "Sources": "Steam"
        },
        {
          "Name": "Omno",
          "Sources": "Steam"
        },
        {
          "Name": "Old School RuneScape",
          "Sources": "Steam"
        },
        {
          "Name": "Halcyon 6",
          "Sources": "Epic"
        },
        {
          "Name": "Skyraine",
          "Sources": "Steam"
        },
        {
          "Name": "Turmoil",
          "Sources": "Amazon"
        },
        {
          "Name": "TAIKU MANSION",
          "Sources": "Steam"
        },
        {
          "Name": "Fishing Online",
          "Sources": "Steam"
        },
        {
          "Name": "Wizardry 6: Bane of the Cosmic Forge",
          "Sources": "Amazon"
        },
        {
          "Name": "qop 3",
          "Sources": "Steam"
        },
        {
          "Name": "Full Metal Furies",
          "Sources": "Steam"
        },
        {
          "Name": "2310 seconds in HELL",
          "Sources": "Steam"
        },
        {
          "Name": "click to ten",
          "Sources": "Steam"
        },
        {
          "Name": "Star Wars: Jedi Knight - Jedi Academy",
          "Sources": "Amazon"
        },
        {
          "Name": "Heaven Forest - VR MMO",
          "Sources": "Steam"
        },
        {
          "Name": "Under Pressure",
          "Sources": "Steam"
        },
        {
          "Name": "Ghostwire: Tokyo - Prelude",
          "Sources": "Steam"
        },
        {
          "Name": "Hyper Light Drifter",
          "Sources": "Epic"
        },
        {
          "Name": "Coloring Book for Kids",
          "Sources": "Steam"
        },
        {
          "Name": "Destiny Duel",
          "Sources": "Steam"
        },
        {
          "Name": "Rise of Industry",
          "Sources": "Epic"
        },
        {
          "Name": "Au Sable",
          "Sources": "itch.io"
        },
        {
          "Name": "Dirty Bomb",
          "Sources": "Steam"
        },
        {
          "Name": "Erin's Naughty Friday Prologue",
          "Sources": "Steam"
        },
        {
          "Name": "Higurashi When They Cry Hou - Ch.1 Onikakushi",
          "Sources": "GOG"
        },
        {
          "Name": "No Time To Explain Remastered",
          "Sources": "Steam"
        },
        {
          "Name": "Sam & Max 204: Chariots of the Dogs",
          "Sources": "Steam"
        },
        {
          "Name": "Super Daryl Deluxe",
          "Sources": "Steam"
        },
        {
          "Name": "Rekindling The Flame",
          "Sources": "Steam"
        },
        {
          "Name": "Aliens: Fireteam Elite",
          "Sources": "Steam"
        },
        {
          "Name": "Kingdoms of Amalur: Re-Reckoning",
          "Sources": "Steam"
        },
        {
          "Name": "For The King",
          "Sources": "Amazon"
        },
        {
          "Name": "Wizardry 8",
          "Sources": "Amazon"
        },
        {
          "Name": "The Beast Inside",
          "Sources": "Steam"
        },
        {
          "Name": "Hello Neighbor",
          "Sources": "Epic"
        },
        {
          "Name": "iREC",
          "Sources": "Steam"
        },
        {
          "Name": "Crashlands",
          "Sources": "Epic"
        },
        {
          "Name": "Cyber Hook",
          "Sources": "Steam"
        },
        {
          "Name": "BATTLETECH",
          "Sources": "Steam"
        },
        {
          "Name": "Arrog",
          "Sources": "Humble"
        },
        {
          "Name": "Synced",
          "Sources": "itch.io"
        },
        {
          "Name": "Brütal Legend",
          "Sources": "Amazon"
        },
        {
          "Name": "Half-Life: Opposing Force",
          "Sources": "Steam"
        },
        {
          "Name": "Linea, the Game",
          "Sources": "Steam"
        },
        {
          "Name": "PSI Masquerade",
          "Sources": "Steam"
        },
        {
          "Name": "Evan's Remains",
          "Sources": "Amazon"
        },
        {
          "Name": "Tomb Raider: Anniversary",
          "Sources": "Steam"
        },
        {
          "Name": "Rogue Rocks",
          "Sources": "Steam"
        },
        {
          "Name": "Hiveswap Friendsim",
          "Sources": "Steam"
        },
        {
          "Name": "Metal Slug X",
          "Sources": "Amazon"
        },
        {
          "Name": "Star Conflict",
          "Sources": "Steam"
        },
        {
          "Name": "Hyper Scape",
          "Sources": "Ubisoft Connect"
        },
        {
          "Name": "Indiana Jones and the Fate of Atlantis",
          "Sources": "Amazon"
        },
        {
          "Name": "Commander: Conquest of the Americas Gold",
          "Sources": "Steam"
        },
        {
          "Name": "Evergarden",
          "Sources": "Steam"
        },
        {
          "Name": "Last Resort",
          "Sources": "Amazon"
        },
        {
          "Name": "Turnip Boy Commits Tax Evasion",
          "Sources": "Amazon"
        },
        {
          "Name": "CreatorCrate",
          "Sources": "Humble"
        },
        {
          "Name": "Legendary Hoplite: Arachne’s Trial",
          "Sources": "Steam"
        },
        {
          "Name": "Saints Row IV",
          "Sources": "Steam"
        },
        {
          "Name": "Lethal League Blaze",
          "Sources": "Steam"
        },
        {
          "Name": "Sure Footing",
          "Sources": "Steam"
        },
        {
          "Name": "Eternal Threads",
          "Sources": "Steam"
        },
        {
          "Name": "The First Tree",
          "Sources": "Epic"
        },
        {
          "Name": "HordeCore: Training Ground",
          "Sources": "GOG"
        },
        {
          "Name": "Child of Light",
          "Sources": "Steam"
        },
        {
          "Name": "Valfaris",
          "Sources": "Steam"
        },
        {
          "Name": "DOOM 3",
          "Sources": "GOG"
        },
        {
          "Name": "DR4X",
          "Sources": "itch.io"
        },
        {
          "Name": "Scribblenauts Unmasked",
          "Sources": "Steam"
        },
        {
          "Name": "Agatha Knife",
          "Sources": "Amazon"
        },
        {
          "Name": "Randy Blaster 3D",
          "Sources": "Steam"
        },
        {
          "Name": "Beacon Patrol: First Horizons",
          "Sources": "Steam"
        },
        {
          "Name": "The Most Lecherous",
          "Sources": "Steam"
        },
        {
          "Name": "Syberia 2",
          "Sources": "Steam"
        },
        {
          "Name": "The Hunt",
          "Sources": "Steam"
        },
        {
          "Name": "Cloudborn",
          "Sources": "Steam"
        },
        {
          "Name": "GOAT OF DUTY",
          "Sources": "Steam"
        },
        {
          "Name": "HITMAN 2",
          "Sources": "Steam"
        },
        {
          "Name": "Cosmic Carnage: Prologue",
          "Sources": "Steam"
        },
        {
          "Name": "Epistory - Typing Chronicles",
          "Sources": "Epic"
        },
        {
          "Name": "The Ship Tutorial",
          "Sources": "Steam"
        },
        {
          "Name": "Cave Crawler",
          "Sources": "Steam"
        },
        {
          "Name": "Hero's Hour",
          "Sources": "Steam"
        },
        {
          "Name": "Dishonored: Death of the Outsider",
          "Sources": "Epic"
        },
        {
          "Name": "Prevent The Fall",
          "Sources": "Steam"
        },
        {
          "Name": "AER Memories of Old",
          "Sources": "Steam"
        },
        {
          "Name": "2000:1: A Space Felony",
          "Sources": "Humble"
        },
        {
          "Name": "Crown Trick",
          "Sources": "Steam"
        },
        {
          "Name": "Grappling Gunners: Arena FPS",
          "Sources": "Steam"
        },
        {
          "Name": "RiME",
          "Sources": "Epic"
        },
        {
          "Name": "Fractured Minds",
          "Sources": "Amazon"
        },
        {
          "Name": "RoboSquad Revolution",
          "Sources": "Steam"
        },
        {
          "Name": "Lacuna – A Sci-Fi Noir Adventure",
          "Sources": "GOG"
        },
        {
          "Name": "Go Go Electric Samurai",
          "Sources": "Steam"
        },
        {
          "Name": "Q.U.B.E. 2",
          "Sources": "Epic"
        },
        {
          "Name": "战姬军团",
          "Sources": "Steam"
        },
        {
          "Name": "FLOWFALL",
          "Sources": "itch.io"
        },
        {
          "Name": "FEMINAZI: 3000",
          "Sources": "Steam"
        },
        {
          "Name": "Howlbreath",
          "Sources": "Steam"
        },
        {
          "Name": "Tap Wizard 2",
          "Sources": "Steam"
        },
        {
          "Name": "Hector: Ep 2",
          "Sources": "Steam"
        },
        {
          "Name": "Gang of Four",
          "Sources": "Steam"
        },
        {
          "Name": "Bomber Crew",
          "Sources": "Amazon"
        },
        {
          "Name": "Townsmen - A Kingdom Rebuilt",
          "Sources": "Steam"
        },
        {
          "Name": "Glyph-Bound: Kotodama",
          "Sources": "Steam"
        },
        {
          "Name": "Everhood",
          "Sources": "Steam"
        },
        {
          "Name": "StrangerZ",
          "Sources": "Steam"
        },
        {
          "Name": "Pixel Puzzles 2: Anime",
          "Sources": "Indiegala"
        },
        {
          "Name": "Reigns: Game of Thrones",
          "Sources": "Steam"
        },
        {
          "Name": "Genesis Alpha One Deluxe Edition",
          "Sources": "Amazon"
        },
        {
          "Name": "Grim",
          "Sources": "itch.io"
        },
        {
          "Name": "Nokta",
          "Sources": "Steam"
        },
        {
          "Name": "She Remembered Caterpillars",
          "Sources": "Steam"
        },
        {
          "Name": "Europa Universalis II",
          "Sources": "GOG"
        },
        {
          "Name": "Minoria",
          "Sources": "Steam"
        },
        {
          "Name": "Yukiusa",
          "Sources": "Steam"
        },
        {
          "Name": "Grand Theft Auto III",
          "Sources": "Steam"
        },
        {
          "Name": "Relicta",
          "Sources": "Steam"
        },
        {
          "Name": "King of Avalon",
          "Sources": "Steam"
        },
        {
          "Name": "Devil's Kiss",
          "Sources": "GOG"
        },
        {
          "Name": "ENDLESS Space 2",
          "Sources": "Steam"
        },
        {
          "Name": "Kingdom: New Lands",
          "Sources": "Steam"
        },
        {
          "Name": "STG Football",
          "Sources": "Steam"
        },
        {
          "Name": "Citizens of Earth",
          "Sources": "Steam"
        },
        {
          "Name": "Grand Theft Auto: San Andreas",
          "Sources": "Steam"
        },
        {
          "Name": "Cursed Enigma - Priest and Prayers",
          "Sources": "Steam"
        },
        {
          "Name": "Tross",
          "Sources": "Steam"
        },
        {
          "Name": "HUMANS CONNECT",
          "Sources": "Steam"
        },
        {
          "Name": "20 Minute Metropolis",
          "Sources": "Humble"
        },
        {
          "Name": "Road Redemption",
          "Sources": "Steam"
        },
        {
          "Name": "20XX",
          "Sources": "Epic"
        },
        {
          "Name": "Railway Empire",
          "Sources": "Steam"
        },
        {
          "Name": "RetroArch",
          "Sources": "Steam"
        },
        {
          "Name": "Kabounce",
          "Sources": "Steam"
        },
        {
          "Name": "Bomb Defense",
          "Sources": "Steam"
        },
        {
          "Name": "Kingdom Rush",
          "Sources": "Steam"
        },
        {
          "Name": "SteamWorld Dig 2",
          "Sources": "Amazon"
        },
        {
          "Name": "Quintaesencia",
          "Sources": "Steam"
        },
        {
          "Name": "Tiny Troopers Joint Ops",
          "Sources": "Amazon"
        },
        {
          "Name": "Horace",
          "Sources": "Epic"
        },
        {
          "Name": "Fight'N Rage",
          "Sources": "Steam"
        },
        {
          "Name": "Shaq Fu 2",
          "Sources": "Amazon"
        },
        {
          "Name": "MapleStory 2",
          "Sources": "Steam"
        },
        {
          "Name": "Gun Monkeys",
          "Sources": "Steam"
        },
        {
          "Name": "Day of Defeat: Source",
          "Sources": "Steam"
        },
        {
          "Name": "Nimbatus - The Space Drone Constructor",
          "Sources": "Steam"
        },
        {
          "Name": "MultiVersus",
          "Sources": "Epic"
        },
        {
          "Name": "Project RPG Remastered",
          "Sources": "Steam"
        },
        {
          "Name": "WhiteLily 1：丽丽公主",
          "Sources": "Steam"
        },
        {
          "Name": "b 2",
          "Sources": "Steam"
        },
        {
          "Name": "Lost Light",
          "Sources": "Steam"
        },
        {
          "Name": "Firefly Online Cortex",
          "Sources": "Steam"
        },
        {
          "Name": "Ruby Heart",
          "Sources": "Steam"
        },
        {
          "Name": "Killing Floor",
          "Sources": "Steam"
        },
        {
          "Name": "World War III: Black Gold",
          "Sources": "Steam"
        },
        {
          "Name": "Theme Hospital",
          "Sources": "EA app"
        },
        {
          "Name": "The Call of Karen",
          "Sources": "Steam"
        },
        {
          "Name": "Caverns of Mars Recharged",
          "Sources": "Epic"
        },
        {
          "Name": "Out of Line",
          "Sources": "Amazon"
        },
        {
          "Name": "天若有情",
          "Sources": "Steam"
        },
        {
          "Name": "TheMaze",
          "Sources": "itch.io"
        },
        {
          "Name": "The War",
          "Sources": "Steam"
        },
        {
          "Name": "Fortune-499",
          "Sources": "Steam"
        },
        {
          "Name": "Hotline Miami 2: Wrong Number",
          "Sources": "Amazon"
        },
        {
          "Name": "The Darkside Detective: A Fumble in the Dark",
          "Sources": "Amazon"
        },
        {
          "Name": "Wytchwood",
          "Sources": "Amazon"
        },
        {
          "Name": "Divinity II: Developer's Cut",
          "Sources": "Steam"
        },
        {
          "Name": "A Tiny Sticker Tale",
          "Sources": "Amazon"
        },
        {
          "Name": "L.A. Noire",
          "Sources": "Steam"
        },
        {
          "Name": "Rogue Company",
          "Sources": "Epic"
        },
        {
          "Name": "Little Inferno",
          "Sources": "Epic"
        },
        {
          "Name": "XCOM 2",
          "Sources": "Epic"
        },
        {
          "Name": "Counter-Strike: Condition Zero Deleted Scenes",
          "Sources": "Steam"
        },
        {
          "Name": "Arcade Paradise",
          "Sources": "Steam"
        },
        {
          "Name": "DARQ",
          "Sources": "Epic"
        },
        {
          "Name": "Competitive Checkers",
          "Sources": "Steam"
        },
        {
          "Name": "Republique",
          "Sources": "Amazon"
        },
        {
          "Name": "Memories of a Vagabond",
          "Sources": "Steam"
        },
        {
          "Name": "Drakensang Online",
          "Sources": "Steam"
        },
        {
          "Name": "三国计",
          "Sources": "Steam"
        },
        {
          "Name": "Cat Warfare",
          "Sources": "Steam"
        },
        {
          "Name": "Magic The Gathering Arena",
          "Sources": "Epic"
        },
        {
          "Name": "Subserial Network",
          "Sources": "Humble"
        },
        {
          "Name": "GRID Autosport",
          "Sources": "Steam"
        },
        {
          "Name": "Devil May Cry HD Collection: Devil May Cry HD",
          "Sources": "Amazon"
        },
        {
          "Name": "R-COIL",
          "Sources": "Steam"
        },
        {
          "Name": "The Awesome Adventures of Captain Spirit",
          "Sources": "Steam"
        },
        {
          "Name": "Draw Your Game",
          "Sources": "Steam"
        },
        {
          "Name": "Moon Hunters",
          "Sources": "Steam"
        },
        {
          "Name": "The Uncertain: Last Quiet Day",
          "Sources": "Steam"
        },
        {
          "Name": "Advent",
          "Sources": "Steam"
        },
        {
          "Name": "Last Encounter",
          "Sources": "Steam"
        },
        {
          "Name": "Rise of the Tomb Raider",
          "Sources": "Steam"
        },
        {
          "Name": "Kero Blaster",
          "Sources": "Steam"
        },
        {
          "Name": "Adam Wolfe",
          "Sources": "Amazon"
        },
        {
          "Name": "Blasphemous",
          "Sources": "Amazon"
        },
        {
          "Name": "Hector: Ep 1",
          "Sources": "Steam"
        },
        {
          "Name": "Drift.Wav",
          "Sources": "Steam"
        },
        {
          "Name": "Time Raiders",
          "Sources": "Steam"
        },
        {
          "Name": "Castle on the Coast",
          "Sources": "Amazon"
        },
        {
          "Name": "Once Upon A Crime In The West",
          "Sources": "Humble"
        },
        {
          "Name": "LostWinds 2: Winter of the Melodias",
          "Sources": "Steam"
        },
        {
          "Name": "LEGO Star Wars: The Complete Saga",
          "Sources": "Steam"
        },
        {
          "Name": "Risen",
          "Sources": "Steam"
        },
        {
          "Name": "The Metronomicon",
          "Sources": "Amazon"
        },
        {
          "Name": "Air Brawl",
          "Sources": "Steam"
        },
        {
          "Name": "APICO",
          "Sources": "Amazon"
        },
        {
          "Name": "The Banner Saga 2",
          "Sources": "Steam"
        },
        {
          "Name": "Founders' Fortune",
          "Sources": "Steam"
        },
        {
          "Name": "Two Point Hospital",
          "Sources": "Steam"
        },
        {
          "Name": "Stikbold! A Dodgeball Adventure",
          "Sources": "Amazon"
        },
        {
          "Name": "Diablo Immortal",
          "Sources": "Battle.net"
        },
        {
          "Name": "Revita",
          "Sources": "Amazon"
        },
        {
          "Name": "Retired Men's Nude Beach Volleyball",
          "Sources": "Humble"
        },
        {
          "Name": "Watch_Dogs",
          "Sources": "Ubisoft Connect"
        },
        {
          "Name": "3on3 FreeStyle: Rebound",
          "Sources": "Steam"
        },
        {
          "Name": "Bless Unleashed",
          "Sources": "Steam"
        },
        {
          "Name": "DogeFight",
          "Sources": "Steam"
        },
        {
          "Name": "FINAL FANTASY VII EVER CRISIS",
          "Sources": "Steam"
        },
        {
          "Name": "COMBAT ARMS: THE CLASSIC",
          "Sources": "Steam"
        },
        {
          "Name": "Figment",
          "Sources": "Amazon"
        },
        {
          "Name": "Ancient Planet",
          "Sources": "Steam"
        },
        {
          "Name": "Killing Floor Mod: Defence Alliance 2",
          "Sources": "Steam"
        },
        {
          "Name": "AirMech",
          "Sources": "Steam"
        },
        {
          "Name": "Beyond Divinity",
          "Sources": "Steam"
        },
        {
          "Name": "Abyss Odyssey",
          "Sources": "Steam"
        },
        {
          "Name": "Anomaly Warzone Earth",
          "Sources": "Steam"
        },
        {
          "Name": "A Total War Saga: TROY",
          "Sources": "Epic"
        },
        {
          "Name": "Abandon Ship",
          "Sources": "Amazon"
        },
        {
          "Name": "Ken Follett's The Pillars of the Earth",
          "Sources": "Steam"
        },
        {
          "Name": "SMASH LEGENDS",
          "Sources": "Steam"
        },
        {
          "Name": "Abyss The Forgotten Past: Prologue",
          "Sources": "Steam"
        },
        {
          "Name": "Shadow Warrior Classic Complete",
          "Sources": "GOG"
        },
        {
          "Name": "Gnumz: Masters of Defense",
          "Sources": "Steam"
        },
        {
          "Name": "Rover Rescue",
          "Sources": "Steam"
        },
        {
          "Name": "Siren Head: Awakening",
          "Sources": "Steam"
        },
        {
          "Name": "FreeCell Quest",
          "Sources": "Steam"
        },
        {
          "Name": "Golden Light",
          "Sources": "Steam"
        },
        {
          "Name": "Company of Heroes",
          "Sources": "Steam"
        },
        {
          "Name": "LEGO Batman 3 Beyond Gotham",
          "Sources": "Epic"
        },
        {
          "Name": "Six Braves 🕌",
          "Sources": "Steam"
        },
        {
          "Name": "Escape From The Aliens In Outer Space",
          "Sources": "Humble"
        },
        {
          "Name": "The Swords of Ditto: Mormo's Curse",
          "Sources": "Steam"
        },
        {
          "Name": "Gone Home",
          "Sources": "Amazon"
        },
        {
          "Name": "Dragon Age: Origins - Ultimate Edition",
          "Sources": "EA app"
        },
        {
          "Name": "Wandersong",
          "Sources": "Steam"
        },
        {
          "Name": "Save the Pirate",
          "Sources": "Steam"
        },
        {
          "Name": "Rival Rides",
          "Sources": "Steam"
        },
        {
          "Name": "Alien Breed 3: Descent",
          "Sources": "GOG"
        },
        {
          "Name": "Treadnauts",
          "Sources": "Amazon"
        },
        {
          "Name": "Don't Stand Out",
          "Sources": "Steam"
        },
        {
          "Name": "Corridor 7: Alien Invasion",
          "Sources": "GOG"
        },
        {
          "Name": "Braid",
          "Sources": "Steam"
        },
        {
          "Name": "art of rally",
          "Sources": "Epic"
        },
        {
          "Name": "Tales of Monkey Island: Chapter 5 - Rise of the Pirate God",
          "Sources": "Steam"
        },
        {
          "Name": "Hide & Crab",
          "Sources": "Steam"
        },
        {
          "Name": "LostWinds",
          "Sources": "Steam"
        },
        {
          "Name": "Serious Sam Classic: The Second Encounter",
          "Sources": "Steam"
        },
        {
          "Name": "Poker Night 2",
          "Sources": "Steam"
        },
        {
          "Name": "Omega Strikers",
          "Sources": "Steam"
        },
        {
          "Name": "City of Gangsters",
          "Sources": "Epic"
        },
        {
          "Name": "Deus Ex: Mankind Divided",
          "Sources": "Steam"
        },
        {
          "Name": "Getting Over It with Bennett Foddy",
          "Sources": "Humble"
        },
        {
          "Name": "Rogue Port - Red Nightmare",
          "Sources": "Steam"
        },
        {
          "Name": "Enter the Gungeon",
          "Sources": "Epic"
        },
        {
          "Name": "Little Adventurer III",
          "Sources": "Steam"
        },
        {
          "Name": "Your Adventure",
          "Sources": "Steam"
        },
        {
          "Name": "VRrOOm",
          "Sources": "Steam"
        },
        {
          "Name": "Grow Defense",
          "Sources": "Steam"
        },
        {
          "Name": "Glitchers: Hack 'em Up",
          "Sources": "Steam"
        },
        {
          "Name": "World of Tanks Blitz",
          "Sources": "Steam"
        },
        {
          "Name": "Fisticubes",
          "Sources": "Steam"
        },
        {
          "Name": "Aegis Defenders",
          "Sources": "Amazon"
        },
        {
          "Name": "Steel & Steam: Episode 1",
          "Sources": "Steam"
        },
        {
          "Name": "Forts",
          "Sources": "Steam"
        },
        {
          "Name": "The I of the Dragon",
          "Sources": "Steam"
        },
        {
          "Name": "Mind Spheres",
          "Sources": "Steam"
        },
        {
          "Name": "Flight of the Amazon Queen",
          "Sources": "GOG"
        },
        {
          "Name": "Half-Life 2: Lost Coast",
          "Sources": "Steam"
        },
        {
          "Name": "Dead Ground",
          "Sources": "Steam"
        },
        {
          "Name": "Head 2 Head",
          "Sources": "Steam"
        },
        {
          "Name": "The Messenger",
          "Sources": "Steam"
        },
        {
          "Name": "Call Of Pixel: Close Quarters",
          "Sources": "Steam"
        },
        {
          "Name": "Definya",
          "Sources": "Steam"
        },
        {
          "Name": "Outward",
          "Sources": "Steam"
        },
        {
          "Name": "OVERKILL's The Walking Dead - BETA",
          "Sources": "Steam"
        },
        {
          "Name": "South Park: The Stick of Truth",
          "Sources": "Steam"
        },
        {
          "Name": "Lost in the Dungeon",
          "Sources": "Steam"
        },
        {
          "Name": "The Fall",
          "Sources": "Steam"
        },
        {
          "Name": "Furi Demake",
          "Sources": "Steam"
        },
        {
          "Name": "The Red Strings Club",
          "Sources": "Amazon"
        },
        {
          "Name": "Tabletop Playground",
          "Sources": "Steam"
        },
        {
          "Name": "Dungeon Escape",
          "Sources": "Steam"
        },
        {
          "Name": "The Banner Saga",
          "Sources": "Amazon"
        },
        {
          "Name": "Stories Untold",
          "Sources": "Epic"
        },
        {
          "Name": "Dead Space",
          "Sources": "EA app"
        },
        {
          "Name": "Battlefield V",
          "Sources": "EA app"
        },
        {
          "Name": "Knight Club",
          "Sources": "Humble"
        },
        {
          "Name": "Where the Water Tastes Like Wine",
          "Sources": "Steam"
        },
        {
          "Name": "Viscera Cleanup Detail: Shadow Warrior",
          "Sources": "Steam"
        },
        {
          "Name": "200% Mixed Juice!",
          "Sources": "Steam"
        },
        {
          "Name": "Sevgilim Olur musun ?",
          "Sources": "Steam"
        },
        {
          "Name": "Shattered - Tale of the Forgotten King",
          "Sources": "Amazon"
        },
        {
          "Name": "Cube Link",
          "Sources": "Steam"
        },
        {
          "Name": "X-Blades",
          "Sources": "Steam"
        },
        {
          "Name": "Escape : Lia",
          "Sources": "Steam"
        },
        {
          "Name": "The Suicide of Rachel Foster",
          "Sources": "Steam"
        },
        {
          "Name": "Titan Revenge",
          "Sources": "Steam"
        },
        {
          "Name": "Drones, The Human Condition",
          "Sources": "Steam"
        },
        {
          "Name": "Peaky Blinders: Mastermind",
          "Sources": "Amazon"
        },
        {
          "Name": "State of Survival",
          "Sources": "Steam"
        },
        {
          "Name": "Temple of Xiala",
          "Sources": "Steam"
        },
        {
          "Name": "Monaco",
          "Sources": "Steam"
        },
        {
          "Name": "The Official GamingTaylor Game, Great Job!",
          "Sources": "Steam"
        },
        {
          "Name": "Nongunz: Doppelganger Edition",
          "Sources": "Steam"
        },
        {
          "Name": "Fahrenheit: Indigo Prophecy Remastered",
          "Sources": "Steam"
        },
        {
          "Name": "Bad Day",
          "Sources": "Steam"
        },
        {
          "Name": "Monster Sanctuary",
          "Sources": "Steam"
        },
        {
          "Name": "Buccaneers! The New Age of Piracy",
          "Sources": "Steam"
        },
        {
          "Name": "Machinist",
          "Sources": "Steam"
        },
        {
          "Name": "THE BUTTON",
          "Sources": "Steam"
        },
        {
          "Name": "Closers",
          "Sources": "Steam"
        },
        {
          "Name": "UpGun",
          "Sources": "Steam"
        },
        {
          "Name": "The Textorcist: The Story of Ray Bibbia",
          "Sources": "GOG"
        },
        {
          "Name": "The Escapists",
          "Sources": "Amazon"
        },
        {
          "Name": "Breach & Clear",
          "Sources": "Amazon"
        },
        {
          "Name": "Stargunner",
          "Sources": "GOG"
        },
        {
          "Name": "Alice: Madness Returns",
          "Sources": "Steam"
        },
        {
          "Name": "DC Universe Online",
          "Sources": "Steam"
        },
        {
          "Name": "Pumped BMX",
          "Sources": "Amazon"
        },
        {
          "Name": "World of Warcraft",
          "Sources": "Battle.net"
        },
        {
          "Name": "Colin McRae Rally",
          "Sources": "Steam"
        },
        {
          "Name": "Shadow Tactics: Blades of the Shogun",
          "Sources": "Amazon"
        },
        {
          "Name": "Cat Quest",
          "Sources": "Amazon"
        },
        {
          "Name": "Toybox Turbos",
          "Sources": "Steam"
        },
        {
          "Name": "INDUSTRIA",
          "Sources": "Steam"
        },
        {
          "Name": "Borderlands: The Pre-Sequel",
          "Sources": "Steam"
        },
        {
          "Name": "Path of Exile",
          "Sources": "Steam"
        },
        {
          "Name": "Uriel's Chasm",
          "Sources": "Steam"
        },
        {
          "Name": "Speed Brawl",
          "Sources": "Epic"
        },
        {
          "Name": "SeaFeud",
          "Sources": "Steam"
        },
        {
          "Name": "SIMULACRA",
          "Sources": "Steam"
        },
        {
          "Name": "SUPERHOT",
          "Sources": "Amazon"
        },
        {
          "Name": "Desktop Mark",
          "Sources": "Steam"
        },
        {
          "Name": "Resonite",
          "Sources": "Steam"
        },
        {
          "Name": "Prison Architect",
          "Sources": "Steam"
        },
        {
          "Name": "Darksiders II Deathinitive Edition",
          "Sources": "Steam"
        },
        {
          "Name": "Genesis Noir",
          "Sources": "Steam"
        },
        {
          "Name": "Grand Theft Auto V",
          "Sources": "Steam"
        },
        {
          "Name": "Kingdom Two Crowns",
          "Sources": "Steam"
        },
        {
          "Name": "Hyperdrive Massacre",
          "Sources": "Steam"
        },
        {
          "Name": "Canyon Capers",
          "Sources": "Steam"
        },
        {
          "Name": "Paratopic",
          "Sources": "Steam"
        },
        {
          "Name": "Phoenix Point",
          "Sources": "Steam"
        },
        {
          "Name": "Shop Titans",
          "Sources": "Epic"
        },
        {
          "Name": "Ａクラス",
          "Sources": "Steam"
        },
        {
          "Name": "Half-Life 2",
          "Sources": "Steam"
        },
        {
          "Name": "Imperator: Rome",
          "Sources": "Steam"
        },
        {
          "Name": "Sam & Max Hit the Road",
          "Sources": "Amazon"
        },
        {
          "Name": "Flak",
          "Sources": "Steam"
        },
        {
          "Name": "Rock of Ages 2",
          "Sources": "Steam"
        },
        {
          "Name": "Drawkanoid",
          "Sources": "Humble"
        },
        {
          "Name": "Warhammer 40,000: Gladius - Relics of War",
          "Sources": "Epic"
        },
        {
          "Name": "Resident Evil Revelations 2",
          "Sources": "Steam"
        },
        {
          "Name": "The Shapeshifting Detective",
          "Sources": "Steam"
        },
        {
          "Name": "Sam & Max 102: Situation: Comedy",
          "Sources": "Steam"
        },
        {
          "Name": "Company of Heroes: Tales of Valor",
          "Sources": "Steam"
        },
        {
          "Name": "War Trigger 2",
          "Sources": "Steam"
        },
        {
          "Name": "梦本无忧",
          "Sources": "Steam"
        },
        {
          "Name": "Shadow Warrior",
          "Sources": "Steam"
        },
        {
          "Name": "Fear of Neighbours",
          "Sources": "Steam"
        },
        {
          "Name": "Pixel Puzzles: UndeadZ",
          "Sources": "Steam"
        },
        {
          "Name": "Kunai Strike",
          "Sources": "Steam"
        },
        {
          "Name": "The Groundz",
          "Sources": "Humble"
        },
        {
          "Name": "Hotline Miami",
          "Sources": "Steam"
        },
        {
          "Name": "Zak McKracken and the Alien Mindbenders",
          "Sources": "Amazon"
        },
        {
          "Name": "Blazing Chrome",
          "Sources": "Amazon"
        },
        {
          "Name": "Kerbal Space Program",
          "Sources": "Steam"
        },
        {
          "Name": "Call of Duty: WWII",
          "Sources": "Steam"
        },
        {
          "Name": "PING 1.5+",
          "Sources": "Steam"
        },
        {
          "Name": "Ylands",
          "Sources": "Steam"
        },
        {
          "Name": "Elewar: Fused Survivors",
          "Sources": "Steam"
        },
        {
          "Name": "Pew Dew Redemption",
          "Sources": "Steam"
        },
        {
          "Name": "Fallout 4",
          "Sources": "Steam"
        },
        {
          "Name": "ScourgeBringer",
          "Sources": "Amazon"
        },
        {
          "Name": "Q.U.B.E. 2",
          "Sources": "Steam"
        },
        {
          "Name": "Against All Odds",
          "Sources": "Epic"
        },
        {
          "Name": "Dr. Kobushi's Labyrinthine Laboratory",
          "Sources": "itch.io"
        },
        {
          "Name": "Top Trumps Turbo",
          "Sources": "Steam"
        },
        {
          "Name": "Batman: Arkham Origins",
          "Sources": "Steam"
        },
        {
          "Name": "Rage Melee",
          "Sources": "Steam"
        },
        {
          "Name": "Quake",
          "Sources": "Epic"
        },
        {
          "Name": "Football Manager 2022",
          "Sources": "Epic"
        },
        {
          "Name": "Drawkanoid",
          "Sources": "Humble"
        },
        {
          "Name": "Cart Crawlers  Alpha",
          "Sources": "itch.io"
        },
        {
          "Name": "Driftland: The Magic Revival",
          "Sources": "Steam"
        },
        {
          "Name": "Never Alone (Kisima Ingitchuna)",
          "Sources": "Epic"
        },
        {
          "Name": "112 Operator",
          "Sources": "Steam"
        },
        {
          "Name": "Swimsanity",
          "Sources": "Amazon"
        },
        {
          "Name": "Just Cause 3",
          "Sources": "Steam"
        },
        {
          "Name": "Daisho: Survival of a Samurai",
          "Sources": "Steam"
        },
        {
          "Name": "Hope of humanity",
          "Sources": "Steam"
        },
        {
          "Name": "Neurodeck: Psychological Deckbuilder",
          "Sources": "GOG"
        },
        {
          "Name": "Smoke and Sacrifice",
          "Sources": "Amazon"
        },
        {
          "Name": "We Were Here Too",
          "Sources": "Steam"
        },
        {
          "Name": "Counter-Strike 2",
          "Sources": "Steam"
        },
        {
          "Name": "Astra Ignota",
          "Sources": "Steam"
        },
        {
          "Name": "DEATHLOOP",
          "Sources": "Epic"
        },
        {
          "Name": "Cosmonautica",
          "Sources": "Steam"
        },
        {
          "Name": "Patch Quest",
          "Sources": "Steam"
        },
        {
          "Name": "8Doors: Arum's Afterlife Adventure",
          "Sources": "Steam"
        },
        {
          "Name": "Sam & Max 202: Moai Better Blues",
          "Sources": "Steam"
        },
        {
          "Name": "Bacteria",
          "Sources": "Steam"
        },
        {
          "Name": "Mordheim: City of the Damned",
          "Sources": "Steam"
        },
        {
          "Name": "King of the World",
          "Sources": "Steam"
        },
        {
          "Name": "Sunless Sea",
          "Sources": "Steam"
        },
        {
          "Name": "Counter-Strike: Condition Zero",
          "Sources": "Steam"
        },
        {
          "Name": "巨龙召唤",
          "Sources": "Steam"
        },
        {
          "Name": "Swords and Soldiers 2 Shawarmageddon",
          "Sources": "Steam"
        },
        {
          "Name": "Bad North",
          "Sources": "Steam"
        },
        {
          "Name": "Christmas Luge",
          "Sources": "Steam"
        },
        {
          "Name": "Warhammer 40,000: Gladius - Relics of War",
          "Sources": "Steam"
        },
        {
          "Name": "SOULCALIBUR VI",
          "Sources": "Steam"
        },
        {
          "Name": "HD Wallpaper",
          "Sources": "Epic"
        },
        {
          "Name": "Sakura Spirit",
          "Sources": "Steam"
        },
        {
          "Name": "Stories: The Path of Destinies",
          "Sources": "Steam"
        },
        {
          "Name": "Influent",
          "Sources": "Humble"
        },
        {
          "Name": "I Am Not Crazy",
          "Sources": "itch.io"
        },
        {
          "Name": "EXAPUNKS: TEC Redshift Player",
          "Sources": "Steam"
        },
        {
          "Name": "Puzzle Quest 3",
          "Sources": "Steam"
        },
        {
          "Name": "Control Ultimate Edition",
          "Sources": "GOG"
        },
        {
          "Name": "Die in the Dungeon: Origins",
          "Sources": "Steam"
        },
        {
          "Name": "Super Adventure Hand",
          "Sources": "Amazon"
        },
        {
          "Name": "Lights Off!",
          "Sources": "Steam"
        },
        {
          "Name": "FPS Game: Dev Test",
          "Sources": "Steam"
        },
        {
          "Name": "Werewolf: The Apocalypse - Heart of the Forest",
          "Sources": "Steam"
        },
        {
          "Name": "Mount & Blade",
          "Sources": "GOG"
        },
        {
          "Name": "Rushdown Revolt",
          "Sources": "Steam"
        },
        {
          "Name": "Ben There, Dan That!",
          "Sources": "Steam"
        },
        {
          "Name": "100 Doors Game - Escape from School",
          "Sources": "Steam"
        },
        {
          "Name": "8Doors: Arum's Afterlife Adventure",
          "Sources": "Amazon"
        },
        {
          "Name": "Iris and the giant",
          "Sources": "Steam"
        },
        {
          "Name": "LIMBO",
          "Sources": "Steam"
        },
        {
          "Name": "Deadlight Director’s Cut",
          "Sources": "Steam"
        },
        {
          "Name": "Match it Sexy: FREE",
          "Sources": "Steam"
        },
        {
          "Name": "The Enlightened League of Bone Builders and the Osseous Enigma Content",
          "Sources": "Steam"
        },
        {
          "Name": "Figment",
          "Sources": "GOG"
        },
        {
          "Name": "Dark Devotion",
          "Sources": "Amazon"
        },
        {
          "Name": "Gunpoint",
          "Sources": "Amazon"
        },
        {
          "Name": "Megabyte Punch",
          "Sources": "Steam"
        },
        {
          "Name": "Kingdom: Classic",
          "Sources": "Steam"
        },
        {
          "Name": "Space Crew: Legendary Edition",
          "Sources": "Amazon"
        },
        {
          "Name": "Wizorb",
          "Sources": "Steam"
        },
        {
          "Name": "TaskPals",
          "Sources": "Steam"
        },
        {
          "Name": "Endling: Extinction is Forever",
          "Sources": "Amazon"
        },
        {
          "Name": "Leisure Suit Larry 7 - Love for Sail",
          "Sources": "Indiegala"
        },
        {
          "Name": "Naval Action",
          "Sources": "Steam"
        },
        {
          "Name": "Unhack",
          "Sources": "Indiegala"
        },
        {
          "Name": "Dupio",
          "Sources": "Steam"
        },
        {
          "Name": "United Penguin Kingdom: Huddle up",
          "Sources": "Steam"
        },
        {
          "Name": "Magician Lord",
          "Sources": "Amazon"
        },
        {
          "Name": "Hitchhiker",
          "Sources": "Humble"
        },
        {
          "Name": "The Stanley Parable",
          "Sources": "Epic"
        },
        {
          "Name": "Storm Striker",
          "Sources": "Steam"
        },
        {
          "Name": "Metro: Last Light Complete Edition",
          "Sources": "Steam"
        },
        {
          "Name": "Picma - Picture Enigmas",
          "Sources": "Steam"
        },
        {
          "Name": "Saints Row: The Third",
          "Sources": "Steam"
        },
        {
          "Name": "Solar Flux",
          "Sources": "Steam"
        },
        {
          "Name": "Sir, You Are Being Hunted",
          "Sources": "Steam"
        },
        {
          "Name": "Necromunda: Hired Gun",
          "Sources": "Steam"
        },
        {
          "Name": "The Alto Collection",
          "Sources": "Epic"
        },
        {
          "Name": "The Stillness of the Wind",
          "Sources": "Steam"
        },
        {
          "Name": "Faster Than Light",
          "Sources": "Epic"
        },
        {
          "Name": "Zup! 4",
          "Sources": "Steam"
        },
        {
          "Name": "RED",
          "Sources": "Steam"
        },
        {
          "Name": "Elephant in the Room",
          "Sources": "Humble"
        },
        {
          "Name": "Little Big Workshop",
          "Sources": "Steam"
        },
        {
          "Name": "Foretales",
          "Sources": "Steam"
        },
        {
          "Name": "Emily is Away Too",
          "Sources": "Steam"
        },
        {
          "Name": "Asphyxia",
          "Sources": "Steam"
        },
        {
          "Name": "Mark of the Ninja",
          "Sources": "Steam"
        },
        {
          "Name": "Empire Takeover",
          "Sources": "Steam"
        },
        {
          "Name": "Othercide",
          "Sources": "Steam"
        },
        {
          "Name": "The m0rg VS keys",
          "Sources": "Steam"
        },
        {
          "Name": "Football Manager 2023 Resource Archiver",
          "Sources": "Epic"
        },
        {
          "Name": "Hello Neighbor",
          "Sources": "Steam"
        },
        {
          "Name": "Cosmic Dust & Rust",
          "Sources": "Steam"
        },
        {
          "Name": "WIN THE GAME: DO IT!",
          "Sources": "Steam"
        },
        {
          "Name": "Project Hardline",
          "Sources": "Steam"
        },
        {
          "Name": "ChikkinGun",
          "Sources": "itch.io"
        },
        {
          "Name": "Nystagmus",
          "Sources": "Steam"
        },
        {
          "Name": "Project N.E.X.T",
          "Sources": "Steam"
        },
        {
          "Name": "Hearts of Iron III",
          "Sources": "Steam"
        },
        {
          "Name": "Garage Flipper: Prologue",
          "Sources": "Steam"
        },
        {
          "Name": "Commander Lilith DLC",
          "Sources": "Epic"
        },
        {
          "Name": "VALKYRIE CONNECT",
          "Sources": "Steam"
        },
        {
          "Name": "Downtown Drift",
          "Sources": "Steam"
        },
        {
          "Name": "Field of Glory II",
          "Sources": "Steam"
        },
        {
          "Name": "Running Gods",
          "Sources": "Steam"
        },
        {
          "Name": "This Is the Police 2",
          "Sources": "Steam"
        },
        {
          "Name": "Ring of Pain",
          "Sources": "Epic"
        },
        {
          "Name": "My Time at Portia",
          "Sources": "Steam"
        },
        {
          "Name": "Homefront",
          "Sources": "Steam"
        },
        {
          "Name": "The Forgotten City",
          "Sources": "Steam"
        },
        {
          "Name": "McPixel 3 Demo",
          "Sources": "GOG"
        },
        {
          "Name": "Secret Files 3",
          "Sources": "Amazon"
        },
        {
          "Name": "Overture",
          "Sources": "Steam"
        },
        {
          "Name": "For The King",
          "Sources": "Epic"
        },
        {
          "Name": "Ticket To Ride: Classic Edition",
          "Sources": "Epic"
        },
        {
          "Name": "Pirates of Black Cove",
          "Sources": "Steam"
        },
        {
          "Name": "10 Second Ninja X",
          "Sources": "Amazon"
        },
        {
          "Name": "Sam & Max 203: Night of the Raving Dead",
          "Sources": "Steam"
        },
        {
          "Name": "Atari Mania",
          "Sources": "Epic"
        },
        {
          "Name": "Star Wars: Rogue Squadron",
          "Sources": "Amazon"
        },
        {
          "Name": "Tomb Raider III: Adventures of Lara Croft",
          "Sources": "Steam"
        },
        {
          "Name": "Tales from the Borderlands",
          "Sources": "Amazon"
        },
        {
          "Name": "Ordinary Day",
          "Sources": "Steam"
        },
        {
          "Name": "Tiny Echo",
          "Sources": "Humble"
        },
        {
          "Name": "Saints Row: Gat out of Hell",
          "Sources": "Steam"
        },
        {
          "Name": "Voidigo",
          "Sources": "Steam"
        },
        {
          "Name": "Monster Train",
          "Sources": "Steam"
        },
        {
          "Name": "Worlds of Ultima : The Savage Empire",
          "Sources": "GOG"
        },
        {
          "Name": "Naiad",
          "Sources": "Humble"
        },
        {
          "Name": "Warframe",
          "Sources": "Steam"
        },
        {
          "Name": "Bardic Inspiration Vol 1.5 Soundtrack",
          "Sources": "Epic"
        },
        {
          "Name": "Giana Sisters: Twisted Dreams",
          "Sources": "Amazon"
        },
        {
          "Name": "Northgard",
          "Sources": "Steam"
        },
        {
          "Name": "Hitman: Absolution",
          "Sources": "Steam"
        },
        {
          "Name": "GUILTY GEAR Xrd REV 2",
          "Sources": "Steam"
        },
        {
          "Name": "Quacktown Smackdown",
          "Sources": "Steam"
        },
        {
          "Name": "Metamorphosis",
          "Sources": "Amazon"
        },
        {
          "Name": "Perceptio",
          "Sources": "Steam"
        },
        {
          "Name": "GRID Legends",
          "Sources": "EA app"
        },
        {
          "Name": "Punch Club",
          "Sources": "Amazon"
        },
        {
          "Name": "Hidden Folks",
          "Sources": "Steam"
        },
        {
          "Name": "Wargroove",
          "Sources": "Steam"
        },
        {
          "Name": "Resistance is Fruitile",
          "Sources": "itch.io"
        },
        {
          "Name": "Warhammer: Vermintide 2",
          "Sources": "Steam"
        },
        {
          "Name": "Morbid: The Seven Acolytes",
          "Sources": "Steam"
        },
        {
          "Name": "LEGO Batman The Videogame",
          "Sources": "Epic"
        },
        {
          "Name": "Almost There: The Platformer",
          "Sources": "Steam"
        },
        {
          "Name": "Blazing Star",
          "Sources": "Amazon"
        },
        {
          "Name": "Psychonauts",
          "Sources": "Steam"
        },
        {
          "Name": "Jurassic World Evolution 2",
          "Sources": "Steam"
        },
        {
          "Name": "F.E.A.R.: Perseus Mandate",
          "Sources": "Steam"
        },
        {
          "Name": "BAFL - Brakes Are For Losers",
          "Sources": "Amazon"
        },
        {
          "Name": "MORDHAU",
          "Sources": "Steam"
        },
        {
          "Name": "Zup! Zero 2",
          "Sources": "Steam"
        },
        {
          "Name": "Icewind Dale: Enhanced Edition",
          "Sources": "Amazon"
        },
        {
          "Name": "World to the West",
          "Sources": "Steam"
        },
        {
          "Name": "Sherlock Holmes: The Devil's Daughter",
          "Sources": "Amazon"
        },
        {
          "Name": "Sunrider: Mask of Arcadius",
          "Sources": "GOG"
        },
        {
          "Name": "Birds Aren't Real: The Game",
          "Sources": "Steam"
        },
        {
          "Name": "FRAMED Collection",
          "Sources": "Steam"
        },
        {
          "Name": "Hover",
          "Sources": "Amazon"
        },
        {
          "Name": "江湖客栈-赛季模式【PVP】",
          "Sources": "Steam"
        },
        {
          "Name": "Sheltered",
          "Sources": "Epic"
        },
        {
          "Name": "Wyoming Winter",
          "Sources": "Steam"
        },
        {
          "Name": "Filthy, Stinking, Orcs!",
          "Sources": "Humble"
        },
        {
          "Name": "20 Minutes Till Dawn",
          "Sources": "Epic"
        },
        {
          "Name": "Stick it to the Man",
          "Sources": "Amazon"
        },
        {
          "Name": "Among the Sleep - Enhanced Edition",
          "Sources": "Epic"
        },
        {
          "Name": "LEGO Builder's Journey",
          "Sources": "Epic"
        },
        {
          "Name": "Dear Future",
          "Sources": "Steam"
        },
        {
          "Name": "REQUIEM",
          "Sources": "itch.io"
        },
        {
          "Name": "Spectrum",
          "Sources": "Steam"
        },
        {
          "Name": "Pickle Clicker",
          "Sources": "Steam"
        },
        {
          "Name": "Manual Samuel",
          "Sources": "Amazon"
        },
        {
          "Name": "Chime Sharp",
          "Sources": "Steam"
        },
        {
          "Name": "Evoland Legendary Edition",
          "Sources": "Steam"
        },
        {
          "Name": "ARK: Survival Evolved",
          "Sources": "Epic"
        },
        {
          "Name": "Dragon Age: Inquisition",
          "Sources": "EA app"
        },
        {
          "Name": "Wizard of Legend",
          "Sources": "Amazon"
        },
        {
          "Name": "Master Spy",
          "Sources": "Steam"
        },
        {
          "Name": "Space Farmers",
          "Sources": "Steam"
        },
        {
          "Name": "Land Above Sea Below Prologue",
          "Sources": "Steam"
        },
        {
          "Name": "Mass Effect 2",
          "Sources": "EA app"
        },
        {
          "Name": "Survival Quiz CITY おまつり編",
          "Sources": "Steam"
        },
        {
          "Name": "Volzerk : Monsters and Lands Unknown",
          "Sources": "Steam"
        },
        {
          "Name": "Tales of Berseria",
          "Sources": "Steam"
        },
        {
          "Name": "Aztez",
          "Sources": "Epic"
        },
        {
          "Name": "Downfall - A Slay the Spire Fan Expansion",
          "Sources": "Steam"
        },
        {
          "Name": "Black Mesa",
          "Sources": "Steam"
        },
        {
          "Name": "Overcast - Walden and the Werewolf",
          "Sources": "Indiegala"
        },
        {
          "Name": "Gems of War",
          "Sources": "Steam"
        },
        {
          "Name": "Legend of Keepers",
          "Sources": "Steam"
        },
        {
          "Name": "Lawn Mowing Simulator",
          "Sources": "Epic"
        },
        {
          "Name": "Disco Noire",
          "Sources": "itch.io"
        },
        {
          "Name": "Spellbreak",
          "Sources": "Epic"
        },
        {
          "Name": "Relic Hunters Zero: Remix",
          "Sources": "Steam"
        },
        {
          "Name": "Hitchhiker",
          "Sources": "Humble"
        },
        {
          "Name": "The Elder Scrolls IV: Oblivion",
          "Sources": "Steam"
        },
        {
          "Name": "Hell is other demons",
          "Sources": "Epic"
        },
        {
          "Name": "Max: The Curse of Brotherhood",
          "Sources": "Amazon"
        },
        {
          "Name": "Let's Draw",
          "Sources": "Steam"
        },
        {
          "Name": "Operation Flashpoint: Dragon Rising",
          "Sources": "Steam"
        },
        {
          "Name": "Yakuza 4 Remastered",
          "Sources": "Steam"
        },
        {
          "Name": "Half-Life: Source",
          "Sources": "Steam"
        },
        {
          "Name": "Cook, Serve, Delicious! 3?!",
          "Sources": "Epic"
        },
        {
          "Name": "Warlock 2: the Exiled",
          "Sources": "Steam"
        },
        {
          "Name": "DiRT Rally 2.0",
          "Sources": "Steam"
        },
        {
          "Name": "SnowTunes Island",
          "Sources": "Steam"
        },
        {
          "Name": "The Henry Stickmin Collection",
          "Sources": "Steam"
        },
        {
          "Name": "Raccoon The Miner",
          "Sources": "Steam"
        },
        {
          "Name": "Alan Wake's American Nightmare",
          "Sources": "Epic"
        },
        {
          "Name": "Snake Pass",
          "Sources": "Steam"
        },
        {
          "Name": "Lawn Mowing Simulator",
          "Sources": "Amazon"
        },
        {
          "Name": "Zodiac XX",
          "Sources": "Humble"
        },
        {
          "Name": "Formula Bwoah",
          "Sources": "Steam"
        },
        {
          "Name": "HAWKEN REBORN",
          "Sources": "Steam"
        },
        {
          "Name": "Farmer's Dynasty",
          "Sources": "Steam"
        },
        {
          "Name": "Prismata",
          "Sources": "Steam"
        },
        {
          "Name": "Dawn of a Soul",
          "Sources": "Steam"
        },
        {
          "Name": "Pinball FX",
          "Sources": "Steam"
        },
        {
          "Name": "Balconing Simulator 2020",
          "Sources": "Humble"
        },
        {
          "Name": "The Deer",
          "Sources": "Steam"
        },
        {
          "Name": "Wallace & Gromit: The Last Resort",
          "Sources": "Amazon"
        },
        {
          "Name": "Back to the Future: Ep 3 - Citizen Brown",
          "Sources": "Steam"
        },
        {
          "Name": "Booth",
          "Sources": "Humble"
        },
        {
          "Name": "AVABEL ONLINE",
          "Sources": "Steam"
        },
        {
          "Name": "Rivals of Aether",
          "Sources": "Steam"
        },
        {
          "Name": "The Ship Single Player",
          "Sources": "Steam"
        },
        {
          "Name": "Headlander",
          "Sources": "Amazon"
        },
        {
          "Name": "Guns of Icarus Alliance",
          "Sources": "Steam"
        },
        {
          "Name": "DashPanel",
          "Sources": "Steam"
        },
        {
          "Name": "Into The Mist 2: The Cult",
          "Sources": "itch.io"
        },
        {
          "Name": "Zero G Arena",
          "Sources": "Steam"
        },
        {
          "Name": "Cepheus Protocol",
          "Sources": "Steam"
        },
        {
          "Name": "Half-Life",
          "Sources": "Steam"
        },
        {
          "Name": "Warframe",
          "Sources": "Epic"
        },
        {
          "Name": "Styx: Master of Shadows",
          "Sources": "Steam"
        },
        {
          "Name": "Pathologic 2",
          "Sources": "Steam"
        },
        {
          "Name": "Mighty Fight Federation",
          "Sources": "Epic"
        },
        {
          "Name": "Temple of Kasthet",
          "Sources": "Steam"
        },
        {
          "Name": "Mass Effect Legendary Edition",
          "Sources": "EA app"
        },
        {
          "Name": "防疫英雄",
          "Sources": "Steam"
        },
        {
          "Name": "Zup! X",
          "Sources": "Steam"
        },
        {
          "Name": "Mad King: Prologue",
          "Sources": "Steam"
        },
        {
          "Name": "Leisure Suit Larry 5 - Passionate Patti Does a Little Undercover Work",
          "Sources": "Indiegala"
        },
        {
          "Name": "GRIS",
          "Sources": "Steam"
        },
        {
          "Name": "Project Wingman",
          "Sources": "Steam"
        },
        {
          "Name": "Lara Croft GO",
          "Sources": "Steam"
        },
        {
          "Name": "Dreadlands Beta",
          "Sources": "Steam"
        },
        {
          "Name": "Loadout Campaign Beta",
          "Sources": "Steam"
        },
        {
          "Name": "SUPERHOT",
          "Sources": "Steam"
        },
        {
          "Name": "Snake Revenge",
          "Sources": "itch.io"
        },
        {
          "Name": "Bridge Constructor Playground",
          "Sources": "Amazon"
        },
        {
          "Name": "Leisure Suit Larry 3 - Passionate Patti in Pursuit of the Pulsating Pectorals",
          "Sources": "Indiegala"
        },
        {
          "Name": "Sorbetta: Gravely in Debt",
          "Sources": "Steam"
        },
        {
          "Name": "Drake Hollow",
          "Sources": "Steam"
        },
        {
          "Name": 1982,
          "Sources": "Steam"
        },
        {
          "Name": "PUSS!",
          "Sources": "Steam"
        },
        {
          "Name": "The Darkest Tales - Into the Nightmare",
          "Sources": "GOG"
        },
        {
          "Name": "GRIME",
          "Sources": "Steam"
        },
        {
          "Name": "Party Bunch",
          "Sources": "Steam"
        },
        {
          "Name": "Zombie Night Terror",
          "Sources": "Steam"
        },
        {
          "Name": "Mr Shifty",
          "Sources": "Steam"
        },
        {
          "Name": "Kingsway",
          "Sources": "Amazon"
        },
        {
          "Name": "Paladins - Public Test",
          "Sources": "Steam"
        },
        {
          "Name": "Sword Art Online: Integral Factor",
          "Sources": "Steam"
        },
        {
          "Name": "Hue",
          "Sources": "Amazon"
        },
        {
          "Name": "Master Arena",
          "Sources": "Steam"
        },
        {
          "Name": "Heavy Bullets",
          "Sources": "Amazon"
        },
        {
          "Name": "Axiom Verge",
          "Sources": "Epic"
        },
        {
          "Name": "Constructor Classic 1997",
          "Sources": "GOG"
        },
        {
          "Name": "StarCraft",
          "Sources": "Battle.net"
        },
        {
          "Name": "ZombieThon",
          "Sources": "Steam"
        },
        {
          "Name": "Crusader Kings II",
          "Sources": "Steam"
        },
        {
          "Name": "Talisman: Prologue",
          "Sources": "Steam"
        },
        {
          "Name": "Riders of Icarus",
          "Sources": "Steam"
        },
        {
          "Name": "Left 4 Dead",
          "Sources": "Steam"
        },
        {
          "Name": "Tree of Savior (English Ver.)",
          "Sources": "Steam"
        },
        {
          "Name": "Jotun: Valhalla Edition",
          "Sources": "Amazon"
        },
        {
          "Name": "KnightShift",
          "Sources": "Steam"
        },
        {
          "Name": "ORION: Prelude",
          "Sources": "Steam"
        },
        {
          "Name": "World of Goo",
          "Sources": "Epic"
        },
        {
          "Name": "Sword Legacy Omen",
          "Sources": "Steam"
        },
        {
          "Name": "Battlerite Public Test",
          "Sources": "Steam"
        },
        {
          "Name": "À Travers Le Temps",
          "Sources": "Steam"
        },
        {
          "Name": "Moonring",
          "Sources": "Steam"
        },
        {
          "Name": "Smile For Me",
          "Sources": "Steam"
        },
        {
          "Name": "Epistory",
          "Sources": "Amazon"
        },
        {
          "Name": "Q.U.B.E: Director's Cut",
          "Sources": "Steam"
        },
        {
          "Name": "So Many Cubes",
          "Sources": "Steam"
        },
        {
          "Name": "Puzzle Agent 2",
          "Sources": "Amazon"
        },
        {
          "Name": "Sam & Max 301: The Penal Zone",
          "Sources": "Steam"
        },
        {
          "Name": "Behind the Frame: The Finest Scenery",
          "Sources": "Steam"
        },
        {
          "Name": "Ozymandias: Bronze Age Empire Sim",
          "Sources": "GOG"
        },
        {
          "Name": "Beholder 2",
          "Sources": "Amazon"
        },
        {
          "Name": "PAYDAY 2",
          "Sources": "Steam"
        },
        {
          "Name": "Hello Pollution!",
          "Sources": "Steam"
        },
        {
          "Name": "2064: Read Only Memories",
          "Sources": "Epic"
        },
        {
          "Name": "Crying Suns",
          "Sources": "Steam"
        },
        {
          "Name": "Crypto Against All Odds",
          "Sources": "Amazon"
        },
        {
          "Name": "Geometry Dash",
          "Sources": "Steam"
        },
        {
          "Name": "Shoppe Keep 2",
          "Sources": "Steam"
        },
        {
          "Name": "Saints Row",
          "Sources": "Epic"
        },
        {
          "Name": "Shadowrun Hong Kong",
          "Sources": "Epic"
        },
        {
          "Name": "Shadowrun: Dragonfall - Director's Cut",
          "Sources": "Steam"
        },
        {
          "Name": "Drunken Fight Simulator",
          "Sources": "Indiegala"
        },
        {
          "Name": "Conflict 3048",
          "Sources": "Steam"
        },
        {
          "Name": "Embr",
          "Sources": "Steam"
        },
        {
          "Name": "Ollie & Bollie's Outdoor Estate",
          "Sources": "Humble"
        },
        {
          "Name": "爆战联盟",
          "Sources": "Steam"
        },
        {
          "Name": "Furi",
          "Sources": "Steam"
        },
        {
          "Name": "Order of Battle: World War II",
          "Sources": "Steam"
        },
        {
          "Name": "Teenagent",
          "Sources": "GOG"
        },
        {
          "Name": "Greak: Memories of Azur",
          "Sources": "GOG"
        },
        {
          "Name": "Magicka: Wizards of the Square Tablet",
          "Sources": "Steam"
        },
        {
          "Name": "Tin Can",
          "Sources": "Steam"
        },
        {
          "Name": "Antihero",
          "Sources": "Amazon"
        },
        {
          "Name": "VFurrika!",
          "Sources": "Steam"
        },
        {
          "Name": "Railroad Corporation",
          "Sources": "Steam"
        },
        {
          "Name": "SUPERHOT",
          "Sources": "Epic"
        },
        {
          "Name": "Pixel Starships",
          "Sources": "Steam"
        },
        {
          "Name": "Police Stories",
          "Sources": "Steam"
        },
        {
          "Name": "Overlord: Raising Hell",
          "Sources": "Steam"
        },
        {
          "Name": "Goodbye Deponia",
          "Sources": "Steam"
        },
        {
          "Name": "Switchblade",
          "Sources": "Steam"
        },
        {
          "Name": "Edge Of Eternity",
          "Sources": "Steam"
        },
        {
          "Name": "Mimic Arena",
          "Sources": "Steam"
        },
        {
          "Name": "Thomas Was Alone",
          "Sources": "Steam"
        },
        {
          "Name": "Seasons after Fall",
          "Sources": "Steam"
        },
        {
          "Name": "Sable",
          "Sources": "Epic"
        },
        {
          "Name": "SUPER DRINK BROS",
          "Sources": "Steam"
        },
        {
          "Name": "Cavern Escape",
          "Sources": "Steam"
        },
        {
          "Name": "Before We Leave",
          "Sources": "Steam"
        },
        {
          "Name": "The Long Dark",
          "Sources": "Epic"
        },
        {
          "Name": "Still There",
          "Sources": "Steam"
        },
        {
          "Name": "Beholder",
          "Sources": "Amazon"
        },
        {
          "Name": "Anomaly Warzone Earth: Mobile Campaign",
          "Sources": "Humble"
        },
        {
          "Name": "Anarchy Arcade",
          "Sources": "Steam"
        },
        {
          "Name": "CryoFall",
          "Sources": "Steam"
        },
        {
          "Name": "Yooka-Laylee",
          "Sources": "Amazon"
        },
        {
          "Name": "GALAHAD 3093",
          "Sources": "Steam"
        },
        {
          "Name": "Balance 97.261/100",
          "Sources": "Steam"
        },
        {
          "Name": "Hero's Hour",
          "Sources": "Amazon"
        },
        {
          "Name": "雀姬",
          "Sources": "Steam"
        },
        {
          "Name": "DubWars",
          "Sources": "Amazon"
        },
        {
          "Name": "Black Forest",
          "Sources": "Steam"
        },
        {
          "Name": "Trials Evolution Gold Edition",
          "Sources": "Steam"
        },
        {
          "Name": "Touhou Meijinka ~ Song of Divine Tempest",
          "Sources": "Steam"
        },
        {
          "Name": "My Time at Portia",
          "Sources": "Epic"
        },
        {
          "Name": "Assassin’s Creed IV Black Flag",
          "Sources": "Ubisoft Connect"
        },
        {
          "Name": "Leisure Suit Larry 6 - Shape Up Or Slip Out",
          "Sources": "Indiegala"
        },
        {
          "Name": "Earth 2150 Trilogy",
          "Sources": "Steam"
        },
        {
          "Name": "Assassin's Creed Syndicate",
          "Sources": "Ubisoft Connect"
        },
        {
          "Name": "Mr. Prepper",
          "Sources": "Steam"
        },
        {
          "Name": "Will Glow the Wisp",
          "Sources": "Steam"
        },
        {
          "Name": "Frog Detective 1: The Haunted Island",
          "Sources": "Steam"
        },
        {
          "Name": "Gunpoint",
          "Sources": "Steam"
        },
        {
          "Name": "REVOLVER360 RE:ACTOR",
          "Sources": "Steam"
        },
        {
          "Name": "Warsow",
          "Sources": "GOG"
        },
        {
          "Name": "Age of Advent",
          "Sources": "Steam"
        },
        {
          "Name": "Dire Wolf Game Room",
          "Sources": "Steam"
        },
        {
          "Name": "Tumblestone",
          "Sources": "Amazon"
        },
        {
          "Name": "Pesterquest",
          "Sources": "Steam"
        },
        {
          "Name": "Game Tycoon 1.5",
          "Sources": "Steam"
        },
        {
          "Name": "Zaccaria Pinball",
          "Sources": "Steam"
        },
        {
          "Name": "Thimbleweed Park",
          "Sources": "Epic"
        },
        {
          "Name": "ANOTHER EDEN",
          "Sources": "Steam"
        },
        {
          "Name": "Brawlhalla",
          "Sources": "Steam"
        },
        {
          "Name": "Back to the Future: Ep 1 - It's About Time",
          "Sources": "Steam"
        },
        {
          "Name": "BLEACH Brave Souls - 3D Action",
          "Sources": "Steam"
        },
        {
          "Name": "Galacticverse",
          "Sources": "Steam"
        },
        {
          "Name": "Dungeons 3",
          "Sources": "Epic"
        },
        {
          "Name": "BloodSong",
          "Sources": "Steam"
        },
        {
          "Name": "Make it indie!",
          "Sources": "Steam"
        },
        {
          "Name": "Dreaming Sarah",
          "Sources": "Steam"
        },
        {
          "Name": "Gang Beasts",
          "Sources": "Steam"
        },
        {
          "Name": "Nowhere Prophet",
          "Sources": "Steam"
        },
        {
          "Name": "FEZ",
          "Sources": "Steam"
        },
        {
          "Name": "Tiny Echo",
          "Sources": "Steam"
        },
        {
          "Name": "Lords Of The Fallen",
          "Sources": "Steam"
        },
        {
          "Name": "The Adventures of Tree",
          "Sources": "Steam"
        },
        {
          "Name": "Autobahn Police Simulator",
          "Sources": "Steam"
        },
        {
          "Name": "Tunche",
          "Sources": "Amazon"
        },
        {
          "Name": "co-open",
          "Sources": "Humble"
        },
        {
          "Name": "Overcooked",
          "Sources": "Steam"
        },
        {
          "Name": "Viscera Cleanup Detail: Santa's Rampage",
          "Sources": "Steam"
        },
        {
          "Name": "ENDLESS Space - Definitive Edition",
          "Sources": "Steam"
        },
        {
          "Name": "AVICII Invector",
          "Sources": "Amazon"
        },
        {
          "Name": "AploVVare Collection",
          "Sources": "Steam"
        },
        {
          "Name": "Hollow Knight",
          "Sources": "Steam"
        },
        {
          "Name": "Lost Horizon",
          "Sources": "Amazon"
        },
        {
          "Name": "Zombie Army Trilogy",
          "Sources": "Steam"
        },
        {
          "Name": "Blade Assault",
          "Sources": "Steam"
        },
        {
          "Name": "Splasher",
          "Sources": "Steam"
        },
        {
          "Name": "Tyrania - A Kinetic Visual Novel",
          "Sources": "Steam"
        },
        {
          "Name": "Go! Go! Nippon! ~My First Trip to Japan~",
          "Sources": "Steam"
        },
        {
          "Name": "Ken Follett's The Pillars of the Earth",
          "Sources": "Epic"
        },
        {
          "Name": "Nex Machina",
          "Sources": "Steam"
        },
        {
          "Name": "Tales of Monkey Island: Chapter 2 - The Siege of Spinner Cay",
          "Sources": "Steam"
        },
        {
          "Name": "Despotism 3k",
          "Sources": "Steam"
        },
        {
          "Name": "Clickdraw Clicker",
          "Sources": "Steam"
        },
        {
          "Name": "Q.U.B.E. 2",
          "Sources": "Amazon"
        },
        {
          "Name": "Gobbo's Gambit",
          "Sources": "Steam"
        },
        {
          "Name": "Assassins Creed Syndicate",
          "Sources": "Epic"
        },
        {
          "Name": "Yakuza 3 Remastered",
          "Sources": "Steam"
        },
        {
          "Name": "Trials Fusion",
          "Sources": "Steam"
        },
        {
          "Name": "Assassin at Crimson Keep",
          "Sources": "itch.io"
        },
        {
          "Name": "CHRONO",
          "Sources": "Steam"
        },
        {
          "Name": "God's Trigger",
          "Sources": "Steam"
        },
        {
          "Name": "iTop Easy Desktop for Steam",
          "Sources": "Steam"
        },
        {
          "Name": "Narcos",
          "Sources": "Amazon"
        },
        {
          "Name": "Call of the Sea",
          "Sources": "Steam"
        },
        {
          "Name": "Alien: Isolation",
          "Sources": "Epic"
        },
        {
          "Name": "The Groundz",
          "Sources": "Humble"
        },
        {
          "Name": "Westerado: Double Barreled",
          "Sources": "Steam"
        },
        {
          "Name": "Click to Eleven",
          "Sources": "Steam"
        },
        {
          "Name": "Cook, Serve, Delicious! 2!! DRM Free Build",
          "Sources": "Humble"
        },
        {
          "Name": "Motorcycle Travel Simulator",
          "Sources": "Steam"
        },
        {
          "Name": "Trash Bomber",
          "Sources": "Steam"
        },
        {
          "Name": "Tengami",
          "Sources": "Amazon"
        },
        {
          "Name": "Deus Ex: Human Revolution - Director's Cut",
          "Sources": "Steam"
        },
        {
          "Name": "X-COM: UFO Defense",
          "Sources": "Steam"
        },
        {
          "Name": "Game of Thrones - A Telltale Games Series",
          "Sources": "Steam"
        },
        {
          "Name": "Cubetractor",
          "Sources": "Steam"
        },
        {
          "Name": "Space Miner - Idle Adventures",
          "Sources": "Steam"
        },
        {
          "Name": "Zombies Beyond Me",
          "Sources": "Steam"
        },
        {
          "Name": "The Academy: First Riddle",
          "Sources": "Amazon"
        },
        {
          "Name": "Lost Castle",
          "Sources": "Steam"
        },
        {
          "Name": "Knockout City",
          "Sources": "Steam"
        },
        {
          "Name": "The Elder Scrolls: Arena",
          "Sources": "GOG"
        },
        {
          "Name": "Enter the Gungeon",
          "Sources": "Amazon"
        },
        {
          "Name": "Game Master Engine",
          "Sources": "Steam"
        },
        {
          "Name": "Tower 57",
          "Sources": "Steam"
        },
        {
          "Name": "Mail Mole + 'Xpress Deliveries",
          "Sources": "Amazon"
        },
        {
          "Name": "AI War: Fleet Command",
          "Sources": "Steam"
        },
        {
          "Name": "永恒战歌",
          "Sources": "Steam"
        },
        {
          "Name": "Ghostrunner",
          "Sources": "Epic"
        },
        {
          "Name": "Portal: Forbidden Testing Tracks",
          "Sources": "Steam"
        },
        {
          "Name": "It's SPEZY!",
          "Sources": "itch.io"
        },
        {
          "Name": "Styx: Shards of Darkness",
          "Sources": "Steam"
        },
        {
          "Name": "qop",
          "Sources": "Steam"
        },
        {
          "Name": "ShipLord",
          "Sources": "Steam"
        },
        {
          "Name": "Rustler",
          "Sources": "Steam"
        },
        {
          "Name": "Super Sidekicks",
          "Sources": "Amazon"
        },
        {
          "Name": "Sluggish Morss Pattern Circus",
          "Sources": "Humble"
        },
        {
          "Name": "Faeria",
          "Sources": "Epic"
        },
        {
          "Name": "Unparallel",
          "Sources": "Humble"
        },
        {
          "Name": "Wonder Boy The Dragons Trap",
          "Sources": "Epic"
        },
        {
          "Name": "Submerged Hidden Depths",
          "Sources": "Epic"
        },
        {
          "Name": "Beat Hazard 2",
          "Sources": "Steam"
        },
        {
          "Name": "POSTAL 2",
          "Sources": "Steam"
        },
        {
          "Name": "Resident Evil 6",
          "Sources": "Steam"
        },
        {
          "Name": "Hard Reset Redux",
          "Sources": "Amazon"
        },
        {
          "Name": "Squirrelmageddon!",
          "Sources": "Steam"
        },
        {
          "Name": "SMITE",
          "Sources": "Steam"
        },
        {
          "Name": "Turbo Golf Racing",
          "Sources": "Steam"
        },
        {
          "Name": "Hotshot Racing",
          "Sources": "Steam"
        },
        {
          "Name": "Syndicate Wars",
          "Sources": "GOG"
        },
        {
          "Name": "Cards and Castles 2",
          "Sources": "Steam"
        },
        {
          "Name": "Stronghold HD",
          "Sources": "GOG"
        },
        {
          "Name": "Motorsport Manager",
          "Sources": "Steam"
        },
        {
          "Name": "Merchant of the Skies",
          "Sources": "Steam"
        },
        {
          "Name": "Outcast Second Contact",
          "Sources": "Amazon"
        },
        {
          "Name": "Half-Life 2: VR Mod",
          "Sources": "Steam"
        },
        {
          "Name": "Sands",
          "Sources": "Steam"
        },
        {
          "Name": "GOD EATER 2 Rage Burst",
          "Sources": "Steam"
        },
        {
          "Name": "Black Widow: Recharged",
          "Sources": "Epic"
        },
        {
          "Name": "Mind Scanners",
          "Sources": "Steam"
        },
        {
          "Name": "Pathfinder: Wrath of the Righteous - Enhanced Edition",
          "Sources": "Steam"
        },
        {
          "Name": "STEEP",
          "Sources": "Ubisoft Connect"
        },
        {
          "Name": "Silent Nights",
          "Sources": "itch.io"
        },
        {
          "Name": "SOMA",
          "Sources": "GOG"
        },
        {
          "Name": "Qbeh-1: The Atlas Cube",
          "Sources": "Steam"
        },
        {
          "Name": "Levelhead",
          "Sources": "Steam"
        },
        {
          "Name": "Dead In Vinland",
          "Sources": "Steam"
        },
        {
          "Name": "Tormentor X Punisher",
          "Sources": "Epic"
        },
        {
          "Name": "Spiritle",
          "Sources": "Steam"
        },
        {
          "Name": "Headlander",
          "Sources": "Steam"
        },
        {
          "Name": "Struggling",
          "Sources": "Steam"
        },
        {
          "Name": "Jagged Alliance Gold",
          "Sources": "Steam"
        },
        {
          "Name": "Broforce",
          "Sources": "Steam"
        },
        {
          "Name": "August of August",
          "Sources": "Steam"
        },
        {
          "Name": "Bloons TD 6",
          "Sources": "Steam"
        },
        {
          "Name": "Rainy Season",
          "Sources": "Humble"
        },
        {
          "Name": "Grow: Song of the Evertree",
          "Sources": "Steam"
        },
        {
          "Name": "The Hardest Game Ever",
          "Sources": "Steam"
        },
        {
          "Name": "Idle Plant Game",
          "Sources": "Steam"
        },
        {
          "Name": "Generation Zero",
          "Sources": "Steam"
        },
        {
          "Name": "Desert Child - DRM-free",
          "Sources": "Humble"
        },
        {
          "Name": "Welcome To The Madhouse",
          "Sources": "itch.io"
        },
        {
          "Name": "Skully",
          "Sources": "Steam"
        },
        {
          "Name": "Supraland",
          "Sources": "Steam"
        },
        {
          "Name": "Caffeine",
          "Sources": "Humble"
        },
        {
          "Name": "Bee Simulator",
          "Sources": "Steam"
        },
        {
          "Name": "State of Mind",
          "Sources": "Steam"
        },
        {
          "Name": "Titanfall",
          "Sources": "EA app"
        },
        {
          "Name": "F.E.A.R.",
          "Sources": "Steam"
        },
        {
          "Name": "Destroy All Humans!",
          "Sources": "Steam"
        },
        {
          "Name": "Saturnalia",
          "Sources": "Epic"
        },
        {
          "Name": "Sunblaze",
          "Sources": "GOG"
        },
        {
          "Name": "Cook, Serve, Delicious! 2!!",
          "Sources": "Steam"
        },
        {
          "Name": "ARK: Survival Evolved",
          "Sources": "Steam"
        },
        {
          "Name": "Chronicles of Mystery: The Scorpio Ritual",
          "Sources": "Steam"
        },
        {
          "Name": "Metal Unit",
          "Sources": "Amazon"
        },
        {
          "Name": "Five Dates",
          "Sources": "Steam"
        },
        {
          "Name": "Zup! 2",
          "Sources": "Steam"
        },
        {
          "Name": "Siege Survival: Gloria Victis",
          "Sources": "Steam"
        },
        {
          "Name": "Hitman 2: Silent Assassin",
          "Sources": "Steam"
        },
        {
          "Name": "Hellblade: Senua's Sacrifice VR Edition",
          "Sources": "Steam"
        },
        {
          "Name": "Uncharted Ocean 2",
          "Sources": "Steam"
        },
        {
          "Name": "Hearthstone",
          "Sources": "Battle.net"
        },
        {
          "Name": "Duels of Fortune",
          "Sources": "Steam"
        },
        {
          "Name": "Sleeping Valley",
          "Sources": "Steam"
        },
        {
          "Name": "Before I Forget",
          "Sources": "Humble"
        },
        {
          "Name": "VoidExpanse",
          "Sources": "Steam"
        },
        {
          "Name": "Object N",
          "Sources": "Steam"
        },
        {
          "Name": "Fragment's Moonrise",
          "Sources": "Steam"
        },
        {
          "Name": "Starship Theory",
          "Sources": "Steam"
        },
        {
          "Name": "Bone: The Great Cow Race",
          "Sources": "Steam"
        },
        {
          "Name": "Retrowave",
          "Sources": "Steam"
        },
        {
          "Name": "Healer's Quest",
          "Sources": "Amazon"
        },
        {
          "Name": "SANGOKU XIANGQI",
          "Sources": "Steam"
        },
        {
          "Name": "Dungeon Mage",
          "Sources": "Steam"
        },
        {
          "Name": "Control Ultimate Edition",
          "Sources": "Steam"
        },
        {
          "Name": "Clicker bAdventure",
          "Sources": "Steam"
        },
        {
          "Name": "Sam & Max 302: The Tomb of Sammun-Mak",
          "Sources": "Steam"
        },
        {
          "Name": "We're Tethered Together",
          "Sources": "Steam"
        },
        {
          "Name": "Bitburner",
          "Sources": "Steam"
        },
        {
          "Name": "Override",
          "Sources": "Steam"
        },
        {
          "Name": "Die Young",
          "Sources": "Indiegala"
        },
        {
          "Name": "Divine Knockout",
          "Sources": "Epic"
        },
        {
          "Name": "Filthy, Stinking, Orcs!",
          "Sources": "Steam"
        },
        {
          "Name": "Hue",
          "Sources": "Epic"
        },
        {
          "Name": "Amnesia: The Dark Descent",
          "Sources": "Steam"
        },
        {
          "Name": "Cat Quest",
          "Sources": "Epic"
        },
        {
          "Name": "Sam & Max 305: The City that Dares not Sleep",
          "Sources": "Steam"
        },
        {
          "Name": "The Walking Dead: Season Two",
          "Sources": "Amazon"
        },
        {
          "Name": 1990,
          "Sources": "Steam"
        },
        {
          "Name": "theBlu",
          "Sources": "Steam"
        },
        {
          "Name": "Starship Annihilator",
          "Sources": "Steam"
        },
        {
          "Name": "UnMetal",
          "Sources": "Steam"
        },
        {
          "Name": "Unholy Heights",
          "Sources": "Steam"
        },
        {
          "Name": "Fluffy Horde",
          "Sources": "Steam"
        },
        {
          "Name": "For Honor",
          "Sources": "Ubisoft Connect"
        },
        {
          "Name": "Shock Troopers: 2nd Squad",
          "Sources": "Amazon"
        },
        {
          "Name": "Glacier 3: The Meltdown",
          "Sources": "Steam"
        },
        {
          "Name": "Polygolf",
          "Sources": "Indiegala"
        },
        {
          "Name": "Gremlins, Inc.",
          "Sources": "Steam"
        },
        {
          "Name": "Sniper Ghost Warrior 2",
          "Sources": "Steam"
        },
        {
          "Name": "Desktop Dungeons",
          "Sources": "Steam"
        },
        {
          "Name": "The Palace of Unrest",
          "Sources": "Steam"
        },
        {
          "Name": "One Step from Eden Exclusive Sneak Peek",
          "Sources": "Humble"
        },
        {
          "Name": "The Dungeon Of Naheulbeuk: The Amulet Of Chaos",
          "Sources": "Steam"
        },
        {
          "Name": "Zwei: The Arges Adventure",
          "Sources": "Steam"
        },
        {
          "Name": "Syzygy",
          "Sources": "Humble"
        },
        {
          "Name": "LEGO Batman 2 DC Super Heroes",
          "Sources": "Epic"
        },
        {
          "Name": "Deleveled",
          "Sources": "Steam"
        },
        {
          "Name": "Battle Chef Brigade Deluxe",
          "Sources": "Amazon"
        },
        {
          "Name": "Severed Steel",
          "Sources": "Epic"
        },
        {
          "Name": "Pillars of Eternity",
          "Sources": "Steam"
        },
        {
          "Name": "while True: learn()",
          "Sources": "Epic"
        },
        {
          "Name": "Witcheye",
          "Sources": "Amazon"
        },
        {
          "Name": "Brütal Legend",
          "Sources": "Steam"
        },
        {
          "Name": "SEUM: Speedrunners from Hell",
          "Sources": "Amazon"
        },
        {
          "Name": "Bejeweled 3",
          "Sources": "EA app"
        },
        {
          "Name": "Passpartout: The Starving Artist",
          "Sources": "Steam"
        },
        {
          "Name": "Serial Cleaner",
          "Sources": "Amazon"
        },
        {
          "Name": "7 Days to Die",
          "Sources": "Steam"
        },
        {
          "Name": "Jotun: Valhalla Edition",
          "Sources": "GOG"
        },
        {
          "Name": "The Last Tinker",
          "Sources": "Amazon"
        },
        {
          "Name": "Naiad",
          "Sources": "Humble"
        },
        {
          "Name": "We. The Revolution",
          "Sources": "Amazon"
        },
        {
          "Name": "Algo Bot",
          "Sources": "Amazon"
        },
        {
          "Name": "SONG OF HORROR",
          "Sources": "Steam"
        },
        {
          "Name": "Remnant: From the Ashes",
          "Sources": "Epic"
        },
        {
          "Name": "OpenTTD",
          "Sources": "GOG"
        },
        {
          "Name": "Grapplania",
          "Sources": "Steam"
        },
        {
          "Name": "Deiland",
          "Sources": "Steam"
        },
        {
          "Name": "MORDHAU",
          "Sources": "Epic"
        },
        {
          "Name": "Starbound",
          "Sources": "Steam"
        },
        {
          "Name": "Ninja Hanrei",
          "Sources": "Steam"
        },
        {
          "Name": "LEGO Fortnite",
          "Sources": "Epic"
        },
        {
          "Name": "A Good Snowman Is Hard To Build",
          "Sources": "Amazon"
        },
        {
          "Name": "Trek to Yomi",
          "Sources": "Steam"
        },
        {
          "Name": "Mutant Year Zero Road to Eden",
          "Sources": "Epic"
        },
        {
          "Name": "Black Book",
          "Sources": "Steam"
        },
        {
          "Name": "Okhlos: Omega",
          "Sources": "Steam"
        },
        {
          "Name": "Rapture Rejects",
          "Sources": "Steam"
        },
        {
          "Name": "Zup! 9",
          "Sources": "Steam"
        },
        {
          "Name": "Dead Space (2008)",
          "Sources": "Steam"
        },
        {
          "Name": "OlliOlli World",
          "Sources": "Steam"
        },
        {
          "Name": "BloodDome Classic",
          "Sources": "Steam"
        },
        {
          "Name": "Wallace & Gromit: The Bogey Man",
          "Sources": "Amazon"
        },
        {
          "Name": "Don't get lost",
          "Sources": "Steam"
        },
        {
          "Name": "The Purge Dilemma",
          "Sources": "Steam"
        },
        {
          "Name": "Treasure Adventure Game",
          "Sources": "GOG"
        },
        {
          "Name": "Röki",
          "Sources": "Steam"
        },
        {
          "Name": "12 is Better Than 6 DRM-free build",
          "Sources": "Humble"
        },
        {
          "Name": "Demon Turf",
          "Sources": "Steam"
        },
        {
          "Name": "Der Geistermeister",
          "Sources": "Steam"
        },
        {
          "Name": "Mass Effect 2",
          "Sources": "EA app"
        },
        {
          "Name": "The Dark Pictures Anthology: House of Ashes",
          "Sources": "Steam"
        },
        {
          "Name": "Bang Bang Racing",
          "Sources": "Amazon"
        },
        {
          "Name": "Fallen",
          "Sources": "Steam"
        },
        {
          "Name": "Blacksmith",
          "Sources": "Steam"
        },
        {
          "Name": "Exos Heroes",
          "Sources": "Steam"
        },
        {
          "Name": "The Elder Scrolls III: Morrowind",
          "Sources": "Steam"
        },
        {
          "Name": "RISK: Global Domination",
          "Sources": "Steam"
        },
        {
          "Name": "Back to the Future: Ep 5 - OUTATIME",
          "Sources": "Steam"
        },
        {
          "Name": "Ace Racers SP",
          "Sources": "Steam"
        },
        {
          "Name": "Hood Outlaws and Legends",
          "Sources": "Epic"
        },
        {
          "Name": "Project Warlock",
          "Sources": "Amazon"
        },
        {
          "Name": "Close to the Sun",
          "Sources": "Amazon"
        },
        {
          "Name": "Fishing Planet",
          "Sources": "Steam"
        },
        {
          "Name": "Viscera Cleanup Detail",
          "Sources": "Steam"
        },
        {
          "Name": "Warlock - Master of the Arcane",
          "Sources": "Steam"
        },
        {
          "Name": "Project: Name",
          "Sources": "Steam"
        },
        {
          "Name": "Torchlight",
          "Sources": "Steam"
        },
        {
          "Name": "Warsaw",
          "Sources": "Amazon"
        },
        {
          "Name": "Metaball",
          "Sources": "Steam"
        },
        {
          "Name": "Awesomenauts",
          "Sources": "Steam"
        },
        {
          "Name": "Downwell",
          "Sources": "Amazon"
        },
        {
          "Name": "Cyberpunk 2077 & Phantom Liberty Goodies Collection",
          "Sources": "GOG"
        },
        {
          "Name": "Knights of Honor II - Goodie Pack",
          "Sources": "GOG"
        },
        {
          "Name": "Wallace & Gromit: Muzzled!",
          "Sources": "Amazon"
        },
        {
          "Name": "Quake 4",
          "Sources": "GOG"
        },
        {
          "Name": "Ashes of the Singularity: Escalation",
          "Sources": "Steam"
        },
        {
          "Name": "Darwin Project",
          "Sources": "Steam"
        },
        {
          "Name": "The Window Box",
          "Sources": "Steam"
        },
        {
          "Name": "Torchlight II",
          "Sources": "Steam"
        },
        {
          "Name": "Phantom of Zana",
          "Sources": "Steam"
        },
        {
          "Name": "TyranoBuilder Visual Novel Studio",
          "Sources": "Steam"
        },
        {
          "Name": "Newfound Courage",
          "Sources": "Amazon"
        },
        {
          "Name": "Train Valley 2",
          "Sources": "Steam"
        },
        {
          "Name": "Phantasy Star Online 2 New Genesis",
          "Sources": "Steam"
        },
        {
          "Name": "Beasts of Maravilla Island",
          "Sources": "Amazon"
        },
        {
          "Name": "Overload - Playable Teaser",
          "Sources": "GOG"
        },
        {
          "Name": "Marvin's Mittens",
          "Sources": "Steam"
        },
        {
          "Name": "Mortal Shell Tech Beta",
          "Sources": "Epic"
        },
        {
          "Name": "Borderlands GOTY Enhanced",
          "Sources": "Steam"
        },
        {
          "Name": "Out of Space",
          "Sources": "Steam"
        },
        {
          "Name": "Riverbond",
          "Sources": "Epic"
        },
        {
          "Name": "Roguebook",
          "Sources": "Amazon"
        },
        {
          "Name": "Will To Live Online",
          "Sources": "Steam"
        },
        {
          "Name": "Tick Tack Puppet",
          "Sources": "Steam"
        },
        {
          "Name": "Spoolside",
          "Sources": "Humble"
        },
        {
          "Name": "Power Fantasy",
          "Sources": "Steam"
        },
        {
          "Name": "Continent of the Ninth Golden",
          "Sources": "Steam"
        },
        {
          "Name": "Worms W.M.D",
          "Sources": "Steam"
        },
        {
          "Name": "Amnesia: A Machine For Pigs",
          "Sources": "GOG"
        },
        {
          "Name": "Mighty Party",
          "Sources": "Steam"
        },
        {
          "Name": "Heros and Monsters: Idle Incremental",
          "Sources": "Steam"
        },
        {
          "Name": "Hearts of Iron IV",
          "Sources": "Steam"
        },
        {
          "Name": "Chimpact 1 - Chuck's Adventure",
          "Sources": "Steam"
        },
        {
          "Name": "Gods and Nemesis: of Ghosts from Dragons",
          "Sources": "Steam"
        },
        {
          "Name": "A Detective's Novel",
          "Sources": "Steam"
        },
        {
          "Name": "Boreal Blade",
          "Sources": "Steam"
        },
        {
          "Name": "Tales of Monkey Island: Chapter 3 - Lair of the Leviathan",
          "Sources": "Steam"
        },
        {
          "Name": "Battle for Wesnoth",
          "Sources": "Steam"
        },
        {
          "Name": "Main Assembly",
          "Sources": "Steam"
        },
        {
          "Name": "Breathedge",
          "Sources": "Amazon"
        },
        {
          "Name": "Kunai",
          "Sources": "Amazon"
        },
        {
          "Name": "Boomerang Fu",
          "Sources": "Amazon"
        },
        {
          "Name": "Plants vs Zombies Game of the Year Edition",
          "Sources": "EA app"
        },
        {
          "Name": "Pirates Of Heaven",
          "Sources": "Steam"
        },
        {
          "Name": "Diablo III",
          "Sources": "Battle.net"
        },
        {
          "Name": "Deadly Days",
          "Sources": "Steam"
        },
        {
          "Name": "Spiritfarer: Farewell Edition",
          "Sources": "Steam"
        },
        {
          "Name": "Conan Exiles",
          "Sources": "Steam"
        },
        {
          "Name": "Sam & Max 106: Bright Side of the Moon",
          "Sources": "Steam"
        },
        {
          "Name": "Terraformers",
          "Sources": "Amazon"
        },
        {
          "Name": "Aquarium Simulator",
          "Sources": "Steam"
        },
        {
          "Name": "Glassbreakers: Champions of Moss",
          "Sources": "Steam"
        },
        {
          "Name": "Farming Simulator 19",
          "Sources": "Epic"
        },
        {
          "Name": "Extreme Burger Defense",
          "Sources": "Humble"
        },
        {
          "Name": "Go All Out: Free To Play",
          "Sources": "Steam"
        },
        {
          "Name": "Grand War: Rome - Free Strategy Game",
          "Sources": "Steam"
        },
        {
          "Name": "Sid Meier's Civilization IV",
          "Sources": "Amazon"
        },
        {
          "Name": "Serious Sam Classic: The First Encounter",
          "Sources": "Steam"
        },
        {
          "Name": "Jurassic World Evolution",
          "Sources": "Epic"
        },
        {
          "Name": "Watch Your Back",
          "Sources": "Steam"
        },
        {
          "Name": "Boomerang Fu",
          "Sources": "Steam"
        },
        {
          "Name": "InnerSpace",
          "Sources": "Amazon"
        },
        {
          "Name": "Darkwood",
          "Sources": "Steam"
        },
        {
          "Name": "Evil Dead The Game",
          "Sources": "Epic"
        },
        {
          "Name": "Ascendant",
          "Sources": "GOG"
        },
        {
          "Name": "League Of Guessing",
          "Sources": "Steam"
        },
        {
          "Name": "Lightmatter",
          "Sources": "Steam"
        },
        {
          "Name": "Secrets of the Lost Tomb",
          "Sources": "Steam"
        },
        {
          "Name": "Coloring Book",
          "Sources": "Steam"
        },
        {
          "Name": "Desolate",
          "Sources": "Steam"
        },
        {
          "Name": "Axiom Verge Randomizer Beta",
          "Sources": "Epic"
        },
        {
          "Name": "Life is Strange",
          "Sources": "Steam"
        },
        {
          "Name": "OpenTTD",
          "Sources": "Steam"
        },
        {
          "Name": "LEGO STAR WARS: The Force Awakens",
          "Sources": "Steam"
        },
        {
          "Name": "CRSED",
          "Sources": "Steam"
        },
        {
          "Name": "Breathedge",
          "Sources": "Epic"
        },
        {
          "Name": "Heavy Metal Machines",
          "Sources": "Steam"
        },
        {
          "Name": "East India Company Gold",
          "Sources": "Steam"
        },
        {
          "Name": "Dandara",
          "Sources": "Amazon"
        },
        {
          "Name": "When Ski Lifts Go Wrong",
          "Sources": "Amazon"
        },
        {
          "Name": "Slime-san",
          "Sources": "Steam"
        },
        {
          "Name": "Immortal Redneck",
          "Sources": "Steam"
        },
        {
          "Name": "Warhammer 40,000: Space Marine - Anniversary Edition",
          "Sources": "Steam"
        },
        {
          "Name": "Very Scary Backrooms Game",
          "Sources": "Steam"
        },
        {
          "Name": "World of Warships",
          "Sources": "Epic"
        },
        {
          "Name": "Ancient Space",
          "Sources": "Steam"
        },
        {
          "Name": "Insurmountable",
          "Sources": "Epic"
        },
        {
          "Name": "The Turing Test",
          "Sources": "Steam"
        },
        {
          "Name": "The Flame in the Flood",
          "Sources": "Steam"
        },
        {
          "Name": "Morkredd",
          "Sources": "Steam"
        },
        {
          "Name": "The Minotaur",
          "Sources": "Steam"
        },
        {
          "Name": "Monster Prom 2: Monster Camp",
          "Sources": "GOG"
        },
        {
          "Name": "NAIRI: Tower of Shirin",
          "Sources": "Steam"
        },
        {
          "Name": "Roombo: First Blood (Justice Sucks)",
          "Sources": "Humble"
        },
        {
          "Name": "Gone Home",
          "Sources": "Epic"
        },
        {
          "Name": "DOOM Eternal",
          "Sources": "Steam"
        },
        {
          "Name": "Pizza Titan Ultra",
          "Sources": "Steam"
        },
        {
          "Name": "Normality",
          "Sources": "Steam"
        },
        {
          "Name": "Phobolis - Alpha Test",
          "Sources": "itch.io"
        },
        {
          "Name": "Wizard of Legend",
          "Sources": "Steam"
        },
        {
          "Name": "Tyrian 2000",
          "Sources": "GOG"
        },
        {
          "Name": "You Are A Pilot",
          "Sources": "Steam"
        },
        {
          "Name": "No Turning Back: The Pixel Art Action-Adventure Roguelike",
          "Sources": "Steam"
        },
        {
          "Name": "Strata",
          "Sources": "Amazon"
        },
        {
          "Name": "The Shrouded Isle",
          "Sources": "Steam"
        },
        {
          "Name": "Old Man's Journey",
          "Sources": "Steam"
        },
        {
          "Name": "Action Taimanin",
          "Sources": "Steam"
        },
        {
          "Name": "Blocks That Matter",
          "Sources": "Steam"
        },
        {
          "Name": "In Other Waters",
          "Sources": "Steam"
        },
        {
          "Name": "Slender: The Arrival",
          "Sources": "Steam"
        },
        {
          "Name": "Unforgiving Trials: The Space Crusade",
          "Sources": "Steam"
        },
        {
          "Name": "Gladiators: Survival in Rome",
          "Sources": "Steam"
        },
        {
          "Name": "House Flipper",
          "Sources": "Steam"
        },
        {
          "Name": "Tribes of Midgard",
          "Sources": "Steam"
        },
        {
          "Name": "Tom Clancy's The Division",
          "Sources": "Ubisoft Connect"
        },
        {
          "Name": "OyasumiVR",
          "Sources": "Steam"
        },
        {
          "Name": "LEGO Harry Potter: Years 5-7",
          "Sources": "Steam"
        },
        {
          "Name": "Riff XR",
          "Sources": "Steam"
        },
        {
          "Name": "Cities: Skylines",
          "Sources": "Steam"
        },
        {
          "Name": "A.V.A Global",
          "Sources": "Steam"
        },
        {
          "Name": "Dark Future: Blood Red States",
          "Sources": "Steam"
        },
        {
          "Name": "A Knight's Quest",
          "Sources": "Amazon"
        },
        {
          "Name": "Darksiders",
          "Sources": "Steam"
        },
        {
          "Name": "Alwa's Awakening",
          "Sources": "GOG"
        },
        {
          "Name": "Football Manager 2022 Editor",
          "Sources": "Epic"
        },
        {
          "Name": "Steam Engine Simulator",
          "Sources": "Steam"
        },
        {
          "Name": "Layers of Fear 2",
          "Sources": "Epic"
        },
        {
          "Name": "Robowars",
          "Sources": "Steam"
        },
        {
          "Name": "Dauntless",
          "Sources": "Epic"
        },
        {
          "Name": "Earth 2150: The Moon Project",
          "Sources": "Steam"
        },
        {
          "Name": "Warpips",
          "Sources": "Epic"
        },
        {
          "Name": "Raji: An Ancient Epic",
          "Sources": "Steam"
        },
        {
          "Name": "Plague Inc: Evolved",
          "Sources": "Steam"
        },
        {
          "Name": "Curse of the Dead Gods",
          "Sources": "Steam"
        },
        {
          "Name": "KID A MNESIA EXHIBITION",
          "Sources": "Epic"
        },
        {
          "Name": "Killing Floor 2",
          "Sources": "Steam"
        },
        {
          "Name": "The Genesis Project",
          "Sources": "Steam"
        },
        {
          "Name": "Far Cry 3",
          "Sources": "Ubisoft Connect"
        },
        {
          "Name": "Potatoman Seeks the Troof",
          "Sources": "Steam"
        },
        {
          "Name": "Zuma's Revenge",
          "Sources": "EA app"
        },
        {
          "Name": "Battlemon",
          "Sources": "Steam"
        },
        {
          "Name": "Stumblehill",
          "Sources": "Humble"
        },
        {
          "Name": "The Norwood Suite",
          "Sources": "Steam"
        },
        {
          "Name": "EndlessCar",
          "Sources": "Steam"
        },
        {
          "Name": "Ricochet",
          "Sources": "Steam"
        },
        {
          "Name": "SAMOLIOTIK",
          "Sources": "Steam"
        },
        {
          "Name": "Shady Part of Me",
          "Sources": "Steam"
        },
        {
          "Name": "Titan Quest Anniversary Edition",
          "Sources": "Steam"
        },
        {
          "Name": "PictoQuest",
          "Sources": "Amazon"
        },
        {
          "Name": "Midnight Ghost Hunt",
          "Sources": "Epic"
        },
        {
          "Name": "Suzerain",
          "Sources": "Steam"
        },
        {
          "Name": "Horace",
          "Sources": "Amazon"
        },
        {
          "Name": "RUINER",
          "Sources": "Epic"
        },
        {
          "Name": "What Remains of Edith Finch",
          "Sources": "Epic"
        },
        {
          "Name": "911 Operator",
          "Sources": "Steam"
        },
        {
          "Name": "Cell to Singularity - Evolution Never Ends",
          "Sources": "Steam"
        },
        {
          "Name": "Ultimate Custom Night",
          "Sources": "Steam"
        },
        {
          "Name": "Whispers of a Machine",
          "Sources": "Amazon"
        },
        {
          "Name": "Total War: WARHAMMER",
          "Sources": "Steam"
        },
        {
          "Name": "Effie",
          "Sources": "Amazon"
        },
        {
          "Name": "PHAT STACKS",
          "Sources": "Steam"
        },
        {
          "Name": "Day D: Tower Rush",
          "Sources": "Steam"
        },
        {
          "Name": "Draw Near",
          "Sources": "Steam"
        },
        {
          "Name": "The Bard's Tale IV: Director's Cut",
          "Sources": "Steam"
        },
        {
          "Name": "Book of Demons",
          "Sources": "Amazon"
        },
        {
          "Name": "At Winter's End",
          "Sources": "Steam"
        },
        {
          "Name": "Rebel Inc: Escalation",
          "Sources": "Steam"
        },
        {
          "Name": "Tales from the Borderlands",
          "Sources": "Steam"
        },
        {
          "Name": "The Culling Of The Cows",
          "Sources": "Steam"
        },
        {
          "Name": "Nosferatu: The Wrath of Malachi",
          "Sources": "Steam"
        },
        {
          "Name": "Acceleration of SUGURI 2",
          "Sources": "Steam"
        },
        {
          "Name": "Gauntlet",
          "Sources": "Steam"
        },
        {
          "Name": "Lifeless Planet: Premier Edition",
          "Sources": "Epic"
        },
        {
          "Name": "The Dig",
          "Sources": "Amazon"
        },
        {
          "Name": "Goalienator",
          "Sources": "Steam"
        },
        {
          "Name": "Syndicate Plus",
          "Sources": "GOG"
        },
        {
          "Name": "Late Shift",
          "Sources": "Steam"
        },
        {
          "Name": "Angel Legion - Idle RPG",
          "Sources": "Steam"
        },
        {
          "Name": "Metro Exodus Enhanced Edition",
          "Sources": "Steam"
        },
        {
          "Name": "Stranger Things 3",
          "Sources": "Amazon"
        },
        {
          "Name": "Yojimbrawl",
          "Sources": "Humble"
        },
        {
          "Name": "Soccer Brawl",
          "Sources": "Amazon"
        },
        {
          "Name": "Sudden Strike 4",
          "Sources": "Steam"
        },
        {
          "Name": "DayEnd",
          "Sources": "itch.io"
        },
        {
          "Name": "Star Wars: Knights of the Old Republic",
          "Sources": "Amazon"
        },
        {
          "Name": "The Circus",
          "Sources": "Steam"
        },
        {
          "Name": "8-Bit Bayonetta",
          "Sources": "Steam"
        },
        {
          "Name": "Miracle Calamity Homeostasis",
          "Sources": "Steam"
        },
        {
          "Name": "Moving Out",
          "Sources": "Amazon"
        },
        {
          "Name": "Five Nights at Freddy's 2",
          "Sources": "Steam"
        },
        {
          "Name": "Mugsters",
          "Sources": "Amazon"
        },
        {
          "Name": "Senpa.io",
          "Sources": "Steam"
        },
        {
          "Name": "Hearts of Iron II: Complete",
          "Sources": "Steam"
        },
        {
          "Name": "Wallpaper Engine",
          "Sources": "Steam"
        },
        {
          "Name": "Shadowverse",
          "Sources": "Steam"
        },
        {
          "Name": "Idle Champions of the Forgotten Realms",
          "Sources": "Epic"
        },
        {
          "Name": "Puzzle Agent",
          "Sources": "Amazon"
        },
        {
          "Name": "InnerSpace",
          "Sources": "Epic"
        },
        {
          "Name": "Hitman: Sniper Challenge",
          "Sources": "Steam"
        },
        {
          "Name": "Revita",
          "Sources": "Steam"
        },
        {
          "Name": "PAYDAY: The Heist",
          "Sources": "Steam"
        },
        {
          "Name": "The Last Pawn",
          "Sources": "Steam"
        },
        {
          "Name": "American Fugitive",
          "Sources": "Amazon"
        },
        {
          "Name": "The Sims 4",
          "Sources": "EA app"
        },
        {
          "Name": "Knights and Merchants",
          "Sources": "Steam"
        },
        {
          "Name": "Cultist Simulator",
          "Sources": "Amazon"
        },
        {
          "Name": "Urban Trial Playground",
          "Sources": "Amazon"
        },
        {
          "Name": "Darksiders III",
          "Sources": "Steam"
        },
        {
          "Name": "MOBILE SUIT GUNDAM BATTLE OPERATION 2",
          "Sources": "Steam"
        },
        {
          "Name": "Minit",
          "Sources": "Steam"
        },
        {
          "Name": "The Banner Saga 2",
          "Sources": "Amazon"
        },
        {
          "Name": "War for the Overworld",
          "Sources": "Steam"
        },
        {
          "Name": "Conan Chop Chop",
          "Sources": "Steam"
        },
        {
          "Name": "Final Liberation: Warhammer Epic 40,000",
          "Sources": "GOG"
        },
        {
          "Name": "ManaSoul",
          "Sources": "Steam"
        },
        {
          "Name": "Shadowgate",
          "Sources": "Steam"
        },
        {
          "Name": "Lethal League",
          "Sources": "Steam"
        },
        {
          "Name": "Kathy Rain",
          "Sources": "Steam"
        },
        {
          "Name": "A Short Hike",
          "Sources": "Steam"
        },
        {
          "Name": "Crossroads: Roguelike RPG Dungeon Crawler",
          "Sources": "Steam"
        },
        {
          "Name": "The Survivalists",
          "Sources": "Steam"
        },
        {
          "Name": "The Evil Within 2",
          "Sources": "GOG"
        },
        {
          "Name": "Fishing: North Atlantic",
          "Sources": "Amazon"
        },
        {
          "Name": "LEGO The Lord of the Rings",
          "Sources": "Steam"
        },
        {
          "Name": "Open Mod",
          "Sources": "Steam"
        },
        {
          "Name": "Solitairica",
          "Sources": "Epic"
        },
        {
          "Name": "Fall Guys",
          "Sources": "Epic"
        },
        {
          "Name": "Conan Exiles - Public Beta Client",
          "Sources": "Steam"
        },
        {
          "Name": "Sniper Elite",
          "Sources": "Steam"
        },
        {
          "Name": "Vane",
          "Sources": "Steam"
        },
        {
          "Name": "The Last Blade 2",
          "Sources": "Amazon"
        },
        {
          "Name": "Neon Prism",
          "Sources": "Steam"
        },
        {
          "Name": "Grand Theft Auto III",
          "Sources": "Steam"
        },
        {
          "Name": "The Abbey of Crime Extensum",
          "Sources": "Steam"
        },
        {
          "Name": "Sins of a Solar Empire: Rebellion",
          "Sources": "Steam"
        },
        {
          "Name": "Ninja Master's",
          "Sources": "Amazon"
        },
        {
          "Name": "Grand Theft Auto IV: The Complete Edition",
          "Sources": "Steam"
        },
        {
          "Name": "SimplePlanes",
          "Sources": "Steam"
        },
        {
          "Name": "Fallout: A Post Nuclear Role Playing Game",
          "Sources": "Epic"
        },
        {
          "Name": "Animal Shelter: Prologue",
          "Sources": "Steam"
        },
        {
          "Name": "shapez",
          "Sources": "Epic"
        },
        {
          "Name": "Kingdom Ka",
          "Sources": "itch.io"
        },
        {
          "Name": "Tyranny - Gold Edition",
          "Sources": "Epic"
        },
        {
          "Name": "Mega Man Legacy Collection",
          "Sources": "Steam"
        },
        {
          "Name": "Arkio",
          "Sources": "Steam"
        },
        {
          "Name": "A Hat in Time",
          "Sources": "Steam"
        },
        {
          "Name": "HenapoLand",
          "Sources": "Steam"
        },
        {
          "Name": "Grimm",
          "Sources": "Steam"
        },
        {
          "Name": "To the Top",
          "Sources": "Steam"
        },
        {
          "Name": "WRC 9",
          "Sources": "Amazon"
        },
        {
          "Name": "Guts and Glory",
          "Sources": "Steam"
        },
        {
          "Name": "Verlet Swing",
          "Sources": "Steam"
        },
        {
          "Name": "Fort Meow",
          "Sources": "Steam"
        },
        {
          "Name": "Reigns: Her Majesty",
          "Sources": "Steam"
        },
        {
          "Name": "Ghostbusters Remastered",
          "Sources": "Epic"
        },
        {
          "Name": "Commander: Conquest of the Americas",
          "Sources": "Steam"
        },
        {
          "Name": "Fuse",
          "Sources": "Steam"
        },
        {
          "Name": "Pressure",
          "Sources": "Steam"
        },
        {
          "Name": "The Cerberus Project",
          "Sources": "Steam"
        },
        {
          "Name": "Amnesia: A Machine for Pigs",
          "Sources": "Steam"
        },
        {
          "Name": "Enclave",
          "Sources": "Steam"
        },
        {
          "Name": "Transistor",
          "Sources": "Epic"
        },
        {
          "Name": "Stories Untold",
          "Sources": "Steam"
        },
        {
          "Name": "Aven Colony",
          "Sources": "Epic"
        },
        {
          "Name": "RunGunJumpGun",
          "Sources": "Amazon"
        },
        {
          "Name": "Asteroids: Recharged",
          "Sources": "Epic"
        },
        {
          "Name": "Pixel Puzzles Traditional Jigsaws",
          "Sources": "Steam"
        },
        {
          "Name": "Sniper Ghost Warrior Contracts",
          "Sources": "Steam"
        },
        {
          "Name": "Oil Rush",
          "Sources": "Steam"
        },
        {
          "Name": "The Ascent",
          "Sources": "Steam"
        },
        {
          "Name": "FPV.SkyDive",
          "Sources": "Steam"
        },
        {
          "Name": "Peggle",
          "Sources": "EA app"
        },
        {
          "Name": "KILLFISH",
          "Sources": "Steam"
        },
        {
          "Name": "Amnesia: Rebirth",
          "Sources": "Steam"
        },
        {
          "Name": "Borderlands: The Pre-Sequel",
          "Sources": "Epic"
        },
        {
          "Name": "Lacuna",
          "Sources": "Steam"
        },
        {
          "Name": "Adventures of Chris",
          "Sources": "Amazon"
        },
        {
          "Name": "Eldest Souls",
          "Sources": "Steam"
        },
        {
          "Name": "Pine",
          "Sources": "Epic"
        },
        {
          "Name": "Friend ReQuest - A Playable Teaser",
          "Sources": "Steam"
        },
        {
          "Name": "Kill 'Em All",
          "Sources": "Indiegala"
        },
        {
          "Name": "Men of War: Assault Squad 2",
          "Sources": "Steam"
        },
        {
          "Name": "The King of Fighters 2002 Unlimited Match",
          "Sources": "Amazon"
        },
        {
          "Name": "Defold",
          "Sources": "Steam"
        },
        {
          "Name": "Lethis - Path of Progress",
          "Sources": "Amazon"
        },
        {
          "Name": "Nomads of Driftland",
          "Sources": "GOG"
        },
        {
          "Name": "Forge of Gods (RPG)",
          "Sources": "Steam"
        },
        {
          "Name": "Shenmue III",
          "Sources": "Steam"
        },
        {
          "Name": "Before I Forget",
          "Sources": "Amazon"
        },
        {
          "Name": "Command & Conquer Red Alert 2 and Yuri's Revenge",
          "Sources": "EA app"
        },
        {
          "Name": "Syberia II",
          "Sources": "EA app"
        },
        {
          "Name": "Draw Slasher",
          "Sources": "Steam"
        },
        {
          "Name": "MICROVOLTS: Recharged",
          "Sources": "Steam"
        },
        {
          "Name": "The Little Acre",
          "Sources": "Amazon"
        },
        {
          "Name": "Soundscape VR: 2017",
          "Sources": "Steam"
        },
        {
          "Name": "Song of Horror Complete Edition",
          "Sources": "Amazon"
        },
        {
          "Name": "Battlefield 1",
          "Sources": "EA app"
        },
        {
          "Name": "Fury Unleashed",
          "Sources": "Steam"
        },
        {
          "Name": "Karos",
          "Sources": "Steam"
        },
        {
          "Name": "Casual Spider Solitaire",
          "Sources": "Steam"
        },
        {
          "Name": "GoNNER",
          "Sources": "Epic"
        },
        {
          "Name": "Wildfire Sneak Peek",
          "Sources": "Humble"
        },
        {
          "Name": "Raddoll",
          "Sources": "Steam"
        },
        {
          "Name": "Worms Rumble",
          "Sources": "Steam"
        },
        {
          "Name": "Wizardry 7: Crusaders of the Dark Savant",
          "Sources": "Amazon"
        },
        {
          "Name": "Bloompunk",
          "Sources": "Steam"
        },
        {
          "Name": "Strange Brigade",
          "Sources": "Steam"
        },
        {
          "Name": "Knight Club",
          "Sources": "Humble"
        },
        {
          "Name": "Crusaders of the Lost Idols",
          "Sources": "Steam"
        },
        {
          "Name": "Rust",
          "Sources": "Steam"
        },
        {
          "Name": "Darwinia",
          "Sources": "Steam"
        },
        {
          "Name": "Corked",
          "Sources": "Steam"
        },
        {
          "Name": "HuCow Milking Simulator",
          "Sources": "itch.io"
        },
        {
          "Name": "Protonwar",
          "Sources": "Steam"
        },
        {
          "Name": "Cyber Hook",
          "Sources": "Amazon"
        },
        {
          "Name": "Life is Strange 2",
          "Sources": "Steam"
        },
        {
          "Name": "Space Run Galaxy",
          "Sources": "Steam"
        },
        {
          "Name": "Zombusters",
          "Sources": "itch.io"
        },
        {
          "Name": "Remothered: Broken Porcelain",
          "Sources": "Steam"
        },
        {
          "Name": "Death Stranding Content",
          "Sources": "Epic"
        },
        {
          "Name": "Roller Champions",
          "Sources": "Epic"
        },
        {
          "Name": "Last Day of June",
          "Sources": "Amazon"
        },
        {
          "Name": "Tales of Monkey Island: Chapter 4 - The Trial and Execution of Guybrush Threepwood",
          "Sources": "Steam"
        },
        {
          "Name": "Hell is Others",
          "Sources": "Epic"
        },
        {
          "Name": "Partisans 1941",
          "Sources": "Steam"
        },
        {
          "Name": "The Lords of Midnight",
          "Sources": "GOG"
        },
        {
          "Name": "Deceive Inc.",
          "Sources": "Steam"
        },
        {
          "Name": "Family Man",
          "Sources": "Steam"
        },
        {
          "Name": "Pixel Hentai Mosaic",
          "Sources": "Indiegala"
        },
        {
          "Name": "Iron Harvest",
          "Sources": "Steam"
        },
        {
          "Name": "Alt Frequencies",
          "Sources": "Amazon"
        },
        {
          "Name": "Stewart The Fox",
          "Sources": "Steam"
        },
        {
          "Name": "ScourgeBringer",
          "Sources": "Steam"
        },
        {
          "Name": "RealRTCW",
          "Sources": "Steam"
        },
        {
          "Name": "Wilmot's Warehouse",
          "Sources": "Humble"
        },
        {
          "Name": "Colourblind",
          "Sources": "Steam"
        },
        {
          "Name": "Battlefield 4",
          "Sources": "EA app"
        },
        {
          "Name": "The Outer Worlds: Spacer's Choice Edition",
          "Sources": "Steam"
        },
        {
          "Name": "Wingspan",
          "Sources": "Steam"
        },
        {
          "Name": "Roboquest",
          "Sources": "Steam"
        },
        {
          "Name": "Vane",
          "Sources": "Amazon"
        },
        {
          "Name": "Paladins",
          "Sources": "Steam"
        },
        {
          "Name": "Stamped: an anti-travel game",
          "Sources": "Steam"
        },
        {
          "Name": "Finding Paradise",
          "Sources": "Steam"
        },
        {
          "Name": "Aliya's Ascent",
          "Sources": "Steam"
        },
        {
          "Name": "神仙打架",
          "Sources": "Steam"
        },
        {
          "Name": "Fun with Ragdolls: The Game",
          "Sources": "Steam"
        },
        {
          "Name": "Rabbids Coding!",
          "Sources": "Ubisoft Connect"
        },
        {
          "Name": "Aperture Tag: The Paint Gun Testing Initiative",
          "Sources": "Steam"
        },
        {
          "Name": "Ghostrunner",
          "Sources": "GOG"
        },
        {
          "Name": "Lure of the Temptress",
          "Sources": "GOG"
        },
        {
          "Name": "GameLab UngAalborg",
          "Sources": "Steam"
        },
        {
          "Name": "Behind the Frame: The Finest Scenery",
          "Sources": "Amazon"
        },
        {
          "Name": "Sam & Max 105: Reality 2.0",
          "Sources": "Steam"
        },
        {
          "Name": "Kraken Academy!!",
          "Sources": "Steam"
        },
        {
          "Name": "Grotto",
          "Sources": "Humble"
        },
        {
          "Name": "Uncharted Waters Origin",
          "Sources": "Steam"
        },
        {
          "Name": "Zup! XS",
          "Sources": "Steam"
        },
        {
          "Name": "WATCHER",
          "Sources": "Steam"
        },
        {
          "Name": "Husk",
          "Sources": "Steam"
        },
        {
          "Name": "Indie Game: The Movie",
          "Sources": "Steam"
        },
        {
          "Name": "GoNNER",
          "Sources": "Amazon"
        },
        {
          "Name": "Size Matters",
          "Sources": "Steam"
        },
        {
          "Name": "Dense forest",
          "Sources": "Steam"
        },
        {
          "Name": "Metal Slug",
          "Sources": "Amazon"
        },
        {
          "Name": "Unparallel",
          "Sources": "Humble"
        },
        {
          "Name": "Bridge Constructor: Medieval",
          "Sources": "Amazon"
        },
        {
          "Name": "Banners of Ruin",
          "Sources": "Amazon"
        },
        {
          "Name": "2Dark",
          "Sources": "Indiegala"
        },
        {
          "Name": "SkyFly",
          "Sources": "Steam"
        },
        {
          "Name": "I am Fish",
          "Sources": "Amazon"
        },
        {
          "Name": "Wargame: Red Dragon",
          "Sources": "Steam"
        },
        {
          "Name": "Backpack Battles",
          "Sources": "itch.io"
        },
        {
          "Name": "Distance",
          "Sources": "Steam"
        },
        {
          "Name": "Splash Blast Panic",
          "Sources": "Steam"
        },
        {
          "Name": "Colt Canyon",
          "Sources": "Steam"
        },
        {
          "Name": "Adventure of Leek",
          "Sources": "Steam"
        },
        {
          "Name": "Europa Universalis III",
          "Sources": "Steam"
        },
        {
          "Name": "Defend Your Life",
          "Sources": "Steam"
        },
        {
          "Name": "World of Warships",
          "Sources": "Steam"
        },
        {
          "Name": "Game Corp DX",
          "Sources": "Steam"
        },
        {
          "Name": "War of the Three Kingdoms",
          "Sources": "Steam"
        },
        {
          "Name": "Retimed",
          "Sources": "Steam"
        },
        {
          "Name": "Bloop Reloaded",
          "Sources": "Steam"
        },
        {
          "Name": "Secrets of Magic: The Book of Spells",
          "Sources": "Indiegala"
        },
        {
          "Name": "Forager Sneak Peek",
          "Sources": "Humble"
        },
        {
          "Name": "Tomb Raider: The Last Revelation",
          "Sources": "Steam"
        },
        {
          "Name": "Tomb Raider: Chronicles",
          "Sources": "Steam"
        },
        {
          "Name": "At Home Alone Final",
          "Sources": "Steam"
        },
        {
          "Name": "Teslagrad",
          "Sources": "Steam"
        },
        {
          "Name": "LYNE",
          "Sources": "Steam"
        },
        {
          "Name": "No other cure",
          "Sources": "Steam"
        },
        {
          "Name": "King Arthur's Gold",
          "Sources": "Steam"
        },
        {
          "Name": "Pulstar",
          "Sources": "Amazon"
        },
        {
          "Name": "Shipping Manager",
          "Sources": "Steam"
        },
        {
          "Name": "GRID (2019)",
          "Sources": "Steam"
        },
        {
          "Name": "Stay Out",
          "Sources": "Steam"
        },
        {
          "Name": "Subnautica",
          "Sources": "Steam"
        },
        {
          "Name": "Madhouse Madness Prologue",
          "Sources": "Steam"
        },
        {
          "Name": "Beholder 2",
          "Sources": "GOG"
        },
        {
          "Name": "Faraway: Arctic Escape",
          "Sources": "Amazon"
        },
        {
          "Name": "Defenders of Ardania",
          "Sources": "Steam"
        },
        {
          "Name": "Talisman Prologue",
          "Sources": "Humble"
        },
        {
          "Name": "WRC 7 FIA World Rally Championship",
          "Sources": "Amazon"
        },
        {
          "Name": "Leisure Suit Larry - Magna Cum Laude Uncut and Uncensored",
          "Sources": "Indiegala"
        },
        {
          "Name": "Star Wars: Jedi Knight II - Jedi Outcast",
          "Sources": "Amazon"
        },
        {
          "Name": "Slash It",
          "Sources": "Steam"
        },
        {
          "Name": "Foxhaven",
          "Sources": "Steam"
        },
        {
          "Name": "At The Party",
          "Sources": "Steam"
        },
        {
          "Name": "Gurumin: A Monstrous Adventure",
          "Sources": "Steam"
        },
        {
          "Name": "Bridge Constructor",
          "Sources": "Amazon"
        },
        {
          "Name": "Avalon Lords: Dawn Rises",
          "Sources": "Steam"
        },
        {
          "Name": "Overload",
          "Sources": "Amazon"
        },
        {
          "Name": "ADT Pilot 01",
          "Sources": "Steam"
        },
        {
          "Name": "This War of Mine",
          "Sources": "Amazon"
        },
        {
          "Name": "Tomb Raider: Underworld",
          "Sources": "Steam"
        },
        {
          "Name": "Kimmy",
          "Sources": "Humble"
        },
        {
          "Name": "Duskers",
          "Sources": "Epic"
        },
        {
          "Name": "Treachery In Beatdown City",
          "Sources": "Amazon"
        },
        {
          "Name": "Gangs of Space",
          "Sources": "Steam"
        },
        {
          "Name": "The Deed",
          "Sources": "Steam"
        },
        {
          "Name": "FEMINAZI: The Triggering",
          "Sources": "Steam"
        },
        {
          "Name": "FLASHOUT 3D: Enhanced Edition",
          "Sources": "Steam"
        },
        {
          "Name": "Pathologic Classic HD",
          "Sources": "Steam"
        },
        {
          "Name": "Incitement 3",
          "Sources": "Steam"
        },
        {
          "Name": "Lyric Sonata",
          "Sources": "Humble"
        },
        {
          "Name": "Zup! 5",
          "Sources": "Steam"
        },
        {
          "Name": "Wuppo - Definitive Edition",
          "Sources": "Steam"
        },
        {
          "Name": "Turok 2: Seeds of Evil",
          "Sources": "Steam"
        },
        {
          "Name": "DNF Duel",
          "Sources": "Epic"
        },
        {
          "Name": "Sisters_Possession1",
          "Sources": "Steam"
        },
        {
          "Name": "Command Ops 2 Core Game",
          "Sources": "Steam"
        },
        {
          "Name": "GoNNER",
          "Sources": "Steam"
        },
        {
          "Name": "RPG in a Box",
          "Sources": "Epic"
        },
        {
          "Name": "PAC-MAN CHAMPIONSHIP EDITION 2",
          "Sources": "Steam"
        },
        {
          "Name": "Medal of Honor Pacific Assault",
          "Sources": "EA app"
        },
        {
          "Name": "Archery",
          "Sources": "Steam"
        },
        {
          "Name": "VirtuaVerse",
          "Sources": "GOG"
        },
        {
          "Name": "Brigador: Up-Armored Edition",
          "Sources": "GOG"
        },
        {
          "Name": "Driftland: The Magic Revival",
          "Sources": "Amazon"
        },
        {
          "Name": "Sludge Life",
          "Sources": "Epic"
        },
        {
          "Name": "LEZ",
          "Sources": "Steam"
        },
        {
          "Name": "The Obscura Experiment",
          "Sources": "Steam"
        },
        {
          "Name": "Batman TellTale Series Season 2 : Enemy Within",
          "Sources": "Amazon"
        },
        {
          "Name": "Disjunction",
          "Sources": "GOG"
        },
        {
          "Name": "Eximius: Seize the Frontline",
          "Sources": "Epic"
        },
        {
          "Name": "Defend the Rook",
          "Sources": "Amazon"
        },
        {
          "Name": "Top Jump: Prologue",
          "Sources": "Steam"
        },
        {
          "Name": "Horizon Chase Turbo",
          "Sources": "Epic"
        },
        {
          "Name": "Dominance",
          "Sources": "Steam"
        },
        {
          "Name": "LEGO Harry Potter: Years 1-4",
          "Sources": "Steam"
        },
        {
          "Name": "Carto",
          "Sources": "Steam"
        },
        {
          "Name": "Sanctum 2",
          "Sources": "Steam"
        },
        {
          "Name": "macdows 95",
          "Sources": "Humble"
        },
        {
          "Name": "Sound Slide",
          "Sources": "Steam"
        },
        {
          "Name": "Dex",
          "Sources": "GOG"
        },
        {
          "Name": "Hitman: Codename 47",
          "Sources": "Steam"
        },
        {
          "Name": "Reigns",
          "Sources": "Steam"
        },
        {
          "Name": "Psychonauts",
          "Sources": "Amazon"
        },
        {
          "Name": "Cult of the Wind",
          "Sources": "Steam"
        },
        {
          "Name": "The Expendabros",
          "Sources": "Steam"
        },
        {
          "Name": "Lantern of Worlds - Storybook",
          "Sources": "Steam"
        },
        {
          "Name": "One-armed cook",
          "Sources": "Steam"
        },
        {
          "Name": "Demolish & Build 2017",
          "Sources": "Steam"
        },
        {
          "Name": "Two Point Hospital",
          "Sources": "Amazon"
        },
        {
          "Name": "Bloodholic",
          "Sources": "Steam"
        },
        {
          "Name": "Royal Booty Quest",
          "Sources": "Steam"
        },
        {
          "Name": "Heroine's Quest: The Herald of Ragnarok",
          "Sources": "Steam"
        },
        {
          "Name": "A.D. 2044",
          "Sources": "GOG"
        },
        {
          "Name": "APB Reloaded",
          "Sources": "Steam"
        },
        {
          "Name": "Cockville",
          "Sources": "Steam"
        },
        {
          "Name": "Skyborn",
          "Sources": "Steam"
        },
        {
          "Name": "Titan Souls",
          "Sources": "Amazon"
        },
        {
          "Name": "Yooka-Laylee and the Impossible Lair",
          "Sources": "Epic"
        },
        {
          "Name": "Epiphany City: Prologue",
          "Sources": "Steam"
        },
        {
          "Name": "Shot In The Dark",
          "Sources": "Steam"
        },
        {
          "Name": "Do Not Feed the Monkeys",
          "Sources": "Steam"
        },
        {
          "Name": "Monster Crown",
          "Sources": "Steam"
        },
        {
          "Name": "Oddworld: New 'n' Tasty",
          "Sources": "Epic"
        },
        {
          "Name": "DEATH STRANDING DIGITAL SOUNDTRACK",
          "Sources": "Epic"
        },
        {
          "Name": "Top Hunter: Roddy & Cathy",
          "Sources": "Amazon"
        },
        {
          "Name": "The Spiral Scouts",
          "Sources": "Steam"
        },
        {
          "Name": "SLUDGE LIFE",
          "Sources": "Steam"
        },
        {
          "Name": "Ubinota",
          "Sources": "Steam"
        },
        {
          "Name": "Serious Sam Fusion 2017 (beta)",
          "Sources": "Steam"
        },
        {
          "Name": "2000:1: A Space Felony",
          "Sources": "Humble"
        },
        {
          "Name": "Black Squad",
          "Sources": "Steam"
        },
        {
          "Name": "Pirate Jam",
          "Sources": "Steam"
        },
        {
          "Name": "Warhammer: Chaosbane",
          "Sources": "Steam"
        },
        {
          "Name": "Detective Case and Clown Bot in: Murder in the Hotel Lisbon",
          "Sources": "Steam"
        },
        {
          "Name": "Sail Forth",
          "Sources": "Epic"
        },
        {
          "Name": "Larger Than Light",
          "Sources": "itch.io"
        },
        {
          "Name": "Dragonheir: Silent Gods",
          "Sources": "Steam"
        },
        {
          "Name": "Zero Reflex",
          "Sources": "Steam"
        },
        {
          "Name": "Paper Beast - Folded Edition",
          "Sources": "Amazon"
        },
        {
          "Name": "The Elder Scrolls: Legends",
          "Sources": "Steam"
        },
        {
          "Name": "Hundred Days",
          "Sources": "Amazon"
        },
        {
          "Name": "Getaway Storm",
          "Sources": "Steam"
        },
        {
          "Name": "Marvel's Guardians of the Galaxy: Social-Lord Outfit",
          "Sources": "Epic"
        },
        {
          "Name": "Murderous Pursuits",
          "Sources": "Steam"
        },
        {
          "Name": "G-Scramble",
          "Sources": "Steam"
        },
        {
          "Name": "Majesty Gold HD",
          "Sources": "Amazon"
        },
        {
          "Name": "Mafia III: Definitive Edition",
          "Sources": "Steam"
        },
        {
          "Name": "Call of the Sea",
          "Sources": "Epic"
        },
        {
          "Name": "Woten",
          "Sources": "Humble"
        },
        {
          "Name": "Once Upon A Crime In The West",
          "Sources": "Humble"
        },
        {
          "Name": "Gato Roboto",
          "Sources": "Amazon"
        },
        {
          "Name": "Town of Salem",
          "Sources": "Steam"
        },
        {
          "Name": "SCP: Secret Laboratory",
          "Sources": "Steam"
        },
        {
          "Name": "Farlight 84",
          "Sources": "Steam"
        },
        {
          "Name": "坦克队长",
          "Sources": "Steam"
        },
        {
          "Name": "Guardians Of Gaia: Guardians 8",
          "Sources": "Steam"
        },
        {
          "Name": "Darkest Hour: A Hearts of Iron Game",
          "Sources": "Steam"
        },
        {
          "Name": "DisplayFusion",
          "Sources": "Steam"
        },
        {
          "Name": "Middle-earth: Shadow of Mordor",
          "Sources": "Steam"
        },
        {
          "Name": "Sam & Max 201: Ice Station Santa",
          "Sources": "Steam"
        },
        {
          "Name": "Glorkian Warrior: The Trials Of Glork",
          "Sources": "Indiegala"
        },
        {
          "Name": "Torii",
          "Sources": "Humble"
        },
        {
          "Name": "Truberbrook",
          "Sources": "Amazon"
        },
        {
          "Name": "Kika & Daigo: A Curious Tale",
          "Sources": "Steam"
        },
        {
          "Name": "The Dungeon Of Naheulbeuk: The Amulet Of Chaos",
          "Sources": "Epic"
        },
        {
          "Name": "Her Story",
          "Sources": "Amazon"
        },
        {
          "Name": "Warhammer 40,000: Dawn of War - Game of the Year Edition",
          "Sources": "Steam"
        },
        {
          "Name": "60 Parsecs!",
          "Sources": "Steam"
        },
        {
          "Name": "The Coma 2: Vicious Sisters",
          "Sources": "GOG"
        },
        {
          "Name": "Phantom Doctrine",
          "Sources": "Steam"
        },
        {
          "Name": "Survival Tycoon",
          "Sources": "Steam"
        },
        {
          "Name": "Resident Evil 5",
          "Sources": "Steam"
        },
        {
          "Name": "Indecision.",
          "Sources": "Steam"
        },
        {
          "Name": "Red Risk",
          "Sources": "Steam"
        },
        {
          "Name": "CDPR Goodie Pack Content",
          "Sources": "GOG"
        },
        {
          "Name": "Unreal Gold",
          "Sources": "Steam"
        },
        {
          "Name": "BFF or Die",
          "Sources": "itch.io"
        },
        {
          "Name": "Cat Simulator",
          "Sources": "Steam"
        },
        {
          "Name": "Along the Edge",
          "Sources": "Amazon"
        },
        {
          "Name": "Lovecraft's Untold Stories",
          "Sources": "Steam"
        },
        {
          "Name": "StarCraft II",
          "Sources": "Battle.net"
        },
        {
          "Name": "Tyranny",
          "Sources": "Amazon"
        },
        {
          "Name": "Road Doom",
          "Sources": "Steam"
        },
        {
          "Name": "Hacknet",
          "Sources": "Amazon"
        },
        {
          "Name": "The Call",
          "Sources": "Steam"
        },
        {
          "Name": "SYNCED",
          "Sources": "Steam"
        },
        {
          "Name": "Ironcast",
          "Sources": "Amazon"
        },
        {
          "Name": "Pep-Pel",
          "Sources": "Steam"
        },
        {
          "Name": "She Fell Off",
          "Sources": "Steam"
        },
        {
          "Name": "Steel Rats",
          "Sources": "Amazon"
        },
        {
          "Name": "Lawn Mowing Simulator",
          "Sources": "Steam"
        },
        {
          "Name": "Assassin's Creed III",
          "Sources": "Steam"
        },
        {
          "Name": "Far Cry 4",
          "Sources": "Ubisoft Connect"
        },
        {
          "Name": "web spice",
          "Sources": "Indiegala"
        },
        {
          "Name": "It's a Gluttonous Life",
          "Sources": "Steam"
        },
        {
          "Name": "Anomaly Warzone Earth Mobile Campaign",
          "Sources": "Steam"
        },
        {
          "Name": "Blade & Bones",
          "Sources": "Steam"
        },
        {
          "Name": "Bio Menace",
          "Sources": "GOG"
        },
        {
          "Name": "Ghostwire: Tokyo",
          "Sources": "Steam"
        },
        {
          "Name": "ZACH-LIKE",
          "Sources": "Steam"
        },
        {
          "Name": "Beyond Gravity",
          "Sources": "Steam"
        },
        {
          "Name": "IdleCoin",
          "Sources": "Steam"
        },
        {
          "Name": "Tep The Destroyer",
          "Sources": "Steam"
        },
        {
          "Name": "Uriel's Chasm 2: את",
          "Sources": "Steam"
        },
        {
          "Name": "Move or Die - Couch Party Edition",
          "Sources": "Amazon"
        },
        {
          "Name": "Dragon's Dogma: Dark Arisen",
          "Sources": "Steam"
        },
        {
          "Name": "Amnesia: Rebirth",
          "Sources": "Epic"
        },
        {
          "Name": "Get Off My Lawn!",
          "Sources": "Steam"
        },
        {
          "Name": "Cave Heroes",
          "Sources": "Steam"
        },
        {
          "Name": "The Elder Scrolls II: Daggerfall",
          "Sources": "GOG"
        },
        {
          "Name": "Dead Man's Draw",
          "Sources": "Steam"
        },
        {
          "Name": "True Dice Roller",
          "Sources": "Steam"
        },
        {
          "Name": "Paw Paw Paw",
          "Sources": "Steam"
        },
        {
          "Name": "Homeworld Remastered Collection",
          "Sources": "Epic"
        },
        {
          "Name": "Guns N' Boxes",
          "Sources": "Steam"
        },
        {
          "Name": "We Need To Go Deeper",
          "Sources": "Steam"
        },
        {
          "Name": "Popup Dungeon",
          "Sources": "Steam"
        },
        {
          "Name": "Figment",
          "Sources": "Steam"
        },
        {
          "Name": "SuperDungeon MegaCorp",
          "Sources": "Steam"
        },
        {
          "Name": "Serious Sam HD: The Second Encounter",
          "Sources": "Steam"
        },
        {
          "Name": "Bomber Crew Deluxe",
          "Sources": "Amazon"
        },
        {
          "Name": "100 Christmas Cats",
          "Sources": "Steam"
        },
        {
          "Name": "Age of Wonders III",
          "Sources": "Steam"
        },
        {
          "Name": "TORII",
          "Sources": "Humble"
        },
        {
          "Name": "Dead In Vinland",
          "Sources": "Amazon"
        },
        {
          "Name": "Sonic CD",
          "Sources": "Steam"
        },
        {
          "Name": "Whiskey & Zombies: Great Southern Zombie Escape",
          "Sources": "Amazon"
        },
        {
          "Name": "Bashed.os",
          "Sources": "Steam"
        },
        {
          "Name": "G for Gravity",
          "Sources": "Steam"
        },
        {
          "Name": "qop 4",
          "Sources": "Steam"
        },
        {
          "Name": "Colt Express",
          "Sources": "Steam"
        },
        {
          "Name": "ETHEREAL",
          "Sources": "Humble"
        },
        {
          "Name": "Magicka: Wizard Wars",
          "Sources": "Steam"
        },
        {
          "Name": "Broken Sword: Director's Cut",
          "Sources": "GOG"
        },
        {
          "Name": "Guardian's Oath",
          "Sources": "Steam"
        },
        {
          "Name": "Insidia",
          "Sources": "Steam"
        },
        {
          "Name": "桌球大比拼",
          "Sources": "Steam"
        },
        {
          "Name": "We Were Here Together",
          "Sources": "Steam"
        },
        {
          "Name": "LastRo",
          "Sources": "Steam"
        },
        {
          "Name": "Warhammer 40,000: Warpforge",
          "Sources": "Steam"
        },
        {
          "Name": "Gas Station Simulator",
          "Sources": "Steam"
        },
        {
          "Name": "Layers of Fear (2016)",
          "Sources": "Steam"
        },
        {
          "Name": "Effie",
          "Sources": "Steam"
        },
        {
          "Name": "Rebel Cops",
          "Sources": "Steam"
        },
        {
          "Name": "Sword of the Stars Complete Collection",
          "Sources": "Steam"
        },
        {
          "Name": "Madu Maths",
          "Sources": "Steam"
        },
        {
          "Name": "SPACECOM",
          "Sources": "Steam"
        },
        {
          "Name": "Romance Club",
          "Sources": "Steam"
        },
        {
          "Name": "Laser League Beta",
          "Sources": "Steam"
        },
        {
          "Name": "HuniePop",
          "Sources": "Steam"
        },
        {
          "Name": "Grand Theft Auto: San Andreas",
          "Sources": "Steam"
        },
        {
          "Name": "Bloodsports.TV",
          "Sources": "Steam"
        },
        {
          "Name": "INFEES",
          "Sources": "Steam"
        },
        {
          "Name": "Sengoku 2",
          "Sources": "Amazon"
        },
        {
          "Name": "Spintires",
          "Sources": "Steam"
        },
        {
          "Name": "Watch Dogs",
          "Sources": "Epic"
        },
        {
          "Name": "Dead Rising 2",
          "Sources": "Steam"
        },
        {
          "Name": "Oxenfree",
          "Sources": "Epic"
        },
        {
          "Name": "BioShock 2",
          "Sources": "Steam"
        },
        {
          "Name": "Tandem: A Tale of Shadows",
          "Sources": "Amazon"
        },
        {
          "Name": "F.E.A.R. 3",
          "Sources": "Steam"
        },
        {
          "Name": "DOMINO - The Little One",
          "Sources": "Steam"
        },
        {
          "Name": "Unfolding Engine: Paint a Game",
          "Sources": "Steam"
        },
        {
          "Name": "Rock Paper Scissors Champion",
          "Sources": "Steam"
        },
        {
          "Name": "God Hand",
          "Sources": "Steam"
        },
        {
          "Name": "VisionsVol.4",
          "Sources": "itch.io"
        },
        {
          "Name": "How To Survive Third Person",
          "Sources": "Steam"
        },
        {
          "Name": "Ninja?",
          "Sources": "Steam"
        },
        {
          "Name": "Shardlight",
          "Sources": "Steam"
        },
        {
          "Name": "Darkside Detective",
          "Sources": "Amazon"
        },
        {
          "Name": "VITATIO 2",
          "Sources": "Steam"
        },
        {
          "Name": "CombatArms: Reloaded",
          "Sources": "Steam"
        },
        {
          "Name": "The King's Bird",
          "Sources": "Amazon"
        },
        {
          "Name": "Divergence",
          "Sources": "Steam"
        },
        {
          "Name": "MO:Astray",
          "Sources": "Steam"
        },
        {
          "Name": "South Park The Fractured But Whole",
          "Sources": "Steam"
        },
        {
          "Name": "SOMA",
          "Sources": "Epic"
        },
        {
          "Name": "Hue",
          "Sources": "Steam"
        },
        {
          "Name": "Racecar.io",
          "Sources": "Steam"
        },
        {
          "Name": "WWE 2K23",
          "Sources": "Steam"
        },
        {
          "Name": "Saints Row The Third Remastered",
          "Sources": "Epic"
        },
        {
          "Name": "Jagged Alliance 2 - Wildfire",
          "Sources": "Steam"
        },
        {
          "Name": "True Reporter. The Mistwood mystery",
          "Sources": "Steam"
        },
        {
          "Name": "Layers of Fear",
          "Sources": "Epic"
        },
        {
          "Name": "Beatitas",
          "Sources": "Steam"
        },
        {
          "Name": "Sundered Eldritch Edition",
          "Sources": "Epic"
        },
        {
          "Name": "Undecember",
          "Sources": "Steam"
        },
        {
          "Name": "Flagi",
          "Sources": "Steam"
        },
        {
          "Name": "The Forest",
          "Sources": "Steam"
        },
        {
          "Name": "Pixel Survivors",
          "Sources": "Steam"
        },
        {
          "Name": "Global Adventures",
          "Sources": "Steam"
        },
        {
          "Name": "VoiceBot",
          "Sources": "Steam"
        },
        {
          "Name": 5050,
          "Sources": "Steam"
        },
        {
          "Name": "Centipede Recharged",
          "Sources": "Epic"
        },
        {
          "Name": "Crescent Bay",
          "Sources": "Humble"
        },
        {
          "Name": "Phoenix Force",
          "Sources": "Steam"
        },
        {
          "Name": "In Sound Mind",
          "Sources": "Amazon"
        },
        {
          "Name": "Beyond Good & Evil",
          "Sources": "Steam"
        },
        {
          "Name": "Red Faction Guerrilla Re-Mars-tered",
          "Sources": "Steam"
        },
        {
          "Name": "Alpha Mission II",
          "Sources": "Amazon"
        },
        {
          "Name": "BloodPit: Skelton II",
          "Sources": "Steam"
        },
        {
          "Name": "Hellblade: Senua's Sacrifice",
          "Sources": "Steam"
        },
        {
          "Name": "Pumped BMX Pro",
          "Sources": "Amazon"
        },
        {
          "Name": "Half-Life: Blue Shift",
          "Sources": "Steam"
        },
        {
          "Name": "Alchemy Garden",
          "Sources": "Steam"
        },
        {
          "Name": "雛ちゃんブレイカー2ndBreak",
          "Sources": "Steam"
        },
        {
          "Name": "Little Misfortune",
          "Sources": "Steam"
        },
        {
          "Name": "War Thunder",
          "Sources": "Steam"
        },
        {
          "Name": "The Bureau: XCOM Declassified",
          "Sources": "Steam"
        },
        {
          "Name": "1v1.LOL",
          "Sources": "Steam"
        },
        {
          "Name": "Ancestors Legacy",
          "Sources": "Steam"
        },
        {
          "Name": "Fallout",
          "Sources": "Steam"
        },
        {
          "Name": "A Short Hike",
          "Sources": "Humble"
        },
        {
          "Name": "Vampire: The Masquerade - Shadows of New York",
          "Sources": "Steam"
        },
        {
          "Name": "Yoku's Island Express",
          "Sources": "Amazon"
        },
        {
          "Name": "Kill It With Fire",
          "Sources": "Steam"
        },
        {
          "Name": "Outlast",
          "Sources": "Steam"
        },
        {
          "Name": "Secret Files 2: Puritas Cordis",
          "Sources": "Amazon"
        },
        {
          "Name": "Ollie & Bollie's Outdoor Estate",
          "Sources": "Humble"
        },
        {
          "Name": "Cards of the Dead - Prologue",
          "Sources": "Steam"
        },
        {
          "Name": "10mg: Sealed Estate",
          "Sources": "itch.io"
        },
        {
          "Name": "Encased",
          "Sources": "Epic"
        },
        {
          "Name": "HonkaiImpact 3rd",
          "Sources": "Steam"
        },
        {
          "Name": "Cave Story+",
          "Sources": "Epic"
        },
        {
          "Name": "YORG.io",
          "Sources": "Steam"
        },
        {
          "Name": "Trolley Gold",
          "Sources": "Steam"
        },
        {
          "Name": "Volantia: Kingdom in the Sky",
          "Sources": "Humble"
        },
        {
          "Name": "War Truck Simulator",
          "Sources": "Steam"
        },
        {
          "Name": "Death Squared",
          "Sources": "Amazon"
        },
        {
          "Name": "Wasted Pizza",
          "Sources": "Steam"
        },
        {
          "Name": "LEGO Batman 3: Beyond Gotham",
          "Sources": "Steam"
        },
        {
          "Name": "Martial Law",
          "Sources": "GOG"
        },
        {
          "Name": "Anomaly Defenders",
          "Sources": "Steam"
        },
        {
          "Name": "Dragon Age: Inquisition - Game of the Year Edition",
          "Sources": "EA app"
        },
        {
          "Name": "末日战姬",
          "Sources": "Steam"
        },
        {
          "Name": "MailPop",
          "Sources": "Steam"
        },
        {
          "Name": "Governor of Poker 3",
          "Sources": "Steam"
        },
        {
          "Name": "AChat",
          "Sources": "Steam"
        },
        {
          "Name": "Yooka-Laylee and the Impossible Lair",
          "Sources": "Steam"
        },
        {
          "Name": "Red Eclipse",
          "Sources": "Steam"
        },
        {
          "Name": "Hero Defense",
          "Sources": "Steam"
        },
        {
          "Name": "The Dwarves",
          "Sources": "Steam"
        },
        {
          "Name": "KillingFloor2Beta",
          "Sources": "Epic"
        },
        {
          "Name": "Final Presents of Babylon",
          "Sources": "itch.io"
        },
        {
          "Name": "MIR4",
          "Sources": "Steam"
        },
        {
          "Name": "Impire",
          "Sources": "Steam"
        },
        {
          "Name": "Xenonauts",
          "Sources": "Steam"
        },
        {
          "Name": "Merge Nymphs",
          "Sources": "Steam"
        },
        {
          "Name": "GRIP",
          "Sources": "Amazon"
        },
        {
          "Name": "AQtion",
          "Sources": "Steam"
        },
        {
          "Name": "Cursed",
          "Sources": "Steam"
        },
        {
          "Name": "Idling to Rule the Gods",
          "Sources": "Steam"
        },
        {
          "Name": "Rollerdrome",
          "Sources": "Steam"
        },
        {
          "Name": "Home Sweet Home : Online",
          "Sources": "Steam"
        },
        {
          "Name": "Loot Hero DX",
          "Sources": "Steam"
        },
        {
          "Name": "Fragsurf",
          "Sources": "Steam"
        },
        {
          "Name": "The Swords of Ditto",
          "Sources": "Amazon"
        },
        {
          "Name": "Tiny Tina's Assault on Dragon Keep: A Wonderlands One-shot Adventure",
          "Sources": "Epic"
        },
        {
          "Name": "Sengoku",
          "Sources": "Amazon"
        },
        {
          "Name": "Runes of Magic",
          "Sources": "Steam"
        },
        {
          "Name": "Fate of Kai",
          "Sources": "Humble"
        },
        {
          "Name": "The Bridge",
          "Sources": "Amazon"
        },
        {
          "Name": "Shock Troopers",
          "Sources": "Amazon"
        },
        {
          "Name": "ReThink",
          "Sources": "Steam"
        },
        {
          "Name": "SteamWorld Quest: Hand of Gilgamech",
          "Sources": "Amazon"
        },
        {
          "Name": "Swords and Soldiers HD",
          "Sources": "Steam"
        },
        {
          "Name": "Quiet City",
          "Sources": "Humble"
        },
        {
          "Name": "SOMA",
          "Sources": "Amazon"
        },
        {
          "Name": "Mafia: Definitive Edition",
          "Sources": "Steam"
        },
        {
          "Name": "Grim Fandango Remastered",
          "Sources": "GOG"
        },
        {
          "Name": "Earth 2160",
          "Sources": "Steam"
        },
        {
          "Name": "Etherborn",
          "Sources": "Amazon"
        },
        {
          "Name": "Oxygen Not Included",
          "Sources": "Steam"
        },
        {
          "Name": "Space Pilgrim Episode I: Alpha Centauri",
          "Sources": "Steam"
        },
        {
          "Name": "Poolgame",
          "Sources": "Steam"
        },
        {
          "Name": "The Inner World",
          "Sources": "Steam"
        },
        {
          "Name": "Ancestors: The Humankind Odyssey",
          "Sources": "Steam"
        },
        {
          "Name": "Tumblestone",
          "Sources": "Steam"
        },
        {
          "Name": "Windjammers 2",
          "Sources": "Steam"
        },
        {
          "Name": "H1Z1: Test Server",
          "Sources": "Steam"
        },
        {
          "Name": "Rogue Agent",
          "Sources": "Steam"
        },
        {
          "Name": "Stumblehill",
          "Sources": "Humble"
        },
        {
          "Name": "Hatoful Boyfriend",
          "Sources": "Steam"
        },
        {
          "Name": "Warlocks Deeds",
          "Sources": "Steam"
        },
        {
          "Name": "Command & Conquer Remastered Collection",
          "Sources": "EA app"
        },
        {
          "Name": "Slipstream 5000",
          "Sources": "Steam"
        },
        {
          "Name": "Borderlands GOTY",
          "Sources": "Steam"
        },
        {
          "Name": "The Legend of Tianding",
          "Sources": "Steam"
        },
        {
          "Name": "Powers in the Basement",
          "Sources": "Steam"
        },
        {
          "Name": "Lost in Harmony",
          "Sources": "Amazon"
        },
        {
          "Name": "Juice Galaxy",
          "Sources": "Steam"
        },
        {
          "Name": "Yu-Gi-Oh!  Master Duel",
          "Sources": "Steam"
        },
        {
          "Name": "The Last Blade",
          "Sources": "Amazon"
        },
        {
          "Name": "In Sound Mind",
          "Sources": "Epic"
        },
        {
          "Name": "Weird Worlds: Return to Infinite Space",
          "Sources": "Steam"
        },
        {
          "Name": "Loop Hero",
          "Sources": "Epic"
        },
        {
          "Name": "Deceit",
          "Sources": "Steam"
        },
        {
          "Name": "Demon Hunter 2: New Chapter",
          "Sources": "Amazon"
        },
        {
          "Name": "Five Nights at Freddy's: Sister Location",
          "Sources": "Steam"
        },
        {
          "Name": "Narita Boy",
          "Sources": "Steam"
        },
        {
          "Name": "Cathedral",
          "Sources": "Steam"
        },
        {
          "Name": "Total War: WARHAMMER II",
          "Sources": "Epic"
        },
        {
          "Name": "Trivia Vault: Technology Trivia Deluxe",
          "Sources": "Steam"
        },
        {
          "Name": "Anachronism",
          "Sources": "Steam"
        },
        {
          "Name": "Automachef",
          "Sources": "Epic"
        },
        {
          "Name": "Project: Vaccine A",
          "Sources": "Steam"
        },
        {
          "Name": "Catherine Classic",
          "Sources": "Steam"
        },
        {
          "Name": "Roombo: First Blood - JUSTICE SUCKS",
          "Sources": "Steam"
        },
        {
          "Name": "Unnamed Space Idle",
          "Sources": "Steam"
        },
        {
          "Name": "Blackguards 2",
          "Sources": "Steam"
        },
        {
          "Name": "PulseBall",
          "Sources": "Steam"
        },
        {
          "Name": "Planet of Lana - Goodie Pack",
          "Sources": "GOG"
        },
        {
          "Name": "Frontline 1942: Battles of the World War 2",
          "Sources": "Steam"
        },
        {
          "Name": "Darksiders II Deathinitive Edition",
          "Sources": "Epic"
        },
        {
          "Name": "Beyond Eyes",
          "Sources": "Steam"
        },
        {
          "Name": "Pony Island",
          "Sources": "Humble"
        },
        {
          "Name": "Cards & Tankards",
          "Sources": "Steam"
        },
        {
          "Name": "Deathmatch Classic",
          "Sources": "Steam"
        },
        {
          "Name": "Rust - Staging Branch",
          "Sources": "Steam"
        },
        {
          "Name": "Zup! Zero",
          "Sources": "Steam"
        },
        {
          "Name": "Jotun Valhalla Edition",
          "Sources": "Epic"
        },
        {
          "Name": "Red Faction: Guerrilla Steam Edition",
          "Sources": "Steam"
        },
        {
          "Name": "The Escapists 2",
          "Sources": "Steam"
        },
        {
          "Name": "Pesterquest",
          "Sources": "Amazon"
        },
        {
          "Name": "Sword of the Stars II: Enhanced Edition",
          "Sources": "Steam"
        },
        {
          "Name": "GRID",
          "Sources": "Steam"
        },
        {
          "Name": "Misadventures of Laura Silver",
          "Sources": "Steam"
        },
        {
          "Name": "Quake Champions",
          "Sources": "Steam"
        },
        {
          "Name": "Samurai Shodown V Special",
          "Sources": "Amazon"
        },
        {
          "Name": "GRUNND",
          "Sources": "Amazon"
        },
        {
          "Name": "Stories of Mara",
          "Sources": "Steam"
        },
        {
          "Name": "Intralism",
          "Sources": "Steam"
        },
        {
          "Name": "Cities in Motion 2",
          "Sources": "Steam"
        },
        {
          "Name": "vivid/stasis",
          "Sources": "Steam"
        },
        {
          "Name": "The Witcher 2: Assassins of Kings Enhanced Edition",
          "Sources": "Steam"
        },
        {
          "Name": "冬日树下的回忆AFTER",
          "Sources": "Steam"
        },
        {
          "Name": "Sheltered",
          "Sources": "Amazon"
        },
        {
          "Name": "Highsidin Hyphy Edition",
          "Sources": "Humble"
        },
        {
          "Name": "Chicken Police - Paint it RED!",
          "Sources": "Amazon"
        },
        {
          "Name": "Island Assault",
          "Sources": "Steam"
        },
        {
          "Name": "Welcome to the Karoshi Club",
          "Sources": "Steam"
        },
        {
          "Name": "Secret Neighbor",
          "Sources": "Steam"
        },
        {
          "Name": "Builder Simulator",
          "Sources": "Steam"
        },
        {
          "Name": "Pigeon Protocol",
          "Sources": "Steam"
        },
        {
          "Name": "Animation Throwdown: The Quest for Cards",
          "Sources": "Steam"
        },
        {
          "Name": "Zup! F",
          "Sources": "Steam"
        },
        {
          "Name": "Streetball VR",
          "Sources": "Steam"
        },
        {
          "Name": "INSIDE",
          "Sources": "Steam"
        },
        {
          "Name": "Medieval Engineers",
          "Sources": "Steam"
        },
        {
          "Name": "Zombie Night Terror",
          "Sources": "Amazon"
        },
        {
          "Name": "Shadowgate: MacVenture Series",
          "Sources": "Steam"
        },
        {
          "Name": "Freeway Mutant",
          "Sources": "Humble"
        },
        {
          "Name": "No More Money",
          "Sources": "Steam"
        },
        {
          "Name": "Sam & Max 103: The Mole, the Mob and the Meatball",
          "Sources": "Steam"
        },
        {
          "Name": "A Case of Distrust",
          "Sources": "Steam"
        },
        {
          "Name": "FLY'N",
          "Sources": "Steam"
        },
        {
          "Name": "Tales From Off-Peak City Vol. 1",
          "Sources": "Humble"
        },
        {
          "Name": "Dying Light The Following",
          "Sources": "Epic"
        },
        {
          "Name": "The Dungeon of Naheulbeuk: The Amulet of Chaos",
          "Sources": "Amazon"
        },
        {
          "Name": "Void Bastards",
          "Sources": "Steam"
        },
        {
          "Name": "The Dark Pictures Anthology: House of Ashes - Friend's Pass",
          "Sources": "Steam"
        },
        {
          "Name": "Day of Defeat",
          "Sources": "Steam"
        },
        {
          "Name": "Arrog",
          "Sources": "Humble"
        },
        {
          "Name": "Ghostrunner",
          "Sources": "Steam"
        },
        {
          "Name": "Sokobond",
          "Sources": "Amazon"
        },
        {
          "Name": "Peggle Extreme",
          "Sources": "Steam"
        },
        {
          "Name": "Ring of Pain",
          "Sources": "Steam"
        },
        {
          "Name": "TGV Voyages Train Simulator",
          "Sources": "Steam"
        },
        {
          "Name": "2099 Gravity Havoc",
          "Sources": "Steam"
        },
        {
          "Name": "MOTHERGUNSHIP",
          "Sources": "Steam"
        },
        {
          "Name": "Betrayer",
          "Sources": "GOG"
        },
        {
          "Name": "CreatorCrate",
          "Sources": "Humble"
        },
        {
          "Name": "Milo and the Christmas Gift",
          "Sources": "Steam"
        },
        {
          "Name": "EXIT 2",
          "Sources": "Steam"
        },
        {
          "Name": "Space Codex",
          "Sources": "Steam"
        },
        {
          "Name": "Event[0]",
          "Sources": "Steam"
        },
        {
          "Name": "Viral Firar",
          "Sources": "Steam"
        },
        {
          "Name": "Map Pack",
          "Sources": "Epic"
        },
        {
          "Name": "SCP: Nemesi",
          "Sources": "Steam"
        },
        {
          "Name": "The Stanley Parable",
          "Sources": "Steam"
        },
        {
          "Name": "Metro 2033 Redux",
          "Sources": "Steam"
        },
        {
          "Name": "Defy Gravity",
          "Sources": "Steam"
        },
        {
          "Name": "Freaky Awesome",
          "Sources": "Steam"
        },
        {
          "Name": "Countryballs: Over The World",
          "Sources": "Steam"
        },
        {
          "Name": "Bad Rats",
          "Sources": "Steam"
        },
        {
          "Name": "The Messenger",
          "Sources": "Amazon"
        },
        {
          "Name": "Dead by Daylight",
          "Sources": "Epic"
        },
        {
          "Name": "Genesis Alpha One Deluxe Edition",
          "Sources": "Steam"
        },
        {
          "Name": "THOR.N",
          "Sources": "Humble"
        },
        {
          "Name": "Hyper Light Drifter",
          "Sources": "Amazon"
        },
        {
          "Name": "Desert Bus VR",
          "Sources": "Steam"
        },
        {
          "Name": "Towerfall Ascension",
          "Sources": "Epic"
        },
        {
          "Name": "shapez",
          "Sources": "Steam"
        },
        {
          "Name": "Blue Fire",
          "Sources": "Amazon"
        },
        {
          "Name": "Cut & Run",
          "Sources": "Humble"
        },
        {
          "Name": "Faraway: Director's Cut",
          "Sources": "Amazon"
        },
        {
          "Name": "Guacamelee! Super Turbo Championship Edition",
          "Sources": "Epic"
        },
        {
          "Name": "Assassin’s Creed Chronicles India",
          "Sources": "Ubisoft Connect"
        },
        {
          "Name": "Primordials: Battle of Gods Free Weekend",
          "Sources": "Epic"
        },
        {
          "Name": "Victor Vran Overkill Edition",
          "Sources": "Amazon"
        },
        {
          "Name": "Project Highrise",
          "Sources": "Steam"
        },
        {
          "Name": "The Red Solstice",
          "Sources": "Steam"
        },
        {
          "Name": "The Witness",
          "Sources": "Steam"
        },
        {
          "Name": "Grimhook",
          "Sources": "Steam"
        },
        {
          "Name": "Time Gentlemen, Please!",
          "Sources": "Steam"
        },
        {
          "Name": "Jawns",
          "Sources": "Humble"
        },
        {
          "Name": "Shadow Tactics: Blades of the Shogun - Aiko's Choice",
          "Sources": "Steam"
        },
        {
          "Name": "Portal Dogs",
          "Sources": "Amazon"
        },
        {
          "Name": "Firewatch",
          "Sources": "Steam"
        },
        {
          "Name": "Nostradamus: The Last Prophecy",
          "Sources": "Indiegala"
        },
        {
          "Name": "Metro Exodus",
          "Sources": "Steam"
        },
        {
          "Name": "Dream Ploy Will",
          "Sources": "Steam"
        },
        {
          "Name": "Teleglitch: Die More Edition",
          "Sources": "Steam"
        },
        {
          "Name": "Mysterium",
          "Sources": "Steam"
        },
        {
          "Name": "Detective Butler: Maiden Voyage Murder",
          "Sources": "Steam"
        },
        {
          "Name": "OpenGloves",
          "Sources": "Steam"
        },
        {
          "Name": "Caliber",
          "Sources": "Steam"
        },
        {
          "Name": "Majesty Gold HD",
          "Sources": "Steam"
        },
        {
          "Name": "Goblin Rules Football",
          "Sources": "Steam"
        },
        {
          "Name": "Project CARS 2",
          "Sources": "Steam"
        },
        {
          "Name": "SCP: Nine-Tailed Fox",
          "Sources": "Steam"
        },
        {
          "Name": "SEXTS",
          "Sources": "Steam"
        },
        {
          "Name": "Middle-earth: Shadow of War",
          "Sources": "Steam"
        },
        {
          "Name": "Serious Sam Double D XXL",
          "Sources": "Steam"
        },
        {
          "Name": "Dino Run DX",
          "Sources": "Indiegala"
        },
        {
          "Name": "The Adventurer - Episode 1: Beginning of the End",
          "Sources": "Steam"
        },
        {
          "Name": "Rogue Heroes: Ruins of Tasos",
          "Sources": "Steam"
        },
        {
          "Name": "Serious Sam 3: BFE",
          "Sources": "Steam"
        },
        {
          "Name": "Ann",
          "Sources": "Steam"
        },
        {
          "Name": "Tiny Tina's Assault on Dragon Keep: A Wonderlands One-shot Adventure",
          "Sources": "Steam"
        },
        {
          "Name": "Ultima  Underworld I",
          "Sources": "GOG"
        },
        {
          "Name": "Journey To The Center Of The Earth",
          "Sources": "Steam"
        },
        {
          "Name": "Just Die Already",
          "Sources": "Steam"
        },
        {
          "Name": "looK INside",
          "Sources": "Amazon"
        },
        {
          "Name": "Yooka-Laylee",
          "Sources": "Steam"
        },
        {
          "Name": "Neverwinter Nights: Enhanced Edition",
          "Sources": "GOG"
        },
        {
          "Name": "2d lane faster race",
          "Sources": "itch.io"
        },
        {
          "Name": "Totally Reliable Delivery Service",
          "Sources": "Epic"
        },
        {
          "Name": "Outlast 2",
          "Sources": "Steam"
        },
        {
          "Name": "Ruin Raiders - Unknown Menace",
          "Sources": "Humble"
        },
        {
          "Name": "Dead Island Riptide",
          "Sources": "Steam"
        },
        {
          "Name": "Rising Storm 2: Vietnam CTB Beta",
          "Sources": "Steam"
        },
        {
          "Name": "Life is Strange: Before the Storm",
          "Sources": "Steam"
        },
        {
          "Name": "Honkai Impact 3rd",
          "Sources": "Epic"
        },
        {
          "Name": "Tomb Raider II",
          "Sources": "Steam"
        },
        {
          "Name": "Blind Fate: Edo no Yami - Dojo",
          "Sources": "GOG"
        },
        {
          "Name": "Orwell",
          "Sources": "Amazon"
        },
        {
          "Name": "Stranded Deep",
          "Sources": "Epic"
        },
        {
          "Name": "Distrust",
          "Sources": "Steam"
        },
        {
          "Name": "Yooka-Laylee and the Impossible Lair",
          "Sources": "Amazon"
        },
        {
          "Name": "XCOM: Chimera Squad",
          "Sources": "Steam"
        },
        {
          "Name": "DK Online",
          "Sources": "Steam"
        },
        {
          "Name": "Europa Universalis IV",
          "Sources": "Epic"
        },
        {
          "Name": "Hotline Miami",
          "Sources": "Amazon"
        },
        {
          "Name": "Vampire: The Masquerade - Coteries of New York",
          "Sources": "Steam"
        },
        {
          "Name": "English Country Tune",
          "Sources": "Steam"
        },
        {
          "Name": "Astronite - Landing on Neplea",
          "Sources": "Steam"
        },
        {
          "Name": "Surf World Series",
          "Sources": "Amazon"
        },
        {
          "Name": "SuchArt!",
          "Sources": "Steam"
        },
        {
          "Name": "Runbow",
          "Sources": "Epic"
        },
        {
          "Name": "Metal Slug 2",
          "Sources": "Amazon"
        },
        {
          "Name": "Hallowed Pumpkins",
          "Sources": "Steam"
        },
        {
          "Name": "Dungeon of the ENDLESS",
          "Sources": "Steam"
        },
        {
          "Name": "Gods and Kings",
          "Sources": "Steam"
        },
        {
          "Name": "Left 4 Dead 2",
          "Sources": "Steam"
        },
        {
          "Name": "Serious Sam 2",
          "Sources": "Steam"
        },
        {
          "Name": "Fatal Fury Special",
          "Sources": "Amazon"
        },
        {
          "Name": "Baldur's Gate 3 Goodie Pack",
          "Sources": "GOG"
        },
        {
          "Name": "A.V.A. Alliance of Valiant Arms",
          "Sources": "Steam"
        },
        {
          "Name": "Tomb Raider: Legend",
          "Sources": "Steam"
        },
        {
          "Name": "Trivia Vault: 1980's Trivia 2",
          "Sources": "Steam"
        },
        {
          "Name": "Crypt",
          "Sources": "Steam"
        },
        {
          "Name": "This Is the Police",
          "Sources": "Steam"
        },
        {
          "Name": "Don't Starve Together",
          "Sources": "Steam"
        },
        {
          "Name": "The Crew",
          "Sources": "Ubisoft Connect"
        },
        {
          "Name": "Vikings - Wolves of Midgard",
          "Sources": "Steam"
        },
        {
          "Name": "SteamWorld Dig",
          "Sources": "Amazon"
        },
        {
          "Name": "Glorious Noon",
          "Sources": "Steam"
        },
        {
          "Name": "Clash of Panzer",
          "Sources": "Steam"
        },
        {
          "Name": "Armello",
          "Sources": "Steam"
        },
        {
          "Name": "Narita Boy",
          "Sources": "GOG"
        },
        {
          "Name": "Monster Clicker : Idle Halloween Strategy",
          "Sources": "Steam"
        },
        {
          "Name": "Niche - a genetics survival game",
          "Sources": "Steam"
        },
        {
          "Name": "Tales of the Neon Sea",
          "Sources": "Amazon"
        },
        {
          "Name": "Chasm",
          "Sources": "Steam"
        },
        {
          "Name": "Overlord II",
          "Sources": "Steam"
        },
        {
          "Name": "Evoland Legendary Edition",
          "Sources": "Epic"
        },
        {
          "Name": "Borealis",
          "Sources": "Steam"
        },
        {
          "Name": "Undertale",
          "Sources": "Steam"
        },
        {
          "Name": "Bounce",
          "Sources": "Indiegala"
        },
        {
          "Name": "Beneath a Steel Sky",
          "Sources": "GOG"
        },
        {
          "Name": "Hospital Tycoon",
          "Sources": "Steam"
        },
        {
          "Name": "God's Trigger",
          "Sources": "Epic"
        },
        {
          "Name": "Reus",
          "Sources": "Amazon"
        },
        {
          "Name": "Infinity Heroes",
          "Sources": "Steam"
        },
        {
          "Name": "Turok",
          "Sources": "Amazon"
        },
        {
          "Name": "Yakuza 0",
          "Sources": "Steam"
        },
        {
          "Name": "Crescent Bay",
          "Sources": "Humble"
        },
        {
          "Name": "Ramayana",
          "Sources": "Steam"
        },
        {
          "Name": "Yoku's Island Express",
          "Sources": "Steam"
        },
        {
          "Name": "Rising Storm 2: Vietnam",
          "Sources": "Epic"
        },
        {
          "Name": "Artemis: God-Queen of The Hunt",
          "Sources": "Steam"
        },
        {
          "Name": "Pillars of Eternity - Definitive Edition Pack",
          "Sources": "Epic"
        },
        {
          "Name": "Don't Starve",
          "Sources": "Steam"
        },
        {
          "Name": "Yoku's Island Express",
          "Sources": "Epic"
        },
        {
          "Name": "*NEW* SCUFFED BHOP SIMULATION 2026 GOTY EDITION",
          "Sources": "Steam"
        },
        {
          "Name": "Disney Speedstorm",
          "Sources": "Steam"
        },
        {
          "Name": "Penny Arcade's On the Rain-Slick Precipice of Darkness 3",
          "Sources": "Steam"
        },
        {
          "Name": "ShareX",
          "Sources": "Steam"
        },
        {
          "Name": "Serial Cleaner",
          "Sources": "Steam"
        },
        {
          "Name": "War on Folvos",
          "Sources": "Steam"
        },
        {
          "Name": "Figment",
          "Sources": "Epic"
        },
        {
          "Name": "Kentucky Route Zero",
          "Sources": "Amazon"
        },
        {
          "Name": "Everbee",
          "Sources": "Steam"
        },
        {
          "Name": "Tools Up!",
          "Sources": "Amazon"
        },
        {
          "Name": "Carcassonne",
          "Sources": "Epic"
        },
        {
          "Name": "Furry Shakespeare: Dashing Dinosaurs & Sexy Centaurs: Winter's Tale",
          "Sources": "Steam"
        },
        {
          "Name": "The Dark Pictures Anthology: Man of Medan",
          "Sources": "Steam"
        },
        {
          "Name": "The Desolate Hope",
          "Sources": "Steam"
        },
        {
          "Name": "Oh, Deer!",
          "Sources": "Humble"
        },
        {
          "Name": "Getting Over It with Bennett Foddy",
          "Sources": "Steam"
        },
        {
          "Name": "Company of Heroes - Legacy Edition",
          "Sources": "Steam"
        },
        {
          "Name": "MudRunner",
          "Sources": "Epic"
        },
        {
          "Name": "Overwatch 2",
          "Sources": "Battle.net"
        },
        {
          "Name": "Proteus",
          "Sources": "Steam"
        },
        {
          "Name": "Ultima 4: Quest of the Avatar",
          "Sources": "GOG"
        },
        {
          "Name": "Counter-Strike",
          "Sources": "Steam"
        },
        {
          "Name": "Turn on the light - Jigsaw",
          "Sources": "Steam"
        },
        {
          "Name": "WRC 8 FIA World Rally Championship",
          "Sources": "Amazon"
        },
        {
          "Name": "RPG Maker Software Bundle Exclusive DLC Pack",
          "Sources": "Humble"
        },
        {
          "Name": "Voice of Cards: The Isle Dragon Roars Demo",
          "Sources": "Steam"
        },
        {
          "Name": "DEFCON",
          "Sources": "Steam"
        },
        {
          "Name": "Fairytale Fables",
          "Sources": "Steam"
        },
        {
          "Name": "Black Future '88",
          "Sources": "Steam"
        },
        {
          "Name": "Leaf Blower Revolution - Idle Game",
          "Sources": "Steam"
        },
        {
          "Name": "Colortone",
          "Sources": "Indiegala"
        },
        {
          "Name": "Clockwork",
          "Sources": "Steam"
        },
        {
          "Name": "Dagon: by H. P. Lovecraft",
          "Sources": "GOG"
        },
        {
          "Name": "Magic Rampage",
          "Sources": "Steam"
        },
        {
          "Name": "Vampyr",
          "Sources": "Steam"
        },
        {
          "Name": "Furi",
          "Sources": "Amazon"
        },
        {
          "Name": "Nickelodeon All-Star Brawl",
          "Sources": "Steam"
        },
        {
          "Name": "WIN THE GAME!",
          "Sources": "Steam"
        },
        {
          "Name": "Mass Effect Legendary Edition",
          "Sources": "EA app"
        },
        {
          "Name": "A2Be - A Science Fiction Narrative",
          "Sources": "Humble"
        },
        {
          "Name": "Fallout 3: Game of the Year Edition",
          "Sources": "Epic"
        },
        {
          "Name": "Omensight",
          "Sources": "Steam"
        },
        {
          "Name": "Maize",
          "Sources": "Steam"
        },
        {
          "Name": "Oddworld: Abe's Oddysee",
          "Sources": "Steam"
        },
        {
          "Name": "Yooka-Laylee",
          "Sources": "Epic"
        },
        {
          "Name": "16bit Trader",
          "Sources": "Steam"
        },
        {
          "Name": "Turnip Boy Commits Tax Evasion",
          "Sources": "Steam"
        },
        {
          "Name": "Real Bout Fatal Fury 2: The Newcomers",
          "Sources": "Amazon"
        },
        {
          "Name": "KoreanWarMemorial",
          "Sources": "Steam"
        },
        {
          "Name": "Anomaly Korea",
          "Sources": "Steam"
        },
        {
          "Name": "Octodad (Student Edition)",
          "Sources": "Steam"
        },
        {
          "Name": "KHOLAT",
          "Sources": "Steam"
        },
        {
          "Name": "Rock of Ages 3: Make & Break",
          "Sources": "Steam"
        },
        {
          "Name": "The Troma Project",
          "Sources": "Steam"
        },
        {
          "Name": "Team Fortress 2",
          "Sources": "Steam"
        },
        {
          "Name": "Just Cause 4",
          "Sources": "Steam"
        },
        {
          "Name": "Trackmania",
          "Sources": "Epic"
        },
        {
          "Name": "ToeJam & Earl: Back in the Groove!",
          "Sources": "Epic"
        },
        {
          "Name": "Horizon To Crinoa: Have Faith in Radiance -Prototype-",
          "Sources": "Steam"
        },
        {
          "Name": "Operation Tango",
          "Sources": "Steam"
        },
        {
          "Name": "Trivia Vault: Mixed Trivia 2",
          "Sources": "Steam"
        },
        {
          "Name": "Dungeon Keeper",
          "Sources": "EA app"
        },
        {
          "Name": "One Drop Bot",
          "Sources": "Steam"
        },
        {
          "Name": "GrandChase",
          "Sources": "Steam"
        },
        {
          "Name": "Pumped BMX +",
          "Sources": "Steam"
        },
        {
          "Name": "Daymare: 1998",
          "Sources": "GOG"
        },
        {
          "Name": "Sanitarium",
          "Sources": "Amazon"
        },
        {
          "Name": "How to Survive",
          "Sources": "Steam"
        },
        {
          "Name": "Turbo Pug DX",
          "Sources": "Steam"
        },
        {
          "Name": "Europa Universalis: Rome - Gold Edition",
          "Sources": "Steam"
        },
        {
          "Name": "A Blind Legend",
          "Sources": "Amazon"
        },
        {
          "Name": "Unforgiving Trials: The Darkest Crusade",
          "Sources": "Steam"
        },
        {
          "Name": "Yu-Gi-Oh! Duel Links",
          "Sources": "Steam"
        },
        {
          "Name": "Shadowrun Returns",
          "Sources": "Epic"
        },
        {
          "Name": "Who Is The Red Queen?",
          "Sources": "Steam"
        },
        {
          "Name": "The Ai Games",
          "Sources": "Steam"
        },
        {
          "Name": "Chaos Domain",
          "Sources": "Steam"
        },
        {
          "Name": "Pinball M",
          "Sources": "Steam"
        },
        {
          "Name": "ChilloutVR",
          "Sources": "Steam"
        },
        {
          "Name": "South of the Circle",
          "Sources": "GOG"
        },
        {
          "Name": "A Normal Lost Phone",
          "Sources": "Amazon"
        },
        {
          "Name": "Villagers and Heroes",
          "Sources": "Steam"
        },
        {
          "Name": "Lucius Demake",
          "Sources": "Steam"
        },
        {
          "Name": "Black The Fall",
          "Sources": "Steam"
        },
        {
          "Name": "The Beast Inside",
          "Sources": "GOG"
        },
        {
          "Name": "Rubber Royale: Holiday Prologue",
          "Sources": "Steam"
        },
        {
          "Name": "Clouds & Sheep 2",
          "Sources": "Amazon"
        },
        {
          "Name": "Tick Tock Isle",
          "Sources": "Steam"
        },
        {
          "Name": "Hob",
          "Sources": "Epic"
        },
        {
          "Name": "Thronebreaker: The Witcher Tales",
          "Sources": "Steam"
        },
        {
          "Name": "Counter-Strike: Source",
          "Sources": "Steam"
        },
        {
          "Name": "Milky Way Prince – The Vampire Star",
          "Sources": "Steam"
        },
        {
          "Name": "Jack Orlando Director's Cut",
          "Sources": "Steam"
        },
        {
          "Name": "Squidlit",
          "Sources": "Steam"
        },
        {
          "Name": "GO AWAY, THERE'S KUMIS OVER THERE!",
          "Sources": "Steam"
        },
        {
          "Name": "Purrfect Date",
          "Sources": "Steam"
        },
        {
          "Name": "A Short Hike",
          "Sources": "Humble"
        },
        {
          "Name": "Tiestru",
          "Sources": "Steam"
        },
        {
          "Name": "Future Proof",
          "Sources": "Steam"
        },
        {
          "Name": "Suicide Guy: Sleepin' Deeply",
          "Sources": "Steam"
        },
        {
          "Name": "GOD EATER RESURRECTION",
          "Sources": "Steam"
        },
        {
          "Name": "Alt254",
          "Sources": "Humble"
        },
        {
          "Name": "Horizon Chase Turbo",
          "Sources": "Steam"
        },
        {
          "Name": "Epic Chef",
          "Sources": "Steam"
        },
        {
          "Name": "Zup! 7",
          "Sources": "Steam"
        },
        {
          "Name": "Greak: Memories of Azur",
          "Sources": "Steam"
        },
        {
          "Name": "Bodyless",
          "Sources": "Steam"
        },
        {
          "Name": "CAYNE",
          "Sources": "GOG"
        },
        {
          "Name": "Primal Carnage",
          "Sources": "Steam"
        },
        {
          "Name": "Adva-lines",
          "Sources": "Steam"
        },
        {
          "Name": "Lost Ark",
          "Sources": "Steam"
        },
        {
          "Name": "EARTHLOCK",
          "Sources": "Steam"
        },
        {
          "Name": "Blender",
          "Sources": "Steam"
        },
        {
          "Name": "Fort Triumph",
          "Sources": "Steam"
        },
        {
          "Name": "Mafia",
          "Sources": "Steam"
        },
        {
          "Name": "Dreamland",
          "Sources": "Steam"
        },
        {
          "Name": "War Wind",
          "Sources": "GOG"
        },
        {
          "Name": "Military Tanks - Tank Games",
          "Sources": "Steam"
        },
        {
          "Name": "Warhammer 40,000: Mechanicus",
          "Sources": "Steam"
        },
        {
          "Name": "8BitBoy",
          "Sources": "Steam"
        },
        {
          "Name": "Alignment",
          "Sources": "Steam"
        },
        {
          "Name": "BIT.TRIP Presents... Runner2: Future Legend of Rhythm Alien",
          "Sources": "Steam"
        },
        {
          "Name": "Cowboy Life Simulator: Prologue",
          "Sources": "Steam"
        },
        {
          "Name": "HORSE",
          "Sources": "Steam"
        },
        {
          "Name": "Company of Heroes 2",
          "Sources": "Steam"
        },
        {
          "Name": "Kind Words",
          "Sources": "Steam"
        },
        {
          "Name": "Tacoma",
          "Sources": "Amazon"
        },
        {
          "Name": "Faraway 2: Jungle Escape",
          "Sources": "Amazon"
        },
        {
          "Name": "Tacoma",
          "Sources": "Humble"
        },
        {
          "Name": "Hank: Straightjacket",
          "Sources": "Steam"
        },
        {
          "Name": "Double Kick Heroes",
          "Sources": "Amazon"
        },
        {
          "Name": "Darkest Dungeon",
          "Sources": "Epic"
        },
        {
          "Name": "Terraria",
          "Sources": "Steam"
        },
        {
          "Name": "Hello Neighbor Alpha Version",
          "Sources": "GOG"
        },
        {
          "Name": "The Darkness II",
          "Sources": "Steam"
        },
        {
          "Name": "WWE 2K BATTLEGROUNDS",
          "Sources": "Steam"
        },
        {
          "Name": "Battleplan: American Civil War",
          "Sources": "Steam"
        },
        {
          "Name": "Tannenberg",
          "Sources": "Steam"
        },
        {
          "Name": "Syndicate",
          "Sources": "EA app"
        },
        {
          "Name": "Art of Fighting 3: The Path of The Warrior",
          "Sources": "Amazon"
        },
        {
          "Name": "ELEX",
          "Sources": "Steam"
        },
        {
          "Name": "Clan of Death",
          "Sources": "Steam"
        },
        {
          "Name": "Deponia",
          "Sources": "Amazon"
        },
        {
          "Name": "Crossed Swords",
          "Sources": "Amazon"
        },
        {
          "Name": "SNOWBREAK",
          "Sources": "Steam"
        },
        {
          "Name": "Zup! 3",
          "Sources": "Steam"
        },
        {
          "Name": "Big Klondike",
          "Sources": "Steam"
        },
        {
          "Name": "Desert Thunder",
          "Sources": "Steam"
        },
        {
          "Name": "Taora : Beginning",
          "Sources": "Steam"
        },
        {
          "Name": "Nongünz",
          "Sources": "Steam"
        },
        {
          "Name": "Murder Miners",
          "Sources": "Steam"
        },
        {
          "Name": "3DMark",
          "Sources": "Steam"
        },
        {
          "Name": "Chainsaw Warrior",
          "Sources": "Steam"
        },
        {
          "Name": "Murder by Numbers",
          "Sources": "Epic"
        },
        {
          "Name": "Majesty: Gold Edition",
          "Sources": "Steam"
        },
        {
          "Name": "Slapshot: Rebound",
          "Sources": "Steam"
        },
        {
          "Name": "Anomaly 2",
          "Sources": "Steam"
        },
        {
          "Name": "Basingstoke",
          "Sources": "Steam"
        },
        {
          "Name": "Wandersong Sneak Peek (DEMO)",
          "Sources": "Humble"
        },
        {
          "Name": "PREY",
          "Sources": "Epic"
        },
        {
          "Name": "Whispering Willows",
          "Sources": "Amazon"
        },
        {
          "Name": "Lovers of Aether",
          "Sources": "Steam"
        },
        {
          "Name": "Commandos 2: Men of Courage",
          "Sources": "Steam"
        },
        {
          "Name": "Tempest",
          "Sources": "Amazon"
        },
        {
          "Name": "The Last Hope",
          "Sources": "Steam"
        },
        {
          "Name": "Warlander",
          "Sources": "Steam"
        },
        {
          "Name": "The Talos Principle",
          "Sources": "Epic"
        },
        {
          "Name": "Little Postman",
          "Sources": "Steam"
        },
        {
          "Name": "Mobile Suit Baba",
          "Sources": "itch.io"
        },
        {
          "Name": "Anno 1404 - History Edition",
          "Sources": "Ubisoft Connect"
        },
        {
          "Name": "World of Guns: VR",
          "Sources": "Steam"
        },
        {
          "Name": "Null Gravity Labyrinth",
          "Sources": "Steam"
        },
        {
          "Name": "Jack In Town",
          "Sources": "Steam"
        },
        {
          "Name": "Mr.Jezko",
          "Sources": "Steam"
        },
        {
          "Name": "Uurnog Uurnlimited",
          "Sources": "Steam"
        },
        {
          "Name": "Indivisible",
          "Sources": "Steam"
        },
        {
          "Name": "Heeey! Park-Boy",
          "Sources": "Humble"
        },
        {
          "Name": "Roman Sands",
          "Sources": "Humble"
        },
        {
          "Name": "Robocraft 2",
          "Sources": "Steam"
        },
        {
          "Name": "Surviving Mars",
          "Sources": "Epic"
        },
        {
          "Name": "Silence Demo",
          "Sources": "Humble"
        },
        {
          "Name": "Team Fortress Classic",
          "Sources": "Steam"
        },
        {
          "Name": "Nightmare Knock",
          "Sources": "Steam"
        },
        {
          "Name": "Particula",
          "Sources": "Indiegala"
        },
        {
          "Name": "Game Dev Studio",
          "Sources": "Steam"
        },
        {
          "Name": "Across the Grooves",
          "Sources": "Amazon"
        },
        {
          "Name": "In The Kingdom",
          "Sources": "itch.io"
        },
        {
          "Name": "Conarium",
          "Sources": "Epic"
        },
        {
          "Name": "Tools Up!",
          "Sources": "Steam"
        },
        {
          "Name": "Human Resource Machine",
          "Sources": "Epic"
        },
        {
          "Name": "SIMULACRA 2",
          "Sources": "Steam"
        },
        {
          "Name": "Red Horizon",
          "Sources": "Steam"
        },
        {
          "Name": "Waven",
          "Sources": "Steam"
        },
        {
          "Name": "Operation Food to Gold",
          "Sources": "Steam"
        },
        {
          "Name": "Quake II RTX",
          "Sources": "GOG"
        },
        {
          "Name": "NeuroVoider",
          "Sources": "Steam"
        },
        {
          "Name": "One Finger Death Punch",
          "Sources": "Steam"
        },
        {
          "Name": "Dungeon Rushers",
          "Sources": "Amazon"
        },
        {
          "Name": "Dream Daddy",
          "Sources": "Amazon"
        },
        {
          "Name": "CTHULHU: Frozen Nightmare",
          "Sources": "itch.io"
        },
        {
          "Name": "Gunspell: Steam Edition",
          "Sources": "Steam"
        },
        {
          "Name": "ENCODYA",
          "Sources": "GOG"
        },
        {
          "Name": "Anomalistic Revolution: Prelude",
          "Sources": "Steam"
        },
        {
          "Name": "Company of Heroes: Europe in Ruins",
          "Sources": "Steam"
        },
        {
          "Name": "Super Magbot",
          "Sources": "Steam"
        },
        {
          "Name": "The Witcher Goodies Collection",
          "Sources": "GOG"
        },
        {
          "Name": "Injustice: Gods Among Us Ultimate Edition",
          "Sources": "Steam"
        },
        {
          "Name": "Tropico 3 - Steam Special Edition",
          "Sources": "Steam"
        },
        {
          "Name": "The Binding of Isaac",
          "Sources": "Steam"
        },
        {
          "Name": "Void Pyramid",
          "Sources": "Steam"
        },
        {
          "Name": "Lara Croft and the Temple of Osiris",
          "Sources": "Steam"
        },
        {
          "Name": "Kind Words",
          "Sources": "Humble"
        },
        {
          "Name": "Momodora: Reverie Under the Moonlight",
          "Sources": "Steam"
        },
        {
          "Name": "Cursed Castilla (Maldita Castilla EX)",
          "Sources": "Steam"
        },
        {
          "Name": "Broken Age",
          "Sources": "Amazon"
        },
        {
          "Name": "Tiny Tina's Wonderlands",
          "Sources": "Steam"
        },
        {
          "Name": "Tower Of Heresy",
          "Sources": "Steam"
        },
        {
          "Name": "Metal Force: Tank Games Online",
          "Sources": "Steam"
        },
        {
          "Name": "Everybody Got Mad!",
          "Sources": "itch.io"
        },
        {
          "Name": "War Robots",
          "Sources": "Steam"
        },
        {
          "Name": "Sam & Max 304: Beyond the Alley of the Dolls",
          "Sources": "Steam"
        },
        {
          "Name": "Quiet City",
          "Sources": "Humble"
        },
        {
          "Name": "Our Life: Beginnings & Always",
          "Sources": "GOG"
        },
        {
          "Name": "Parcel Mania",
          "Sources": "Steam"
        },
        {
          "Name": "Tacoma",
          "Sources": "Epic"
        },
        {
          "Name": "Fae Tactics Sneak Peek",
          "Sources": "Humble"
        },
        {
          "Name": "Stardew Valley",
          "Sources": "Steam"
        },
        {
          "Name": "Pirate Pop Plus",
          "Sources": "Steam"
        },
        {
          "Name": "Katana ZERO",
          "Sources": "Steam"
        },
        {
          "Name": "雀皇麻雀",
          "Sources": "Steam"
        },
        {
          "Name": "War Selection",
          "Sources": "Steam"
        },
        {
          "Name": "Flat Heroes",
          "Sources": "Steam"
        },
        {
          "Name": "Galactic Civilizations II: Ultimate Edition",
          "Sources": "Steam"
        },
        {
          "Name": "The Amazing American Circus",
          "Sources": "Amazon"
        },
        {
          "Name": "RAGE 2",
          "Sources": "Epic"
        },
        {
          "Name": "Red Faction: Armageddon",
          "Sources": "Steam"
        },
        {
          "Name": "BATS: Bloodsucker Anti-Terror Squad",
          "Sources": "Amazon"
        },
        {
          "Name": "SELECTIONS OF TITAN ART BOOK",
          "Sources": "Epic"
        },
        {
          "Name": "Survival Driver",
          "Sources": "itch.io"
        },
        {
          "Name": "AESIR Online",
          "Sources": "Steam"
        },
        {
          "Name": "Mud Slinger",
          "Sources": "itch.io"
        },
        {
          "Name": "LET IT DIE",
          "Sources": "Steam"
        },
        {
          "Name": "Mad Digger",
          "Sources": "Steam"
        },
        {
          "Name": "聖戰科洛斯（Cronous）",
          "Sources": "Steam"
        },
        {
          "Name": "Goblin Defenders: Steel‘n’ Wood",
          "Sources": "Steam"
        },
        {
          "Name": "Seven: Enhanced Edition",
          "Sources": "Steam"
        },
        {
          "Name": "Soldiers Lost Forever (1914-1918)",
          "Sources": "Indiegala"
        },
        {
          "Name": "One Step From Eden",
          "Sources": "Steam"
        },
        {
          "Name": "Resident Evil Revelations",
          "Sources": "Steam"
        },
        {
          "Name": "Kalaban",
          "Sources": "Steam"
        },
        {
          "Name": "DLC Quest",
          "Sources": "Steam"
        },
        {
          "Name": "survive the island",
          "Sources": "Steam"
        },
        {
          "Name": "Flux8",
          "Sources": "Steam"
        },
        {
          "Name": "Space Pilgrim Episode I: Alpha Centauri",
          "Sources": "Humble"
        },
        {
          "Name": "Sniper Elite 4",
          "Sources": "Steam"
        },
        {
          "Name": "DiRT Rally",
          "Sources": "Steam"
        },
        {
          "Name": "Void Bastards",
          "Sources": "Epic"
        },
        {
          "Name": "DEAD IN BERMUDA",
          "Sources": "EA app"
        },
        {
          "Name": "Kerbal Space Program",
          "Sources": "Epic"
        },
        {
          "Name": "Braveland",
          "Sources": "Steam"
        },
        {
          "Name": "Under Pressure",
          "Sources": "Steam"
        },
        {
          "Name": "Baezult",
          "Sources": "Steam"
        },
        {
          "Name": "Madden NFL 22",
          "Sources": "EA app"
        },
        {
          "Name": "AOForever - Argentum Online",
          "Sources": "Steam"
        },
        {
          "Name": "Crypt of the NecroDancer",
          "Sources": "Steam"
        },
        {
          "Name": "Showdown Adventure",
          "Sources": "Steam"
        },
        {
          "Name": "Delores: A Thimbleweed Park Mini-Adventure",
          "Sources": "GOG"
        },
        {
          "Name": "ライブピクト",
          "Sources": "Steam"
        },
        {
          "Name": "LoveBeat",
          "Sources": "Steam"
        },
        {
          "Name": "Uurnog",
          "Sources": "Humble"
        },
        {
          "Name": "The Wolf Among Us",
          "Sources": "Epic"
        },
        {
          "Name": "Endorlight",
          "Sources": "Steam"
        },
        {
          "Name": "Black Desert",
          "Sources": "Steam"
        },
        {
          "Name": "Squad",
          "Sources": "Steam"
        },
        {
          "Name": "Day of the Tentacle",
          "Sources": "Amazon"
        },
        {
          "Name": "Children of Morta",
          "Sources": "Steam"
        },
        {
          "Name": "Under The Light",
          "Sources": "itch.io"
        },
        {
          "Name": "Nero Score",
          "Sources": "Steam"
        },
        {
          "Name": "Golf Gang",
          "Sources": "Steam"
        },
        {
          "Name": "Paper Wizards",
          "Sources": "Steam"
        },
        {
          "Name": "Undawn",
          "Sources": "Steam"
        },
        {
          "Name": "Balconing Simulator 2020",
          "Sources": "Humble"
        },
        {
          "Name": "Danger Drone",
          "Sources": "Steam"
        },
        {
          "Name": "Silent IO - MoonJam 2020",
          "Sources": "itch.io"
        },
        {
          "Name": "Space Routine",
          "Sources": "Humble"
        },
        {
          "Name": "The Haunting of Billy",
          "Sources": "Steam"
        },
        {
          "Name": "Orwell: Ignorance Is Strength",
          "Sources": "Amazon"
        },
        {
          "Name": "Portal Reloaded",
          "Sources": "Steam"
        },
        {
          "Name": "Heidentum",
          "Sources": "Steam"
        },
        {
          "Name": "Slingshot people",
          "Sources": "Steam"
        },
        {
          "Name": "Rising Hell",
          "Sources": "Epic"
        },
        {
          "Name": "Lords Mobile",
          "Sources": "Steam"
        },
        {
          "Name": "Defence to death",
          "Sources": "Steam"
        },
        {
          "Name": "Hard Reset",
          "Sources": "Steam"
        },
        {
          "Name": "Battlevoid: Harbinger",
          "Sources": "Steam"
        },
        {
          "Name": "Dwarflings",
          "Sources": "Indiegala"
        },
        {
          "Name": "Samurai Shodown IV: Amakusa's Revenge",
          "Sources": "Amazon"
        },
        {
          "Name": "Shadow of the Tomb Raider: Definitive Edition",
          "Sources": "Epic"
        },
        {
          "Name": "Co-open",
          "Sources": "Humble"
        },
        {
          "Name": "Poppy Playtime",
          "Sources": "Steam"
        },
        {
          "Name": "Checkmate!",
          "Sources": "Steam"
        },
        {
          "Name": "Sensorium Galaxy",
          "Sources": "Steam"
        },
        {
          "Name": "Blue Fire: Void Maker",
          "Sources": "Steam"
        },
        {
          "Name": "Hyper Light Drifter",
          "Sources": "Steam"
        },
        {
          "Name": "Skullgirls 2nd Encore",
          "Sources": "Steam"
        },
        {
          "Name": "War Gun: Shooting Games Online",
          "Sources": "Steam"
        },
        {
          "Name": "Paragon: The Overprime",
          "Sources": "Steam"
        },
        {
          "Name": "Bthulufuku",
          "Sources": "itch.io"
        },
        {
          "Name": "Phoning Home",
          "Sources": "Steam"
        },
        {
          "Name": "Truberbrook",
          "Sources": "Steam"
        },
        {
          "Name": "Tap Adventure: Time Travel",
          "Sources": "Steam"
        },
        {
          "Name": "10 Second Ninja X",
          "Sources": "Steam"
        },
        {
          "Name": "Keep In Mind",
          "Sources": "Amazon"
        },
        {
          "Name": "No Crooks On Christmas",
          "Sources": "Steam"
        },
        {
          "Name": "Gamecraft",
          "Sources": "Steam"
        },
        {
          "Name": "Ninja Kiwi Archive",
          "Sources": "Steam"
        },
        {
          "Name": "Karos Classic",
          "Sources": "Steam"
        },
        {
          "Name": "PARTICLE MACE",
          "Sources": "Steam"
        },
        {
          "Name": "Chaos on Deponia",
          "Sources": "Steam"
        },
        {
          "Name": "Alt254",
          "Sources": "Humble"
        },
        {
          "Name": "The Wild Eight",
          "Sources": "Steam"
        },
        {
          "Name": "Neon Abyss",
          "Sources": "Steam"
        },
        {
          "Name": "Tales from Candlekeep: Tomb of Annihilation",
          "Sources": "Amazon"
        },
        {
          "Name": "StormEdge: Wind of Change",
          "Sources": "Steam"
        },
        {
          "Name": "Hundred Days - Winemaking Simulator",
          "Sources": "Epic"
        },
        {
          "Name": "Cats Hidden in Paris",
          "Sources": "Steam"
        },
        {
          "Name": "The Witness",
          "Sources": "Epic"
        },
        {
          "Name": "Orten was the Case",
          "Sources": "Amazon"
        },
        {
          "Name": "X-Morph: Defense",
          "Sources": "Steam"
        },
        {
          "Name": "Akalabeth: World of Doom",
          "Sources": "GOG"
        },
        {
          "Name": "SCP : Secret Files",
          "Sources": "Steam"
        },
        {
          "Name": "The Dark Eye: Chains of Satinav",
          "Sources": "GOG"
        },
        {
          "Name": "Escape This",
          "Sources": "Steam"
        },
        {
          "Name": "Quantum Break",
          "Sources": "Steam"
        },
        {
          "Name": "Chivalry 2",
          "Sources": "Steam"
        },
        {
          "Name": "Neeron: The Blade of Nature",
          "Sources": "Steam"
        },
        {
          "Name": "11-11 Memories Retold",
          "Sources": "Steam"
        },
        {
          "Name": "Nioh: The Complete Edition",
          "Sources": "Epic"
        },
        {
          "Name": "Perpetuum",
          "Sources": "Steam"
        },
        {
          "Name": "Keyboard Sports",
          "Sources": "Humble"
        },
        {
          "Name": "Borderlands 2",
          "Sources": "Epic"
        },
        {
          "Name": "Brigador: Up-Armored Edition",
          "Sources": "Steam"
        },
        {
          "Name": "TUNNEL DIVERS",
          "Sources": "Steam"
        },
        {
          "Name": "Defense Grid: The Awakening",
          "Sources": "Epic"
        },
        {
          "Name": "Clustertruck",
          "Sources": "Amazon"
        },
        {
          "Name": "Dransik",
          "Sources": "Steam"
        },
        {
          "Name": "Mad Machines",
          "Sources": "Steam"
        },
        {
          "Name": "Men of War: Assault Squad",
          "Sources": "Steam"
        },
        {
          "Name": "Fadry",
          "Sources": "Steam"
        },
        {
          "Name": "Tiny and Big: Grandpa's Leftovers",
          "Sources": "Steam"
        },
        {
          "Name": "Jakes Halloween Night",
          "Sources": "Steam"
        },
        {
          "Name": "Spitkiss",
          "Sources": "Amazon"
        },
        {
          "Name": "Sol: Last Light",
          "Sources": "Steam"
        },
        {
          "Name": "DF-41 Simulator",
          "Sources": "Steam"
        },
        {
          "Name": "Liberated",
          "Sources": "Amazon"
        },
        {
          "Name": "Winter Valley Hike",
          "Sources": "Steam"
        },
        {
          "Name": "Crusader: No Remorse",
          "Sources": "EA app"
        },
        {
          "Name": "AstroBike",
          "Sources": "Steam"
        },
        {
          "Name": "Flight 1",
          "Sources": "itch.io"
        },
        {
          "Name": "GigaBash",
          "Sources": "Epic"
        },
        {
          "Name": "Bamerang: Warm-Up Duel",
          "Sources": "Steam"
        },
        {
          "Name": "Hero of the Kingdom II",
          "Sources": "GOG"
        },
        {
          "Name": "Control",
          "Sources": "Epic"
        },
        {
          "Name": "Poker Night at the Inventory",
          "Sources": "Steam"
        },
        {
          "Name": "SKD",
          "Sources": "Steam"
        },
        {
          "Name": "Twinkle Star Sprites",
          "Sources": "Amazon"
        },
        {
          "Name": "Anti-Jump-Man",
          "Sources": "Steam"
        },
        {
          "Name": "MagiCats Builder",
          "Sources": "Steam"
        },
        {
          "Name": "Antstream Arcade",
          "Sources": "Epic"
        },
        {
          "Name": "Tower Unite",
          "Sources": "Steam"
        },
        {
          "Name": "Aurion: Legacy of the Kori-Odan",
          "Sources": "Amazon"
        },
        {
          "Name": "SEGA Mega Drive & Genesis Classics",
          "Sources": "Steam"
        },
        {
          "Name": "Risen 3 - Titan Lords",
          "Sources": "Steam"
        },
        {
          "Name": "Ryse: Son of Rome",
          "Sources": "Steam"
        },
        {
          "Name": "Trailmakers",
          "Sources": "Steam"
        },
        {
          "Name": "Overgrowth",
          "Sources": "Steam"
        },
        {
          "Name": "Uplink",
          "Sources": "Steam"
        },
        {
          "Name": "Red Wings: Aces of the Sky",
          "Sources": "Amazon"
        },
        {
          "Name": "Slay Together",
          "Sources": "Steam"
        },
        {
          "Name": "Battle Riders",
          "Sources": "Steam"
        },
        {
          "Name": "Laser League: World Arena",
          "Sources": "Steam"
        },
        {
          "Name": "Dishonored 2",
          "Sources": "GOG"
        },
        {
          "Name": "Shoppe Keep",
          "Sources": "Steam"
        },
        {
          "Name": "Them's Fightin' Herds",
          "Sources": "Steam"
        },
        {
          "Name": "Minigolf Galaxy",
          "Sources": "Steam"
        },
        {
          "Name": "Pirates of Rectangular",
          "Sources": "Steam"
        },
        {
          "Name": "1 Screen Platformer",
          "Sources": "Steam"
        },
        {
          "Name": "My Land!",
          "Sources": "Indiegala"
        },
        {
          "Name": "Another Lost Phone: Laura's Story",
          "Sources": "Amazon"
        },
        {
          "Name": "MOLEK-SYNTEZ",
          "Sources": "Steam"
        },
        {
          "Name": "Born Again",
          "Sources": "Steam"
        }
      ]
) 
const gameList = JSON.parse(gameLibrary);
for (let i = 0; i < gameList.length; i++){
    const Game = gameList[i];
    const GameCard = GameGridTemplate.content.cloneNode(true);
    GameCard.querySelector(".header").textContent = Game.Name;
    GameCard.querySelector(".body").textContent = Game.Sources;
    GameCardContainer.appendChild(GameCard);
}
