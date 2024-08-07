import { createSlice } from "@reduxjs/toolkit";

export const backendSlice = createSlice({
    initialState:{
        cart:[],
        checkout:{
            total:0.00,
            items:[]
        },
        products:[
            {
                "id": 1,
                "product_name": "Black Opal",
                "image_path": "/black_opal",
                "product_type": "ring",
                "price": 250,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/black_opal.6322ec4f7eedf0b27aaf.png"
            },
            {
                "id": 2,
                "product_name": "Two Gold Band",
                "image_path": "/gold_band_set_of_2",
                "product_type": "ring",
                "price": 100,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/gold_band_set_of_2.bacba0d1cccfc2f41a25.png"
            },
            {
                "id": 3,
                "product_name": "Gold Peridot",
                "image_path": "/gold_bezel_peridot",
                "product_type": "ring",
                "price": 150,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/gold_bezel_peridot.e576131b1c57ed5b34de.png"
            },
            {
                "id": 4,
                "product_name": "Gold Diamond Alexandrite",
                "image_path": "/gold_diamonds_alexandrite",
                "product_type": "ring",
                "price": 200,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/gold_diamonds_alexandrite.616ac2a063b6c718edd1.png"
            },
            {
                "id": 5,
                "product_name": "Gold Diamond Opal",
                "image_path": "/gold_diamond_opal",
                "product_type": "ring",
                "price": 275,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/gold_diamond_opal.2b96f8dcfe2559ea24b4.png"
            },
            {
                "id": 6,
                "product_name": "Gold Hexagon Alexandrite",
                "image_path": "/gold_hexagon_alexandrite",
                "product_type": "ring",
                "price": 220,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/gold_hexagon_alexandrite.5a89491c0314f94372af.png"
            },
            {
                "id": 7,
                "product_name": "Gold Leaf Ruby",
                "image_path": "/gold_leaf_ruby",
                "product_type": "ring",
                "price": 300,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/gold_leaf_ruby.e06ba9f57bd6dcca881a.png"
            },
            {
                "id": 8,
                "product_name": "Gold Sapphire Emerald",
                "image_path": "/gold_sapphire_emerald",
                "product_type": "ring",
                "price": 233,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/gold_sapphire_emerald.e5965359b30d1ec154f6.jpeg"
            },
            {
                "id": 9,
                "product_name": "Gold Round Alexandrite",
                "image_path": "/gold_round_alexandrite",
                "product_type": "ring",
                "price": 175,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/gold_round_alexandrite.8b970cd3b7334d1a77f3.png"
            },
            {
                "id": 10,
                "product_name": "Gold Ruby",
                "image_path": "/gold_ruby",
                "product_type": "ring",
                "price": 275,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/gold_ruby.4525280006259ae35263.png"
            },
            {
                "id": 11,
                "product_name": "Rose Gold Diamond Moss Agate",
                "image_path": "/kite_mossAgate2",
                "product_type": "ring",
                "price": 350,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/kite_mossAgate2.57bed17ffde5b576cc55.png"
            },
            {
                "id": 12,
                "product_name": "Rose Gold Kite Moss Agate",
                "image_path": "/rose_gold_kite_mossAgate",
                "product_type": "ring",
                "price": 320,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/rose_gold_kite_mossAgate.3fc25914627921c336da.png"
            },
            {
                "id": 13,
                "product_name": "Sterling Austrailian Opal",
                "image_path": "/sterling_australian_opal",
                "product_type": "ring",
                "price": 200,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/sterling_australian_opal.932e7322bf4824c8fcae.jpeg"
            },
            {
                "id": 14,
                "product_name": "Two Sterling Bands",
                "image_path": "/sterling_band_set_of_2",
                "product_type": "ring",
                "price": 100,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/sterling_band_set_of_2.cffb16b7421097c2600d.png"
            },
            {
                "id": 15,
                "product_name": "Sterling Diamond Sapphire",
                "image_path": "/sterling_diamond&_sapphire_band",
                "product_type": "ring",
                "price": 235,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/sterling_diamond&_sapphire_band.db8dcc3a7a1e37c1c0ce.png"
            },
            {
                "id": 16,
                "product_name": "Sterling Flower Diamond",
                "image_path": "/sterling_flower_diamond",
                "product_type": "ring",
                "price": 70,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/sterling_flower_diamond.35077202e84dd3ea3536.png"
            },
            {
                "id": 17,
                "product_name": "Sterling Moss Agate",
                "image_path": "/sterling_mossAgate",
                "product_type": "ring",
                "price": 143,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/sterling_mossAgate.36198b3d1d9a33a207a7.png"
            },
            {
                "id": 18,
                "product_name": "Sterling Diamond Sapphire Inlay",
                "image_path": "/sterling_saphire&_diamond_inlay",
                "product_type": "ring",
                "price": 175,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/sterling_saphire&_diamond_inlay.8c7918b131c8df66bfb7.jpeg"
            },
            {
                "id": 19,
                "product_name": "Sterling Star Diamond",
                "image_path": "/sterling_star_diamond",
                "product_type": "ring",
                "price": 150,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/sterling_star_diamond.edd8c45aa5906af5a741.png"
            },
            {
                "id": 20,
                "product_name": "Sterling Wave Engraving",
                "image_path": "/sterling_wave_engraving",
                "product_type": "ring",
                "price": 50,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/sterling_wave_engraving.a8f74fc488c3b0769b09.jpeg"
            },
            {
                "id": 21,
                "product_name": "Turtle Set Of Two",
                "image_path": "/turtle_set_of_2",
                "product_type": "ring",
                "price": 50,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/turtle_set_of_2.451ec3b6eed499bf14ca.png"
            },
            {
                "id": 22,
                "product_name": "White Gold Diamond Ruby 3 Piece",
                "image_path": "/white_gold_3piece_diamond&_ruby",
                "product_type": "ring",
                "price": 175,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/white_gold_3piece_diamond&_ruby.cf22e13fa1b869ef7f06.png"
            },
            {
                "id": 23,
                "product_name": "White Gold Diamond Teal-Green Sapphire",
                "image_path": "/white_gold_diamond_tealGreen_sapphire",
                "product_type": "ring",
                "price": 247,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/white_gold_diamond_tealGreen_sapphire.eeda335d5b4722efb94f.png"
            },
            {
                "id": 24,
                "product_name": "White Gold Fire Opal",
                "image_path": "/white_gold_fire_opal",
                "product_type": "ring",
                "price": 300,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/white_gold_fire_opal.20b0eb36ccc74fbcb87f.png"
            },
            {
                "id": 25,
                "product_name": "White Gold Prong Emerald",
                "image_path": "/white_gold_prong_emerald",
                "product_type": "ring",
                "price": 300,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/white_gold_prong_emerald.308458bcee063040d291.png"
            },
            {
                "id": 26,
                "product_name": "Black Opal and Diamond Pendant",
                "image_path": "/opal_diamond",
                "product_type": "necklace",
                "price": 300,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/opal_diamond.1e88fc8d3eee10524382.png"
            },
            {
                "id": 27,
                "product_name": "Amethyst Pendant",
                "image_path": "/amethyst_pendant",
                "product_type": "necklace",
                "price": 500,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/amethyst_pendant.d75b8abdeae350abf870.png"
            },
            {
                "id": 28,
                "product_name": "Sterling Silver Chain with an Emerald and Diamond Teardrop",
                "image_path": "/emerald_diamond_teardrop",
                "product_type": "necklace",
                "price": 1500,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/emerald_diamond_teardrop.7f6fb5fb4850f850e422.png"
            },
            {
                "id": 29,
                "product_name": "Sterling Siver with Cube Emerald in Diamond",
                "image_path": "/emrald_cube_pendant",
                "product_type": "necklace",
                "price": 1200,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/emrald_cube_pendant.ed0928b2642ae9296c24.png"
            },
            {
                "id": 30,
                "product_name": "Gemstone Necklace",
                "image_path": "/gemstones",
                "product_type": "necklace",
                "price": 300,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/gemstones.1fa544208ba55a465f52.png"
            },
            {
                "id": 31,
                "product_name": "Stackable Gold Chains",
                "image_path": "/gold_3_stack",
                "product_type": "necklace",
                "price": 400,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/gold_3_stack.a0f1ab2985c94a83e853.png"
            },
            {
                "id": 32,
                "product_name": "Gold Chain with Australian Opal",
                "image_path": "/gold_australian_opal_iShape",
                "product_type": "necklace",
                "price": 1000,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/gold_australian_opal_iShape.9a4630ce6d9d8133c0c5.png"
            },
            {
                "id": 33,
                "product_name": "Gold Bead Necklace",
                "image_path": "/gold_beaded",
                "product_type": "necklace",
                "price": 300,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/gold_beaded.0d2d1f9c420b07a06d63.png"
            },
            {
                "id": 34,
                "product_name": "Gold Chain with Raw Amethyst",
                "image_path": "/gold_chain_amethyst_raw",
                "product_type": "necklace",
                "price": 1100,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/gold_chain_amethyst_raw.fba45a2747fdd5d9f41c.png"
            },
            {
                "id": 35,
                "product_name": "Gold Chain with Gold Ring",
                "image_path": "/gold_chain_gold_ring",
                "product_type": "necklace",
                "price": 200,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/gold_chain_gold_ring.244e03b58752f9fe66e6.png"
            },
            {
                "id": 36,
                "product_name": "Gold Plated Necklace with Emerald and Diamond Teardrop",
                "image_path": "/gold_emerald_teardrop",
                "product_type": "necklace",
                "price": 1700,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/gold_emerald_teardrop.aa4a62c6e9aac2c6f8e2.png"
            },
            {
                "id": 37,
                "product_name": "Golden Flower",
                "image_path": "/gold_flower",
                "product_type": "necklace",
                "price": 100,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/gold_flower.f72db03688f96fbed774.png"
            },
            {
                "id": 38,
                "product_name": "Bronze Chain with Round Gold Feature",
                "image_path": "/gold_round_pendant",
                "product_type": "necklace",
                "price": 150,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/gold_round_pendant.7e751e816b66cdc15741.png"
            },
            {
                "id": 39,
                "product_name": "Gold Chain",
                "image_path": "/gold-necklace",
                "product_type": "necklace",
                "price": 100,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/gold-necklace.3f548e9f280054d8dbe0.png"
            },
            {
                "id": 40,
                "product_name": "Three Layer Pearl Necklace",
                "image_path": "/pearl_3_stack",
                "product_type": "necklace",
                "price": 1200,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/pearl_3_stack.89a300626dff7676ae43.jpg"
            },
            {
                "id": 41,
                "product_name": "Rose Quartz Crystal",
                "image_path": "/rose_quartz_crystal_2",
                "product_type": "necklace",
                "price": 75,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/rose_quartz_crystal_2.8dfee29f3ed510871034.png"
            },
            {
                "id": 42,
                "product_name": "Sterling Silver Chain with Rose Quartz Crystal",
                "image_path": "/sterling_rose_quartz_crystal",
                "product_type": "necklace",
                "price": 90,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/sterling_rose_quartz_crystal.7d78737b904d7505a47b.png"
            },
            {
                "id": 43,
                "product_name": "Sterling Silver Chain with Ruby Beads",
                "image_path": "/ruby_beads_pendant_raw",
                "product_type": "necklace",
                "price": 1150,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/ruby_beads_pendant_raw.e0ea225d48775829d5ac.png"
            },
            {
                "id": 44,
                "product_name": "Sterling Silver Chain with Ruby and Diamond Pendant",
                "image_path": "/ruby_diamond_teardrop",
                "product_type": "necklace",
                "price": 1500,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/ruby_diamond_teardrop.6940b9bf95c27d28e5f7.jpg"
            },
            {
                "id": 45,
                "product_name": "Sterling Silver Chain with Ruby Flower",
                "image_path": "/ruby_flower",
                "product_type": "necklace",
                "price": 500,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/ruby_flower.383f31e1e0c7e9aac807.png"
            },
            {
                "id": 46,
                "product_name": "Sterling Sliver Chain with Smokey Quartz Crystal",
                "image_path": "/smokey_quartz_crystal",
                "product_type": "necklace",
                "price": 90,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/smokey_quartz_crystal.c50d69c1505717096da1.png"
            },
            {
                "id": 47,
                "product_name": "Sterling Silver Chain with Amethyst",
                "image_path": "/sterling_amethyst",
                "product_type": "necklace",
                "price": 1300,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/sterling_amethyst.83390f95c2bd0d919528.png"
            },
            {
                "id": 48,
                "product_name": "White Gold Chain with Diamond Pendant",
                "image_path": "/white_gold_diamond_Yshape",
                "product_type": "necklace",
                "price": 2000,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/white_gold_diamond_Yshape.98b5f2717f49c6c489a5.png"
            },
            {
                "id": 49,
                "product_name": "Amethyst and Garnet Ship Sails Encrusted with Diamonds | Drop",
                "image_path": "/amethyst_garnet_shipSail_drop",
                "product_type": "earring",
                "price": 2000,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/amethyst_garnet_shipSail_drop.0493ff7a4a9a2b5ebdb0.png"
            },
            {
                "id": 50,
                "product_name": "Amethyst Earrings | Stud",
                "image_path": "/amethyst_stud",
                "product_type": "earring",
                "price": 1100,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/amethyst_stud.d8316ca7a167c0da4003.png"
            },
            {
                "id": 51,
                "product_name": "Floating Butterfly | Hoop",
                "image_path": "/butterfly_double_hoop",
                "product_type": "earring",
                "price": 750,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/butterfly_double_hoop.2dc2e5138245d7ed4650.png"
            },
            {
                "id": 52,
                "product_name": "Infinity Diamond | Stud",
                "image_path": "/diamond_infinity_stud",
                "product_type": "earring",
                "price": 1250,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/diamond_infinity_stud.1d2c26262a08c9d6d385.png"
            },
            {
                "id": 53,
                "product_name": "Gold Hoop Wrapped with Diamond | Hoop",
                "image_path": "/wrapped_diamond_hoop",
                "product_type": "earring",
                "price": 1500,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/wrapped_diamond_hoop.b4aa7244f462bb472e13.png"
            },
            {
                "id": 54,
                "product_name": "Duck Earrings | Drop",
                "image_path": "/duck",
                "product_type": "earring",
                "price": 20,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/duck.0ef0aedb57c13d409005.png"
            },
            {
                "id": 55,
                "product_name": "Emerald and Diamonds | Dangle",
                "image_path": "/emerald_diamond_drop",
                "product_type": "earring",
                "price": 2000,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/emerald_diamond_drop.ece94b71c88261dddad7.png"
            },
            {
                "id": 56,
                "product_name": "Emerald Teardrops | Drop",
                "image_path": "/emerald_drop",
                "product_type": "earring",
                "price": 2100,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/emerald_drop.b0b1d72c87dbe74c6786.png"
            },
            {
                "id": 57,
                "product_name": "Gold Horseshoe with Diamonds | Stud",
                "image_path": "/gold_diamond_horseshoe_stud",
                "product_type": "earring",
                "price": 950,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/gold_diamond_horseshoe_stud.6a9741365ef3fdd8e631.png"
            },
            {
                "id": 58,
                "product_name": "Gold Leaf with Emerald and Diamond | Drop",
                "image_path": "/gold_emerald_leaf_drop",
                "product_type": "earring",
                "price": 1200,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/gold_emerald_leaf_drop.b02aff692a3b232ddff3.png"
            },
            {
                "id": 59,
                "product_name": "Gold Hoops | Hoop",
                "image_path": "/gold_hoop",
                "product_type": "earring",
                "price": 1000,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/gold_hoop.d913d9a25bf549c73b1a.png"
            },
            {
                "id": 60,
                "product_name": "Gold and Pearl | Hoop",
                "image_path": "/gold_pearl_hoop",
                "product_type": "earring",
                "price": 1400,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/gold_pearl_hoop.d647e13e5149d5240ed1.png"
            },
            {
                "id": 61,
                "product_name": "Platinum Intertwined with Diamond and Gold | Hoop",
                "image_path": "/gold_platinum_diamond_hoop",
                "product_type": "earring",
                "price": 3200,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/gold_platinum_diamond_hoop.c115c65cb529bc62c347.png"
            },
            {
                "id": 62,
                "product_name": "Moons and Stars | Dangle",
                "image_path": "/moon_and_star_drop",
                "product_type": "earring",
                "price": 100,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/moon_and_star_drop.655062a330630229b894.png"
            },
            {
                "id": 63,
                "product_name": "Pearl with Diamond Loop | Drop",
                "image_path": "/pearl_diamond_dangle",
                "product_type": "earring",
                "price": 2200,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/pearl_diamond_dangle.c513d794bf3fe1054ffc.png"
            },
            {
                "id": 64,
                "product_name": "Pearl Earrings | Drop",
                "image_path": "/pearl_drop",
                "product_type": "earring",
                "price": 1800,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/pearl_drop.0dd5019d287277df81d6.png"
            },
            {
                "id": 65,
                "product_name": "Pearl Studs | Stud",
                "image_path": "/pearl_stud",
                "product_type": "earring",
                "price": 1000,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/pearl_stud.eedaee3ee4625b1333ed.png"
            },
            {
                "id": 66,
                "product_name": "Ruby Teardrop | Dangle",
                "image_path": "/ruby_teardrop_drop",
                "product_type": "earring",
                "price": 2500,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/ruby_teardrop_drop.80fe787988d6a18460b7.png"
            },
            {
                "id": 67,
                "product_name": "Sapphire Flower | Stud",
                "image_path": "/sapphire_flower_stud",
                "product_type": "earring",
                "price": 2700,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/sapphire_flower_stud.c342a7202a2e1c93226d.png"
            },
            {
                "id": 68,
                "product_name": "Silver Hoops | Hoop",
                "image_path": "/silver_hoop",
                "product_type": "earring",
                "price": 1000,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/silver_hoop.4bb34a19e105812ddcca.png"
            },
            {
                "id": 69,
                "product_name": "Sterling Silver with Emerald | Drop",
                "image_path": "/sterling_emerald_drop",
                "product_type": "earring",
                "price": 2000,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/sterling_emerald_drop.6504ee782fe196b5981e.png"
            },
            {
                "id": 70,
                "product_name": "Tagau Earrings | Dangle",
                "image_path": "/tagau_stack",
                "product_type": "earring",
                "price": 1000,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/tagau_stack.741b19e130ec2250c083.png"
            },
            {
                "id": 71,
                "product_name": "White Gold Aquamarine with Diamond Cluster | Stud",
                "image_path": "/white_gold_aquamarine_diamond_cluster",
                "product_type": "earring",
                "price": 2300,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/white_gold_aquamarine_diamond_cluster_stud.f04e9c22c8571d97d233.png"
            },
            {
                "id": 72,
                "product_name": "White Gold Diamond Infinty | Dangle",
                "image_path": "/white_gold_diamond_8Shape_dangle",
                "product_type": "earring",
                "price": 2000,
                "in_stock": true,
                "likes": [],
                "image": "/static/media/white_gold_diamond_8Shape_dangle.4e10f7bf45283145d303.png"
            }
        ]
    },
    name:'backend',
    reducers:{
        setProducts: (state, action) => {
            state.products = action.payload
        },
        setCart: (state, action) => {
            state.cart = action.payload
        },
        setCheckout: (state, action) => {
            state.checkout.total = action.payload.total
            state.checkout.items = action.payload.items
        }
    }
})

export const {setProducts, setCart, setCheckout} = backendSlice.actions

export default backendSlice.reducer