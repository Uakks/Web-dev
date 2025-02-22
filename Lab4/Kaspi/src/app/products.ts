export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;

  image:string;
  link: string;
}

export const products = [
  {
    id: 1,
    name: 'Monitor Samsung Odyssey G3 LS27AG300NIXCI black',
    price: 799,
    description: 'Монитор Samsung Odyssey G3 LS27AG300NIXCI с диагональю 27\" выполнен в черном корпусе и стандартно устанавливается на подставку.',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h94/h3d/50938199572510/monitor-samsung-gaming-odyssey-g3-ls27ag300nixci-104959386-1.jpg",
    link: "https://kaspi.kz/shop/p/samsung-odyssey-g3-ls27ag300nixci-chernyi-104959386/?c=750000000#!/item"
  },
  {
    id: 2,
    name: 'Монитор Samsung LF24T350FHIXCI черный',
    price: 799,
    description: 'Минималистичный дизайн. Максимальный визуальный комфорт. Отсутствие рамок с 3 сторон создает ощущение свободного пространства и современной эстетики в любой рабочей обстановке.',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha0/h7c/33060711006238/samsung-lf24t350fhixci-cernyj-100677425-1-Container.jpg",
    link: "https://kaspi.kz/shop/p/samsung-lf24t350fhixci-chernyi-100677425/?c=750000000#!/item"
  },
  {
    id: 3,
    name: 'Монитор Lenovo Legion Y25-30 черный',
    price: 799,
    description: '---',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8b/h8f/67807079497758/lenovo-legion-y25-30-chernyi-108410322-1.jpg",
    link: "https://kaspi.kz/shop/p/lenovo-legion-y25-30-chernyi-108410322/?c=750000000#!/item"
  },
  {
    id: 4,
    name: 'Монитор Xiaomi Mi Desktop Monitor 1C BHR4510GL черный',
    price: 799,
    description: 'Монитор Xiaomi Mi Desktop Monitor 1С привлекает внимание элегантностью форм, практически незаметной узкой рамкой около экрана и востребованным функционалом, поэтому станет надежным выбором для работы с различными приложениями и развлечений мультимедиа на каждый день. ',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1c/hf2/33938822070302/xiaomi-mi-desktop-monitor-1c-cernyj-101109328-1-Container.jpg",
    link: "https://kaspi.kz/shop/p/xiaomi-mi-desktop-monitor-1c-bhr4510gl-chernyi-101109328/?c=750000000#!/item"
  },
  {
    id: 5,
    name: 'Монитор DELL S2721HGF черный',
    price: 799,
    description: '---',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hac/h1c/33187029418014/dell-s2721hgf-cernyj-100687619-1-Container.jpg",
    link: "https://kaspi.kz/shop/p/dell-s2721hgf-chernyi-100687619/?c=750000000#!/item"
  },
  {
    id: 6,
    name: 'Монитор Samsung Odyssey G5 C34G55TWWI LC34G55TWWIXCI черный',
    price: 799,
    description: 'Насладиться качественным изображением можно, используя монитор SAMSUNG LC34G55TWWIXCI диагональю 34 дюйма. Данная модель обладает разрешением 3440x1440 пикселей.',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h97/h45/33958603325470/samsung-lc34g55twwixci-cernyj-101041173-1-Container.jpg",
    link: "https://kaspi.kz/shop/p/samsung-odyssey-g5-c34g55twwi-lc34g55twwixci-chernyi-101041173/?c=750000000#!/item"
  },
  {
    id: 7,
    name: 'Монитор Acer Nitro KG272 UM.HX2EE.018 черный',
    price: 799,
    description: 'Полное погружение в игровой процесс благодаря плавным визуальным эффектам и реалистичным оттенкам с частотой обновления 75 Гц.',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6e/haf/33997952385054/acer-nitro-kg272-um-hx2ee-018-chernyi-101102566-1.jpg",
    link: "https://kaspi.kz/shop/p/acer-nitro-kg272-um-hx2ee-018-chernyi-101102566/?c=750000000#!/item"
  },
  {
    id: 8,
    name: 'Монитор LG 27GN60R черный',
    price: 799,
    description: '---',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hdb/h5a/65547261968414/lg-27gn60r-chernyi-107490028-1.jpg",
    link: "https://kaspi.kz/shop/p/lg-27gn60r-chernyi-107490028/?c=750000000#!/item"
  },
  {
    id: 9,
    name: 'Монитор Sanc M2444PC черный',
    price: 799,
    description: 'Игровой монитор 23.8" Sanc оснащен качественной IPS-матрицей и яркой ELED-подсветкой',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3b/h0d/52374978789406/sanc-m2444pc-cernyj-105749984-1.jpg",
    link: "https://kaspi.kz/shop/p/sanc-m2444pc-chernyi-105749984/?c=750000000#!/item"
  },
  {
    id: 10,
    name: 'Монитор Sanc M2750QPA черный',
    price: 799,
    description: 'Эргономичный дизайн и тонкие рамками с трех сторон, позволяют насладиться отличной цветопередачей и яркостью 300кд/м2, с углами обзора 178° / 178°.',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb5/h80/52374991208478/sanc-m2750qpa-cernyj-105750116-1.jpg",
    link: "https://kaspi.kz/shop/p/sanc-m2750qpa-chernyi-105750116/?c=750000000#!/item"
  },

];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
