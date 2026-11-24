/*
 * Original simulator data. Weapon names and finish names are used as descriptive
 * references; the artwork in this project is original vector artwork, not game files.
 * Odds are relative rarity weights. The game normalizes those weights into the
 * exact effective probabilities shown in the UI, so displayed odds match rolls.
 */
(() => {
  const skin = (name, odds, value, color, patterns = null) => ({ name, odds, value, color, patterns });
  const patternSet = (type) => {
    const sets = {
      caseHardened: [
        { name: 'Standard', odds: 1, multiplier: 1 },
        { name: 'Mixed Blue & Gold', odds: 18, multiplier: 1.4 },
        { name: 'Gold Gem', odds: 115, multiplier: 3.2 },
        { name: 'Blue Gem', odds: 420, multiplier: 12 },
        { name: 'High-Tier Blue Gem', odds: 1800, multiplier: 38 }
      ],
      doppler: [
        { name: 'Phase 1', odds: 1, multiplier: 1.05 },
        { name: 'Phase 2', odds: 1.2, multiplier: 1.1 },
        { name: 'Phase 3', odds: 1.3, multiplier: 1.05 },
        { name: 'Phase 4', odds: 1.4, multiplier: 1.15 },
        { name: 'Ruby', odds: 260, multiplier: 8 },
        { name: 'Sapphire', odds: 390, multiplier: 12 },
        { name: 'Black Pearl', odds: 720, multiplier: 18 }
      ],
      fade: [
        { name: 'Low Fade', odds: 1, multiplier: 1 },
        { name: 'Mid Fade', odds: 3, multiplier: 1.15 },
        { name: 'High Fade', odds: 12, multiplier: 1.6 },
        { name: 'Full Fade', odds: 150, multiplier: 5 }
      ],
      crimsonWeb: [
        { name: 'Standard Web', odds: 1, multiplier: 1 },
        { name: 'Double Web', odds: 14, multiplier: 1.5 },
        { name: 'Centered Web', odds: 55, multiplier: 2.5 },
        { name: 'Perfect Web', odds: 180, multiplier: 6 }
      ],
      marble: [
        { name: 'Marble Mix', odds: 1, multiplier: 1 },
        { name: 'Red Tip', odds: 14, multiplier: 1.5 },
        { name: 'Blue Tip', odds: 24, multiplier: 1.8 },
        { name: 'Fire & Ice', odds: 240, multiplier: 8 }
      ]
    };
    return sets[type] ? sets[type].map(p => ({ ...p })) : null;
  };

  const weapons = [
    { id:'glock18', name:'Glock-18', category:'Pistol', odds:1, model:'pistol', skins:[
      skin('Default',1,2,'#7e879b'), skin('Candy Apple',5,8,'#e64a55'), skin('Water Elemental',30,28,'#4d8fc9'), skin('Bullet Queen',170,95,'#d8b44a')
    ]},
    { id:'p250', name:'P250', category:'Pistol', odds:2, model:'pistol', skins:[
      skin('Default',1,2,'#7e879b'), skin('Sand Dune',4,5,'#b89e72'), skin('Muertos',28,25,'#ce5b62'), skin('See Ya Later',130,85,'#68c5b2')
    ]},
    { id:'usp_s', name:'USP-S', category:'Pistol', odds:5, model:'pistol', skins:[
      skin('Default',1,3,'#858c9e'), skin('Cyrex',12,18,'#d94b55'), skin('Kill Confirmed',85,75,'#d75c65'), skin('Printstream',200,140,'#e8e8ed')
    ]},
    { id:'desert_eagle', name:'Desert Eagle', category:'Pistol', odds:10, model:'pistol', skins:[
      skin('Default',1,4,'#8f8271'), skin('Blaze',24,55,'#ef9d3e'), skin('Kumicho Dragon',75,90,'#b66bd0'), skin('Code Red',115,125,'#d54a53'), skin('Printstream',260,180,'#e9edf4')
    ]},
    { id:'five_seven', name:'Five-SeveN', category:'Pistol', odds:8, model:'pistol', skins:[
      skin('Default',1,3,'#8e96a9'), skin('Monkey Business',18,22,'#e3cb59'), skin('Hyper Beast',95,82,'#4cbb9d')
    ]},
    { id:'tec9', name:'Tec-9', category:'Pistol', odds:7, model:'pistol', skins:[
      skin('Default',1,2,'#9299a8'), skin('Fuel Injector',32,36,'#e5bf3e'), skin('Decimator',76,68,'#6b85d6')
    ]},
    { id:'r8', name:'R8 Revolver', category:'Pistol', odds:12, model:'pistol', skins:[
      skin('Default',1,3,'#9c8b78'), skin('Amber Fade',14,22,'#df9b49',patternSet('fade')), skin('Llama Cannon',65,75,'#bc71cb')
    ]},
    { id:'ak47', name:'AK-47', category:'Rifle', odds:15, model:'rifle', skins:[
      skin('Default',1,5,'#8b8e91'), skin('Redline',10,34,'#cf414c'), skin('Asiimov',62,95,'#e4e9ef'), skin('Neon Rider',105,135,'#d856a4'), skin('Vulcan',140,170,'#4d85d8'), skin('Case Hardened',210,160,'#7b9fce',patternSet('caseHardened')), skin('Fire Serpent',620,430,'#bb6d3e'), skin('Gold Arabesque',980,760,'#d5b24b')
    ]},
    { id:'m4a4', name:'M4A4', category:'Rifle', odds:22, model:'rifle', skins:[
      skin('Default',1,5,'#858d9d'), skin('Desolate Space',22,30,'#7773cf'), skin('龍王 (Dragon King)',48,68,'#cf575b'), skin('The Emperor',165,190,'#4e94bd'), skin('Howl',820,680,'#d95642')
    ]},
    { id:'m4a1s', name:'M4A1-S', category:'Rifle', odds:25, model:'rifle', skins:[
      skin('Default',1,5,'#858d9d'), skin('Decimator',20,32,'#6f7ed8'), skin('Printstream',110,135,'#e9edf4'), skin('Player Two',145,175,'#df6b72'), skin('Knight',480,390,'#b5b4ad')
    ]},
    { id:'awp', name:'AWP', category:'Rifle', odds:50, model:'sniper', skins:[
      skin('Default',1,8,'#8d98a9'), skin('Atheris',18,28,'#46a77a'), skin('Neo-Noir',55,78,'#c56ea3'), skin('Asiimov',125,165,'#e9e9eb'), skin('Hyper Beast',175,195,'#42a5a0'), skin('Lightning Strike',260,260,'#c2a14b'), skin('Fade',390,360,'#d78b5d',patternSet('fade')), skin('Dragon Lore',1500,1800,'#c69c49')
    ]},
    { id:'aug', name:'AUG', category:'Rifle', odds:18, model:'rifle', skins:[
      skin('Default',1,4,'#8c929d'), skin('Chameleon',20,28,'#65a85e'), skin('Torque',42,46,'#d0d0d4'), skin('Akihabara Accept',330,360,'#d68aaf')
    ]},
    { id:'sg553', name:'SG 553', category:'Rifle', odds:20, model:'rifle', skins:[
      skin('Default',1,4,'#8c929d'), skin('Pulse',16,20,'#8e6bd1'), skin('Cyrex',44,55,'#d74754'), skin('Integrale',150,180,'#d38e48')
    ]},
    { id:'famas', name:'FAMAS', category:'Rifle', odds:11, model:'rifle', skins:[
      skin('Default',1,3,'#8b919b'), skin('Roll Cage',26,32,'#d49b49'), skin('Mecha Industries',70,80,'#d8dce2'), skin('Afterimage',115,120,'#8569c5')
    ]},
    { id:'galil', name:'Galil AR', category:'Rifle', odds:9, model:'rifle', skins:[
      skin('Default',1,3,'#8b919b'), skin('Eco',14,18,'#65a88c'), skin('Chatterbox',50,65,'#d77b52'), skin('Sugar Rush',125,155,'#e68aaf')
    ]},
    { id:'mp5sd', name:'MP5-SD', category:'SMG', odds:6, model:'smg', skins:[
      skin('Default',1,3,'#8791a4'), skin('Agent',10,14,'#7da6b9'), skin('Phosphor',38,45,'#54b9c5'), skin('Oxide Oasis',105,125,'#d58b55')
    ]},
    { id:'mp7', name:'MP7', category:'SMG', odds:6, model:'smg', skins:[
      skin('Default',1,3,'#8791a4'), skin('Bloodsport',28,35,'#c74452'), skin('Fade',82,95,'#d68c5b',patternSet('fade')), skin('Whiteout',150,190,'#e7e9ef')
    ]},
    { id:'mac10', name:'MAC-10', category:'SMG', odds:5, model:'smg', skins:[
      skin('Default',1,2,'#8992a0'), skin('Neon Rider',18,24,'#d65a9c'), skin('Disco Tech',62,78,'#7b74d5'), skin('Stalker',105,135,'#b870c8')
    ]},
    { id:'p90', name:'P90', category:'SMG', odds:14, model:'smg', skins:[
      skin('Default',1,4,'#8992a0'), skin('Trigon',18,28,'#df7e4f'), skin('Asiimov',70,95,'#e7e9ee'), skin('Death by Kitty',220,260,'#df7da7')
    ]},
    { id:'ump45', name:'UMP-45', category:'SMG', odds:8, model:'smg', skins:[
      skin('Default',1,3,'#8992a0'), skin('Primal Saber',20,28,'#d46a54'), skin('Exposure',55,65,'#66b5bf'), skin('Fade',130,170,'#d68c5b',patternSet('fade'))
    ]},
    { id:'nova', name:'Nova', category:'Shotgun', odds:4, model:'shotgun', skins:[
      skin('Default',1,2,'#8c929c'), skin('Koi',15,20,'#e18a79'), skin('Rising Skull',65,75,'#c5b7a3')
    ]},
    { id:'xm1014', name:'XM1014', category:'Shotgun', odds:7, model:'shotgun', skins:[
      skin('Default',1,3,'#8c929c'), skin('Tranquility',25,38,'#c077a1'), skin('Incinegator',75,95,'#df774b')
    ]},
    { id:'mag7', name:'MAG-7', category:'Shotgun', odds:5, model:'shotgun', skins:[
      skin('Default',1,2,'#8c929c'), skin('Justice',20,30,'#7d74cb'), skin('Petroglyph',56,66,'#dba36d')
    ]},
    { id:'negev', name:'Negev', category:'Machine Gun', odds:3, model:'heavy', skins:[
      skin('Default',1,2,'#8c929c'), skin('Loudmouth',24,34,'#d95d59'), skin('Mjölnir',220,260,'#d6a94f')
    ]},
    { id:'m249', name:'M249', category:'Machine Gun', odds:4, model:'heavy', skins:[
      skin('Default',1,2,'#8c929c'), skin('System Lock',18,25,'#7799bf'), skin('Emerald Poison Dart',85,110,'#55a67a')
    ]},
    { id:'knife_karambit', name:'Karambit', category:'Knife', odds:1000, model:'knife', skins:[
      skin('Default',1,220,'#9da5b5'), skin('Case Hardened',38,480,'#799bca',patternSet('caseHardened')), skin('Doppler',55,650,'#9971d1',patternSet('doppler')), skin('Fade',90,720,'#d98b5d',patternSet('fade')), skin('Crimson Web',115,590,'#c94d58',patternSet('crimsonWeb'))
    ]},
    { id:'knife_butterfly', name:'Butterfly Knife', category:'Knife', odds:2500, model:'knife', skins:[
      skin('Default',1,280,'#9da5b5'), skin('Doppler',60,850,'#9870d2',patternSet('doppler')), skin('Fade',95,1050,'#d98b5d',patternSet('fade')), skin('Case Hardened',125,820,'#799bca',patternSet('caseHardened'))
    ]},
    { id:'knife_m9', name:'M9 Bayonet', category:'Knife', odds:5000, model:'knife', skins:[
      skin('Default',1,320,'#9da5b5'), skin('Doppler',62,920,'#9870d2',patternSet('doppler')), skin('Crimson Web',100,880,'#c94d58',patternSet('crimsonWeb')), skin('Fade',120,1150,'#d98b5d',patternSet('fade'))
    ]},
    { id:'knife_bayonet', name:'Bayonet', category:'Knife', odds:650, model:'knife', skins:[
      skin('Default',1,155,'#9da5b5'), skin('Tiger Tooth',32,290,'#d7aa43'), skin('Lore',55,390,'#c4a34b'), skin('Marble Fade',95,470,'#a477d3',patternSet('marble'))
    ]},
    { id:'knife_skeleton', name:'Skeleton Knife', category:'Knife', odds:1800, model:'knife', skins:[
      skin('Default',1,240,'#9da5b5'), skin('Case Hardened',65,620,'#799bca',patternSet('caseHardened')), skin('Fade',110,900,'#d98b5d',patternSet('fade'))
    ]},
    { id:'knife_talon', name:'Talon Knife', category:'Knife', odds:1400, model:'knife', skins:[
      skin('Default',1,210,'#9da5b5'), skin('Doppler',60,780,'#9870d2',patternSet('doppler')), skin('Slaughter',45,560,'#c94d58')
    ]},
    { id:'gloves_sport', name:'Sport Gloves', category:'Gloves', odds:1600, model:'gloves', skins:[
      skin('Default',1,180,'#8b97ab'), skin('Vice',50,620,'#d76bb1'), skin('Pandora’s Box',155,1450,'#7862b8'), skin('Amphibious',90,780,'#58a9bd')
    ]},
    { id:'gloves_driver', name:'Driver Gloves', category:'Gloves', odds:900, model:'gloves', skins:[
      skin('Default',1,140,'#8b97ab'), skin('King Snake',55,510,'#e2e3e8'), skin('Crimson Weave',48,450,'#ca4c59'), skin('Imperial Plaid',75,590,'#9c75cb')
    ]},
    { id:'gloves_handwraps', name:'Hand Wraps', category:'Gloves', odds:700, model:'gloves', skins:[
      skin('Default',1,110,'#8b97ab'), skin('Cobalt Skulls',38,360,'#547cc3'), skin('Overprint',65,480,'#c3b4a2'), skin('Slaughter',70,510,'#c94d58')
    ]},
    { id:'gloves_moto', name:'Moto Gloves', category:'Gloves', odds:1200, model:'gloves', skins:[
      skin('Default',1,160,'#8b97ab'), skin('POW!',44,510,'#d7a847'), skin('Eclipse',60,570,'#686c83'), skin('Spearmint',135,970,'#57b59b')
    ]}
  ];

  window.GAME_DATA = { weapons, patternSets: ['caseHardened','doppler','fade','crimsonWeb','marble'] };
})();
