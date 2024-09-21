import Image from "next/image";

const HeaderImage = () => {
  return (
    <div className="absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
      <div className="w-[108rem] flex-none flex justify-end">
        <picture>
          <source srcSet="/main/docs-dark@30.1a9f8cbf.avif" type="image/avif" />
          <Image
            src="/main/docs-dark@tinypng.1bbe175e.png"
            alt=""
            width={1440}
            height={0}
            className="w-[90rem] flex-none max-w-none hidden dark:block"
            priority
            decoding="async"
          />
        </picture>
      </div>
    </div>
  );
};

export default HeaderImage;