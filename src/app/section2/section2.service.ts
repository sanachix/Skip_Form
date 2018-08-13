import { Injectable } from '@angular/core';





let states:string[]=['Alabama','Alaska','Arkansas','California','Colorado', 
'Connecticut','Delaware','Florida', 'Georgia','Hawaii','Idaho','Illinois', 
'Indiana','Iowa','Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 
'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri',
'Montana','Nebraska','Nevada','New Hampshire','New Jersey', 'New Mexico', 
'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 
'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin','Wyoming'];

let Codes01:string[]=['0101 - Professional Services', '0102 - Testing and Inspection', 
  '0105 - Surveyors/Layout Engineers','0111 - CPM Schedule','0112 - Photography','0131 - Security',
  '0132 - Fuel Delivery','0133 - Welding','0134 - Trash Removal','0140 - Clean-Up',
  '0161 - Safety Equipment','0165 - Tools and Equipment', '0171 - Hauling, Trucking',
  '0190 - Temporary Facilities','0191 - Asbestos Removal','0192 - Office Supplies and Equipment',
  '0193 - Building Supply']


let Codes02:string[]=['0207 - Demolition','0219 - Earthwork','0220 - Clearing and Grubb',
'0225 - Pest Contro','0237 - Dewatering','0240 - Subsurface Exploration','0243 - Piling, Sheeting and Shoring',
'0250 - Caissons','0262 - Site Utilities','0271 - Asphalt Paving','0272 - Curbs & Gutters/Site Concrete',
'0276 - Road and Parking Appru.','0277 - MDOT Maint. of Traffic Bridge/Road','0280 - Site Improvements',
'0285 - Fence Work','0287 - Lawns and Planting','0290 - Landscaping','0291 - Marine Work','0292 - Tunneling',
'0293 - Railroad Work']

let Codes03:string[]=['0310 - Concrete Access./Forms','0315 - Concrete Formwork Only',
'0316 - Concrete Construction - Struct.','0316 - Concrete Construction - Struct.',
'0318 - Concrete Construction - Other','0320 - Tilt-Up Construction',
'0324 - Concrete Reinforce. - Fab.','0330 - Concrete Reinforce. - Setting.',
'0331 - Conc. Sawcut/Core/Joint Supplier','0333 - Concrete Post Tensioned',
'0336 - Gunite/Pressure Injected Grout','0343 - Concrete - Ready Mix','0350 - Specially Finished Concrete',
'0355 - Installation Equipment/Services','0386 - Precast Concrete Arch. Pane',
'0387 - Precast Structural Concrete','0390 - Concrete Finishing','0395 - Poured Roof Deck',
'0397 - Cementitous Decking']

let Codes04:string[]=['0401 - Masonry','0410 - Acid Brick Floors/Refractories',
'0415 - Masonry Accessories/Suppliers','0420 - Restoration and Clean.','0440 - Cut Stone Suppliers`']

let Codes05:string[]=['0501 - Structural Steel Fabrication','0502 - Structural Steel Erection',
'0520 - Open-Web Joists-Fabrications','0534 - Metal Decking','0545 - Miscellaneous Steel Fabricate',
'0553 - Construction Castings','0560 - Ornamental Metals']

let Codes06:string[]=['0600 - Rough Carpentry','0610 - Framing','0620 - Panalized Roof Glulam',
'0630 - Interior Ornamental Panels','0640 - Heavy Timber Construction','0660 - Millwork and Cabinetwork']

let Codes07:string[]=['0701 - Waterproofing and Dampproofing','0720 - Building Insulation',
'0725 - Fireproofing','0737 - Metal Siding/Panel-Suppliers','0738 - Metal Siding/Panel-Erectors',
'0750 - Membrane (Built-Up) Roofing','0755 - Foam Roofing','0760 - Flashing/Sheet Metal Work',
'0780 - Roof Accessories','0781 - Shingles and Roofing Tiles','0786 - Preformed Roofing and Siding',
'0787 - Skylights','0790 - Caulking and Sealants']

let Codes08:string[]=['0801 - Hollow Metal Doors and Frames','0805 - Special Metal Doors and Frames',
'0810 - Wood Doors','0815 - Plastic Doors and Windows','0821 - Sliding Fire Doors',
'0823 - Overhead and Miscellaneous Doors','0837 - Steel Windows','0838 - Aluminum Windows',
'0850 - Finish Hardware','0875 - Glass, Glazing and Storefront','0880 - Curtainwall System']

let Codes09:string[]=['0901 - Plaster, Stucco, Dryvit','0910 - Gypsum Drywall',
'0920 - Ceramic-Quarry Tile-Terrazzo','0950 - Acoustical Treatment','0960 - Wood Flooring',
'0963 - Wood Block Industrial Floors','0970 - Resilient Flooring','0971 - Carpet Floor',
'0975 - Special Flooring','0980 - Special Coatings','0985 - Painting/Wall Covering','0990 - Painting-Bridge']

let Codes10:string[]=['1002 - Toilet Compartments','1010 - Demountable Partitions',
'1015 - Retractable Partitions','1020 - Lockers','1021 - Louvers & Grilles','1024 - Toilet Accessories',
'1030 - Miscellaneous Specialties','1035 - Flagpoles','1040 - Signs and Ident. Devices','1065 - Scales',
'1095 - Waste Disposal Units']

let Codes11:string[]=['1101 - Bank Equipment','1106 - Hospital Equipment','1107 - Musical Equipment',
'1109 - Theater Equipment','1113 - Audio/Visual Equipment','1115 - Parking Equipment',
'1116 - Loading Dock Equipment','1117 - Waste Handling','1119 - Detention Equipment',
'1120 - Water Sup. & Treatment Equip','1126 - Residential Equipment','1130 - Fluid Waste Disposal Equip.',
'1141 - Food Service Equipment','1145 - Refrigeration Equipment','1147 - Dark Room Equipment',
'1150 - Gymnasium Equipment','1160 - Laboratory Equipment','1170 - Miscellaneous Equipment',
'1175 - Service Station Equipment','1190 - Education Equipment']

let Codes12:string[]=['1211 - Blinds and Shades','1212 - Carpets and Mats','1215 - Cabinets and Furniture',
'1270 - Seating']

let Codes13:string[]=['1301 - Computer Floors','1305 - Prefabricated Structures',
'1375 - Special Chimney Construction','1380 - Storage Vaults','1390 - Miscellaneous Special Constr.']

let Codes14:string[]=['1401 - Dumbwaiters','1405 - Elevators and Escalators','1415 - Hoists and Cranes',
'1440 - Conveyers']

let Codes15:string[]=['1500 - Mechanical','1510 - HVAC/Sheetmetal Work','1525 - Mechanical Insulation',
'1540 - Plumbing','1550 - Fire Protection','1565 - Refrigeration','1580 - Sheetmetal',
'1581 - Testing Balancing and Adjusting','1590 - Mechanical System Controls']

let Codes16:string[]=['1600 - Electrical Contractors','1610 - Electrical Equipment Supplier',
'1650 - Electrical Lighting','1660 - Electrical Special Systems']




@Injectable({
  providedIn: 'root'
})
export class Section2Service {

  getStates(){
    return states;
  }
  
  getCodes01(){
    return Codes01
  }

  getCodes02(){
    return Codes02
  }

  getCodes03(){
    return Codes03
  }

  getCodes04(){
    return Codes04
  }

  getCodes05(){
    return Codes05
  }

  getCodes06(){
    return Codes06
  }
  
  getCodes07(){
    return Codes07
  }

  getCodes08(){
    return Codes08
  }

  getCodes09(){
    return Codes09
  }

  getCodes10(){
    return Codes10
  }
}
