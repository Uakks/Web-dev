   export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    rating:number;
    link: string;
    inStock: boolean;
  }

  export const products = [
    {
      id: 1,
      name: 'Алекс минеральная Saryagash газированная 1.5 л',
      price: 237,
      description: `страна производства: Казахстан;
      условия хранения: при температуре от +5°C до +20°С;
      тип: минеральная`,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h93/hde/63820990414878.jpg?format=gallery-large',
      rating: 5,
      link: "https://kaspi.kz/shop/p/aleks-mineral-naja-saryagash-gazirovannaja-1-5-l-100211003/?c=75000000",
      inStock: true
    },
    {
      id: 2,
      name: 'Карина туалетная бумага 2-слойный 12 шт, вторичная целлюлоза',
      price: 1669,
      description: `тип: туалетная бумага;
      вид: рулонный;
      количество в упаковке: 12;
      материал: вторичная целлюлоза`,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h66/h78/64534893395998.jpg?format=gallery-large',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/karina-tualetnaja-bumaga-2-sloinyi-12-sht-vtorichnaja-tselljuloza-104962569/?c=750000000',
      inStock: true
    },
    {
      id: 3,
      name: 'MAGNUM огурцы Рава Казахстан',
      price: 1584,
      description: `страна производства: Казахстан;
      вид овощей: огурец`,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h71/hf0/84401304338462.jpg?format=gallery-large',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/magnum-ogurtsy-rava-kazahstan-102398351/?c=750000000',
      inStock: false
    },
    {
      id: 4,
      name: 'Kotex Ultra Normal прокладки 10 шт',
      price: 720,
      description: `страна производства: Китай;
      сорт: высший;
      помол: средний`,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h6e/hf6/83144442642462.jpg?format=gallery-large',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/kotex-ultra-normal-prokladki-10-sht-100931867/?c=750000000',
      inStock: true
    },
    {
      id: 5,
      name: 'KZ Shop скотч 48 мм х 250 м, 1 шт',
      price: 670,
      description: `тип: скотч;
      клейкая основа: односторонняя;
      длина: 250.0 м;
      ширина: 48.0 мм;
      применение: для склеивания`,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h70/h34/64490246930462.jpg?format=gallery-large',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/kz-shop-skotch-48-mm-h-250-m-1-sht-105404389/?c=750000000',
      inStock: true
    },
    {
      id: 6,
      name: 'Сандалии Fast Step FS_927MA021 коричневый 40',
      price: 15300,
      description: `модель: сандалии;
      материал верха: натуральная кожа;
      сезон: лето;
      цвет: коричневый;
      особенности размера: размер в размер`,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h91/hf1/80572864561182.jpg?format=gallery-large',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/fast-step-fs-927ma021-korichnevyi-40-110150430/?c=750000000',
      inStock: true
    },
    {
      id: 7,
      name: 'Корм Felix кусочки в желе кролик 75 г 1 шт',
      price: 166,
      description: `Корм для котов`,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha7/he9/80547767648286.jpg?format=gallery-large',
      rating: 4,
      link: 'https://kaspi.kz/shop/p/felix-kusochki-v-zhele-krolik-75-g-1-sht-100218713/?c=750000000',
      inStock: false
    },
    {
      id: 8,
      name: 'Мышь Optical Mouse A30 черный',
      price: 1015,
      description: `тип сенсора: оптическая светодиодная;
      тип подключения: проводная;
      интерфейс: USB;
      дизайн: для правой и левой руки;
      игровая: Да;
      разрешение оптического сенсора: 2400.0 dpi`,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h8d/hfb/66565803933726.jpg?format=gallery-large',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/optical-mouse-a30-chernyi-107917569/?c=750000000',
      inStock: true
    },
    {
      id: 9,
      name: 'Блок питания AeroCool KCAS PLUS 800 Вт',
      price: 33700,
      description: `форм-фактор: ATX;
      мощность: 800.0 Вт;
      сертификат 80 PLUS: Bronze;
      тип разъема для материнской платы: 20+4 pin;
      отстегивающиеся кабели: Нет;
      кабель питания в комплекте: Да`,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/he5/hba/63757707083806.jpg?format=gallery-large',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/aerocool-kcas-plus-800-vt-9700234/?c=750000000',
      inStock: true
    },
    {
      id: 10,
      name: 'Комплект детский TAC Десткое постельное, наволочки: 50x70 см, ранфорс',
      price: 15749,
      description: `вид простыни: на резинке;
      материал: ранфорс;
      размер простыни: 100x200;
      размер пододеяльника: 160x220;
      размер наволочки: 50x70 см;
      цвет: мультиколор, ,красный`,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h03/h40/67098768867358.jpg?format=gallery-large',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/komplekt-detskii-tac-destkoe-postel-noe-navolochki-50x70-sm-ranfors-108134142/?c=750000000',
      inStock: false
    },
  ];


  /*
  Copyright Google LLC. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at https://angular.io/license
  */
