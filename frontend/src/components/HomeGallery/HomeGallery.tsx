import Image from "next/image";
import css from "./HomeGallery.module.css";

const HomeGallery = () => {
  return (
    <ul className={css.gallery}>
      <li>
        <div className={css.inner}>
          <div className={css.front}>
            <Image
              src="/images/homeGallery/homeGallery_1.webp"
              alt="Valencia Port"
              fill={true}
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 300px, 360px"
            />
          </div>
          <div className={css.back}>
            Backpack is designed to help you track every aspect of the trip in
            one place.
          </div>
        </div>
      </li>
      <li>
        <Image
          src="/images/homeGallery/homeGallery_2.webp"
          alt="Valencia Port"
          fill={true}
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 300px, 360px"
        />
      </li>
      <li>
        <div className={css.inner}>
          <div className={css.front}>
            <Image
              src="/images/homeGallery/homeGallery_3.webp"
              alt="Valencia Port"
              fill={true}
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 300px, 360px"
            />
          </div>
          <div className={css.back}>
            Input flight details, accommodations, activities, collaborate with
            friends, and save the itinerary to PDF.
          </div>
        </div>
      </li>
    </ul>
  );
};

export default HomeGallery;
