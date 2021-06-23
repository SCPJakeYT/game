function textures(){
  
  // tile entity textures
  
  gatewayFrame    = THREE.ImageUtils.loadTexture('/resources/images/textures/tile/exit-portal-frame.png'),
  portal    = THREE.ImageUtils.loadTexture('/resources/images/textures/tile/exit-portal.png'),
  spikesBase    = THREE.ImageUtils.loadTexture('/resources/images/textures/tile/spikes-base.png'),
  spikes    = THREE.ImageUtils.loadTexture('/resources/images/textures/tile/spikes.png'),
  crate   = THREE.ImageUtils.loadTexture('/resources/images/textures/tile/crate.png'),
  net   = THREE.ImageUtils.loadTexture('/resources/images/textures/tile/net.png'),
  
  // main textures
  
  grass    = THREE.ImageUtils.loadTexture('/resources/images/textures/grass.png'),
  grassTrim   = THREE.ImageUtils.loadTexture('/resources/images/textures/grass-trim.png'),
  dirt   = THREE.ImageUtils.loadTexture('/resources/images/textures/dirt.png'),
  log    = THREE.ImageUtils.loadTexture('/resources/images/textures/log.png'),
  knot   = THREE.ImageUtils.loadTexture('/resources/images/textures/log-knot.png'),
  glass    = THREE.ImageUtils.loadTexture('/resources/images/textures/glass.png'),
  remains   = THREE.ImageUtils.loadTexture('/resources/images/textures/remains.png'),
  water   = THREE.ImageUtils.loadTexture('/resources/images/textures/water.png'),
    
  // dunes textures
    
  sand   = THREE.ImageUtils.loadTexture('/resources/images/textures/dunes/grass-dunes.png'),
  sandTrim   = THREE.ImageUtils.loadTexture('/resources/images/textures/dunes/grass-trim-dunes.png'),
  dunesGrass   = THREE.ImageUtils.loadTexture('/resources/images/textures/dunes/grass-dunes.png'),
  dunesTrim   = THREE.ImageUtils.loadTexture('/resources/images/textures/dunes/grass-trim-dunes.png'),
  dunesDirt    = THREE.ImageUtils.loadTexture('/resources/dunes/dirt-dunes.png'),
  dunesCave    = THREE.ImageUtils.loadTexture('/resources/images/textures/dunes/underground-dirt-dunes.png'),
  dunesLog   = THREE.ImageUtils.loadTexture('/resources/images/textures/dunes/log-dunes.png'),
  dunesKnot   = THREE.ImageUtils.loadTexture('/resources/images/textures/dunes/log-knot-dunes.png'),
  dunesRemains   = THREE.ImageUtils.loadTexture('/resources/images/textures/dunes/remains-dunes.png'),
  dunesWater   = THREE.ImageUtils.loadTexture('/resources/images/textures/dunes/water-dunes.png'),
    
  // arctic textures
    
  ice   = THREE.ImageUtils.loadTexture('/resources/images/textures/arctic/ice-arctic.png'),
  snow   = THREE.ImageUtils.loadTexture('/resources/images/textures/arctic/grass-arctic.png'),
  snowTrim   = THREE.ImageUtils.loadTexture('/resources/images/textures/arctic/grass-trim-arctic.png'),
  arcticGrass   = THREE.ImageUtils.loadTexture('/resources/images/textures/arctic/grass-arctic.png'),
  arcticTrim   = THREE.ImageUtils.loadTexture('/resources/images/textures/arctic/grass-trim-arctic.png'),
  arcticBrick    = THREE.ImageUtils.loadTexture('/resources/images/textures/arctic/brick-arctic.png'),
  arcticDirt   = THREE.ImageUtils.loadTexture('/resources/images/textures/arctic/dirt-arctic.png'),
  arcticCave   = THREE.ImageUtils.loadTexture('/resources/images/textures/arctic/underground-dirt-arctic.png'),
  arcticLog   = THREE.ImageUtils.loadTexture('/resources/images/textures/arctic/log-arctic.png'),
  arcticKnot   = THREE.ImageUtils.loadTexture('/resources/images/textures/arctic/log-knot-arctic.png'),
  arcticGlass    = THREE.ImageUtils.loadTexture('/resources/images/textures/arctic/glass-arctic.png'),
  arcticRemains   = THREE.ImageUtils.loadTexture('/resources/images/textures/arctic/remains-arctic.png'),
  arcticWater   = THREE.ImageUtils.loadTexture('/resources/images/textures/arctic/water-arctic.png'),
    
  // factory textures
   
  factoryGrass   = THREE.ImageUtils.loadTexture('/resources/images/textures/factory/grass-factory.png'),
  factoryTrim   = THREE.ImageUtils.loadTexture('/resources/images/textures/factory/grass-trim-factory.png'),
  factoryBrick    = THREE.ImageUtils.loadTexture('/resources/images/textures/factory/brick-factory.png'),
  factoryDirt   = THREE.ImageUtils.loadTexture('/resources/images/textures/factory/dirt-factory.png'),
  factoryCave   = THREE.ImageUtils.loadTexture('/resources/images/textures/factory/underground-dirt-factory.png'),
  factoryLog   = THREE.ImageUtils.loadTexture('/resources/images/textures/factory/log-factory.png'),
  factoryKnot   = THREE.ImageUtils.loadTexture('/resources/images/textures/factory/log-knot-factory.png'),
  factoryRemains   = THREE.ImageUtils.loadTexture('/resources/images/textures/factory/remains-factory.png'),
  factoryWater   = THREE.ImageUtils.loadTexture('/resources/images/textures/factory/water-factory.png'),
    
  // anne textures
   
  sail   = THREE.ImageUtils.loadTexture('/resources/images/textures/anneShip/sails-anne.png'),
  anneGrass   = THREE.ImageUtils.loadTexture('/resources/images/textures/anneShip/grass-anne.png'),
  anneTrim   = THREE.ImageUtils.loadTexture('/resources/images/textures/anneShip/grass-trim-anne.png'),
  anneBrick    = THREE.ImageUtils.loadTexture('/resources/images/textures/anneShip/brick-anne.png'),
  anneDirt   = THREE.ImageUtils.loadTexture('/resources/images/textures/anneShip/dirt-anne.png'),
  anneCave   = THREE.ImageUtils.loadTexture('/resources/images/textures/anneShip/underground-dirt-anne.png'),
  anneRemains   = THREE.ImageUtils.loadTexture('/resources/images/textures/anneShip/remains-anne.png'),
  anneCrate   = THREE.ImageUtils.loadTexture('/resources/images/textures/anneShip/crate-anne.png'),
  anneWater   = THREE.ImageUtils.loadTexture('/resources/images/textures/anneShip/water-anne.png'),
    
  // tropical textures
   
  tropicalBrick    = THREE.ImageUtils.loadTexture('/resources/images/textures/tropical/brick-tropical.png'),
  tropicalCave   = THREE.ImageUtils.loadTexture('/resources/images/textures/tropical/underground-dirt-tropical.png'),
  tropicalRemains   = THREE.ImageUtils.loadTexture('/resources/images/textures/tropical/remains-tropical.png'),
  tropicalCrate   = THREE.ImageUtils.loadTexture('/resources/images/textures/tropical/crate-tropical.png'),
  tropicalWater   = THREE.ImageUtils.loadTexture('/resources/images/textures/tropical/water-tropical.png'),
    
  // volcanic eruption textures
   
  eruptionBrick    = THREE.ImageUtils.loadTexture('/resources/images/textures/tropical/eruption/brick-tropical.png'),
  eruptionCave   = THREE.ImageUtils.loadTexture('/resources/images/textures/tropical/eruption/underground-dirt-tropical.png'),
  eruptionRemains   = THREE.ImageUtils.loadTexture('/resources/images/textures/tropical/eruption/remains-tropical.png'),
  eruptionCrate   = THREE.ImageUtils.loadTexture('/resources/images/textures/tropical/eruption/crate-tropical.png'),
  eruptionWater   = THREE.ImageUtils.loadTexture('/resources/images/textures/eruption/tropical/water-tropical.png'),
}
