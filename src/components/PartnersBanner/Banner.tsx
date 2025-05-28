import React, { useEffect, useState } from 'react';
import { getPartners, Partner } from '../../firabase'; // змінити на свій шлях
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Border, Image, SwiperContainer } from './Partners.styled';
import 'swiper/css/bundle';

import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';

// import WarnerBros from '../../assets/icons/partners/warner_bros.svg';
// import partner2 from '../../assets/icons/partners/Partner2.svg';
// import partner3 from '../../assets/icons/partners/partner3.svg';
// import partner4 from '../../assets/icons/partners/partner4.svg';
// import partner5 from '../../assets/icons/partners/partner5.svg';
// import partner6 from '../../assets/icons/partners/partner6.svg';

// const slides = [
//   {
//     id: 1,
//     imageUrl: WarnerBros,
//   },
//   {
//     id: 2,
//     imageUrl: partner2,
//   },
//   {
//     id: 3,
//     imageUrl: partner3,
//   },
//   {
//     id: 4,
//     imageUrl: partner4,
//   },
//   {
//     id: 5,
//     imageUrl: partner5,
//   },
//   {
//     id: 6,
//     imageUrl: partner6,
//   },
//   {
//     id: 7,
//     imageUrl: WarnerBros,
//   },
//   {
//     id: 8,
//     imageUrl: partner2,
//   },
//   {
//     id: 9,
//     imageUrl: partner3,
//   },
// ];

const Partners: React.FC = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ query: '(max-width: 743px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 744px) and (max-width: 1023px)',
  });

  const [partners, setPartners] = useState<Partner[]>([]);

  useEffect(() => {
    getPartners().then(setPartners);
  }, []);
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });

  const slidesPerView = isMobile ? 2 : isTablet ? 4 : isDesktop ? 7 : 7;

  return (
    <SwiperContainer>
      <Border />
      <Swiper
        loop={true}
        slidesPerView={slidesPerView}
        spaceBetween={20}
        navigation={false}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
        }}
        pagination={false}
        grabCursor={true}
        speed={4000}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {Array.from({ length: 2 }).map((_, i) =>
          partners.map(partner => (
            <SwiperSlide
              key={`${partner.id}-${i}`}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 'auto',
                fontSize: 36,
                paddingTop: 10,
              }}
            >
              {partner.link ? (
                <a
                  href={partner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={partner.imageUrl}
                    alt={`Partner ${partner.id}`}
                    loading="lazy"
                  />
                </a>
              ) : (
                <Image
                  src={partner.imageUrl}
                  alt={`Partner ${partner.id}`}
                  loading="lazy"
                />
              )}
            </SwiperSlide>
          ))
        )}
      </Swiper>

      {/* Другий слайдер - відображається тільки на мобільних */}
      {isMobile && (
        <Swiper
          loop={true}
          slidesPerView={slidesPerView}
          spaceBetween={20}
          navigation={false}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          pagination={false}
          grabCursor={true}
          speed={4000}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {Array.from({ length: 2 }).map((_, i) =>
            partners.map(partner => (
              <SwiperSlide
                key={`${partner.id}-${i}`}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 'auto',
                  fontSize: 36,
                  paddingTop: 10,
                }}
              >
                {partner.link ? (
                  <a
                    href={partner.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={partner.imageUrl}
                      alt={`Partner ${partner.id}`}
                      loading="lazy"
                    />
                  </a>
                ) : (
                  <Image
                    src={partner.imageUrl}
                    alt={`Partner ${partner.id}`}
                    loading="lazy"
                  />
                )}
              </SwiperSlide>
            ))
          )}
        </Swiper>
      )}
    </SwiperContainer>
  );
};

export default Partners;
