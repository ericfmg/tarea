let db = [
    {
      product_name: 'Stop yamaha R3 integrado',
      price: 200000,
      descrption: 'Stop para yamaha R3 modelo 2015 en adelante (v1, v2) integrado con direccionales full led',
      img: 'https://img.joomcdn.net/0e92f68a883d93daa299b06ca159a1e3a9c333eb_original.jpeg',
      tags: ['stop', 'yamaha', 'r3', 'motos', 'led', 'integrado'],
    },
    {
      product_name: 'Kit de arrastre Pulsar NS 200',
      price: 250000,
      descrption: 'Kit de arrastre para Pulsar NS 200. El kit inclutye piñoneria, cadena y tornillos',
      img: 'assets/img/kitarrastre.jpg',
      tags: ['arrrastre', 'Bajaj', 'pulsar', 'motos', 'transmision', 'cadenas'],
    },
    {
      product_name: 'Manetas kawasaki Z1000',
      price: 154461,
      descrption: 'Manetas de embrague y de freno extensibles y plegables para motocicleta',
      img: 'assets/img/manetask.jpg',
      tags: ['potencia', 'Kawasaki', 'Z1000', 'motos', 'transmision', 'frenos'],
    },
    {
      product_name: 'Protector radiador DUKE 200',
      price: 128999,
      descrption: 'Protector de radiador fabricado en aluminio con acabado cepillado para KTM DUKE 200',
      img: 'assets/img/duke.jpg',
      tags: ['lujos', 'KTM', 'DUKE', 'motos', 'refrigeracion', 'accesorios'],
    },
    {
      product_name: 'Ducati single seat Panigale',
      price: 788972,
      descrption: 'Asiento monoplaza para Ducati panigale 899 y 1199/1199s (Disponible en color rojo',
      img: 'assets/img/soloseat.jpg',
      tags: ['asientos', 'Ducati', 'panigale', 'motos', 'biker', '899','1199'],
    },
    {
      product_name: 'Ducati low seat Diavel',
      price: 975620,
      descrption: 'Asiento Ducati performance low seat para Ducati Diavel 1260 fabricado en tela de alcantara',
      img: 'assets/img/diaval.jpg',
      tags: ['performance', 'Ducati', 'diavel', 'motos', 'biker', '1260','asientos'],
    },
    {
      product_name: 'Carenado Susuki delantero',
      price: 786790,
      descrption: 'Carenado de faro delantero superior en fibra de carbono para Susuki GSXR 1000',
      img: 'assets/img/gsxr.jpg',
      tags: ['performance', 'susuki', 'gsxr', 'motos', 'biker', '1000cc','carbonfiber'],
    },
    {
      product_name: 'Carenado Susuki trasero',
      price: 786790,
      descrption: 'Carenado de faro delantero superior en fibra de carbono para Susuki GSXR 1000',
      img: 'assets/img/caren.jpg',
      tags: ['performance', 'susuki', 'gsxr', 'motos', 'biker', '1000cc','carbonfiber'],
    },
    {
      product_name: 'Escape Akrapovic yamaha R3',
      price: 695800,
      descrption: 'Escape insertable Akrapovic de acero inoxidable para Yamaha YZF-R3 (tan solo pesa 1,14kg',
      img: 'assets/img/akp.jpg',
      tags: ['performance', 'yamaha', 'yzf', 'motos', 'biker', 'r3','aceroinox'],
    },
    {
      product_name: 'Faro LED Scrambler 7"',
      price: 225600,
      descrption: 'Faro LED Custom de 7 pulgadas para motocicletas tipo Scrambler (altas, bajas y direccionales) ',
      img: 'assets/img/scr.png',
      tags: ['lujos', 'accesorios', 'scrambler', 'motos', 'biker', 'LED'],
    },
    {
      product_name: 'Maletero cuadrado 42L',
      price: 1411687,
      descrption: 'Baúl GIVI TREKKER OUTBACK 42 Aluminio Natural Monokey®, Homologado  ',
      img: 'assets/img/maleta.jpg',
      tags: ['lujos', 'accesorios', 'granturismo', 'motos', 'biker', 'equipaje'],
    },
    {
      product_name: 'Asiento cafe racer universal',
      price: 1411687,
      descrption: 'Asiento para moto tipo cafe racer universal color marron y negro (incluye soporte para instalar) ',
      img: 'assets/img/cafe.jpg',
      tags: ['lujos', 'accesorios', 'caferacer', 'motos', 'biker', 'personalizacion'],
    },
    {
      product_name: 'Escape para MV Agusta F4',
      price: 7866469,
      descrption: 'Escape QUATTRO FR Racing completo en titanio, marca BODIS EXHAUST para MV AGUSTA F4 2004-2009.',
      img: 'assets/img/escape.jpg',
      tags: ['performance', 'racing', 'MVAgusta', 'motos', 'biker', 'F4'],
    },
    {
      product_name: 'Tapa de clutch Panigale',
      price: 7866469,
      descrption: 'Cubierta de embrague transparente y retenedor de resorte, CNC Racing. Ducati Panigale V4,V4S y V4 Speciale',
      img: 'assets/img/clu.jpg',
      tags: ['clutch', 'racing', 'ducati', 'motos', 'biker', 'panigale','V4'],
    },
    {
      product_name: 'Juego de rines M performance',
      price: 12564230,
      descrption: 'Juegos de rines M Performance de fibra de carbono para la BMW S 1000 RR.',
      img: 'assets/img/mper.jpg',
      tags: ['rines', 'racing', 'bmw', 'motos', 'biker', 'MPerformance','carbonfiber'],
    },
    {
      product_name: 'Supercargador Nija H2',
      price: 5968210,
      descrption: 'Supercargador para Kawasaki Nija H2 (el kit incluye mangeras, tornillos y placa decorativa).',
      img: 'assets/img/sp.jpg',
      tags: ['supercargador', 'racing', 'kawasaki', 'motos', 'biker', 'Performance','H2R'],
    },
    {
      product_name: 'Bateria de gel MEGABAT',
      price: 156300,
      descrption: 'Bateria MegaBat PRO MTX7D BS. Bateria sellada en gel para motos fabricadas por Auteco Mobility',
      img: 'assets/img/bateria.jpg',
      tags: ['energia', 'baterias', 'auteco', 'motos', 'biker', 'Performance','mobility'],
    },
    {
      product_name: 'Barra estabilizadora',
      price: 136520,
      descrption: 'Barrra estabilizadora universal para manubrio de 25 cm. Fabricada en aluminio anodizado.',
      img: 'assets/img/barr.jpg',
      tags: ['manubrios', 'accesorios', 'motos', 'biker', 'manejo','performance'],
    },
    {
      product_name: 'Basculante monobrazo',
      price: 1652300,
      descrption: 'Basculante monobrazo para Ducati monster 796 (modelo 2010 a 2012), nuevo y sellado en su caja original.',
      img: 'assets/img/mono.jpg',
      tags: ['basculantes', 'repuestos', 'motos', 'biker', 'manejo','performance'],
    },
    {
      product_name: 'Filtro de aire alto flujo',
      price: 369521,
      descrption: 'Filtro K&N universal de alto flujo con tuberia de 2" en acero inoxidable y deflector de calor en fibra de carbono',
      img: 'assets/img/kn.jpg',
      tags: ['performance', 'accesorios', 'motos', 'biker', 'potencia','aspirado'],
    },
    {
      product_name: 'Embrague Ducati monster',
      price: 568300,
      descrption: 'Embrague completo para Ducati Moster 696 original. El producto viene sellado en su empaque de fabrica',
      img: 'assets/img/emb.jpg',
      tags: ['performance', 'accesorios', 'motos', 'biker', 'potencia','aspirado','diostieneunaducati'],
    },
    {
      product_name: 'Portaplaca de lujo universal',
      price: 86500,
      descrption: 'Portaplaca fabricada en aluminio anodizado. Disponible en color plata, naranja, morado, verde y azul.',
      img: 'assets/img/ptp.jpg',
      tags: ['lujos', 'accesorios', 'motos', 'biker','placas','Aluminio','personalzacion','colores'],
    },
    {
      product_name: 'Parachoques deslizante lateral',
      price: 300000,
      descrption: 'Deslizadores de moto protectores de choque de motor, parachoques de seguridad lateral de motocicleta, parachoques competitivo para honda CB190R CBF190R',
      img: 'assets/img/prc.jpg',
      tags: ['seguridad', 'accesorios'],
    },
    {
      product_name: 'Protectores de mano',
      price: 300000,
      descrption: '1 par protectores de mano para manillar de la moto con luces led de circulación diurna y direccionales',
      img: 'assets/img/pm.jpg',
      tags: ['seguridad', 'accesorios', 'lujos','personalizacion','iluminacion','candeliar'],
    },
  ]

  
  for (let i=0; i<db.length;i++){
  let lista=document.getElementById('lol')
  let div = document.createElement('div')
  let auxiliar=""
  for(let j=0;j<db[i].tags.length;j++){

    auxiliar+=(`#${db[i].tags[j]}\n`)
  
  }
  
  let price= db[i].price.toLocaleString('en-US')
  div.innerHTML=(`<div style="width:18rem" class="m-2 border border-warning rounded"><h2 class="m-2">${db[i].product_name}</h2>
    <p class="m-2">Precio: $ ${price}</p>
    <p class="m-2">${db[i].descrption}</p>
    <div class="w-75 mx-auto mt-2 mb-2">
    <img src="${db[i].img}" class="w-100">
    </div>
    <p class="m-2 text-center">${auxiliar}</p>
    </div> `)
  lista.appendChild(div)
  }
 